/**
 * 指数加权移动平均 (EWMA) 算法
 * 
 * 公式: Trend_t = α × W_t + (1 - α) × Trend_{t-1}
 * 
 * α = 0.1 用于过滤每日水分波动
 */

const DEFAULT_ALPHA = 0.1;

/**
 * 计算 EWMA 平滑后的体重趋势
 * @param weights 体重数组 (按时间顺序)
 * @param alpha 平滑系数 (默认 0.1)
 * @returns 平滑后的趋势数组
 */
export function calculateEWMA(weights: number[], alpha: number = DEFAULT_ALPHA): number[] {
    if (weights.length === 0) return [];

    const trends: number[] = [weights[0]]; // 初始值等于第一个体重

    for (let i = 1; i < weights.length; i++) {
        const previousTrend = trends[i - 1];
        const currentWeight = weights[i];
        const newTrend = alpha * currentWeight + (1 - alpha) * previousTrend;
        trends.push(Number(newTrend.toFixed(2)));
    }

    return trends;
}

/**
 * 获取单个新体重的 EWMA 更新值
 */
export function updateEWMA(
    currentWeight: number,
    previousTrend: number,
    alpha: number = DEFAULT_ALPHA
): number {
    return Number((alpha * currentWeight + (1 - alpha) * previousTrend).toFixed(2));
}

/**
 * 对任意数值序列进行 EWMA 平滑
 */
export function smoothSeries(values: number[], alpha: number = 0.05): number[] {
    if (values.length === 0) return [];

    const smoothed: number[] = [values[0]];

    for (let i = 1; i < values.length; i++) {
        const prev = smoothed[i - 1];
        const curr = values[i];
        smoothed.push(Number((alpha * curr + (1 - alpha) * prev).toFixed(0)));
    }

    return smoothed;
}
