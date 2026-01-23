import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection, FAQSchema, FAQItem } from '@/components/FAQSection';
import { RelatedTools } from '@/components/RelatedTools';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'TDEE Calculator - Free & Accurate Daily Calorie Calculator',
    description: 'Calculate your Total Daily Energy Expenditure (TDEE) for free. Find out exactly how many calories you burn per day based on your age, weight, height, and activity level.',
    keywords: ['TDEE calculator', 'total daily energy expenditure', 'calorie calculator', 'daily calorie needs', 'how many calories do I burn'],
    alternates: {
        canonical: '/tdee-calculator',
    },
};

const ACTIVITY_FACTOR = {
    sedentary: { value: 1.2, label: 'Sedentary (little or no exercise)' },
    light: { value: 1.375, label: 'Light (exercise 1-3 days/week)' },
    moderate: { value: 1.55, label: 'Moderate (exercise 3-5 days/week)' },
    active: { value: 1.725, label: 'Active (exercise 6-7 days/week)' },
    veryActive: { value: 1.9, label: 'Very Active (hard exercise daily)' },
};

const FAQS: FAQItem[] = [
    {
        question: 'What is TDEE and why does it matter?',
        answer: 'TDEE stands for Total Daily Energy Expenditure. It represents the total number of calories your body burns in a day, including your Basal Metabolic Rate (BMR) plus calories burned through physical activity and digestion. Knowing your TDEE is crucial for weight management—whether you want to lose fat, gain muscle, or maintain your current weight.',
    },
    {
        question: 'How accurate is this TDEE calculator?',
        answer: 'This calculator uses the Mifflin-St Jeor equation, which is considered the most accurate formula for estimating BMR. However, TDEE calculations are estimates based on averages. Your actual calorie needs may vary by 10-15% due to genetics, body composition, and other factors. We recommend using your calculated TDEE as a starting point and adjusting based on real-world results over 2-3 weeks.',
    },
    {
        question: 'How do I use TDEE for weight loss?',
        answer: 'To lose weight, you need to eat fewer calories than your TDEE (caloric deficit). A safe and sustainable deficit is 300-500 calories below your TDEE, which typically results in 0.5-1 pound of fat loss per week. Never go below 1200 calories (women) or 1500 calories (men) without medical supervision.',
    },
    {
        question: 'What\'s the difference between TDEE and BMR?',
        answer: 'BMR (Basal Metabolic Rate) is the number of calories your body needs at complete rest to maintain vital functions like breathing and circulation. TDEE includes your BMR plus all additional calories burned through daily activities, exercise, and food digestion. TDEE is always higher than BMR.',
    },
    {
        question: 'How often should I recalculate my TDEE?',
        answer: 'You should recalculate your TDEE whenever your weight changes by more than 5-10 pounds, when your activity level significantly changes, or every 4-6 weeks during an active weight loss or muscle gain phase. As your body weight changes, so does your calorie needs.',
    },
];

const RELATED_TOOLS = [
    {
        href: '/bmr-calculator',
        title: 'BMR Calculator',
        description: 'Calculate your Basal Metabolic Rate',
        icon: '🔥',
    },
    {
        href: '/calorie-deficit-calculator',
        title: 'Calorie Deficit Calculator',
        description: 'Plan your weight loss calorie goal',
        icon: '📉',
    },
    {
        href: '/macro-calculator',
        title: 'Macro Calculator',
        description: 'Calculate your ideal protein, carbs, and fat',
        icon: '🥗',
    },
];

const RELATED_ARTICLES = [
    {
        href: '/what-is-tdee',
        title: 'What is TDEE?',
        description: 'Complete guide to Total Daily Energy Expenditure',
        icon: '📖',
    },
    {
        href: '/tdee-for-weight-loss',
        title: 'TDEE for Weight Loss',
        description: 'Use TDEE to lose weight effectively',
        icon: '🎯',
    },
    {
        href: '/activity-level-guide',
        title: 'Activity Level Guide',
        description: 'Choose the right activity multiplier',
        icon: '🏃',
    },
];

export default function TDEECalculatorPage() {
    return (
        <>
            <FAQSchema faqs={FAQS} />

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        <h1 className={styles.title}>
                            Free TDEE Calculator
                        </h1>
                        <p className={styles.subtitle}>
                            Calculate your Total Daily Energy Expenditure to find out exactly how many calories you burn per day. Use this to lose weight, gain muscle, or maintain.
                        </p>
                    </section>

                    {/* Calculator Section */}
                    <section className={styles.calculatorSection}>
                        <div className={styles.calculatorCard}>
                            <h2 className={styles.cardTitle}>Calculate Your TDEE</h2>
                            <p className={styles.cardHint}>Enter your details below for an instant calculation</p>

                            {/* Calculator Form - Client Component will be imported here */}
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
                            <h2>What is TDEE?</h2>
                            <p>
                                <strong>TDEE (Total Daily Energy Expenditure)</strong> is the total number of calories your body burns in a 24-hour period. It accounts for all energy used by your body, including:
                            </p>
                            <ul>
                                <li><strong>Basal Metabolic Rate (BMR)</strong> - Calories burned at rest for basic functions</li>
                                <li><strong>Thermic Effect of Food (TEF)</strong> - Energy used to digest food (~10% of intake)</li>
                                <li><strong>Physical Activity</strong> - Calories burned through exercise and daily movement</li>
                                <li><strong>Non-Exercise Activity Thermogenesis (NEAT)</strong> - Energy used for daily tasks like walking, typing, fidgeting</li>
                            </ul>

                            <h2>How is TDEE Calculated?</h2>
                            <p>
                                Our TDEE calculator uses the <strong>Mifflin-St Jeor equation</strong>, which is considered the gold standard for BMR estimation by nutrition researchers. The formula is:
                            </p>
                            <div className={styles.formula}>
                                <p><strong>For Men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5</p>
                                <p><strong>For Women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161</p>
                            </div>
                            <p>
                                Your BMR is then multiplied by an activity factor based on your exercise habits to get your TDEE.
                            </p>

                            <h2>How to Choose Your Activity Level</h2>
                            <p>
                                Selecting the right activity level is crucial for an accurate TDEE calculation. Here's a detailed guide:
                            </p>
                            <ul>
                                <li><strong>Sedentary (×1.2)</strong> - Desk job with little to no exercise. Most daily activity is sitting.</li>
                                <li><strong>Lightly Active (×1.375)</strong> - Light exercise 1-3 days per week, or a job that requires some walking.</li>
                                <li><strong>Moderately Active (×1.55)</strong> - Moderate exercise 3-5 days per week. This is the average active person.</li>
                                <li><strong>Very Active (×1.725)</strong> - Hard exercise 6-7 days per week, or a physically demanding job.</li>
                                <li><strong>Extremely Active (×1.9)</strong> - Professional athletes or very hard physical labor jobs combined with training.</li>
                            </ul>

                            <h2>Using TDEE for Weight Management</h2>
                            <h3>For Weight Loss</h3>
                            <p>
                                To lose weight, eat <strong>10-20% fewer calories</strong> than your TDEE. A 500-calorie deficit typically results in about 1 pound of fat loss per week. Never drop below your BMR for extended periods.
                            </p>

                            <h3>For Muscle Gain</h3>
                            <p>
                                To build muscle, eat <strong>10-15% more calories</strong> than your TDEE, combined with resistance training and adequate protein (0.7-1g per pound of bodyweight).
                            </p>

                            <h3>For Maintenance</h3>
                            <p>
                                To maintain your weight, eat at or near your TDEE. Track your weight weekly and adjust if you notice unwanted gains or losses.
                            </p>

                            <h2>Why TDEE Estimates May Be Inaccurate</h2>
                            <p>
                                While the Mifflin-St Jeor equation is the most accurate formula available, individual TDEE can vary by 10-15% due to:
                            </p>
                            <ul>
                                <li>Genetics and metabolic efficiency</li>
                                <li>Body composition (muscle vs. fat ratio)</li>
                                <li>Hormonal factors and health conditions</li>
                                <li>Overestimating or underestimating activity levels</li>
                            </ul>
                            <p>
                                We recommend using your calculated TDEE as a starting point, then adjusting based on real results over 2-3 weeks.
                            </p>
                        </article>
                    </section>

                    {/* FAQ Section */}
                    <FAQSection faqs={FAQS} />

                    {/* Related Tools */}
                    <RelatedTools
                        title="Related Calculators"
                        items={RELATED_TOOLS}
                    />

                    {/* Related Articles */}
                    <RelatedTools
                        title="Learn More About TDEE"
                        items={RELATED_ARTICLES}
                        variant="articles"
                    />

                    {/* Disclaimer */}
                    <section className={styles.disclaimer}>
                        <h3>Disclaimer</h3>
                        <p>
                            This TDEE calculator is provided for informational purposes only and is not a substitute for professional medical advice. The calculations are estimates based on population averages and may not reflect your individual needs. Before making significant changes to your diet or exercise routine, consult with a healthcare professional or registered dietitian.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
