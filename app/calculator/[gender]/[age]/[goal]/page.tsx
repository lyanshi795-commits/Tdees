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
    getRepresentativeAge,
} from '@/lib/seo/config';
import { calculateBMR, calculatePredictedTDEE } from '@/lib/algorithms/bmr';
import styles from './page.module.css';

// Generate static paths
export function generateStaticParams() {
    return generateAllSEOPaths();
}

// Validate params
function isValidParams(gender: string, age: string, goal: string): boolean {
    return (
        GENDERS.includes(gender as Gender) &&
        AGE_GROUPS.includes(age as AgeGroup) &&
        GOALS.includes(goal as Goal)
    );
}

// Dynamic metadata
export async function generateMetadata({
    params
}: {
    params: { gender: string; age: string; goal: string }
}): Promise<Metadata> {
    const { gender, age, goal } = params;

    if (!isValidParams(gender, age, goal)) {
        return { title: 'Page Not Found' };
    }

    const ageLabel = AGE_GROUP_LABELS[age as AgeGroup];
    const genderLabel = GENDER_LABELS[gender as Gender];
    const goalLabel = GOAL_LABELS[goal as Goal];

    const title = `${ageLabel.range} ${genderLabel.en} Energy Balance Calculator | TDEE Wellness`;
    const description = `Calculate your daily energy needs as a ${ageLabel.range} ${genderLabel.en.toLowerCase()}. Adaptive TDEE tracking for ${goalLabel.en.toLowerCase()}.`;

    return {
        title,
        description,
        keywords: [
            `${ageLabel.range} TDEE`,
            `${genderLabel.en} metabolism`,
            `${goalLabel.en} calculator`,
            'energy balance',
            'wellness',
        ],
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'en_US',
        },
    };
}

// Goal labels for English UI
const GOAL_EN_LABELS: Record<Goal, { title: string; desc: string }> = {
    'weight-loss': { title: 'Gradual Change', desc: 'Sustainable approach to body composition' },
    'maintenance': { title: 'Maintain & Feel Good', desc: 'Find your energy equilibrium' },
    'muscle-gain': { title: 'Improve Performance', desc: 'Support strength and vitality' },
    'reverse-diet': { title: 'Recovery & Stability', desc: 'Rebuild metabolic consistency' },
};

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
    const goalEnLabel = GOAL_EN_LABELS[goalTyped];

    // Calculate example TDEE
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

    // Calculate recommended calories based on goal
    const getRecommendedCalories = () => {
        switch (goalTyped) {
            case 'weight-loss': return Math.round(exampleTDEE * 0.85);
            case 'maintenance': return exampleTDEE;
            case 'muscle-gain': return Math.round(exampleTDEE * 1.1);
            case 'reverse-diet': return Math.round(exampleTDEE * 0.95);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/dashboard">Dashboard</Link>
                    <span>/</span>
                    <span>Calculator</span>
                </nav>

                {/* Hero */}
                <section className={styles.hero}>
                    <span className={styles.badge}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                        </svg>
                        {genderLabel.en} • {ageLabel.range} • {goalEnLabel.title}
                    </span>
                    <h1 className={styles.title}>
                        Energy Balance Calculator
                    </h1>
                    <p className={styles.subtitle}>
                        {goalEnLabel.desc}. Our adaptive algorithm helps you find your true daily energy needs.
                    </p>
                </section>

                {/* Example Calculation */}
                <section className={styles.exampleSection}>
                    <h2>Sample Estimate</h2>
                    <p className={styles.exampleNote}>
                        Example for a {ageLabel.range} {genderLabel.en.toLowerCase()} ({exampleHeight}cm, {exampleWeight}kg, moderate activity):
                    </p>

                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>{Math.round(exampleBMR)}</div>
                            <div className={styles.metricLabel}>Basal Metabolic Rate</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue}>{exampleTDEE}</div>
                            <div className={styles.metricLabel}>Estimated TDEE</div>
                        </div>
                        <div className={styles.metricCard}>
                            <div className={styles.metricValue} style={{ color: 'var(--color-success)' }}>
                                {getRecommendedCalories()}
                            </div>
                            <div className={styles.metricLabel}>Recommended Intake</div>
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className={styles.infoSection}>
                    <h2>Understanding Your Needs</h2>
                    <div className={styles.infoCard}>
                        <p>
                            Static formulas can only estimate. Your actual energy needs depend on
                            training, sleep, stress, and daily activity—all of which change.
                        </p>
                        <p>
                            Our adaptive tracking uses your real data to refine estimates over time,
                            giving you clarity instead of guesswork.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <h2>Get Your Personalized Estimate</h2>
                    <p>Enter your details for adaptive tracking that adjusts as you do.</p>
                    <Link href="/dashboard" className={styles.ctaButton}>
                        Start Tracking
                    </Link>
                </section>

                {/* Related */}
                <section className={styles.relatedSection}>
                    <h3>Other Goals</h3>
                    <div className={styles.relatedGrid}>
                        {GOALS.filter(g => g !== goalTyped).slice(0, 3).map(g => (
                            <Link
                                key={g}
                                href={`/calculator/${gender}/${age}/${g}`}
                                className={styles.relatedCard}
                            >
                                {GOAL_EN_LABELS[g as Goal].title}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
