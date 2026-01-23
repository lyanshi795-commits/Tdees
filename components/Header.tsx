'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const NAV_TOOLS = [
    { href: '/tdee-calculator', label: 'TDEE Calculator' },
    { href: '/bmr-calculator', label: 'BMR Calculator' },
    { href: '/calorie-deficit-calculator', label: 'Deficit Calculator' },
    { href: '/macro-calculator', label: 'Macro Calculator' },
];

const NAV_LEARN = [
    { href: '/what-is-tdee', label: 'What is TDEE?' },
    { href: '/how-to-calculate-tdee', label: 'How to Calculate' },
    { href: '/tdee-for-weight-loss', label: 'TDEE for Weight Loss' },
    { href: '/tdee-for-muscle-gain', label: 'TDEE for Muscle Gain' },
    { href: '/activity-level-guide', label: 'Activity Level Guide' },
    { href: '/tdee-vs-bmr', label: 'TDEE vs BMR' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [learnOpen, setLearnOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>⚡</span>
                    <span className={styles.logoText}>TDEE Calculator</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    {/* Tools Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setToolsOpen(true)}
                        onMouseLeave={() => setToolsOpen(false)}
                    >
                        <button className={styles.navButton}>
                            Tools
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        {toolsOpen && (
                            <div className={styles.dropdownMenu}>
                                {NAV_TOOLS.map(item => (
                                    <Link key={item.href} href={item.href} className={styles.dropdownItem}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Learn Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setLearnOpen(true)}
                        onMouseLeave={() => setLearnOpen(false)}
                    >
                        <button className={styles.navButton}>
                            Learn
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        {learnOpen && (
                            <div className={styles.dropdownMenu}>
                                {NAV_LEARN.map(item => (
                                    <Link key={item.href} href={item.href} className={styles.dropdownItem}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/dashboard" className={styles.navLink}>
                        Dashboard
                    </Link>
                </nav>

                {/* CTA Button */}
                <Link href="/tdee-calculator" className={styles.ctaButton}>
                    Calculate Now
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileSection}>
                        <div className={styles.mobileSectionTitle}>Tools</div>
                        {NAV_TOOLS.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.mobileLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.mobileSection}>
                        <div className={styles.mobileSectionTitle}>Learn</div>
                        {NAV_LEARN.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.mobileLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/dashboard"
                        className={styles.mobileLink}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                </div>
            )}
        </header>
    );
}
