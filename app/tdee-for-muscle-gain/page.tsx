import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'TDEE for Muscle Gain - How to Bulk Effectively',
    description: 'Learn how to use TDEE for muscle gain. Calculate your bulking calories, understand caloric surplus, and build muscle without excessive fat gain.',
    keywords: ['TDEE for muscle gain', 'bulking calories', 'muscle building diet', 'caloric surplus', 'lean bulk'],
    alternates: { canonical: '/tdee-for-muscle-gain' },
};

const FAQS: FAQItem[] = [
    { question: 'How many calories above TDEE for muscle gain?', answer: 'A surplus of 200-500 calories above TDEE is optimal for muscle gain. Beginners can use a larger surplus (300-500), while advanced lifters should use a smaller surplus (200-300) to minimize fat gain.' },
    { question: 'Can I build muscle at maintenance calories?', answer: 'Yes, especially if you are a beginner, returning after a break, or have significant body fat. This is called "body recomposition." Progress is slower but you gain muscle while staying lean.' },
    { question: 'How much protein do I need to build muscle?', answer: 'Research supports 0.7-1g of protein per pound of bodyweight (1.6-2.2g/kg) for optimal muscle protein synthesis. Higher amounts show minimal additional benefit.' },
    { question: 'What should my bulking macros be?', answer: 'A good starting point: Protein 30%, Carbs 45%, Fat 25%. Prioritize protein first (0.8-1g/lb), set fat at minimum 0.3g/lb for hormones, and fill remaining calories with carbs for energy.' },
    { question: 'How much weight should I gain per week?', answer: 'Aim for 0.25-0.5% of bodyweight per week. For a 180lb person, that is about 0.5-1lb per week. Faster gains mean more fat; slower gains mean less muscle built.' },
];

const RELATED = [
    { href: '/macro-calculator', title: 'Macro Calculator', description: 'Optimize your bulking macros', icon: '🥗' },
    { href: '/tdee-calculator', title: 'TDEE Calculator', description: 'Find your maintenance calories', icon: '⚡' },
    { href: '/bmr-calculator', title: 'BMR Calculator', description: 'Understand your base metabolism', icon: '🔥' },
];

export default function TDEEForMuscleGainPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.hero}>
                        <h1 className={styles.title}>TDEE for Muscle Gain</h1>
                        <p className={styles.subtitle}>The complete guide to using TDEE for building muscle with minimal fat gain.</p>
                    </section>

                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Your Bulking Calories</h2>
                            <p className={styles.cardHint}>Get your personalized muscle-building calorie target</p>
                            <div className={styles.formPlaceholder}>
                                <Link href="/tdee-calculator" className={styles.launchBtn}>Calculate TDEE →</Link>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentSection}>
                        <article className={styles.article}>
                            <h2>Why You Need a Caloric Surplus to Build Muscle</h2>
                            <p>Building muscle is an energy-intensive process. Your body needs:</p>
                            <ul>
                                <li><strong>Extra protein</strong> for muscle protein synthesis</li>
                                <li><strong>Extra carbs</strong> to fuel intense training</li>
                                <li><strong>Extra calories overall</strong> to support recovery and growth</li>
                            </ul>
                            <p>While you can build some muscle at maintenance (body recomposition), a moderate caloric surplus optimizes the muscle-building environment.</p>

                            <h2>Calculating Your Bulking Calories</h2>
                            <div className={styles.formula}>
                                <p><strong>Bulking Calories = TDEE + 200 to 500</strong></p>
                                <p>Example: TDEE of 2500 → Eat 2700-3000 calories for muscle gain</p>
                            </div>

                            <h3>Lean Bulk vs. Traditional Bulk</h3>
                            <ul>
                                <li><strong>Lean Bulk (+200-300)</strong>: Slower muscle gain, minimal fat gain. Best for experienced lifters or those wanting to stay lean year-round.</li>
                                <li><strong>Traditional Bulk (+400-500)</strong>: Faster muscle gain, some fat gain expected. Good for beginners or those okay with a cutting phase after.</li>
                            </ul>

                            <h2>Macros for Muscle Gain</h2>
                            <p>Your macro split is crucial for optimizing muscle growth:</p>
                            <ul>
                                <li><strong>Protein: 0.8-1g per lb bodyweight</strong> — The building blocks of muscle</li>
                                <li><strong>Fat: 0.3-0.4g per lb bodyweight</strong> — Minimum for hormone production</li>
                                <li><strong>Carbs: Remaining calories</strong> — Fuel for training and recovery</li>
                            </ul>

                            <h2>Training Requirements</h2>
                            <p>Calories alone don't build muscle—you need the training stimulus:</p>
                            <ul>
                                <li>Lift weights 3-6 days per week</li>
                                <li>Focus on progressive overload (more weight/reps over time)</li>
                                <li>Prioritize compound movements (squat, deadlift, bench, rows)</li>
                                <li>Get 7-9 hours of sleep for recovery</li>
                            </ul>

                            <h2>Monitoring Progress</h2>
                            <ul>
                                <li>Weigh yourself weekly (average of daily weights)</li>
                                <li>Take progress photos monthly</li>
                                <li>Track strength gains in the gym</li>
                                <li>Adjust calories if gaining too fast (more fat) or too slow (less muscle)</li>
                            </ul>
                        </article>
                    </section>

                    <FAQSection faqs={FAQS} />
                    <RelatedTools title="Related Calculators" items={RELATED} />

                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>Results vary based on training, genetics, and consistency. Consult a fitness professional for personalized advice.</p>
                    </section>
                </div>
            </main>
        </>
    );
}
