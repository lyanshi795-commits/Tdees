import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    GENDERS,
    AGE_GROUPS,
    GOALS,
    Gender,
    AgeGroup,
    Goal,
    GENDER_LABELS,
    AGE_GROUP_LABELS,
    GOAL_LABELS,
    generateAllSEOPaths,
    generatePageTitle,
    generatePageDescription,
    getRepresentativeAge,
} from '@/lib/seo/config';
import { calculateBMR, calculatePredictedTDEE } from '@/lib/algorithms/bmr';
import styles from './page.module.css';

// 生成静态路径
export function generateStaticParams() {
    return generateAllSEOPaths();
}

// 验证参数
function isValidParams(gender: string, age: string, goal: string): boolean {
    return (
        GENDERS.includes(gender as Gender) &&
        AGE_GROUPS.includes(age as AgeGroup) &&
        GOALS.includes(goal as Goal)
    );
}

// 动态生成 Metadata
export async function generateMetadata({
    params
}: {
    params: { gender: string; age: string; goal: string }
}): Promise<Metadata> {
    const { gender, age, goal } = params;

    if (!isValidParams(gender, age, goal)) {
        return { title: 'Page Not Found' };
    }

    const title = generatePageTitle(gender as Gender, age as AgeGroup, goal as Goal);
    const description = generatePageDescription(gender as Gender, age as AgeGroup, goal as Goal);

    return {
        title,
        description,
        keywords: [
            `${AGE_GROUP_LABELS[age as AgeGroup].range} TDEE`,
            `${GENDER_LABELS[gender as Gender].cn} 代谢`,
            `${GOAL_LABELS[goal as Goal].cn} 计算器`,
            'TDEE calculator',
            'metabolism',
            GOAL_LABELS[goal as Goal].en,
        ],
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'zh_CN',
        },
    };
}

export default function CalculatorPage({
    params
}: {
    params: { gender: string; age: string; goal: string }
}) {
    const { gender, age, goal } = params;

    if (!isValidParams(gender, age, goal)) {
        notFound();
    }

    const genderTyped = gender as Gender;
    const ageTyped = age as AgeGroup;
    const goalTyped = goal as Goal;

    const genderLabel = GENDER_LABELS[genderTyped];
    const ageLabel = AGE_GROUP_LABELS[ageTyped];
    const goalLabel = GOAL_LABELS[goalTyped];

    // 计算示例 TDEE
    const representativeAge = getRepresentativeAge(ageTyped);
    const exampleWeight = genderTyped === 'male' ? 75 : 60;
    const exampleHeight = genderTyped === 'male' ? 175 : 163;

    const exampleBMR = calculateBMR(exampleWeight, exampleHeight, representativeAge, genderTyped);
    const exampleTDEE = calculatePredictedTDEE({
        gender: genderTyped,
        age: representativeAge,
        height: exampleHeight,
        weight: exampleWeight,
        activityLevel: 'moderate',
        isGLP1User: false,
    });

    // 根据目标计算推荐热量
    const getRecommendedCalories = () => {
        switch (goalTyped) {
            case 'weight-loss': return Math.round(exampleTDEE * 0.8);
            case 'maintenance': return exampleTDEE;
            case 'muscle-gain': return Math.round(exampleTDEE * 1.1);
            case 'reverse-diet': return Math.round(exampleTDEE * 0.95);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* 面包屑导航 */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">首页</Link>
                    <span>/</span>
                    <Link href="/dashboard">计算器</Link>
                    <span>/</span>
                    <span>{genderLabel.cn}</span>
                    <span>/</span>
                    <span>{ageLabel.cn}</span>
                    <span>/</span>
                    <span>{goalLabel.cn}</span>
                </nav>

                {/* Hero */}
                <section className={styles.hero}>
                    <span className={styles.badge}>
                        🎯 {genderLabel.cn} · {ageLabel.range} · {goalLabel.cn}
                    </span>
                    <h1 className={styles.title}>
                        {ageLabel.range}{genderLabel.cn}
                        <span className={styles.gradient}>{goalLabel.cn}</span>
                        TDEE 计算器
                    </h1>
                    <p className={styles.subtitle}>
                        {goalLabel.description}。我们的自适应算法能帮您找到精确的能量消耗值。
                    </p>
                </section>

                {/* 示例计算 */}
                <section className={styles.exampleSection}>
                    <h2>📊 典型计算示例</h2>
                    <p className={styles.exampleNote}>
                        以下是一位 {ageLabel.range} {genderLabel.cn}（{exampleHeight}cm, {exampleWeight}kg, 中度活动）的估算值：
                    </p>

                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>{Math.round(exampleBMR)}</div>
                            <div className={styles.metricLabel}>基础代谢率 (BMR)</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>{exampleTDEE}</div>
                            <div className={styles.metricLabel}>理论 TDEE</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue} style={{ color: 'var(--color-accent)' }}>
                                {getRecommendedCalories()}
                            </div>
                            <div className={styles.metricLabel}>{goalLabel.cn}推荐摄入</div>
                        </div>
                    </div>
                </section>

                {/* 年龄相关说明 */}
                <section className={styles.infoSection}>
                    <h2>🔬 {ageLabel.range}代谢特点</h2>
                    {ageTyped === '20-29' && (
                        <p>
                            20多岁是代谢最旺盛的时期，肌肉量通常处于峰值。然而，不当的节食可能导致早期代谢适应。
                            我们的工具帮助你建立健康的饮食习惯，避免"溜溜球效应"。
                        </p>
                    )}
                    {ageTyped === '30-39' && (
                        <p>
                            30多岁时，代谢开始逐渐下降，每年约降低1-2%。久坐的工作方式和家庭责任可能减少运动量。
                            精确追踪 TDEE 变化对于维持健康体重至关重要。
                        </p>
                    )}
                    {ageTyped === '40-49' && (
                        <p>
                            40多岁时，荷尔蒙变化开始影响代谢。女性可能进入围绝经期，男性睾酮水平下降。
                            使用 EWMA 算法追踪真实代谢变化，制定科学的饮食策略。
                        </p>
                    )}
                    {ageTyped === '50-59' && (
                        <p>
                            50多岁时，肌肉量流失加速（肌少症），基础代谢率显著下降。
                            重点应放在维持瘦体重上，我们推荐更高的蛋白质摄入（1.6-2.0g/kg）。
                        </p>
                    )}
                    {ageTyped === '60-plus' && (
                        <p>
                            60岁以上，代谢效率进一步降低，但仍可通过科学饮食和力量训练维持健康。
                            我们的工具提供保守的热量建议，确保营养充足的同时避免增重。
                        </p>
                    )}
                </section>

                {/* 目标相关说明 */}
                <section className={styles.infoSection}>
                    <h2>🎯 {goalLabel.cn}策略</h2>
                    {goalTyped === 'weight-loss' && (
                        <>
                            <p>
                                减脂的关键是创造可持续的热量赤字（通常为 TDEE 的 15-20%），同时避免代谢适应。
                                普通计算器给出的静态数值无法反映你身体的真实变化。
                            </p>
                            <ul className={styles.tipsList}>
                                <li>✅ 使用 EWMA 追踪真实体重趋势，忽略水分波动</li>
                                <li>✅ 当体重停滞 2 周以上，重新评估实际 TDEE</li>
                                <li>✅ 避免过度赤字（\&lt;1000 kcal/天），防止代谢损伤</li>
                            </ul>
                        </>
                    )}
                    {goalTyped === 'maintenance' && (
                        <>
                            <p>
                                维持体重看似简单，实际需要精确的能量平衡。大多数人在减脂后因不了解新的 TDEE 而反弹。
                            </p>
                            <ul className={styles.tipsList}>
                                <li>✅ 持续追踪 2-3 周以找到精确的维持热量</li>
                                <li>✅ 体重波动 ±0.5kg 属于正常范围</li>
                                <li>✅ 关注长期趋势而非每日波动</li>
                            </ul>
                        </>
                    )}
                    {goalTyped === 'muscle-gain' && (
                        <>
                            <p>
                                增肌需要适度的热量盈余（TDEE + 10-15%）和充足的蛋白质摄入。
                                过大的盈余只会导致脂肪堆积。
                            </p>
                            <ul className={styles.tipsList}>
                                <li>✅ 蛋白质目标：1.6-2.2g/kg 体重</li>
                                <li>✅ 力量训练是肌肉生长的前提条件</li>
                                <li>✅ 体重增长控制在每月 0.5-1kg</li>
                            </ul>
                        </>
                    )}
                    {goalTyped === 'reverse-diet' && (
                        <>
                            <p>
                                反向饮食是在长期节食后逐步恢复热量摄入的科学方法。
                                目标是让代谢率追上热量提升，最小化脂肪堆积。
                            </p>
                            <ul className={styles.tipsList}>
                                <li>✅ 每周增加 50-100 kcal，观察体重变化</li>
                                <li>✅ 体重增长 \&gt;0.5%/周时暂停增加</li>
                                <li>✅ 耐心执行，整个过程可能需要 12-20 周</li>
                            </ul>
                        </>
                    )}
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <h2>开始追踪你的真实 TDEE</h2>
                    <p>别再依赖静态公式的猜测。使用我们的自适应算法，发现身体的真实能量消耗。</p>
                    <Link href="/dashboard" className={styles.ctaButton}>
                        立即开始计算 →
                    </Link>
                </section>

                {/* 相关页面 */}
                <section className={styles.relatedSection}>
                    <h3>相关计算器</h3>
                    <div className={styles.relatedGrid}>
                        {GOALS.filter(g => g !== goalTyped).slice(0, 3).map(g => (
                            <Link
                                key={g}
                                href={`/calculator/${gender}/${age}/${g}`}
                                className={styles.relatedCard}
                            >
                                {ageLabel.range}{genderLabel.cn} {GOAL_LABELS[g as Goal].cn}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
