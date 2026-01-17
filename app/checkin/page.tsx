'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DailyLog, WeeklyCheckin, UserProfile } from '@/lib/types';
import {
    getDailyLogs,
    getUserProfile,
    getWeeklyCheckins,
    saveWeeklyCheckin,
    getCurrentWeekNumber,
    getLastWeekLogs,
    canDoCheckin,
    getTodayDateString
} from '@/lib/storage/localDB';
import { getWeeklyRecommendation, getActionLabel, getActionColor } from '@/lib/algorithms/reverseDiet';
import { getMetabolicStatus } from '@/lib/algorithms/tdee';
import styles from './page.module.css';

export default function CheckinPage() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [logs, setLogs] = useState<DailyLog[]>([]);
    const [checkins, setCheckins] = useState<WeeklyCheckin[]>([]);
    const [checkStatus, setCheckStatus] = useState<{ canDo: boolean; reason: string }>({ canDo: false, reason: '' });
    const [notes, setNotes] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Load data
    useEffect(() => {
        const savedProfile = getUserProfile();
        const savedLogs = getDailyLogs();
        const savedCheckins = getWeeklyCheckins();
        const status = canDoCheckin();

        setProfile(savedProfile);
        setLogs(savedLogs);
        setCheckins(savedCheckins);
        setCheckStatus(status);
    }, []);

    // Calculate weekly stats
    const calculateWeeklyStats = () => {
        const weekLogs = getLastWeekLogs();
        if (weekLogs.length < 2) return null;

        const startWeight = weekLogs[0].weight;
        const endWeight = weekLogs[weekLogs.length - 1].weight;
        const weightChange = ((endWeight - startWeight) / startWeight) * 100;
        const avgCalories = Math.round(
            weekLogs.reduce((sum, log) => sum + log.calories, 0) / weekLogs.length
        );

        return {
            startWeight,
            endWeight,
            weightChange,
            avgCalories,
            daysLogged: weekLogs.length
        };
    };

    const weeklyStats = calculateWeeklyStats();

    // Get recommendation
    const getRecommendation = () => {
        if (!profile || logs.length < 7) return null;
        const status = getMetabolicStatus(profile, logs);
        return status.weeklyRecommendation;
    };

    const recommendation = getRecommendation();

    // Submit check-in
    const handleSubmitCheckin = () => {
        if (!weeklyStats || !recommendation) return;

        const newCheckin: WeeklyCheckin = {
            date: getTodayDateString(),
            weekNumber: getCurrentWeekNumber(),
            startWeight: weeklyStats.startWeight,
            endWeight: weeklyStats.endWeight,
            weightChangePercent: Number(weeklyStats.weightChange.toFixed(2)),
            avgCalories: weeklyStats.avgCalories,
            action: recommendation.action,
            targetCalories: recommendation.targetCalories,
            notes: notes || undefined
        };

        const updatedCheckins = saveWeeklyCheckin(newCheckin);
        setCheckins(updatedCheckins);
        setCheckStatus({ canDo: false, reason: 'Check-in completed! Next available in 7 days.' });
        setShowSuccess(true);
        setNotes('');
    };

    // Not enough data
    if (!profile) {
        return (
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.emptyState}>
                        <h1>Weekly Check-in</h1>
                        <p>Please complete your profile first.</p>
                        <Link href="/dashboard" className={styles.ctaButton}>
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Link href="/dashboard" className={styles.backLink}>← Dashboard</Link>
                <h1>Weekly Check-in</h1>
                <div className={styles.weekBadge}>Week {getCurrentWeekNumber()}</div>
            </header>

            <div className={styles.container}>
                {/* Success message */}
                {showSuccess && (
                    <div className={styles.successCard}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
                            <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <h3>Check-in Complete!</h3>
                            <p>Great job staying consistent. See you next week!</p>
                        </div>
                    </div>
                )}

                {/* Current Week Summary */}
                {weeklyStats && checkStatus.canDo && (
                    <section className={styles.summarySection}>
                        <h2>This Week's Summary</h2>

                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statValue}>{weeklyStats.startWeight.toFixed(1)} kg</div>
                                <div className={styles.statLabel}>Start Weight</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statValue}>{weeklyStats.endWeight.toFixed(1)} kg</div>
                                <div className={styles.statLabel}>Current Weight</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statValue} style={{
                                    color: weeklyStats.weightChange > 0.5 ? 'var(--color-danger)' :
                                        weeklyStats.weightChange < -0.2 ? 'var(--color-success)' : 'var(--color-warning)'
                                }}>
                                    {weeklyStats.weightChange > 0 ? '+' : ''}{weeklyStats.weightChange.toFixed(2)}%
                                </div>
                                <div className={styles.statLabel}>Weight Change</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statValue}>{weeklyStats.avgCalories}</div>
                                <div className={styles.statLabel}>Avg. Calories</div>
                            </div>
                        </div>

                        {/* Recommendation */}
                        {recommendation && (
                            <div className={styles.recommendationCard} style={{ borderColor: getActionColor(recommendation.action) }}>
                                <div className={styles.recommendationHeader}>
                                    <span className={styles.actionBadge} style={{ background: getActionColor(recommendation.action) }}>
                                        {getActionLabel(recommendation.action)}
                                    </span>
                                    <span className={styles.calorieTarget}>
                                        Target: {recommendation.targetCalories} kcal
                                    </span>
                                </div>
                                <p className={styles.reasoning}>{recommendation.reasoning}</p>
                            </div>
                        )}

                        {/* Notes */}
                        <div className={styles.notesSection}>
                            <label className={styles.label}>Notes (optional)</label>
                            <textarea
                                className={styles.textarea}
                                placeholder="How did you feel this week? Any challenges?"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                rows={3}
                            />
                        </div>

                        {/* Submit */}
                        <button className={styles.submitButton} onClick={handleSubmitCheckin}>
                            Complete Check-in
                        </button>
                    </section>
                )}

                {/* Not ready for check-in */}
                {!checkStatus.canDo && !showSuccess && (
                    <div className={styles.waitingCard}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" strokeLinecap="round" />
                        </svg>
                        <h3>{checkStatus.reason}</h3>
                        <p>Keep logging daily to unlock your weekly check-in.</p>
                        <Link href="/dashboard" className={styles.secondaryButton}>
                            Log Today's Entry
                        </Link>
                    </div>
                )}

                {/* History */}
                {checkins.length > 0 && (
                    <section className={styles.historySection}>
                        <h2>Check-in History</h2>
                        <div className={styles.historyList}>
                            {checkins.slice().reverse().map((checkin, i) => (
                                <div key={i} className={styles.historyCard}>
                                    <div className={styles.historyHeader}>
                                        <span className={styles.historyWeek}>Week {checkin.weekNumber}</span>
                                        <span className={styles.historyDate}>{checkin.date}</span>
                                    </div>
                                    <div className={styles.historyStats}>
                                        <span>Weight: {checkin.endWeight.toFixed(1)} kg</span>
                                        <span style={{ color: getActionColor(checkin.action) }}>
                                            {checkin.weightChangePercent > 0 ? '+' : ''}{checkin.weightChangePercent}%
                                        </span>
                                        <span>{getActionLabel(checkin.action)}</span>
                                    </div>
                                    {checkin.notes && (
                                        <p className={styles.historyNotes}>{checkin.notes}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
