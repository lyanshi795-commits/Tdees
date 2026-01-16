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

// 简化的图表组件
const SimpleChart = ({ data, dataKey, color, title }: {
    data: { date: string; value: number }[];
    dataKey: string;
    color: string;
    title: string;
}) => {
    if (data.length < 2) {
        return (
            <div className={styles.chartPlaceholder}>
                <p>📊 需要至少 2 天数据才能显示图表</p>
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

    // 表单状态
    const [todayWeight, setTodayWeight] = useState('');
    const [todayCalories, setTodayCalories] = useState('');

    // 设置表单状态
    const [setupForm, setSetupForm] = useState({
        gender: 'male' as 'male' | 'female',
        age: '',
        height: '',
        weight: '',
        activityLevel: 'moderate' as UserProfile['activityLevel'],
        isGLP1User: false,
    });

    // 加载数据
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

    // 保存个人资料
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

        // 计算初始状态
        const metabolicStatus = getMetabolicStatus(newProfile, logs);
        setStatus(metabolicStatus);
    };

    // 添加每日记录
    const handleAddLog = () => {
        if (!todayWeight || !todayCalories || !profile) return;

        const newLog: DailyLog = {
            date: getTodayDateString(),
            weight: parseFloat(todayWeight),
            calories: parseInt(todayCalories),
        };

        const updatedLogs = addOrUpdateDailyLog(newLog);
        setLogs(updatedLogs);

        // 更新代谢状态
        const metabolicStatus = getMetabolicStatus(profile, updatedLogs);
        setStatus(metabolicStatus);

        // 清空输入
        setTodayWeight('');
        setTodayCalories('');
    };

    // 准备图表数据
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

    // 设置页面
    if (showSetup) {
        return (
            <main className={styles.main}>
                <div className={styles.setupCard}>
                    <h1>👋 欢迎使用 TDEE 代谢修复工具</h1>
                    <p>请先完善您的基本信息，以便我们为您计算理论 TDEE</p>

                    <div className={styles.formGrid}>
                        <div className="form-group">
                            <label className="label">性别</label>
                            <select
                                className="input"
                                value={setupForm.gender}
                                onChange={(e) => setSetupForm({ ...setupForm, gender: e.target.value as 'male' | 'female' })}
                            >
                                <option value="male">男性</option>
                                <option value="female">女性</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="label">年龄</label>
                            <input
                                type="number"
                                className="input"
                                placeholder="25"
                                value={setupForm.age}
                                onChange={(e) => setSetupForm({ ...setupForm, age: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="label">身高 (cm)</label>
                            <input
                                type="number"
                                className="input"
                                placeholder="170"
                                value={setupForm.height}
                                onChange={(e) => setSetupForm({ ...setupForm, height: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="label">体重 (kg)</label>
                            <input
                                type="number"
                                className="input"
                                placeholder="70"
                                value={setupForm.weight}
                                onChange={(e) => setSetupForm({ ...setupForm, weight: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="label">活动水平</label>
                            <select
                                className="input"
                                value={setupForm.activityLevel}
                                onChange={(e) => setSetupForm({ ...setupForm, activityLevel: e.target.value as UserProfile['activityLevel'] })}
                            >
                                <option value="sedentary">久坐 (几乎不运动)</option>
                                <option value="light">轻度活动 (每周1-3次)</option>
                                <option value="moderate">中度活动 (每周3-5次)</option>
                                <option value="active">活跃 (每周6-7次)</option>
                                <option value="veryActive">非常活跃 (每天高强度)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className={styles.switchLabel}>
                                <span>💊 我正在停止使用 GLP-1 药物</span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={setupForm.isGLP1User}
                                        onChange={(e) => setSetupForm({ ...setupForm, isGLP1User: e.target.checked })}
                                    />
                                    <span className="switch-slider"></span>
                                </label>
                            </label>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={handleSaveProfile}
                        disabled={!setupForm.age || !setupForm.height || !setupForm.weight}
                    >
                        开始使用 →
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>← 返回首页</Link>
                <h1>代谢仪表盘</h1>
                <button
                    className={styles.settingsBtn}
                    onClick={() => setShowSetup(true)}
                >
                    ⚙️
                </button>
            </header>

            <div className={styles.container}>
                {/* 状态徽章 */}
                {status && (
                    <div className={styles.phaseBadge}>
                        {getPhaseLabel(status.phase)}
                        <span className={styles.daysCount}>({logs.length} 天数据)</span>
                    </div>
                )}

                {/* 指标卡片 */}
                <div className={styles.metricsGrid}>
                    <div className="metric-card">
                        <div className="metric-value">{status?.actualTDEE || '--'}</div>
                        <div className="metric-label">当前 TDEE (kcal)</div>
                    </div>

                    <div className="metric-card">
                        <div className="metric-value" style={{
                            color: (status?.metabolicGap || 0) < -100 ? 'var(--color-danger)' : 'var(--color-success)'
                        }}>
                            {status?.metabolicGap !== undefined ? (status.metabolicGap > 0 ? '+' : '') + status.metabolicGap : '--'}
                        </div>
                        <div className="metric-label">代谢缺口 (kcal)</div>
                    </div>

                    <div className="metric-card">
                        <div className="metric-value">{status?.weeklyRecommendation?.targetCalories || '--'}</div>
                        <div className="metric-label">推荐摄入 (kcal)</div>
                    </div>

                    {profile?.isGLP1User && (
                        <div className="metric-card">
                            <div className="metric-value">{getProteinRecommendation(profile.weight, true)}</div>
                            <div className="metric-label">蛋白质目标 (g)</div>
                        </div>
                    )}
                </div>

                {/* 周度推荐 */}
                {status?.weeklyRecommendation && logs.length >= 7 && (
                    <div className={styles.recommendation} style={{ borderColor: getActionColor(status.weeklyRecommendation.action) }}>
                        <div className={styles.recommendationHeader}>
                            <span style={{ fontSize: '1.5rem' }}>
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

                {/* 图表区域 */}
                <div className={styles.chartsGrid}>
                    <div className="card">
                        <SimpleChart
                            data={prepareWeightChartData()}
                            dataKey="value"
                            color="var(--color-primary)"
                            title="📈 体重趋势 (EWMA 平滑)"
                        />
                    </div>

                    <div className="card">
                        <SimpleChart
                            data={prepareTDEEChartData()}
                            dataKey="value"
                            color="var(--color-accent)"
                            title="🔥 TDEE 追踪"
                        />
                    </div>
                </div>

                {/* 每日输入 */}
                <div className={styles.dailyInput}>
                    <h2>📝 今日记录</h2>
                    <div className={styles.inputGrid}>
                        <div className="form-group">
                            <label className="label">今日体重 (kg)</label>
                            <input
                                type="number"
                                className="input"
                                placeholder="70.5"
                                step="0.1"
                                value={todayWeight}
                                onChange={(e) => setTodayWeight(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="label">今日热量摄入 (kcal)</label>
                            <input
                                type="number"
                                className="input"
                                placeholder="2000"
                                value={todayCalories}
                                onChange={(e) => setTodayCalories(e.target.value)}
                            />
                        </div>

                        <button
                            className="btn btn-success"
                            onClick={handleAddLog}
                            disabled={!todayWeight || !todayCalories}
                        >
                            保存记录 ✓
                        </button>
                    </div>
                </div>

                {/* 历史记录 */}
                {logs.length > 0 && (
                    <div className={styles.historySection}>
                        <h2>📋 最近记录</h2>
                        <div className={styles.historyTable}>
                            <div className={styles.tableHeader}>
                                <span>日期</span>
                                <span>体重</span>
                                <span>热量</span>
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
