/**
 * LocalStorage 数据持久化层
 * 
 * 隐私合规设计: 所有数据存储在用户浏览器本地
 */

import { DailyLog, UserProfile, WeeklyCheckin } from '../types';

const STORAGE_KEYS = {
    USER_PROFILE: 'tdee_user_profile',
    DAILY_LOGS: 'tdee_daily_logs',
    WEEKLY_CHECKINS: 'tdee_weekly_checkins',
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

/**
 * 获取周度 Check-in 记录
 */
export function getWeeklyCheckins(): WeeklyCheckin[] {
    if (typeof window === 'undefined') return [];

    const data = localStorage.getItem(STORAGE_KEYS.WEEKLY_CHECKINS);
    if (!data) return [];

    try {
        return JSON.parse(data) as WeeklyCheckin[];
    } catch {
        return [];
    }
}

/**
 * 保存周度 Check-in 记录
 */
export function saveWeeklyCheckin(checkin: WeeklyCheckin): WeeklyCheckin[] {
    const checkins = getWeeklyCheckins();
    checkins.push(checkin);

    // 按日期排序
    checkins.sort((a, b) => a.date.localeCompare(b.date));

    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.WEEKLY_CHECKINS, JSON.stringify(checkins));
    }

    return checkins;
}

/**
 * 获取当前周数 (基于第一条记录)
 */
export function getCurrentWeekNumber(): number {
    const logs = getDailyLogs();
    if (logs.length === 0) return 0;

    const firstDate = new Date(logs[0].date);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - firstDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return Math.ceil(diffDays / 7);
}

/**
 * 获取最近一周的日志
 */
export function getLastWeekLogs(): DailyLog[] {
    const logs = getDailyLogs();
    return logs.slice(-7);
}

/**
 * 判断今天是否可以做 Check-in (周一 或 有足够数据)
 */
export function canDoCheckin(): { canDo: boolean; reason: string } {
    const logs = getDailyLogs();

    if (logs.length < 7) {
        return { canDo: false, reason: `Need at least 7 days of data (currently ${logs.length})` };
    }

    const checkins = getWeeklyCheckins();
    if (checkins.length > 0) {
        const lastCheckin = checkins[checkins.length - 1];
        const lastCheckinDate = new Date(lastCheckin.date);
        const today = new Date();
        const diffDays = Math.floor((today.getTime() - lastCheckinDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays < 7) {
            return { canDo: false, reason: `Next check-in available in ${7 - diffDays} days` };
        }
    }

    return { canDo: true, reason: 'Ready for check-in!' };
}
