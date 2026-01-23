import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Macro Calculator - Calculate Your Protein, Carbs & Fat',
    description: 'Free Macro Calculator to find your ideal protein, carbohydrate, and fat intake. Customize macros for weight loss, muscle gain, or maintenance.',
    keywords: ['macro calculator', 'macronutrient calculator', 'protein calculator', 'carb calculator', 'fat calculator', 'IIFYM calculator'],
    alternates: {
        canonical: '/macro-calculator',
    },
};

const FAQS: FAQItem[] = [
    {
        question: 'What are macros (macronutrients)?',
        answer: 'Macronutrients are the three main nutrients that provide energy: Protein (4 calories/gram), Carbohydrates (4 calories/gram), and Fat (9 calories/gram). Balancing these macros based on your goals can optimize body composition, energy levels, and performance.',
    },
    {
        question: 'What is the best macro ratio for weight loss?',
        answer: 'For weight loss, a higher protein ratio helps preserve muscle mass. A common starting point is 40% protein, 30% carbs, 30% fat. However, the total calorie deficit matters more than the exact ratio. Adjust based on your preferences and how you feel.',
    },
    {
        question: 'How much protein do I need to build muscle?',
        answer: 'Research suggests 0.7-1g of protein per pound of bodyweight (1.6-2.2g per kg) is optimal for muscle building. Athletes and those in a calorie deficit may benefit from the higher end. Spread protein intake across 4-5 meals for optimal muscle protein synthesis.',
    },
    {
        question: 'What is IIFYM (If It Fits Your Macros)?',
        answer: 'IIFYM is a flexible dieting approach where you can eat any foods as long as they fit within your daily macro targets. While this allows for dietary flexibility, it is still important to prioritize whole, nutrient-dense foods for health and satiety.',
    },
    {
        question: 'Should I track macros or just calories?',
        answer: 'Tracking calories alone can work for weight loss, but tracking macros ensures adequate protein intake (crucial for muscle retention), helps optimize body composition, and can improve energy levels. Start with just calories if tracking feels overwhelming, then add macros later.',
    },
];

const RELATED_TOOLS = [
    {
        href: '/tdee-calculator',
        title: 'TDEE Calculator',
        description: 'Calculate your daily calorie needs first',
        icon: '⚡',
    },
    {
        href: '/calorie-deficit-calculator',
        title: 'Deficit Calculator',
        description: 'Plan your weight loss calories',
        icon: '📉',
    },
    {
        href: '/bmr-calculator',
        title: 'BMR Calculator',
        description: 'Find your basal metabolic rate',
        icon: '🔥',
    },
];

export default function MacroCalculatorPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        <h1 className={styles.title}>
                            Macro Calculator
                        </h1>
                        <p className={styles.subtitle}>
                            Calculate your optimal protein, carbohydrate, and fat intake based on your goals. Get a personalized macro split for weight loss, muscle gain, or maintenance.
                        </p>
                    </section>

                    {/* Calculator Section */}
                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Your Macros</h2>
                            <p className={styles.cardHint}>Choose your goal and get personalized macro targets</p>

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
                            <h2>Understanding Macronutrients</h2>
                            <p>
                                <strong>Macronutrients</strong> are the three main nutrients that provide energy (calories) to your body:
                            </p>
                            <ul>
                                <li><strong>Protein</strong> - 4 calories per gram. Essential for muscle repair, immune function, and satiety.</li>
                                <li><strong>Carbohydrates</strong> - 4 calories per gram. Primary energy source for the brain and high-intensity exercise.</li>
                                <li><strong>Fat</strong> - 9 calories per gram. Needed for hormone production, nutrient absorption, and cell health.</li>
                            </ul>

                            <h2>Recommended Macro Splits by Goal</h2>

                            <h3>For Weight Loss</h3>
                            <p>
                                Higher protein helps preserve muscle while losing fat:
                            </p>
                            <div className={styles.formula}>
                                <p><strong>Protein:</strong> 40% (1.0g per lb bodyweight)</p>
                                <p><strong>Carbs:</strong> 30%</p>
                                <p><strong>Fat:</strong> 30%</p>
                            </div>

                            <h3>For Muscle Gain</h3>
                            <p>
                                More carbs to fuel intense training, adequate protein for muscle building:
                            </p>
                            <div className={styles.formula}>
                                <p><strong>Protein:</strong> 30% (0.8-1g per lb bodyweight)</p>
                                <p><strong>Carbs:</strong> 45%</p>
                                <p><strong>Fat:</strong> 25%</p>
                            </div>

                            <h3>For Maintenance</h3>
                            <p>
                                Balanced approach for sustaining current weight:
                            </p>
                            <div className={styles.formula}>
                                <p><strong>Protein:</strong> 30%</p>
                                <p><strong>Carbs:</strong> 40%</p>
                                <p><strong>Fat:</strong> 30%</p>
                            </div>

                            <h2>How to Calculate Your Macros</h2>
                            <ol>
                                <li><strong>Calculate your TDEE</strong> using our <Link href="/tdee-calculator">TDEE Calculator</Link></li>
                                <li><strong>Set your protein target</strong> (0.7-1g per pound of bodyweight)</li>
                                <li><strong>Set minimum fat intake</strong> (at least 0.3g per pound for hormonal health)</li>
                                <li><strong>Fill remaining calories with carbs</strong></li>
                            </ol>

                            <h2>Protein: The Most Important Macro</h2>
                            <p>
                                Regardless of your goal, protein should be prioritized because it:
                            </p>
                            <ul>
                                <li>Has the highest thermic effect (burns more calories during digestion)</li>
                                <li>Preserves and builds muscle mass</li>
                                <li>Provides the greatest satiety (keeps you fuller longer)</li>
                                <li>Supports recovery from exercise</li>
                            </ul>

                            <h2>Good Sources of Each Macro</h2>
                            <h3>Protein Sources</h3>
                            <p>Chicken, fish, lean beef, eggs, Greek yogurt, cottage cheese, tofu, legumes, protein powder.</p>

                            <h3>Carbohydrate Sources</h3>
                            <p>Rice, oats, potatoes, fruits, vegetables, whole grain bread, pasta, quinoa.</p>

                            <h3>Fat Sources</h3>
                            <p>Olive oil, avocado, nuts, seeds, fatty fish, eggs, cheese, dark chocolate.</p>

                            <h2>Common Macro Tracking Mistakes</h2>
                            <ul>
                                <li><strong>Obsessing over exact ratios</strong> - Total calories and protein matter most</li>
                                <li><strong>Ignoring food quality</strong> - Hitting macros with junk food hurts health</li>
                                <li><strong>Setting fat too low</strong> - Can impair hormone function</li>
                                <li><strong>Not adjusting over time</strong> - Macros should change as weight changes</li>
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
                            This calculator provides general recommendations. Individual needs vary based on activity level, health status, and personal preferences. For personalized nutrition advice, consult a registered dietitian.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
