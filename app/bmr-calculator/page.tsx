import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'BMR Calculator - Calculate Your Basal Metabolic Rate',
    description: 'Free BMR Calculator using the Mifflin-St Jeor equation. Find out how many calories your body burns at rest to plan your diet effectively.',
    keywords: ['BMR calculator', 'basal metabolic rate', 'resting metabolism', 'calories at rest', 'metabolic rate calculator'],
    alternates: {
        canonical: '/bmr-calculator',
    },
};

const FAQS: FAQItem[] = [
    {
        question: 'What is BMR (Basal Metabolic Rate)?',
        answer: 'BMR stands for Basal Metabolic Rate. It represents the number of calories your body needs to maintain basic life-sustaining functions like breathing, circulation, cell production, and brain activity while at complete rest. BMR typically accounts for about 60-75% of your total daily calorie expenditure.',
    },
    {
        question: 'What\'s the difference between BMR and RMR?',
        answer: 'BMR (Basal Metabolic Rate) is measured under very strict conditions—after fasting and complete rest in a dark room. RMR (Resting Metabolic Rate) is similar but measured under less strict conditions. RMR is typically 10-20% higher than BMR. For practical purposes, they can be used interchangeably for diet planning.',
    },
    {
        question: 'Which BMR formula is most accurate?',
        answer: 'The Mifflin-St Jeor equation, developed in 1990, is considered the most accurate formula for estimating BMR according to research. Our calculator uses this equation by default. The older Harris-Benedict equation (1918) tends to overestimate BMR by about 5%.',
    },
    {
        question: 'Should I eat at my BMR to lose weight?',
        answer: 'No, you should not eat at or below your BMR for extended periods. Your BMR represents the minimum calories needed for basic body functions. Eating below BMR can slow your metabolism, cause muscle loss, and lead to nutritional deficiencies. Instead, calculate your TDEE and create a moderate deficit of 300-500 calories.',
    },
    {
        question: 'What factors affect BMR?',
        answer: 'Several factors influence BMR: Age (decreases ~2% per decade after 20), muscle mass (more muscle = higher BMR), body size, genetics, hormones (especially thyroid), gender, and environmental temperature. You can increase your BMR by building muscle through resistance training.',
    },
];

const RELATED_TOOLS = [
    {
        href: '/tdee-calculator',
        title: 'TDEE Calculator',
        description: 'Calculate your Total Daily Energy Expenditure',
        icon: '⚡',
    },
    {
        href: '/calorie-deficit-calculator',
        title: 'Deficit Calculator',
        description: 'Plan your calorie deficit for weight loss',
        icon: '📉',
    },
    {
        href: '/macro-calculator',
        title: 'Macro Calculator',
        description: 'Calculate your protein, carbs, and fat needs',
        icon: '🥗',
    },
];

export default function BMRCalculatorPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        <h1 className={styles.title}>
                            Free BMR Calculator
                        </h1>
                        <p className={styles.subtitle}>
                            Calculate your Basal Metabolic Rate to understand how many calories your body burns at rest. The foundation for any successful diet plan.
                        </p>
                    </section>

                    {/* Calculator Section */}
                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Your BMR</h2>
                            <p className={styles.cardHint}>Uses the accurate Mifflin-St Jeor equation</p>

                            <div className={styles.formPlaceholder}>
                                <Link href="/calculator" className={styles.launchBtn}>
                                    Open Calculator →
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* SEO Content Section */}
                    <section className={styles.contentSection}>
                        <article className={styles.article}>
                            <h2>What is Basal Metabolic Rate (BMR)?</h2>
                            <p>
                                <strong>Basal Metabolic Rate (BMR)</strong> is the number of calories your body requires to perform its most basic (basal) life-sustaining functions. These include:
                            </p>
                            <ul>
                                <li>Breathing and oxygen circulation</li>
                                <li>Cell production and repair</li>
                                <li>Blood circulation and heart function</li>
                                <li>Brain and nervous system activity</li>
                                <li>Body temperature regulation</li>
                                <li>Hormone and enzyme production</li>
                            </ul>
                            <p>
                                Your BMR represents the absolute minimum calories your body needs to survive. Even if you stayed in bed all day without moving, your body would still burn this many calories.
                            </p>

                            <h2>The Mifflin-St Jeor Equation</h2>
                            <p>
                                Our BMR calculator uses the <strong>Mifflin-St Jeor equation</strong>, which was developed in 1990 and is considered the most accurate predictor of BMR by the Academy of Nutrition and Dietetics.
                            </p>
                            <div className={styles.formula}>
                                <p><strong>For Men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5</p>
                                <p><strong>For Women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161</p>
                            </div>

                            <h2>BMR vs TDEE: What's the Difference?</h2>
                            <p>
                                While BMR measures calories burned at complete rest, <strong>TDEE (Total Daily Energy Expenditure)</strong> includes all the calories you burn throughout the day:
                            </p>
                            <ul>
                                <li><strong>BMR</strong> = Calories at rest (~60-75% of TDEE)</li>
                                <li><strong>TEF</strong> = Thermic Effect of Food (~10%)</li>
                                <li><strong>Physical Activity</strong> = Exercise and daily movement (~15-30%)</li>
                            </ul>
                            <p>
                                For diet planning, TDEE is typically more useful than BMR alone. Use our <Link href="/tdee-calculator">TDEE Calculator</Link> to find your total daily calorie needs.
                            </p>

                            <h2>How to Increase Your BMR</h2>
                            <p>
                                While genetics play a role, you can boost your metabolic rate through:
                            </p>
                            <ul>
                                <li><strong>Build muscle</strong> - Muscle tissue burns more calories at rest than fat</li>
                                <li><strong>Stay active</strong> - Regular exercise, especially strength training</li>
                                <li><strong>Eat enough protein</strong> - Protein has a higher thermic effect</li>
                                <li><strong>Get quality sleep</strong> - Poor sleep can lower metabolic rate</li>
                                <li><strong>Stay hydrated</strong> - Water is needed for metabolic processes</li>
                            </ul>

                            <h2>Common BMR Calculation Mistakes</h2>
                            <p>
                                When using BMR for diet planning, avoid these common errors:
                            </p>
                            <ul>
                                <li>Eating at or below BMR (can damage metabolism)</li>
                                <li>Using BMR instead of TDEE for calorie targets</li>
                                <li>Not recalculating as weight changes</li>
                                <li>Ignoring the impact of activity level</li>
                            </ul>
                        </article>
                    </section>

                    {/* FAQ Section */}
                    <FAQSection faqs={FAQS} />

                    {/* Related Tools */}
                    <RelatedTools title="Related Calculators" items={RELATED_TOOLS} />

                    {/* Disclaimer */}
                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>
                            This BMR calculator provides estimates based on the Mifflin-St Jeor equation. Individual metabolism varies based on genetics, body composition, and health conditions. For personalized nutrition advice, consult a registered dietitian or healthcare provider.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
