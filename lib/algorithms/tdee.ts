/**
 * TDEE 反向推导算法
 * 
 * 基于热力学第一定律:
 * TDEE = 摄入热量 - (体重变化 × 7700 kcal/kg)
 * 
 * 包含冷启动过渡逻辑:
 * - Day 1-7: 100% 静态公式
 * - Day 8-21: 30% 静态 + 70% 动态
 * - Day 22+: 100% 动态
 */

import { DailyLog, UserProfile, MetabolicStatus } from '../types';
import { calculateEWMA, smoothSeries } from './ewma';
import { calculatePredictedTDEE } from './bmr';
import { getWeeklyRecommendation } from './reverseDiet';

const CALORIES_PER_KG = 7700; // 脂肪组织能量密度

/**
 * 计算自适应 TDEE
 */
export function calculateAdaptiveTDEE(dailyLogs: DailyLog[]): number[] {
    if (dailyLogs.length < 2) return [];

    // 1. 计算平滑体重趋势
    const weights = dailyLogs.map(log => log.weight);
    const trendWeights = calculateEWMA(weights, 0.1);

    const tdeeValues: number[] = [];

    for (let i = 1; i < dailyLogs.length; i++) {
        const today = dailyLogs[i];
        const yesterdayTrend = trendWeights[i - 1];
        const todayTrend = trendWeights[i];

        // 2. 计算每日体重变化对应的热量差
        const weightChangeKg = todayTrend - yesterdayTrend;
        const calorieImbalance = weightChangeKg * CALORIES_PER_KG;

        // 3. 反推 TDEE
        // TDEE = 摄入热量 - 热量盈余
        const calculatedTDEE = today.calories - calorieImbalance;
        tdeeValues.push(Math.round(calculatedTDEE));
    }

    // 4. 对 TDEE 序列再次平滑
    return smoothSeries(tdeeValues, 0.05);
}

/**
 * 获取用户当前阶段
 */
export function getUserPhase(daysOfData: number): 'initial' | 'calibrating' | 'adaptive' {
    if (daysOfData <= 7) return 'initial';
    if (daysOfData <= 21) return 'calibrating';
    return 'adaptive';
}

/**
 * 获取阶段显示文本
 */
export function getPhaseLabel(phase: 'initial' | 'calibrating' | 'adaptive'): string {
    switch (phase) {
        case 'initial': return 'Estimated TDEE (Collecting data...)';
        case 'calibrating': return 'Calibrating TDEE';
        case 'adaptive': return 'Adaptive TDEE';
    }
}

/**
 * 计算混合 TDEE (考虑冷启动阶段)
 */
export function calculateBlendedTDEE(
    predictedTDEE: number,
    adaptiveTDEE: number | null,
    daysOfData: number
): number {
    const phase = getUserPhase(daysOfData);

    if (phase === 'initial' || adaptiveTDEE === null) {
        return predictedTDEE;
    }

    if (phase === 'calibrating') {
        // 30% 静态 + 70% 动态
        return Math.round(0.3 * predictedTDEE + 0.7 * adaptiveTDEE);
    }

    // 成熟期: 100% 动态
    return adaptiveTDEE;
}

/**
 * 获取完整代谢状态
 */
export function getMetabolicStatus(
    profile: UserProfile,
    dailyLogs: DailyLog[]
): MetabolicStatus {
    const predictedTDEE = calculatePredictedTDEE(profile);
    const phase = getUserPhase(dailyLogs.length);

    let actualTDEE = predictedTDEE;

    if (dailyLogs.length >= 2) {
        const adaptiveTDEEs = calculateAdaptiveTDEE(dailyLogs);
        if (adaptiveTDEEs.length > 0) {
            const latestAdaptive = adaptiveTDEEs[adaptiveTDEEs.length - 1];
            actualTDEE = calculateBlendedTDEE(predictedTDEE, latestAdaptive, dailyLogs.length);
        }
    }

    const metabolicGap = actualTDEE - predictedTDEE;
    const weeklyRecommendation = getWeeklyRecommendation(dailyLogs, actualTDEE);

    return {
        predictedTDEE,
        actualTDEE,
        metabolicGap,
        phase,
        weeklyRecommendation,
    };
}
