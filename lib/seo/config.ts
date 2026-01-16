/**
 * 程序化 SEO 配置
 * 
 * 定义用于生成动态着陆页的参数组合
 */

// 性别选项
export const GENDERS = ['male', 'female'] as const;
export type Gender = typeof GENDERS[number];

export const GENDER_LABELS: Record<Gender, { cn: string; en: string }> = {
    male: { cn: '男性', en: 'Male' },
    female: { cn: '女性', en: 'Female' },
};

// 年龄段
export const AGE_GROUPS = [
    '20-29',
    '30-39',
    '40-49',
    '50-59',
    '60-plus',
] as const;
export type AgeGroup = typeof AGE_GROUPS[number];

export const AGE_GROUP_LABELS: Record<AgeGroup, { cn: string; en: string; range: string }> = {
    '20-29': { cn: '20多岁', en: '20s', range: '20-29岁' },
    '30-39': { cn: '30多岁', en: '30s', range: '30-39岁' },
    '40-49': { cn: '40多岁', en: '40s', range: '40-49岁' },
    '50-59': { cn: '50多岁', en: '50s', range: '50-59岁' },
    '60-plus': { cn: '60岁以上', en: '60+', range: '60岁以上' },
};

// 目标类型
export const GOALS = [
    'weight-loss',
    'maintenance',
    'muscle-gain',
    'reverse-diet',
] as const;
export type Goal = typeof GOALS[number];

export const GOAL_LABELS: Record<Goal, { cn: string; en: string; description: string }> = {
    'weight-loss': {
        cn: '减脂',
        en: 'Weight Loss',
        description: '科学计算热量赤字，避免代谢损伤'
    },
    'maintenance': {
        cn: '维持体重',
        en: 'Maintenance',
        description: '找到精确的能量平衡点'
    },
    'muscle-gain': {
        cn: '增肌',
        en: 'Muscle Gain',
        description: '计算增肌所需的热量盈余'
    },
    'reverse-diet': {
        cn: '反向饮食',
        en: 'Reverse Diet',
        description: '修复受损代谢，逐步恢复热量摄入'
    },
};

// GLP-1 药物类型
export const GLP1_DRUGS = [
    'ozempic',
    'wegovy',
    'mounjaro',
    'zepbound',
] as const;
export type GLP1Drug = typeof GLP1_DRUGS[number];

export const GLP1_DRUG_LABELS: Record<GLP1Drug, { cn: string; brand: string; generic: string }> = {
    ozempic: {
        cn: '司美格鲁肽',
        brand: 'Ozempic',
        generic: 'Semaglutide'
    },
    wegovy: {
        cn: '司美格鲁肽',
        brand: 'Wegovy',
        generic: 'Semaglutide'
    },
    mounjaro: {
        cn: '替尔泊肽',
        brand: 'Mounjaro',
        generic: 'Tirzepatide'
    },
    zepbound: {
        cn: '替尔泊肽',
        brand: 'Zepbound',
        generic: 'Tirzepatide'
    },
};

// 生成所有 SEO 页面的路径参数
export function generateAllSEOPaths() {
    const paths: { gender: Gender; age: AgeGroup; goal: Goal }[] = [];

    for (const gender of GENDERS) {
        for (const age of AGE_GROUPS) {
            for (const goal of GOALS) {
                paths.push({ gender, age, goal });
            }
        }
    }

    return paths;
}

// 生成 GLP-1 专属页面路径
export function generateGLP1Paths() {
    const paths: { drug: GLP1Drug }[] = [];

    for (const drug of GLP1_DRUGS) {
        paths.push({ drug });
    }

    return paths;
}

// 根据年龄段获取代表年龄
export function getRepresentativeAge(ageGroup: AgeGroup): number {
    switch (ageGroup) {
        case '20-29': return 25;
        case '30-39': return 35;
        case '40-49': return 45;
        case '50-59': return 55;
        case '60-plus': return 65;
    }
}

// 生成页面标题
export function generatePageTitle(gender: Gender, age: AgeGroup, goal: Goal): string {
    const genderLabel = GENDER_LABELS[gender].cn;
    const ageLabel = AGE_GROUP_LABELS[age].range;
    const goalLabel = GOAL_LABELS[goal].cn;

    return `${ageLabel}${genderLabel}${goalLabel} TDEE 计算器 | 精准代谢追踪`;
}

// 生成页面描述
export function generatePageDescription(gender: Gender, age: AgeGroup, goal: Goal): string {
    const genderLabel = GENDER_LABELS[gender].cn;
    const ageLabel = AGE_GROUP_LABELS[age].range;
    const goalLabel = GOAL_LABELS[goal].cn;
    const goalDesc = GOAL_LABELS[goal].description;

    return `专为${ageLabel}${genderLabel}设计的${goalLabel} TDEE 计算器。${goalDesc}。使用 EWMA 算法追踪真实代谢率。`;
}
