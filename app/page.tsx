'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroGlow}></div>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>🔬 基于 EWMA 算法的科学工具</span>
                        <h1 className={styles.title}>
                            打破<span className={styles.gradient}>代谢黑箱</span>
                            <br />发现你的真实 TDEE
                        </h1>
                        <p className={styles.subtitle}>
                            别再被静态公式欺骗。我们用你的真实数据反向推导每日能量消耗，
                            <br />量化代谢适应，提供科学的反向饮食指导。
                        </p>
                        <div className={styles.cta}>
                            <Link href="/dashboard" className="btn btn-primary">
                                开始使用 →
                            </Link>
                            <Link href="#features" className="btn btn-secondary">
                                了解原理
                            </Link>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>174%</span>
                                <span className={styles.statLabel}>TDEE搜索增长</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>7700</span>
                                <span className={styles.statLabel}>kcal/kg 能量密度</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>21</span>
                                <span className={styles.statLabel}>天校准周期</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className={styles.features}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>三大核心能力</h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📊</div>
                            <h3>动态自适应 (Adaptive)</h3>
                            <p>
                                利用指数加权移动平均 (EWMA) 算法，结合你每日的体重变化和热量摄入，
                                反向推算出你的<strong>真实 TDEE</strong>，而非理论值。
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔍</div>
                            <h3>代谢损伤量化 (Quantification)</h3>
                            <p>
                                直观展示<strong>代谢适应差值</strong>（理论 TDEE 与实际 TDEE 的差距），
                                验证"你没疯，你的代谢确实变慢了"。
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🧭</div>
                            <h3>修复导航 (Navigation)</h3>
                            <p>
                                针对停药或过度节食后的用户，提供算法驱动的<strong>反向饮食</strong>计划，
                                以微小的热量增幅逐步恢复代谢率。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GLP-1 Section */}
            <section className={styles.glp1Section}>
                <div className="container">
                    <div className={styles.glp1Content}>
                        <div className={styles.glp1Badge}>
                            <span>💊</span> 专为 GLP-1 用户设计
                        </div>
                        <h2>停药后如何避免反弹？</h2>
                        <p>
                            临床数据显示，停止使用 Ozempic/Wegovy 一年后，患者平均恢复约 <strong>2/3</strong> 的已减重量。
                            我们的工具专门针对这一群体，提供更保守的 TDEE 估算和高蛋白质推荐。
                        </p>
                        <ul className={styles.glp1List}>
                            <li>✅ 自动调整蛋白质推荐至 2.0g/kg 体重</li>
                            <li>✅ 保守的热量恢复策略</li>
                            <li>✅ 专门的代谢缺口追踪</li>
                        </ul>
                        <Link href="/dashboard" className="btn btn-success">
                            GLP-1 模式开始 →
                        </Link>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className={styles.howItWorks}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>工作原理</h2>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>每日记录</h3>
                            <p>只需输入两个数字：今日体重和总热量摄入</p>
                        </div>
                        <div className={styles.stepArrow}>→</div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>算法计算</h3>
                            <p>EWMA 平滑体重波动，反推真实能量消耗</p>
                        </div>
                        <div className={styles.stepArrow}>→</div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>智能建议</h3>
                            <p>基于周度数据提供热量调整建议</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <p>TDEE 代谢修复工具 | 数据存储于本地浏览器，保护你的隐私</p>
                    <p className={styles.footerNote}>
                        本工具仅供参考，不构成医疗建议。如有健康问题请咨询专业医师。
                    </p>
                </div>
            </footer>
        </main>
    );
}
