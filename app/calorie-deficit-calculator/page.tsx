import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Calorie Deficit Calculator - Plan Your Weight Loss',
    description: 'Free Calorie Deficit Calculator to plan safe and effective weight loss. Calculate your ideal daily calories based on your goals and timeline.',
    keywords: ['calorie deficit calculator', 'weight loss calculator', 'how many calories to lose weight', 'fat loss calculator', 'diet calculator'],
    alternates: {
        canonical: '/calorie-deficit-calculator',
    },
};

const FAQS: FAQItem[] = [
    {
        question: 'What is a calorie deficit?',
        answer: 'A calorie deficit occurs when you consume fewer calories than your body burns (TDEE). This forces your body to use stored energy (primarily body fat) to make up the difference, resulting in weight loss. A deficit of 500 calories per day typically results in about 1 pound (0.45 kg) of fat loss per week.',
    },
    {
        question: 'How big should my calorie deficit be?',
        answer: 'For safe, sustainable weight loss, aim for a deficit of 300-500 calories per day (about 10-20% below TDEE). Larger deficits can lead to muscle loss, metabolic slowdown, and nutritional deficiencies. Never go below 1200 calories (women) or 1500 calories (men) without medical supervision.',
    },
    {
        question: 'Why am I not losing weight in a calorie deficit?',
        answer: 'Common reasons include: underestimating calorie intake, overestimating exercise calories burned, water retention masking fat loss, metabolic adaptation from prolonged dieting, or medical conditions affecting metabolism. Track intake accurately for 2-3 weeks and ensure you are measuring portions correctly.',
    },
    {
        question: 'How long should I stay in a calorie deficit?',
        answer: 'Continuous dieting should typically not exceed 12-16 weeks. After this period, consider a "diet break" of 1-2 weeks at maintenance calories to restore metabolic rate and hormone levels. This approach, called periodized dieting, is more sustainable long-term.',
    },
    {
        question: 'Can I lose weight without counting calories?',
        answer: 'Yes, but it is less precise. Focus on eating whole, unprocessed foods, prioritizing protein and vegetables, controlling portion sizes, and eating mindfully. These strategies naturally create a calorie deficit without strict tracking. However, if you are not seeing results, temporary calorie counting can help identify issues.',
    },
];

const RELATED_TOOLS = [
    {
        href: '/tdee-calculator',
        title: 'TDEE Calculator',
        description: 'First, calculate your daily calorie needs',
        icon: '⚡',
    },
    {
        href: '/macro-calculator',
        title: 'Macro Calculator',
        description: 'Optimize your protein, carbs, and fat',
        icon: '🥗',
    },
    {
        href: '/bmr-calculator',
        title: 'BMR Calculator',
        description: 'Find your basal metabolic rate',
        icon: '🔥',
    },
];

export default function CalorieDeficitCalculatorPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        <h1 className={styles.title}>
                            Calorie Deficit Calculator
                        </h1>
                        <p className={styles.subtitle}>
                            Calculate your ideal calorie intake for safe, effective weight loss. Find out exactly how many calories you need to reach your goal weight.
                        </p>
                    </section>

                    {/* Calculator Section */}
                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Plan Your Weight Loss</h2>
                            <p className={styles.cardHint}>Set your goal and get a personalized calorie target</p>

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
                            <h2>Understanding Calorie Deficit for Weight Loss</h2>
                            <p>
                                A <strong>calorie deficit</strong> is the foundation of all weight loss. When you consume fewer calories than your body burns, it must get energy from somewhere—and that somewhere is stored body fat (and sometimes muscle).
                            </p>
                            <p>
                                The key to successful, sustainable weight loss is creating a <em>moderate</em> deficit that allows fat loss while preserving muscle mass and maintaining energy levels.
                            </p>

                            <h2>The Science: How Much Deficit for Weight Loss?</h2>
                            <p>
                                One pound of body fat contains approximately <strong>3,500 calories</strong>. Based on this:
                            </p>
                            <ul>
                                <li><strong>500 cal/day deficit</strong> = ~1 lb per week (0.45 kg)</li>
                                <li><strong>750 cal/day deficit</strong> = ~1.5 lbs per week (0.68 kg)</li>
                                <li><strong>1000 cal/day deficit</strong> = ~2 lbs per week (0.9 kg) - Maximum recommended</li>
                            </ul>
                            <p>
                                Note: Weight loss is rarely linear. Water retention, hormones, and other factors cause daily fluctuations. Focus on weekly or bi-weekly averages instead.
                            </p>

                            <h2>Calculating Your Calorie Deficit</h2>
                            <p>
                                To calculate your optimal deficit:
                            </p>
                            <ol>
                                <li><strong>Calculate your TDEE</strong> using our <Link href="/tdee-calculator">TDEE Calculator</Link></li>
                                <li><strong>Subtract 300-500 calories</strong> for a moderate deficit</li>
                                <li><strong>Set a minimum floor</strong> (1200 for women, 1500 for men)</li>
                                <li><strong>Adjust based on results</strong> after 2-3 weeks</li>
                            </ol>

                            <h2>Safe vs. Aggressive Deficits</h2>
                            <h3>Moderate Deficit (10-20% below TDEE)</h3>
                            <p>
                                <strong>Recommended for most people.</strong> Allows for steady fat loss while maintaining muscle, energy, and hormonal health. Easier to sustain long-term.
                            </p>

                            <h3>Aggressive Deficit (20-25% below TDEE)</h3>
                            <p>
                                May be appropriate for those with significant weight to lose, but increases risk of muscle loss and metabolic adaptation. Requires high protein intake and strength training.
                            </p>

                            <h3>Very Low Calorie (&gt;25% below TDEE)</h3>
                            <p>
                                <strong>Not recommended</strong> without medical supervision. High risk of muscle loss, metabolic damage, nutrient deficiencies, and psychological issues with food.
                            </p>

                            <h2>Tips for Successful Deficit Dieting</h2>
                            <ul>
                                <li><strong>Prioritize protein</strong> (0.7-1g per lb bodyweight) to preserve muscle</li>
                                <li><strong>Include strength training</strong> 2-4x per week</li>
                                <li><strong>Track intake accurately</strong> - weigh food, read labels</li>
                                <li><strong>Plan for diet breaks</strong> every 12-16 weeks</li>
                                <li><strong>Focus on whole foods</strong> for satiety and nutrition</li>
                                <li><strong>Get adequate sleep</strong> (7-9 hours) for recovery</li>
                            </ul>

                            <h2>When to Adjust Your Deficit</h2>
                            <p>
                                Reassess your calorie target when:
                            </p>
                            <ul>
                                <li>Weight loss stalls for 2+ weeks (despite accurate tracking)</li>
                                <li>You lose more than 1% of body weight per week</li>
                                <li>Energy levels become consistently low</li>
                                <li>Sleep quality deteriorates</li>
                                <li>Every 10-15 lbs of weight lost</li>
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
                            This calculator provides general guidance for healthy adults. Weight loss results vary based on individual factors. Consult a healthcare professional before starting any diet, especially if you have medical conditions or are taking medications.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
