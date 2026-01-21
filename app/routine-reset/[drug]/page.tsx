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

// Generate static paths
export function generateStaticParams() {
    return generateGLP1Paths();
}

// Validate params
function isValidDrug(drug: string): boolean {
    return GLP1_DRUGS.includes(drug as GLP1Drug);
}

// Dynamic metadata
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
    const title = `Post-Treatment Recovery Guide | TDEE Wellness`;
    const description = `Rebuild stable appetite, energy, and routines after appetite-focused interventions. Our adaptive TDEE tool helps you maintain progress sustainably.`;

    return {
        title,
        description,
        keywords: [
            'post-treatment recovery',
            'metabolism recovery',
            'appetite recovery',
            'TDEE calculator',
            'sustainable wellness',
        ],
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'en_US',
        },
    };
}

export default function RecoveryPage({
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

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/dashboard">Dashboard</Link>
                    <span>/</span>
                    <span>Recovery</span>
                </nav>

                {/* Hero */}
                <section className={styles.hero}>
                    <span className={styles.drugBadge}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeLinejoin="round" />
                        </svg>
                        Post-Treatment Recovery
                    </span>
                    <h1 className={styles.title}>
                        Rebuild Stability
                        <span className={styles.gradient}> After Appetite Changes</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Coming off appetite-focused interventions? Our adaptive system helps you
                        rebuild sustainable routines and energy consistency—without extremes.
                    </p>
                </section>

                {/* Challenges */}
                <section className={styles.challengeSection}>
                    <h2>What Changes After Treatment</h2>
                    <div className={styles.challengeGrid}>
                        <div className={styles.challengeCard}>
                            <div className={styles.challengeIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3>Appetite Signals Return</h3>
                            <p>
                                Your natural hunger cues may feel stronger than before.
                                We help you calibrate intake to match your actual energy needs.
                            </p>
                        </div>
                        <div className={styles.challengeCard}>
                            <div className={styles.challengeIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                    <path d="M3 12h4l2-5 4 10 2-5h6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Metabolism Adjusts</h3>
                            <p>
                                Your body's energy balance may need time to stabilize.
                                Adaptive tracking reveals your true maintenance level.
                            </p>
                        </div>
                        <div className={styles.challengeCard}>
                            <div className={styles.challengeIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3>Consistency Matters</h3>
                            <p>
                                The goal isn't perfection—it's finding a sustainable rhythm
                                that supports your energy and wellbeing long-term.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Solutions */}
                <section className={styles.solutionSection}>
                    <h2>A Steady Return to Consistency</h2>
                    <div className={styles.solutionGrid}>
                        <div className={styles.solutionCard}>
                            <h3>1. Conservative Energy Estimates</h3>
                            <p>
                                Our algorithm accounts for metabolic changes, providing
                                realistic targets that match where your body is now.
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>2. Protein-Forward Guidance</h3>
                            <p>
                                Higher protein recommendations (2.0g/kg) support
                                muscle maintenance and satiety during transition.
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>3. Gradual Adjustments</h3>
                            <p>
                                Small weekly changes (50-100 kcal) let your metabolism
                                adapt without triggering rapid fluctuations.
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>4. Clear Progress Tracking</h3>
                            <p>
                                See the gap between predicted and actual energy use—
                                data that helps you make informed decisions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <h2>Start Your Recovery Journey</h2>
                    <p>
                        Build sustainable habits with adaptive tracking designed for your situation.
                    </p>
                    <Link href="/dashboard" className={styles.ctaButton}>
                        Open Recovery Dashboard
                    </Link>
                </section>
            </div>
        </main>
    );
}
