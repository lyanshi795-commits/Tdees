/**
 * Mifflin-St Jeor 公式计算基础代谢率 (BMR)
 * 
 * 男性: BMR = 9.99W + 6.25H - 4.92A + 5
 * 女性: BMR = 9.99W + 6.25H - 4.92A - 161
 * 
 * W = 体重(kg), H = 身高(cm), A = 年龄(年)
 */

import { UserProfile, ACTIVITY_MULTIPLIERS } from '../types';

/**
 * 计算基础代谢率 (BMR)
 */
export function calculateBMR(
    weight: number,
    height: number,
    age: number,
    gender: 'male' | 'female'
): number {
    const base = 9.99 * weight + 6.25 * height - 4.92 * age;
    return gender === 'male' ? base + 5 : base - 161;
}

/**
 * 计算理论 TDEE (每日总能量消耗)
 */
export function calculatePredictedTDEE(profile: UserProfile): number {
    const bmr = calculateBMR(
        profile.weight,
        profile.height,
        profile.age,
        profile.gender
    );
    return Math.round(bmr * ACTIVITY_MULTIPLIERS[profile.activityLevel]);
}

/**
 * 获取 GLP-1 用户的蛋白质推荐量
 * 推荐 2.0g/kg 体重以对抗肌肉流失
 */
export function getProteinRecommendation(weight: number, isGLP1User: boolean): number {
    const multiplier = isGLP1User ? 2.0 : 1.6;
    return Math.round(weight * multiplier);
}
