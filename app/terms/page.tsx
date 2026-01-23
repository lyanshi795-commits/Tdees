import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../tdee-calculator/page.module.css';

export const metadata: Metadata = {
    title: 'Terms of Use',
    description: 'Terms of Use for TDEE Calculator. Understand the terms and conditions for using our website and calculators.',
    alternates: { canonical: '/terms' },
};

export default function TermsPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Terms of Use</h1>
                    <p className={styles.subtitle}>Last updated: January 2024</p>
                </section>

                <section className={styles.contentSection}>
                    <article className={styles.article}>
                        <h2>Acceptance of Terms</h2>
                        <p>
                            By accessing and using TDEE Calculator ("the Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
                        </p>

                        <h2>Description of Service</h2>
                        <p>
                            TDEE Calculator provides free online tools for estimating Total Daily Energy Expenditure, Basal Metabolic Rate, macronutrient needs, and related calculations. We also provide educational content about nutrition and fitness.
                        </p>

                        <h2>Medical Disclaimer</h2>
                        <p>
                            <strong>IMPORTANT:</strong> The information and calculators provided on this website are for educational and informational purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                        </p>
                        <ul>
                            <li>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary changes.</li>
                            <li>Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</li>
                            <li>The calculators provide estimates based on population averages and may not reflect your individual needs.</li>
                            <li>If you think you may have a medical emergency, call your doctor or emergency services immediately.</li>
                        </ul>

                        <h2>Accuracy of Information</h2>
                        <p>
                            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                        </p>
                        <p>
                            Calculator results are estimates based on established formulas and may vary from your actual caloric needs by 10-15% or more due to individual factors including genetics, body composition, and health conditions.
                        </p>

                        <h2>Use of the Website</h2>
                        <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
                        <ul>
                            <li>Infringe the rights of others</li>
                            <li>Restrict or inhibit anyone else's use of the website</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Transmit any harmful code or malware</li>
                            <li>Use automated systems to access the website in a manner that sends more requests than a human could reasonably produce</li>
                        </ul>

                        <h2>Intellectual Property</h2>
                        <p>
                            The content on this website, including text, graphics, logos, and software, is the property of TDEE Calculator or its content suppliers and is protected by copyright and intellectual property laws.
                        </p>
                        <p>
                            You may view, download, and print content from this website for your personal, non-commercial use, provided you do not modify the content and retain all copyright notices.
                        </p>

                        <h2>Links to Third-Party Sites</h2>
                        <p>
                            This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of linked sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                        </p>

                        <h2>Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, TDEE Calculator shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                        </p>
                        <ul>
                            <li>Your use or inability to use the website</li>
                            <li>Any conduct or content of any third party on the website</li>
                            <li>Any content obtained from the website</li>
                            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                        </ul>

                        <h2>Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date. Your continued use of the website after any changes constitutes acceptance of the new terms.
                        </p>

                        <h2>Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about these Terms of Use, please contact us at:
                        </p>
                        <p>
                            Email: legal@tdee-calculator.com
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
