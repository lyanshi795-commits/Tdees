'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DailyLog, UserProfile, MetabolicStatus } from '@/lib/types';
import {
    getUserProfile,
    saveUserProfile,
    getDailyLogs,
    addOrUpdateDailyLog,
    getTodayDateString
} from '@/lib/storage/localDB';
import { getMetabolicStatus, getPhaseLabel } from '@/lib/algorithms/tdee';
import { calculateEWMA } from '@/lib/algorithms/ewma';
import { getActionLabel, getActionColor } from '@/lib/algorithms/reverseDiet';
import { getProteinRecommendation } from '@/lib/algorithms/bmr';
import styles from './dashboard.module.css';

// Simple chart component
const SimpleChart = ({ data, dataKey, color, title }: {
    data: { date: string; value: number }[];
    dataKey: string;
    color: string;
    title: string;
}) => {
    if (data.length < 2) {
        return (
            <div className={styles.chartPlaceholder}>
                <p>Add at least two entries to see trends.</p>
            </div>
        );
    }

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue || 1;

    return (
        <div className={styles.chart}>
            <h3 className={styles.chartTitle}>{title}</h3>
            <div className={styles.chartContainer}>
                {data.slice(-14).map((point, i) => (
                    <div key={i} className={styles.chartBar} style={{
                        height: `${((point.value - minValue) / range) * 100}%`,
                        backgroundColor: color,
                        minHeight: '4px'
                    }}>
                        <span className={styles.chartTooltip}>{point.value.toFixed(1)}</span>
                    </div>
                ))}
            </div>
            <div className={styles.chartLabels}>
                <span>{data[data.length - 14]?.date.slice(5) || ''}</span>
                <span>{data[data.length - 1]?.date.slice(5) || ''}</span>
            </div>
        </div>
    );
};

export default function Dashboard() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [logs, setLogs] = useState<DailyLog[]>([]);
    const [status, setStatus] = useState<MetabolicStatus | null>(null);
    const [showSetup, setShowSetup] = useState(false);

    // Form state
    const [todayWeight, setTodayWeight] = useState('');
    const [todayCalories, setTodayCalories] = useState('');

    // Setup form state
    const [setupForm, setSetupForm] = useState({
        gender: 'male' as 'male' | 'female',
        age: '',
        height: '',
        weight: '',
        activityLevel: 'moderate' as UserProfile['activityLevel'],
        isGLP1User: false,
    });

    // Load data
    useEffect(() => {
        const savedProfile = getUserProfile();
        const savedLogs = getDailyLogs();

        if (savedProfile) {
            setProfile(savedProfile);
            setLogs(savedLogs);

            if (savedLogs.length > 0 && savedProfile) {
                const metabolicStatus = getMetabolicStatus(savedProfile, savedLogs);
                setStatus(metabolicStatus);
            }
        } else {
            setShowSetup(true);
        }
    }, []);

    // Save profile
    const handleSaveProfile = () => {
        const newProfile: UserProfile = {
            gender: setupForm.gender,
            age: parseInt(setupForm.age),
            height: parseFloat(setupForm.height),
            weight: parseFloat(setupForm.weight),
            activityLevel: setupForm.activityLevel,
            isGLP1User: setupForm.isGLP1User,
        };

        saveUserProfile(newProfile);
        setProfile(newProfile);
        setShowSetup(false);

        // Calculate initial status
        const metabolicStatus = getMetabolicStatus(newProfile, logs);
        setStatus(metabolicStatus);
    };

    // Add daily log
    const handleAddLog = () => {
        if (!todayWeight || !todayCalories || !profile) return;

        const newLog: DailyLog = {
            date: getTodayDateString(),
            weight: parseFloat(todayWeight),
            calories: parseInt(todayCalories),
        };

        const updatedLogs = addOrUpdateDailyLog(newLog);
        setLogs(updatedLogs);

        // Update metabolic status
        const metabolicStatus = getMetabolicStatus(profile, updatedLogs);
        setStatus(metabolicStatus);

        // Clear inputs
        setTodayWeight('');
        setTodayCalories('');
    };

    // Prepare chart data
    const prepareWeightChartData = () => {
        if (logs.length === 0) return [];

        const weights = logs.map(l => l.weight);
        const trends = calculateEWMA(weights, 0.1);

        return logs.map((log, i) => ({
            date: log.date,
            value: trends[i] || log.weight,
        }));
    };

    const prepareTDEEChartData = () => {
        if (logs.length < 2) return [];

        return logs.slice(1).map((log, i) => ({
            date: log.date,
            value: log.calculatedTDEE || status?.actualTDEE || 0,
        }));
    };

    // Setup page
    if (showSetup) {
        return (
            <main className={styles.main}>
                <div className={styles.setupCard}>
                    <h1>Welcome to TDEE Wellness</h1>
                    <p>Complete your profile to calculate your baseline energy balance</p>

                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Gender</label>
                            <select
                                className={styles.input}
                                value={setupForm.gender}
                                onChange={(e) => setSetupForm({ ...setupForm, gender: e.target.value as 'male' | 'female' })}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Age</label>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="25"
                                value={setupForm.age}
                                onChange={(e) => setSetupForm({ ...setupForm, age: e.target.value })}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Height (cm)</label>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="170"
                                value={setupForm.height}
                                onChange={(e) => setSetupForm({ ...setupForm, height: e.target.value })}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Weight (kg)</label>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="70"
                                value={setupForm.weight}
                                onChange={(e) => setSetupForm({ ...setupForm, weight: e.target.value })}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Activity Level</label>
                            <select
                                className={styles.input}
                                value={setupForm.activityLevel}
                                onChange={(e) => setSetupForm({ ...setupForm, activityLevel: e.target.value as UserProfile['activityLevel'] })}
                            >
                                <option value="sedentary">Sedentary (little or no exercise)</option>
                                <option value="light">Light (1-3 days/week)</option>
                                <option value="moderate">Moderate (3-5 days/week)</option>
                                <option value="active">Active (6-7 days/week)</option>
                                <option value="veryActive">Very Active (intense daily)</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.switchLabel}>
                                <span>Post-treatment recovery mode</span>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={setupForm.isGLP1User}
                                        onChange={(e) => setSetupForm({ ...setupForm, isGLP1User: e.target.checked })}
                                    />
                                    <span className={styles.switchSlider}></span>
                                </label>
                            </label>
                        </div>
                    </div>

                    <button
                        className="btn btnPrimary"
                        onClick={handleSaveProfile}
                        disabled={!setupForm.age || !setupForm.height || !setupForm.weight}
                    >
                        Get Started
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>← Back</Link>
                <h1>Dashboard</h1>
                <Link href="/checkin" className={styles.checkinBtn}>
                    Weekly Check-in
                </Link>
                <button
                    className={styles.settingsBtn}
                    onClick={() => setShowSetup(true)}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                </button>
            </header>

            <div className={styles.container}>
                {/* Status badge */}
                {status && (
                    <div className={styles.phaseBadge}>
                        {getPhaseLabel(status.phase)}
                        <span className={styles.daysCount}>({logs.length} days logged)</span>
                    </div>
                )}

                {/* Metrics grid */}
                <div className={styles.metricsGrid}>
                    <div className={styles.metricCard}>
                        <div className={styles.metricValue}>{status?.actualTDEE || '--'}</div>
                        <div className={styles.metricLabel}>Current TDEE (kcal)</div>
                    </div>

                    <div className={styles.metricCard}>
                        <div className={styles.metricValue} style={{
                            color: (status?.metabolicGap || 0) < -100 ? '#ef4444' : '#34c759'
                        }}>
                            {status?.metabolicGap !== undefined ? (status.metabolicGap > 0 ? '+' : '') + status.metabolicGap : '--'}
                        </div>
                        <div className={styles.metricLabel}>Energy Difference (kcal)</div>
                    </div>

                    <div className={styles.metricCard}>
                        <div className={styles.metricValue}>{status?.weeklyRecommendation?.targetCalories || '--'}</div>
                        <div className={styles.metricLabel}>Recommended Intake (kcal)</div>
                    </div>

                    {profile?.isGLP1User && (
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>{getProteinRecommendation(profile.weight, true)}</div>
                            <div className={styles.metricLabel}>Protein Target (g)</div>
                        </div>
                    )}
                </div>

                {/* Weekly recommendation */}
                {status?.weeklyRecommendation && logs.length >= 7 && (
                    <div className={styles.recommendation} style={{ borderColor: getActionColor(status.weeklyRecommendation.action) }}>
                        <div className={styles.recommendationHeader}>
                            <span className={styles.actionLabel}>
                                {getActionLabel(status.weeklyRecommendation.action)}
                            </span>
                            <span className={styles.calorieChange}>
                                {status.weeklyRecommendation.calorieChange > 0 ? '+' : ''}
                                {status.weeklyRecommendation.calorieChange} kcal
                            </span>
                        </div>
                        <p>{status.weeklyRecommendation.reasoning}</p>
                    </div>
                )}

                {/* Charts */}
                <div className={styles.chartsGrid}>
                    <div className={styles.chartCard}>
                        <SimpleChart
                            data={prepareWeightChartData()}
                            dataKey="value"
                            color="var(--color-primary)"
                            title="Weight Trend (EWMA Smoothed)"
                        />
                    </div>

                    <div className={styles.chartCard}>
                        <SimpleChart
                            data={prepareTDEEChartData()}
                            dataKey="value"
                            color="var(--color-success)"
                            title="TDEE Tracking"
                        />
                    </div>
                </div>

                {/* Daily input */}
                <div className={styles.dailyInput}>
                    <h2>Today's Entry</h2>
                    <div className={styles.inputGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Weight (kg)</label>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="70.5"
                                step="0.1"
                                value={todayWeight}
                                onChange={(e) => setTodayWeight(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Energy Intake (kcal)</label>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="2000"
                                value={todayCalories}
                                onChange={(e) => setTodayCalories(e.target.value)}
                            />
                        </div>

                        <button
                            className="btn btnPrimary"
                            onClick={handleAddLog}
                            disabled={!todayWeight || !todayCalories}
                        >
                            Save Entry
                        </button>
                    </div>
                </div>

                {/* History */}
                {logs.length > 0 && (
                    <div className={styles.historySection}>
                        <h2>Recent Entries</h2>
                        <div className={styles.historyTable}>
                            <div className={styles.tableHeader}>
                                <span>Date</span>
                                <span>Weight</span>
                                <span>Energy</span>
                            </div>
                            {logs.slice(-7).reverse().map((log, i) => (
                                <div key={i} className={styles.tableRow}>
                                    <span>{log.date}</span>
                                    <span>{log.weight} kg</span>
                                    <span>{log.calories} kcal</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
