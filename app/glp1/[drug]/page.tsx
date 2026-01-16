import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    GLP1_DRUGS,
    GLP1Drug,
    GLP1_DRUG_LABELS,
    generateGLP1Paths,
} from '@/lib/seo/config';
import styles from './page.module.css';

// 生成静态路径
export function generateStaticParams() {
    return generateGLP1Paths();
}

// 验证参数
function isValidDrug(drug: string): boolean {
    return GLP1_DRUGS.includes(drug as GLP1Drug);
}

// 动态生成 Metadata
export async function generateMetadata({
    params
}: {
    params: { drug: string }
}): Promise<Metadata> {
    const { drug } = params;

    if (!isValidDrug(drug)) {
        return { title: 'Page Not Found' };
    }

    const drugInfo = GLP1_DRUG_LABELS[drug as GLP1Drug];
    const title = `停用 ${drugInfo.brand} 后如何防止体重反弹 | TDEE 代谢修复指南`;
    const description = `使用 ${drugInfo.brand} (${drugInfo.cn}) 减肥后担心反弹？我们的 TDEE 修复工具帮助你追踪真实代谢率，提供科学的反向饮食指导，最大限度减少体重反弹。`;

    return {
        title,
        description,
        keywords: [
            `${drugInfo.brand} rebound`,
            `${drugInfo.brand} 反弹`,
            `${drugInfo.generic} weight regain`,
            `${drugInfo.cn} 停药`,
            'GLP-1 代谢修复',
            'TDEE calculator',
        ],
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'zh_CN',
        },
    };
}

export default function GLP1Page({
    params
}: {
    params: { drug: string }
}) {
    const { drug } = params;

    if (!isValidDrug(drug)) {
        notFound();
    }

    const drugTyped = drug as GLP1Drug;
    const drugInfo = GLP1_DRUG_LABELS[drugTyped];

    // 根据药物类型获取特定信息
    const isSemaglutide = drugTyped === 'ozempic' || drugTyped === 'wegovy';

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* 面包屑 */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">首页</Link>
                    <span>/</span>
                    <Link href="/dashboard">计算器</Link>
                    <span>/</span>
                    <span>GLP-1</span>
                    <span>/</span>
                    <span>{drugInfo.brand}</span>
                </nav>

                {/* Hero */}
                <section className={styles.hero}>
                    <span className={styles.drugBadge}>
                        💊 {drugInfo.brand} ({drugInfo.cn})
                    </span>
                    <h1 className={styles.title}>
                        停用 <span className={styles.brand}>{drugInfo.brand}</span> 后
                        <span className={styles.gradient}>如何防止体重反弹</span>
                    </h1>
                    <p className={styles.subtitle}>
                        临床数据显示，停用 GLP-1 药物一年后，患者平均恢复约 <strong>2/3</strong> 的已减重量。
                        我们的工具帮助你科学应对这一挑战。
                    </p>
                </section>

                {/* 警告信息 */}
                <section className={styles.warningBox}>
                    <h2>⚠️ {drugInfo.brand} 停药后的生理挑战</h2>
                    <div className={styles.challengeGrid}>
                        <div className={styles.challengeCard}>
                            <div className={styles.challengeIcon}>🍽️</div>
                            <h3>食欲反扑</h3>
                            <p>
                                {drugInfo.brand} 通过延缓胃排空抑制食欲。停药后，外源性 GLP-1 迅速代谢，
                                食欲抑制消失，但瘦素水平仍处于低谷，导致极度饥饿感。
                            </p>
                        </div>
                        <div className={styles.challengeCard}>
                            <div className={styles.challengeIcon}>💪</div>
                            <h3>瘦体重流失</h3>
                            <p>
                                GLP-1 导致的快速体重下降中，约 20%-40% 来自瘦体重（肌肉和骨密度），
                                直接导致基础代谢率下降。
                            </p>
                        </div>
                        <div className={styles.challengeCard}>
                            <div className={styles.challengeIcon}>📉</div>
                            <h3>代谢滞后</h3>
                            <p>
                                停药后代谢率需要时间恢复，但体重增加可能很快。这种不匹配导致
                                "附带性脂肪堆积"，体脂率比用药前更高。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 解决方案 */}
                <section className={styles.solutionSection}>
                    <h2>🛡️ 我们的解决方案</h2>
                    <div className={styles.solutionGrid}>
                        <div className={styles.solutionCard}>
                            <h3>1. 保守的 TDEE 估算</h3>
                            <p>
                                我们的算法考虑到 GLP-1 用户的瘦体重流失，提供比普通用户更保守的 TDEE 估算，
                                避免过快增加热量导致脂肪堆积。
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>2. 高蛋白质推荐</h3>
                            <p>
                                系统自动将蛋白质推荐调整至 <strong>2.0g/kg 体重</strong>，
                                帮助对抗肌肉流失，促进瘦体重恢复。
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>3. 渐进式热量恢复</h3>
                            <p>
                                反向饮食算法每周仅增加 50-100 kcal，确保代谢率能够跟上热量提升，
                                将脂肪堆积降至最低。
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>4. 代谢缺口追踪</h3>
                            <p>
                                实时量化你的"代谢缺口"（理论 TDEE vs 实际 TDEE），
                                验证代谢恢复进度，提供数据支持的饮食调整。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 科学数据 */}
                <section className={styles.dataSection}>
                    <h2>📊 临床数据支持</h2>
                    <div className={styles.dataCard}>
                        <blockquote>
                            "STEP 1 延伸研究显示，停用司美格鲁肽 ({drugInfo.brand}) 一年后，
                            患者平均恢复约 67% 的已减重量，心血管代谢指标也出现逆转。"
                        </blockquote>
                        <cite>
                            — Wilding et al., Diabetes, Obesity and Metabolism, 2022
                        </cite>
                    </div>
                    <p className={styles.dataNote}>
                        这就是为什么我们开发了专门的 GLP-1 模式——帮助你不成为这个统计数据的一部分。
                    </p>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <h2>开始你的代谢修复之旅</h2>
                    <p>
                        别让 {drugInfo.brand} 的减重成果白费。
                        使用我们的科学工具，制定可持续的体重维持策略。
                    </p>
                    <Link href="/dashboard" className={styles.ctaButton}>
                        开启 GLP-1 模式 →
                    </Link>
                </section>

                {/* 其他药物 */}
                <section className={styles.otherDrugs}>
                    <h3>其他 GLP-1 药物用户？</h3>
                    <div className={styles.drugGrid}>
                        {GLP1_DRUGS.filter(d => d !== drugTyped).map(d => (
                            <Link
                                key={d}
                                href={`/glp1/${d}`}
                                className={styles.drugCard}
                            >
                                {GLP1_DRUG_LABELS[d].brand}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
