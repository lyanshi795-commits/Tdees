import Link from "next/link";
import styles from "./page.module.css";

function IconSpark() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconPulse() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M3 12h4l2-5 4 10 2-5h6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconShield() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function HomePage() {
    return (
        <main className={styles.main}>
            <div className="container">
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroLeft}>
                            <div className={styles.heroBadge}>
                                <span className="badge">
                                    <IconSpark />
                                    Built for clarity • Designed for wellness
                                </span>
                            </div>

                            <h1 className="h1">
                                Understand Your Metabolism.
                                <br />
                                Discover Your True Energy Balance.
                            </h1>

                            <p className={`${styles.heroSubtitle} p`}>
                                A minimalist TDEE experience that helps you stay consistent, recover smartly,
                                and make progress you can actually sustain.
                            </p>

                            <div className={styles.heroCtas}>
                                <Link className="btn btnPrimary" href="/dashboard">
                                    Get Started
                                </Link>
                                <Link className="btn" href="/calculator/male/25/maintain">
                                    Quick Calculator
                                </Link>
                            </div>

                            <div className={styles.heroMeta}>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Focus</span>
                                    <span className={styles.metaValue}>Vitality • Performance • Recovery</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Style</span>
                                    <span className={styles.metaValue}>Apple-grade minimal UI</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual (clean device-like card) */}
                        <div className={styles.heroRight}>
                            <div className={`${styles.previewCard} surface`}>
                                <div className={styles.previewTop}>
                                    <div className={styles.previewDot} />
                                    <div className={styles.previewDot} />
                                    <div className={styles.previewDot} />
                                </div>

                                <div className={styles.previewBody}>
                                    <div className={styles.previewTitle}>Your Daily Energy Balance</div>
                                    <div className={styles.previewValue}>2,180 kcal</div>
                                    <div className={styles.previewHint}>
                                        Adaptive estimates that follow your real lifestyle changes.
                                    </div>

                                    <div className={styles.previewRow}>
                                        <div className={styles.previewChip}>Adaptive Insights</div>
                                        <div className={styles.previewChip}>Metabolic Clarity</div>
                                        <div className={styles.previewChip}>Recovery Guidance</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.glowLine} />
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className={styles.section}>
                    <div className={styles.sectionHead}>
                        <h2 className="h2">How It Works</h2>
                        <p className="p">
                            A simple system built to reduce confusion—so your decisions feel easier and more
                            confident.
                        </p>
                    </div>

                    <div className={styles.cardGrid}>
                        <div className={`${styles.card} surface`}>
                            <div className={styles.cardIcon}>
                                <IconPulse />
                            </div>
                            <div className={styles.cardTitle}>Adaptive Insights</div>
                            <div className={styles.cardDesc}>
                                Your numbers adjust with reality—training, stress, sleep, and schedule changes.
                            </div>
                        </div>

                        <div className={`${styles.card} surface`}>
                            <div className={styles.cardIcon}>
                                <IconSpark />
                            </div>
                            <div className={styles.cardTitle}>Metabolic Clarity</div>
                            <div className={styles.cardDesc}>
                                Make sense of plateaus and fluctuations without panic or guesswork.
                            </div>
                        </div>

                        <div className={`${styles.card} surface`}>
                            <div className={styles.cardIcon}>
                                <IconShield />
                            </div>
                            <div className={styles.cardTitle}>Recovery Guidance</div>
                            <div className={styles.cardDesc}>
                                A supportive path back to stability—especially after big routine or appetite changes.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recovery / GLP-1 framing */}
                <section className={styles.sectionAlt}>
                    <div className={`${styles.recovery} surface`}>
                        <div className={styles.recoveryLeft}>
                            <h2 className="h2">Post-Treatment Recovery</h2>
                            <p className="p">
                                Coming off appetite-focused interventions? Rebuild stable routines, appetite signals,
                                and energy consistency—without extremes.
                            </p>
                            <div className={styles.recoveryCtas}>
                                <Link className="btn btnPrimary" href="/glp1/overview">
                                    Explore Recovery
                                </Link>
                                <Link className="btn" href="/dashboard">
                                    Open Dashboard
                                </Link>
                            </div>
                        </div>

                        <div className={styles.recoveryRight}>
                            <div className={styles.miniStat}>
                                <span className={styles.miniLabel}>Goal</span>
                                <span className={styles.miniValue}>Consistency over intensity</span>
                            </div>
                            <div className={styles.miniStat}>
                                <span className={styles.miniLabel}>Approach</span>
                                <span className={styles.miniValue}>Small steps → stable outcomes</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className={styles.footer}>
                    <div className={styles.footerInner}>
                        <div className={styles.brand}>TDEE • Wellness</div>
                        <div className={styles.legal}>
                            Built for clarity. Not medical advice.
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
