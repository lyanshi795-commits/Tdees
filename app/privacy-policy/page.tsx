import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for TDEE Calculator. Learn how we handle your data and protect your privacy.',
    alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.subtitle}>Last updated: January 2024</p>
                </section>

                <section className={styles.contentSection}>
                    <article className={styles.article}>
                        <h2>Introduction</h2>
                        <p>
                            TDEE Calculator ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and calculators.
                        </p>

                        <h2>Information We Collect</h2>
                        <h3>Information You Provide</h3>
                        <p>When using our calculators, you may provide:</p>
                        <ul>
                            <li>Age, gender, height, and weight</li>
                            <li>Activity level and fitness goals</li>
                            <li>Email address (if you choose to save results)</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <p>We may automatically collect:</p>
                        <ul>
                            <li>Device type and browser information</li>
                            <li>IP address and approximate location</li>
                            <li>Pages visited and time spent on site</li>
                            <li>Referring website information</li>
                        </ul>

                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide calculator results and recommendations</li>
                            <li>Improve our website and user experience</li>
                            <li>Analyze usage patterns and trends</li>
                            <li>Send emails if you opt in (you can unsubscribe anytime)</li>
                        </ul>

                        <h2>Data Storage</h2>
                        <p>
                            <strong>Local Storage:</strong> Calculator inputs and results are stored locally in your browser using localStorage. This data never leaves your device unless you explicitly choose to share it.
                        </p>
                        <p>
                            <strong>Analytics:</strong> We use privacy-focused analytics to understand how visitors use our site. This data is aggregated and does not identify individual users.
                        </p>

                        <h2>Cookies</h2>
                        <p>
                            We use essential cookies to ensure our website functions properly. We may also use analytics cookies to understand site usage. You can control cookie settings through your browser.
                        </p>

                        <h2>Third-Party Services</h2>
                        <p>We may use third-party services for:</p>
                        <ul>
                            <li>Website hosting (Vercel)</li>
                            <li>Analytics (privacy-focused alternatives)</li>
                            <li>Email delivery (if you subscribe)</li>
                        </ul>
                        <p>These services have their own privacy policies governing their use of your data.</p>

                        <h2>Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt out of marketing communications</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h2>Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2>Children's Privacy</h2>
                        <p>
                            Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                        </p>

                        <h2>Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have questions about this privacy policy or our data practices, please contact us at:
                        </p>
                        <p>
                            Email: privacy@tdee-calculator.com
                        </p>
                    </article>
                </section>

                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
