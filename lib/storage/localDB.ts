/**
 * LocalStorage 数据持久化层
 * 
 * 隐私合规设计: 所有数据存储在用户浏览器本地
 */

import { DailyLog, UserProfile } from '../types';

const STORAGE_KEYS = {
    USER_PROFILE: 'tdee_user_profile',
    DAILY_LOGS: 'tdee_daily_logs',
} as const;

/**
 * 保存用户资料
 */
export function saveUserProfile(profile: UserProfile): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    }
}

/**
 * 获取用户资料
 */
export function getUserProfile(): UserProfile | null {
    if (typeof window === 'undefined') return null;

    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (!data) return null;

    try {
        return JSON.parse(data) as UserProfile;
    } catch {
        return null;
    }
}

/**
 * 保存每日记录
 */
export function saveDailyLogs(logs: DailyLog[]): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.DAILY_LOGS, JSON.stringify(logs));
    }
}

/**
 * 获取每日记录
 */
export function getDailyLogs(): DailyLog[] {
    if (typeof window === 'undefined') return [];

    const data = localStorage.getItem(STORAGE_KEYS.DAILY_LOGS);
    if (!data) return [];

    try {
        return JSON.parse(data) as DailyLog[];
    } catch {
        return [];
    }
}

/**
 * 添加或更新当日记录
 */
export function addOrUpdateDailyLog(log: DailyLog): DailyLog[] {
    const logs = getDailyLogs();
    const existingIndex = logs.findIndex(l => l.date === log.date);

    if (existingIndex >= 0) {
        logs[existingIndex] = log;
    } else {
        logs.push(log);
        // 按日期排序
        logs.sort((a, b) => a.date.localeCompare(b.date));
    }

    saveDailyLogs(logs);
    return logs;
}

/**
 * 清除所有数据 (用于重置)
 */
export function clearAllData(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
        localStorage.removeItem(STORAGE_KEYS.DAILY_LOGS);
    }
}

/**
 * 获取今日日期字符串
 */
export function getTodayDateString(): string {
    return new Date().toISOString().split('T')[0];
}
