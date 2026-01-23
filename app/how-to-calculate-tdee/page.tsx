import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'How to Calculate TDEE - Step by Step Guide',
    description: 'Learn how to calculate your TDEE (Total Daily Energy Expenditure) step by step. Understand the formulas, activity multipliers, and methods for accurate results.',
    keywords: ['how to calculate TDEE', 'TDEE formula', 'calculate daily calories', 'TDEE calculation', 'energy expenditure formula'],
    alternates: { canonical: '/how-to-calculate-tdee' },
};

const FAQS: FAQItem[] = [
    { question: 'Which TDEE formula is most accurate?', answer: 'The Mifflin-St Jeor equation (1990) is considered the most accurate for most people. It has been validated in multiple studies and is recommended by the Academy of Nutrition and Dietetics.' },
    { question: 'How do I know if my TDEE calculation is correct?', answer: 'Track your calories and weight for 2-3 weeks. If your weight stays stable eating at your calculated TDEE, it is accurate. If you gain or lose weight, adjust your TDEE by 100-200 calories accordingly.' },
    { question: 'Should I use an online calculator or calculate manually?', answer: 'Online calculators are accurate and much faster. The formulas are identical—calculators just do the math for you. Manual calculation is only useful for understanding the process.' },
    { question: 'How often should I recalculate my TDEE?', answer: 'Recalculate every 10-15 pounds of weight change, when your activity level changes significantly, or every 6-8 weeks during an active diet phase.' },
    { question: 'Why do different calculators give different results?', answer: 'Different calculators may use different formulas (Mifflin-St Jeor vs Harris-Benedict) or different activity multipliers. Stick with one calculator and adjust based on real-world results.' },
];

const RELATED = [
    { href: '/tdee-calculator', title: 'TDEE Calculator', description: 'Calculate your TDEE instantly', icon: '⚡' },
    { href: '/activity-level-guide', title: 'Activity Level Guide', description: 'Choose the right activity factor', icon: '🏃' },
    { href: '/what-is-tdee', title: 'What is TDEE?', description: 'Learn the fundamentals', icon: '📖' },
];

export default function HowToCalculateTDEEPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.hero}>
                        <h1 className={styles.title}>How to Calculate TDEE</h1>
                        <p className={styles.subtitle}>A complete step-by-step guide to calculating your Total Daily Energy Expenditure using proven scientific formulas.</p>
                    </section>

                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Skip the Math - Use Our Calculator</h2>
                            <p className={styles.cardHint}>Get instant, accurate results</p>
                            <div className={styles.formPlaceholder}>
                                <Link href="/tdee-calculator" className={styles.launchBtn}>Calculate TDEE →</Link>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentSection}>
                        <article className={styles.article}>
                            <h2>Step 1: Calculate Your BMR</h2>
                            <p>First, calculate your Basal Metabolic Rate using the <strong>Mifflin-St Jeor equation</strong>:</p>
                            <div className={styles.formula}>
                                <p><strong>Men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5</p>
                                <p><strong>Women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161</p>
                            </div>
                            <p><strong>Example:</strong> A 30-year-old male, 180cm, 80kg:<br />BMR = (10 × 80) + (6.25 × 180) - (5 × 30) + 5 = 800 + 1125 - 150 + 5 = <strong>1780 calories</strong></p>

                            <h2>Step 2: Determine Your Activity Level</h2>
                            <p>Your activity multiplier accounts for calories burned through movement:</p>
                            <ul>
                                <li><strong>Sedentary (×1.2)</strong> - Desk job, no exercise</li>
                                <li><strong>Lightly Active (×1.375)</strong> - Light exercise 1-3 days/week</li>
                                <li><strong>Moderately Active (×1.55)</strong> - Moderate exercise 3-5 days/week</li>
                                <li><strong>Very Active (×1.725)</strong> - Hard exercise 6-7 days/week</li>
                                <li><strong>Extremely Active (×1.9)</strong> - Athletes, very physical jobs</li>
                            </ul>

                            <h2>Step 3: Calculate Your TDEE</h2>
                            <p>Multiply your BMR by your activity factor:</p>
                            <div className={styles.formula}>
                                <p><strong>TDEE = BMR × Activity Multiplier</strong></p>
                            </div>
                            <p><strong>Example:</strong> Our 30-year-old male exercises 3-4 times per week:<br />TDEE = 1780 × 1.55 = <strong>2759 calories/day</strong></p>

                            <h2>Step 4: Validate and Adjust</h2>
                            <p>TDEE calculations are estimates. To verify accuracy:</p>
                            <ol>
                                <li>Eat at your calculated TDEE for 2-3 weeks</li>
                                <li>Track your weight daily and calculate weekly averages</li>
                                <li>If weight is stable, your TDEE is accurate</li>
                                <li>If gaining/losing, adjust by 100-200 calories and retest</li>
                            </ol>

                            <h2>Alternative TDEE Formulas</h2>
                            <h3>Harris-Benedict Equation (1918)</h3>
                            <p>Older but still widely used. Tends to overestimate by about 5%.</p>

                            <h3>Katch-McArdle Formula</h3>
                            <p>Uses lean body mass instead of total weight. More accurate for lean or muscular individuals if you know your body fat percentage.</p>
                        </article>
                    </section>

                    <FAQSection faqs={FAQS} />
                    <RelatedTools title="Related Resources" items={RELATED} />

                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>TDEE calculations are estimates. Individual metabolism varies. Track your results and adjust accordingly.</p>
                    </section>
                </div>
            </main>
        </>
    );
}
