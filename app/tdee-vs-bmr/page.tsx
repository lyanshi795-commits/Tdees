import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'TDEE vs BMR - What\'s the Difference?',
    description: 'Understand the difference between TDEE and BMR and which one to use for weight loss, muscle gain, or maintenance. Complete comparison guide.',
    keywords: ['TDEE vs BMR', 'BMR vs TDEE', 'difference between TDEE and BMR', 'which to use BMR or TDEE'],
    alternates: { canonical: '/tdee-vs-bmr' },
};

const FAQS: FAQItem[] = [
    { question: 'Should I eat at my BMR or TDEE?', answer: 'For diet planning, use TDEE not BMR. BMR is just your resting calorie burn—eating at BMR would create a large deficit that includes zero calories for daily activity. Eat at or around TDEE and create a moderate deficit from there.' },
    { question: 'Why is my TDEE so much higher than my BMR?', answer: 'TDEE includes all your daily calorie burn, not just resting. Even sedentary people burn 20-30% more than their BMR through daily activities. Active people can burn 50-90% more.' },
    { question: 'Can eating below BMR damage my metabolism?', answer: 'Prolonged eating below BMR can cause metabolic adaptation—your body slows down to conserve energy. This can make weight loss harder long-term. Brief periods below BMR are not harmful, but sustained deficits this large are not recommended.' },
    { question: 'Which formula is more accurate for BMR?', answer: 'The Mifflin-St Jeor equation is the most accurate for most people. It was developed more recently (1990) and performs better than the older Harris-Benedict equation in validation studies.' },
    { question: 'How much higher is TDEE than BMR typically?', answer: 'For sedentary individuals, TDEE is about 1.2× BMR (20% higher). For very active people, TDEE can be 1.9× BMR (90% higher). The average active adult is around 1.55× BMR.' },
];

const RELATED = [
    { href: '/tdee-calculator', title: 'TDEE Calculator', description: 'Calculate your total daily burn', icon: '⚡' },
    { href: '/bmr-calculator', title: 'BMR Calculator', description: 'Find your resting metabolic rate', icon: '🔥' },
    { href: '/what-is-tdee', title: 'What is TDEE?', description: 'Deep dive into TDEE', icon: '📖' },
];

export default function TDEEvsBMRPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.hero}>
                        <h1 className={styles.title}>TDEE vs BMR</h1>
                        <p className={styles.subtitle}>Understand the key differences and which one to use for your fitness goals.</p>
                    </section>

                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Both</h2>
                            <p className={styles.cardHint}>Get your BMR and TDEE in one calculation</p>
                            <div className={styles.formPlaceholder}>
                                <Link href="/tdee-calculator" className={styles.launchBtn}>Open Calculator →</Link>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentSection}>
                        <article className={styles.article}>
                            <h2>Quick Comparison</h2>
                            <div className={styles.formula}>
                                <p><strong>BMR</strong> = Calories burned at complete rest (breathing, circulation, etc.)</p>
                                <p><strong>TDEE</strong> = BMR + all daily activity (BMR × activity multiplier)</p>
                            </div>

                            <h2>What is BMR (Basal Metabolic Rate)?</h2>
                            <p><strong>BMR</strong> represents the minimum number of calories your body needs to perform basic life-sustaining functions while at complete rest. This includes:</p>
                            <ul>
                                <li>Breathing and oxygen circulation</li>
                                <li>Heart function and blood circulation</li>
                                <li>Brain and nervous system activity</li>
                                <li>Cell production and repair</li>
                                <li>Body temperature regulation</li>
                            </ul>
                            <p>If you stayed in bed all day without moving, you would still burn approximately your BMR in calories.</p>

                            <h2>What is TDEE (Total Daily Energy Expenditure)?</h2>
                            <p><strong>TDEE</strong> is your total calorie burn for the entire day, including everything from BMR plus:</p>
                            <ul>
                                <li><strong>Physical activity</strong> — Exercise and intentional workouts</li>
                                <li><strong>NEAT</strong> — Non-exercise activity (walking, typing, fidgeting)</li>
                                <li><strong>TEF</strong> — Thermic effect of food (digestion)</li>
                            </ul>

                            <h2>Key Differences</h2>
                            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '24px 0' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                        <th style={{ textAlign: 'left', padding: '12px 0' }}>Aspect</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0' }}>BMR</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0' }}>TDEE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '12px 0' }}>What it measures</td>
                                        <td>Resting metabolism</td>
                                        <td>Total daily burn</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '12px 0' }}>Use for dieting?</td>
                                        <td>No (too low)</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <td style={{ padding: '12px 0' }}>Includes activity?</td>
                                        <td>No</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '12px 0' }}>Typical value</td>
                                        <td>1400-1800 kcal</td>
                                        <td>1800-3000+ kcal</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>Which Should You Use?</h2>
                            <h3>Use TDEE for:</h3>
                            <ul>
                                <li>Setting calorie targets for weight loss or gain</li>
                                <li>Determining how much to eat for maintenance</li>
                                <li>Planning your daily nutrition</li>
                            </ul>

                            <h3>Use BMR to:</h3>
                            <ul>
                                <li>Understand your baseline metabolism</li>
                                <li>Set a minimum calorie floor (never eat below BMR long-term)</li>
                                <li>Calculate your TDEE (BMR is the starting point)</li>
                            </ul>

                            <h2>Example Calculation</h2>
                            <p>For a 30-year-old woman, 165cm, 65kg, moderate exercise:</p>
                            <div className={styles.formula}>
                                <p><strong>BMR</strong> = (10 × 65) + (6.25 × 165) - (5 × 30) - 161 = <strong>1371 kcal</strong></p>
                                <p><strong>TDEE</strong> = 1371 × 1.55 = <strong>2125 kcal</strong></p>
                                <p>For weight loss: 2125 - 500 = <strong>1625 kcal</strong> (above BMR ✓)</p>
                            </div>
                        </article>
                    </section>

                    <FAQSection faqs={FAQS} />
                    <RelatedTools title="Related Calculators" items={RELATED} />

                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>These calculations are estimates. Individual metabolism varies. Adjust based on real-world results.</p>
                    </section>
                </div>
            </main>
        </>
    );
}
