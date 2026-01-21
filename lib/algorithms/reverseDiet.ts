/**
 * 反向饮食决策树算法
 * 
 * 周度决策逻辑:
 * - 体重变化 < 0.2% → 增加 +50~100 kcal (代谢有恢复空间)
 * - 0.2% ≤ 变化 ≤ 0.5% → 保持 (让代谢跟上)
 * - 变化 > 0.5% → 减少 -50~100 kcal (步子太快)
 */

import { DailyLog, WeeklyRecommendation } from '../types';

/**
 * 计算过去7天的平均体重变化百分比
 */
export function calculateWeeklyWeightChange(logs: DailyLog[]): number {
    if (logs.length < 7) return 0;

    const recentLogs = logs.slice(-7);
    const firstWeight = recentLogs[0].weight;
    const lastWeight = recentLogs[recentLogs.length - 1].weight;

    return ((lastWeight - firstWeight) / firstWeight) * 100;
}

/**
 * 获取周度推荐
 */
export function getWeeklyRecommendation(
    logs: DailyLog[],
    currentTDEE: number
): WeeklyRecommendation {
    const weightChangePercent = calculateWeeklyWeightChange(logs);

    // 体重下降或基本稳定 (< 0.2%)
    if (weightChangePercent < 0.2) {
        return {
            action: 'increase',
            calorieChange: 75, // +50 to +100 中间值
            reasoning: 'Metabolism has room for recovery; you can continue to increase calorie intake.',
            targetCalories: currentTDEE + 75,
        };
    }

    // 轻微增重 (0.2% - 0.5%)
    if (weightChangePercent <= 0.5) {
        return {
            action: 'hold',
            calorieChange: 0,
            reasoning: 'Giving your body time to adapt to current intake while metabolic rate adjusts.',
            targetCalories: currentTDEE,
        };
    }

    // 显著增重 (> 0.5%)
    return {
        action: 'decrease',
        calorieChange: -75,
        reasoning: 'Weight gain is exceeding metabolic recovery; moderate intake slightly.',
        targetCalories: currentTDEE - 75,
    };
}

/**
 * 获取推荐动作的显示文本
 */
export function getActionLabel(action: 'increase' | 'hold' | 'decrease'): string {
    switch (action) {
        case 'increase': return '⬆️ Increase Intake';
        case 'hold': return '➡️ Maintain Current';
        case 'decrease': return '⬇️ Moderate Intake';
    }
}

/**
 * 获取推荐动作的颜色
 */
export function getActionColor(action: 'increase' | 'hold' | 'decrease'): string {
    switch (action) {
        case 'increase': return 'var(--color-success)';
        case 'hold': return 'var(--color-warning)';
        case 'decrease': return 'var(--color-danger)';
    }
}
