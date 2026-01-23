import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'TDEE for Weight Loss - How to Use TDEE to Lose Fat',
    description: 'Learn how to use your TDEE for effective, sustainable weight loss. Calculate your calorie deficit, avoid common mistakes, and reach your goal weight.',
    keywords: ['TDEE for weight loss', 'calorie deficit', 'how many calories to lose weight', 'TDEE diet', 'fat loss calories'],
    alternates: { canonical: '/tdee-for-weight-loss' },
};

const FAQS: FAQItem[] = [
    { question: 'How much below TDEE should I eat to lose weight?', answer: 'A deficit of 300-500 calories below TDEE is recommended for sustainable fat loss of 0.5-1 lb per week. Larger deficits increase the risk of muscle loss and metabolic slowdown.' },
    { question: 'Should I eat back exercise calories?', answer: 'Generally, no. TDEE already accounts for your exercise level. Eating back exercise calories often leads to overeating because exercise calorie estimates are often inflated.' },
    { question: 'Why am I not losing weight eating below my TDEE?', answer: 'Common reasons: underestimating food intake, overestimating activity level, water retention, or metabolic adaptation from prolonged dieting. Track accurately for 2-3 weeks before adjusting.' },
    { question: 'What is the minimum calories I should eat?', answer: 'Never go below 1200 (women) or 1500 (men) without medical supervision. Eating below BMR for extended periods can cause metabolic damage, muscle loss, and nutrient deficiencies.' },
    { question: 'How long does it take to see weight loss results?', answer: 'With a 500-calorie deficit, expect about 1 lb per week. Initial weight loss may be faster due to water loss. True fat loss becomes visible after 2-4 weeks of consistent dieting.' },
];

const RELATED = [
    { href: '/calorie-deficit-calculator', title: 'Deficit Calculator', description: 'Calculate your ideal deficit', icon: '📉' },
    { href: '/tdee-calculator', title: 'TDEE Calculator', description: 'Find your baseline', icon: '⚡' },
    { href: '/macro-calculator', title: 'Macro Calculator', description: 'Optimize your macros for fat loss', icon: '🥗' },
];

export default function TDEEForWeightLossPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.hero}>
                        <h1 className={styles.title}>TDEE for Weight Loss</h1>
                        <p className={styles.subtitle}>The complete guide to using TDEE for safe, effective, and sustainable fat loss.</p>
                    </section>

                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Your Weight Loss Calories</h2>
                            <p className={styles.cardHint}>Find your ideal calorie target for fat loss</p>
                            <div className={styles.formPlaceholder}>
                                <Link href="/calorie-deficit-calculator" className={styles.launchBtn}>Calculate Deficit →</Link>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentSection}>
                        <article className={styles.article}>
                            <h2>Why TDEE is the Key to Weight Loss</h2>
                            <p>Weight loss comes down to one fundamental principle: <strong>calories in vs. calories out</strong>. Your TDEE represents "calories out"—the total energy your body burns daily.</p>
                            <p>To lose fat, you must create a <strong>calorie deficit</strong> by eating fewer calories than your TDEE. This forces your body to use stored energy (body fat) to make up the difference.</p>

                            <h2>How to Calculate Your Weight Loss Calories</h2>
                            <ol>
                                <li><strong>Calculate your TDEE</strong> using our <Link href="/tdee-calculator">TDEE Calculator</Link></li>
                                <li><strong>Subtract 300-500 calories</strong> for a moderate deficit</li>
                                <li><strong>Never go below your BMR</strong> (typically 1200-1500 minimum)</li>
                            </ol>
                            <div className={styles.formula}>
                                <p><strong>Weight Loss Calories = TDEE - 500</strong></p>
                                <p>Example: TDEE of 2500 → Eat 2000 calories for ~1 lb/week loss</p>
                            </div>

                            <h2>Choosing the Right Deficit Size</h2>
                            <ul>
                                <li><strong>Small Deficit (10-15%)</strong>: 0.5 lb/week. Best for those with less to lose or want to preserve muscle.</li>
                                <li><strong>Moderate Deficit (15-20%)</strong>: 1 lb/week. Ideal for most people. Sustainable and effective.</li>
                                <li><strong>Aggressive Deficit (20-25%)</strong>: 1.5+ lb/week. For those with significant weight to lose. Higher risk of muscle loss.</li>
                            </ul>

                            <h2>Tips for Successful TDEE-Based Weight Loss</h2>
                            <ul>
                                <li><strong>Prioritize protein</strong> (0.7-1g per lb bodyweight) to preserve muscle</li>
                                <li><strong>Strength train</strong> 2-4x per week to maintain muscle mass</li>
                                <li><strong>Track food accurately</strong> using a food scale and app</li>
                                <li><strong>Be patient</strong> — weight fluctuates daily due to water</li>
                                <li><strong>Take diet breaks</strong> every 12-16 weeks</li>
                                <li><strong>Recalculate TDEE</strong> every 10-15 lbs lost</li>
                            </ul>

                            <h2>When to Adjust Your Calories</h2>
                            <p>Reduce calories further (by 100-200) when:</p>
                            <ul>
                                <li>Weight loss stalls for 2+ weeks despite accurate tracking</li>
                                <li>You have lost 10+ lbs (lower weight = lower TDEE)</li>
                            </ul>
                            <p>Increase calories (reverse diet) when:</p>
                            <ul>
                                <li>Energy and mood consistently poor</li>
                                <li>Sleep quality deteriorates</li>
                                <li>Exercise performance drops significantly</li>
                            </ul>
                        </article>
                    </section>

                    <FAQSection faqs={FAQS} />
                    <RelatedTools title="Related Calculators" items={RELATED} />

                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>Weight loss results vary by individual. Consult a healthcare professional before starting any diet program.</p>
                    </section>
                </div>
            </main>
        </>
    );
}
