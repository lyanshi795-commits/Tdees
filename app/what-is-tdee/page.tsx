import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'What is TDEE? Complete Guide to Total Daily Energy Expenditure',
    description: 'Learn what TDEE (Total Daily Energy Expenditure) is, how it affects weight loss and gain, and why understanding your TDEE is crucial for reaching your fitness goals.',
    keywords: ['what is TDEE', 'total daily energy expenditure', 'TDEE meaning', 'TDEE explained', 'daily calorie burn'],
    alternates: {
        canonical: '/what-is-tdee',
    },
};

const FAQS: FAQItem[] = [
    {
        question: 'What does TDEE stand for?',
        answer: 'TDEE stands for Total Daily Energy Expenditure. It represents the total number of calories your body burns in a 24-hour period, including all activities from breathing to exercise.',
    },
    {
        question: 'Why is TDEE important for weight management?',
        answer: 'TDEE is the foundation of weight management. If you eat fewer calories than your TDEE, you lose weight. If you eat more, you gain weight. Knowing your TDEE allows you to set accurate calorie targets for your specific goals.',
    },
    {
        question: 'Is TDEE the same as metabolism?',
        answer: 'TDEE includes your metabolism (BMR) but is not the same thing. BMR is calories burned at rest, while TDEE adds calories burned through activity and food digestion. TDEE is your total daily calorie burn.',
    },
    {
        question: 'How many calories is a typical TDEE?',
        answer: 'TDEE varies widely. Sedentary adults typically have a TDEE of 1600-2000 calories. Active individuals may have a TDEE of 2500-3500+ calories. Athletes in heavy training can exceed 4000+ calories per day.',
    },
    {
        question: 'Does TDEE change over time?',
        answer: 'Yes, TDEE changes based on weight, age, muscle mass, activity level, and hormonal factors. As you lose or gain weight, your TDEE will change accordingly. Recalculate regularly for accuracy.',
    },
];

const RELATED_ARTICLES = [
    { href: '/how-to-calculate-tdee', title: 'How to Calculate TDEE', description: 'Step-by-step calculation guide', icon: '🧮' },
    { href: '/tdee-vs-bmr', title: 'TDEE vs BMR', description: 'Understand the difference', icon: '⚖️' },
    { href: '/activity-level-guide', title: 'Activity Level Guide', description: 'Choose the right multiplier', icon: '🏃' },
];

export default function WhatIsTDEEPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.hero}>
                        <h1 className={styles.title}>What is TDEE?</h1>
                        <p className={styles.subtitle}>
                            Your complete guide to understanding Total Daily Energy Expenditure and why it matters for weight loss, muscle gain, and overall health.
                        </p>
                    </section>

                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Your TDEE Now</h2>
                            <p className={styles.cardHint}>Get your personalized daily calorie needs</p>
                            <div className={styles.formPlaceholder}>
                                <Link href="/tdee-calculator" className={styles.launchBtn}>
                                    Open TDEE Calculator →
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentSection}>
                        <article className={styles.article}>
                            <h2>TDEE Definition</h2>
                            <p>
                                <strong>TDEE (Total Daily Energy Expenditure)</strong> is the total number of calories your body burns in a single day. It encompasses every calorie-burning process in your body, from the energy needed to keep your heart beating to the calories burned during a workout.
                            </p>
                            <p>
                                Think of TDEE as your body's total energy budget for the day. Understanding this number is essential for anyone looking to lose weight, gain muscle, or simply maintain their current body composition.
                            </p>

                            <h2>The Four Components of TDEE</h2>
                            <p>Your Total Daily Energy Expenditure is made up of four main components:</p>
                            <ul>
                                <li><strong>Basal Metabolic Rate (BMR)</strong> - Accounts for 60-75% of TDEE. This is the energy your body needs for basic survival functions like breathing, circulation, and cell production.</li>
                                <li><strong>Thermic Effect of Food (TEF)</strong> - About 10% of TDEE. This is the energy used to digest, absorb, and process the food you eat.</li>
                                <li><strong>Exercise Activity Thermogenesis (EAT)</strong> - Varies widely (5-15%). Calories burned during planned exercise like gym workouts, running, or sports.</li>
                                <li><strong>Non-Exercise Activity Thermogenesis (NEAT)</strong> - 15-30% of TDEE. All the calories burned through daily activities that aren't exercise—walking, typing, fidgeting, standing.</li>
                            </ul>

                            <h2>Why TDEE Matters for Your Goals</h2>
                            <h3>For Weight Loss</h3>
                            <p>
                                Weight loss requires a caloric deficit—eating fewer calories than your TDEE. Knowing your TDEE allows you to create a precise, sustainable deficit rather than guessing.
                            </p>

                            <h3>For Muscle Gain</h3>
                            <p>
                                Building muscle requires a caloric surplus—eating more than your TDEE. Your TDEE tells you exactly how many calories you need to exceed for optimal muscle growth without excessive fat gain.
                            </p>

                            <h3>For Maintenance</h3>
                            <p>
                                If you want to maintain your current weight, eating at your TDEE keeps you in energy balance. This is especially important after reaching a goal weight.
                            </p>

                            <h2>Factors That Affect Your TDEE</h2>
                            <ul>
                                <li><strong>Body Size</strong> - Larger bodies burn more calories</li>
                                <li><strong>Muscle Mass</strong> - More muscle = higher metabolism</li>
                                <li><strong>Age</strong> - Metabolism typically decreases with age</li>
                                <li><strong>Gender</strong> - Men generally have higher TDEE than women</li>
                                <li><strong>Activity Level</strong> - More active = higher TDEE</li>
                                <li><strong>Genetics</strong> - Some variation exists between individuals</li>
                            </ul>

                            <h2>Common Misconceptions About TDEE</h2>
                            <p>
                                <strong>Myth:</strong> "I have a slow metabolism, so my TDEE is unusually low."<br />
                                <strong>Reality:</strong> Metabolic rates vary less than most people think—usually only 200-300 calories between individuals of similar size and activity level.
                            </p>
                            <p>
                                <strong>Myth:</strong> "My TDEE stays the same no matter what."<br />
                                <strong>Reality:</strong> TDEE changes as your weight, activity level, and age change. Recalculate regularly for best results.
                            </p>
                        </article>
                    </section>

                    <FAQSection faqs={FAQS} />
                    <RelatedTools title="Learn More" items={RELATED_ARTICLES} variant="articles" />

                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>
                            This article is for educational purposes only and does not constitute medical advice. Consult a healthcare professional before making significant changes to your diet or exercise routine.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
