import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Post-Treatment Recovery — TDEE Wellness",
    description:
        "A gentle recovery framework designed to support steadier routines, appetite signals, and energy consistency over time.",
};

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

export default function RecoveryOverviewPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                {/* Header */}
                <header className={styles.header}>
                    <Link href="/" className={styles.backLink}>
                        ← Home
                    </Link>
                </header>

                {/* Hero */}
                <section className={styles.hero}>
                    <span className="badge">
                        <IconShield />
                        Post-Treatment Recovery
                    </span>

                    <h1 className="h1">
                        Recovery After Appetite
                        <br />
                        or Routine Changes
                    </h1>

                    <p className={`${styles.subtitle} p`}>
                        This page offers a gentle, structured approach designed to support steadier routines,
                        energy consistency, and day-to-day stability. It's meant for planning and reflection—not
                        for medical decision-making.
                    </p>

                    <div className={styles.ctas}>
                        <Link className="btn btnPrimary" href="/dashboard">
                            Open Dashboard
                        </Link>
                        <Link className="btn" href="/calculator">
                            Try the Calculator
                        </Link>
                    </div>
                </section>

                {/* Three cards */}
                <section className={styles.section}>
                    <div className={styles.grid}>
                        <div className={`${styles.card} surface`}>
                            <div className={styles.icon}>
                                <IconPulse />
                            </div>
                            <div className={styles.cardTitle}>What you might notice</div>
                            <div className={styles.cardDesc}>
                                Appetite cues may feel different, energy levels can vary, and consistency may take
                                time to rebuild—especially after major routine changes.
                            </div>
                        </div>

                        <div className={`${styles.card} surface`}>
                            <div className={styles.icon}>
                                <IconSpark />
                            </div>
                            <div className={styles.cardTitle}>A practical framework</div>
                            <div className={styles.cardDesc}>
                                Small, repeatable steps can be easier to sustain than aggressive corrections. This
                                framework focuses on steadier habits and clearer weekly trends.
                            </div>
                        </div>

                        <div className={`${styles.card} surface`}>
                            <div className={styles.icon}>
                                <IconShield />
                            </div>
                            <div className={styles.cardTitle}>Recovery guidance</div>
                            <div className={styles.cardDesc}>
                                Use gentle guardrails to support routine stability—meal timing, protein/fiber
                                consistency, and movement that feels manageable.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Phases */}
                <section className={styles.sectionAlt}>
                    <div className={`${styles.phases} surface`}>
                        <div className={styles.phasesHead}>
                            <h2 className="h2">A steady recovery flow</h2>
                            <p className="p">
                                These phases are meant as a simple sequence you can adjust. The goal is stability
                                and consistency, not perfection.
                            </p>
                        </div>

                        <div className={styles.phaseGrid}>
                            <div className={styles.phase}>
                                <div className={styles.phaseTag}>Phase 1</div>
                                <div className={styles.phaseTitle}>Reset</div>
                                <ul className={styles.list}>
                                    <li>Keep meal timing predictable</li>
                                    <li>Prioritize hydration and sleep structure</li>
                                    <li>Avoid big day-to-day swings when possible</li>
                                </ul>
                            </div>

                            <div className={styles.phase}>
                                <div className={styles.phaseTag}>Phase 2</div>
                                <div className={styles.phaseTitle}>Stabilize</div>
                                <ul className={styles.list}>
                                    <li>Choose repeatable meals you tolerate well</li>
                                    <li>Keep protein and fiber consistent</li>
                                    <li>Track weekly trends rather than single days</li>
                                </ul>
                            </div>

                            <div className={styles.phase}>
                                <div className={styles.phaseTag}>Phase 3</div>
                                <div className={styles.phaseTitle}>Build</div>
                                <ul className={styles.list}>
                                    <li>Gradually increase activity you can maintain</li>
                                    <li>Refine intake based on how you feel and perform</li>
                                    <li>Use the dashboard to review patterns over time</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.phaseFooter}>
                            <div className={styles.note}>
                                Informational only. Not medical advice. If you have medical questions, consider
                                speaking with a licensed professional.
                            </div>
                            <div className={styles.phaseCtas}>
                                <Link className="btn btnPrimary" href="/dashboard">
                                    Start a Check-in
                                </Link>
                                <Link className="btn" href="/calculator">
                                    Estimate Energy Needs
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className={styles.footer}>
                    <div className={styles.footerInner}>
                        <div className={styles.brand}>TDEE • Wellness</div>
                        <div className={styles.legal}>Informational only. Not medical advice.</div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
