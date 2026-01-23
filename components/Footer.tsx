import Link from 'next/link';
import styles from './Footer.module.css';

const TOOL_LINKS = [
    { href: '/tdee-calculator', label: 'TDEE Calculator' },
    { href: '/bmr-calculator', label: 'BMR Calculator' },
    { href: '/calorie-deficit-calculator', label: 'Deficit Calculator' },
    { href: '/macro-calculator', label: 'Macro Calculator' },
];

const LEARN_LINKS = [
    { href: '/what-is-tdee', label: 'What is TDEE?' },
    { href: '/how-to-calculate-tdee', label: 'How to Calculate TDEE' },
    { href: '/tdee-for-weight-loss', label: 'TDEE for Weight Loss' },
    { href: '/tdee-for-muscle-gain', label: 'TDEE for Muscle Gain' },
    { href: '/activity-level-guide', label: 'Activity Level Guide' },
    { href: '/tdee-vs-bmr', label: 'TDEE vs BMR' },
];

const LEGAL_LINKS = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Main Grid */}
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoIcon}>⚡</span>
                            <span>TDEE Calculator</span>
                        </Link>
                        <p className={styles.tagline}>
                            Free, accurate TDEE and calorie calculators to help you reach your fitness goals.
                        </p>
                    </div>

                    {/* Tools Column */}
                    <div className={styles.linkColumn}>
                        <h3 className={styles.columnTitle}>Calculators</h3>
                        <nav className={styles.linkList}>
                            {TOOL_LINKS.map(link => (
                                <Link key={link.href} href={link.href} className={styles.link}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Learn Column */}
                    <div className={styles.linkColumn}>
                        <h3 className={styles.columnTitle}>Learn</h3>
                        <nav className={styles.linkList}>
                            {LEARN_LINKS.map(link => (
                                <Link key={link.href} href={link.href} className={styles.link}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Legal Column */}
                    <div className={styles.linkColumn}>
                        <h3 className={styles.columnTitle}>Legal</h3>
                        <nav className={styles.linkList}>
                            {LEGAL_LINKS.map(link => (
                                <Link key={link.href} href={link.href} className={styles.link}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider} />

                {/* Bottom */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} TDEE Calculator. All rights reserved.
                    </p>
                    <p className={styles.disclaimer}>
                        For informational purposes only. Not medical advice. Consult a healthcare professional before starting any diet or exercise program.
                    </p>
                </div>
            </div>
        </footer>
    );
}
