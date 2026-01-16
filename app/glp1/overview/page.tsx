import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Post-Treatment Recovery | TDEE Wellness',
    description: 'Support a steady return to stable routines, appetite signals, and energy consistency after appetite-focused interventions.',
};

function IconShield() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinejoin="round" />
        </svg>
    );
}

function IconHeart() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinejoin="round" />
        </svg>
    );
}

function IconTrend() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 12h4l2-5 4 10 2-5h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function RecoveryOverviewPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <span>Recovery</span>
                </nav>

                {/* Hero */}
                <section className={styles.hero}>
                    <span className={styles.badge}>
                        <IconShield />
                        Designed for Recovery
                    </span>
                    <h1 className={styles.title}>
                        Support a Steady Return
                        <span className={styles.gradient}> to Consistency</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Coming off appetite-focused interventions? Our adaptive tracking is designed to
                        support steadier routines, appetite signals, and energy consistency—without extremes.
                    </p>
                </section>

                {/* What to Expect */}
                <section className={styles.section}>
                    <h2>What Changes After Treatment</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <IconHeart />
                            </div>
                            <h3>Appetite Signals May Shift</h3>
                            <p>
                                Natural hunger cues can feel different. Our tracking is designed to help
                                you calibrate intake to match your practical energy needs.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <IconTrend />
                            </div>
                            <h3>Metabolism May Need Time</h3>
                            <p>
                                Your body's energy balance may take time to stabilize. Adaptive tracking
                                can reveal your estimated maintenance level over time.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <IconShield />
                            </div>
                            <h3>Consistency Over Perfection</h3>
                            <p>
                                The goal isn't perfection—it's finding a sustainable rhythm that
                                supports your energy and wellbeing long-term.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Approach */}
                <section className={styles.section}>
                    <h2>Our Approach</h2>
                    <div className={styles.approachGrid}>
                        <div className={styles.approachItem}>
                            <span className={styles.approachNum}>1</span>
                            <div>
                                <h3>Conservative Estimates</h3>
                                <p>Practical energy targets that reflect where you are now.</p>
                            </div>
                        </div>
                        <div className={styles.approachItem}>
                            <span className={styles.approachNum}>2</span>
                            <div>
                                <h3>Gradual Adjustments</h3>
                                <p>Small weekly changes designed to let your system adapt.</p>
                            </div>
                        </div>
                        <div className={styles.approachItem}>
                            <span className={styles.approachNum}>3</span>
                            <div>
                                <h3>Clear Tracking</h3>
                                <p>See estimated differences between predicted and actual energy use.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <h2>Start Your Recovery Journey</h2>
                    <p>Adaptive tracking designed to support your situation.</p>
                    <Link href="/dashboard" className={styles.ctaButton}>
                        Open Dashboard
                    </Link>
                </section>
            </div>
        </main>
    );
}
