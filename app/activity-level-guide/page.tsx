import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Activity Level Guide - Choose the Right TDEE Multiplier',
    description: 'How to choose the correct activity level for accurate TDEE calculation. Understand activity multipliers and avoid overestimating your calorie burn.',
    keywords: ['activity level TDEE', 'activity multiplier', 'exercise level calculator', 'NEAT', 'sedentary vs active'],
    alternates: { canonical: '/activity-level-guide' },
};

const FAQS: FAQItem[] = [
    { question: 'What if I am between two activity levels?', answer: 'Start with the lower option. It is easier to add calories if you are losing weight too fast than to lose if you picked too high. You can always adjust after 2-3 weeks of tracking.' },
    { question: 'Does my job count toward activity level?', answer: 'Yes! If you have a physically active job (retail, construction, nursing), this counts toward your activity level even if you do not exercise. A server who walks 20,000 steps daily is not "sedentary."' },
    { question: 'Should I count steps as exercise?', answer: 'Daily walking is typically factored into your base activity level, not the exercise category. Exercise refers to dedicated training sessions—gym, running, sports. 10,000 steps does not equal "moderately active" if you have a desk job.' },
    { question: 'Why do calculators overestimate my TDEE?', answer: 'Most people overestimate their activity level. That "moderate" exercise might be less intense than you think. Also, we unconsciously reduce other movement (NEAT) on exercise days, negating some calorie burn.' },
    { question: 'What is NEAT and why does it matter?', answer: 'NEAT (Non-Exercise Activity Thermogenesis) is all the calories you burn through daily movement that is not exercise—walking, fidgeting, cooking, cleaning. NEAT can vary by 500-2000 calories between individuals and significantly impacts TDEE.' },
];

const RELATED = [
    { href: '/tdee-calculator', title: 'TDEE Calculator', description: 'Apply your activity level', icon: '⚡' },
    { href: '/how-to-calculate-tdee', title: 'How to Calculate TDEE', description: 'Full calculation guide', icon: '🧮' },
    { href: '/what-is-tdee', title: 'What is TDEE?', description: 'Understand the components', icon: '📖' },
];

export default function ActivityLevelGuidePage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.hero}>
                        <h1 className={styles.title}>Activity Level Guide</h1>
                        <p className={styles.subtitle}>How to choose the right activity multiplier for accurate TDEE calculation.</p>
                    </section>

                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Your TDEE</h2>
                            <p className={styles.cardHint}>Put your activity level to use</p>
                            <div className={styles.formPlaceholder}>
                                <Link href="/tdee-calculator" className={styles.launchBtn}>Open Calculator →</Link>
                            </div>
                        </div>
                    </section>

                    <section className={styles.contentSection}>
                        <article className={styles.article}>
                            <h2>Understanding Activity Multipliers</h2>
                            <p>Your activity level multiplier is applied to your BMR to calculate TDEE. Choosing the right one is crucial—most people overestimate their activity level, leading to weight gain when eating at their "calculated" TDEE.</p>

                            <h2>Activity Level Breakdown</h2>

                            <h3>Sedentary (BMR × 1.2)</h3>
                            <p><strong>Choose this if:</strong></p>
                            <ul>
                                <li>You have a desk job and work from home</li>
                                <li>You do little to no intentional exercise</li>
                                <li>You walk less than 5,000 steps per day</li>
                                <li>Most of your day is spent sitting</li>
                            </ul>

                            <h3>Lightly Active (BMR × 1.375)</h3>
                            <p><strong>Choose this if:</strong></p>
                            <ul>
                                <li>You exercise lightly 1-3 days per week</li>
                                <li>You have a somewhat active job (some walking)</li>
                                <li>You walk 5,000-7,500 steps daily</li>
                                <li>Light activities like yoga, walking, casual cycling</li>
                            </ul>

                            <h3>Moderately Active (BMR × 1.55)</h3>
                            <p><strong>Choose this if:</strong></p>
                            <ul>
                                <li>You exercise moderately 3-5 days per week</li>
                                <li>You have an active job (retail, teaching with movement)</li>
                                <li>You walk 7,500-10,000 steps daily</li>
                                <li>Regular gym sessions, jogging, sports</li>
                            </ul>

                            <h3>Very Active (BMR × 1.725)</h3>
                            <p><strong>Choose this if:</strong></p>
                            <ul>
                                <li>You exercise intensely 6-7 days per week</li>
                                <li>You have a physical job (construction, server walking 20k+ steps)</li>
                                <li>Regular intense training sessions</li>
                                <li>Athletes in moderate training phases</li>
                            </ul>

                            <h3>Extremely Active (BMR × 1.9)</h3>
                            <p><strong>Choose this if:</strong></p>
                            <ul>
                                <li>Professional athletes in heavy training</li>
                                <li>Very physical labor job + exercise</li>
                                <li>Training twice per day</li>
                                <li>Triathletes, marathon runners, CrossFit competitors</li>
                            </ul>

                            <h2>Common Mistakes to Avoid</h2>
                            <ul>
                                <li><strong>Overestimating exercise intensity</strong> — That 30-minute walk is "light," not "moderate"</li>
                                <li><strong>Ignoring rest days</strong> — If you train 4 days but rest 3, you're not "very active"</li>
                                <li><strong>Double counting</strong> — Don't add exercise calories if you already picked "active"</li>
                                <li><strong>Forgetting about NEAT</strong> — Some people burn 500+ extra calories just by being fidgety</li>
                            </ul>

                            <h2>The Best Approach</h2>
                            <p><strong>When in doubt, go lower.</strong> It's easier to add 100-200 calories if you're losing too fast than to figure out why you're gaining weight despite eating at your "TDEE."</p>
                        </article>
                    </section>

                    <FAQSection faqs={FAQS} />
                    <RelatedTools title="Related Resources" items={RELATED} />

                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>Activity levels are estimates. Always adjust based on real-world results after 2-3 weeks of consistent tracking.</p>
                    </section>
                </div>
            </main>
        </>
    );
}
