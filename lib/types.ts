// 用户资料类型
export interface UserProfile {
    gender: 'male' | 'female';
    age: number;
    height: number; // cm
    weight: number; // kg
    activityLevel: ActivityLevel;
    isGLP1User: boolean;
}

// 活动水平
export type ActivityLevel =
    | 'sedentary'      // 久坐 1.2
    | 'light'          // 轻度活动 1.375
    | 'moderate'       // 中度活动 1.55
    | 'active'         // 活跃 1.725
    | 'veryActive';    // 非常活跃 1.9

// 活动系数映射
export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
};

// 每日记录
export interface DailyLog {
    date: string; // YYYY-MM-DD
    weight: number; // kg
    calories: number; // kcal
    trendWeight?: number; // EWMA平滑后体重
    calculatedTDEE?: number; // 反推TDEE
}

// 代谢状态
export interface MetabolicStatus {
    predictedTDEE: number;    // 理论TDEE
    actualTDEE: number;       // 实测TDEE
    metabolicGap: number;     // 代谢缺口 (实测 - 理论)
    phase: 'initial' | 'calibrating' | 'adaptive'; // 阶段
    weeklyRecommendation: WeeklyRecommendation;
}

// 周度推荐
export interface WeeklyRecommendation {
    action: 'increase' | 'hold' | 'decrease';
    calorieChange: number; // 热量调整值
    reasoning: string;
    targetCalories: number;
}

// 图表数据点
export interface ChartDataPoint {
    date: string;
    weight?: number;
    trendWeight?: number;
    tdee?: number;
    calories?: number;
}
