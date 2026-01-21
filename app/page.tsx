import Link from "next/link";
import { SITE_COPY } from "@/lib/constants/copy";
import styles from "./page.module.css";

function IconSpark() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconCheck() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function HomePage() {
    const { header, hero, quick, value, howItWorks, goals, activityGuide, dashboard, guides, faq, finalCta, footer } = SITE_COPY;

    return (
        <main className={styles.main}>
            {/* 0. Header */}
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerInner}>
                        <Link href="/" className={styles.logo}>{header.logo}</Link>
                        <nav className={styles.nav}>
                            {header.nav.map((item) => (
                                <Link key={item.label} href={item.href}>{item.label}</Link>
                            ))}
                        </nav>
                        <Link href="/calculator" className="btn btnPrimary">{header.cta}</Link>
                    </div>
                </div>
            </header>

            <div className="container">
                {/* 1. Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroLeft}>
                            <h1 className="h1">{hero.h1}</h1>
                            <p className={styles.subheadline}>{hero.sub}</p>
                            <p className={styles.supportLine}>{hero.support}</p>

                            <div className={styles.heroCtas}>
                                <Link className="btn btnPrimary btnLarge" href="/calculator">
                                    {hero.primaryCta}
                                </Link>
                                <Link className={styles.secondaryLink} href="#how-it-works">
                                    {hero.secondaryCta}
                                </Link>
                            </div>

                            <p className={styles.microcopy}>{hero.microcopy}</p>
                            <p className={styles.heroDisclaimer}>{hero.disclaimer}</p>
                        </div>

                        <div className={styles.heroRight}>
                            <div className={`${styles.previewCard} surface`}>
                                <div className={styles.previewTop}>
                                    <div className={styles.previewDot} />
                                    <div className={styles.previewDot} />
                                    <div className={styles.previewDot} />
                                </div>
                                <div className={styles.previewBody}>
                                    <div className={styles.previewTitle}>Your Daily Energy Balance</div>
                                    <div className={styles.previewValue}>
                                        <span className={styles.exampleLabel}>Example</span>
                                        2,180 kcal
                                    </div>
                                    <div className={styles.previewHint}>
                                        Enter your info to get a personalized estimate.
                                    </div>
                                    <div className={styles.previewRow}>
                                        <div className={styles.previewChip}>Adaptive Insights</div>
                                        <div className={styles.previewChip}>Metabolic Clarity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Quick Calculator Preview Placeholder */}
                <section className={styles.section}>
                    <div className={`${styles.quickCalcPreview} surface`}>
                        <h2 className="h2">{quick.title}</h2>
                        <p className="p">{quick.sub}</p>
                        <div className={styles.mockForm}>
                            <div className={styles.mockInput}>Sex</div>
                            <div className={styles.mockInput}>Age</div>
                            <div className={styles.mockInput}>Height</div>
                            <div className={styles.mockInput}>Weight</div>
                            <div className={styles.mockInput}>Activity</div>
                            <Link href="/calculator" className="btn btnPrimary">{quick.button}</Link>
                        </div>
                        <p className={styles.tipLine}>{quick.tip}</p>
                    </div>
                </section>

                {/* 3. Value Props */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{value.title}</h2>
                    <div className={styles.cardGrid}>
                        {value.cards.map((card, i) => (
                            <div key={i} className={`${styles.card} surface`}>
                                <div className={styles.cardIcon}><IconSpark /></div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. How it works */}
                <section id="how-it-works" className={styles.section}>
                    <h2 className={styles.sectionTitle}>{howItWorks.title}</h2>
                    <div className={styles.stepsGrid}>
                        {howItWorks.steps.map((step, i) => (
                            <div key={i} className={styles.step}>
                                <span className={styles.stepNumber}>{i + 1}</span>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <Link href="/calculator" className="btn btnPrimary">{howItWorks.cta}</Link>
                    </div>
                </section>

                {/* 5. Goal Cards */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{goals.title}</h2>
                    <p className={styles.sectionSubtitle}>{goals.sub}</p>
                    <div className={styles.cardGrid}>
                        {goals.items.map((item, i) => (
                            <div key={i} className={`${styles.goalCard} surface`}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.text}</p>
                                <Link href={item.href} className="btn">{item.cta}</Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Activity Guide */}
                <section className={styles.sectionAlt}>
                    <div className={`${styles.activityCta} surface`}>
                        <h2 className="h2">{activityGuide.title}</h2>
                        <p className="p">{activityGuide.text}</p>
                        <Link href="/guides/activity" className={styles.textLink}>{activityGuide.cta}</Link>
                    </div>
                </section>

                {/* 7. Dashboard Guide */}
                <section className={styles.section}>
                    <div className={styles.dashboardPitch}>
                        <div className={styles.pitchContent}>
                            <h2 className="h2">{dashboard.title}</h2>
                            <p className="p">{dashboard.sub}</p>
                            <ul className={styles.pitchList}>
                                {dashboard.bullets.map((bullet, i) => (
                                    <li key={i}><IconCheck /> {bullet}</li>
                                ))}
                            </ul>
                            <div className={styles.heroCtas}>
                                <Link href="/dashboard" className="btn btnPrimary">{dashboard.primaryCta}</Link>
                                <Link href="/dashboard?demo=true" className={styles.secondaryLink}>{dashboard.secondaryCta}</Link>
                            </div>
                        </div>
                        <div className={styles.pitchVisual}>
                            <div className={`${styles.mockDashboard} surface`}>
                                <div className={styles.mockChart} />
                                <div className={styles.mockChart} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Guides */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{guides.title}</h2>
                    <div className={styles.guidesGrid}>
                        {guides.items.map((item, i) => (
                            <Link key={i} href={item.href} className={`${styles.guideLink} surface`}>
                                {item.title} →
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 9. FAQ */}
                <section id="faq" className={styles.section}>
                    <h2 className={styles.sectionTitle}>{faq.title}</h2>
                    <div className={styles.faqGrid}>
                        {faq.items.map((item, i) => (
                            <div key={i} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{item.q}</h3>
                                <p className={styles.faqAnswer}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 10. Final CTA */}
                <section className={styles.finalCta}>
                    <h2 className="h1">{finalCta.title}</h2>
                    <p className="p">{finalCta.sub}</p>
                    <div className={styles.heroCtas}>
                        <Link href="/calculator" className="btn btnPrimary btnLarge">{finalCta.primaryCta}</Link>
                        <Link href="/guides" className="btn btnLarge">{finalCta.secondaryCta}</Link>
                    </div>
                </section>
            </div>

            {/* 11. Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        {footer.columns.map((col, i) => (
                            <div key={i} className={styles.footerCol}>
                                <h4 className={styles.footerColTitle}>{col.title}</h4>
                                <ul className={styles.footerList}>
                                    {col.links.map((link, j) => (
                                        <li key={j}><Link href={link.href}>{link.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.footerBottom}>
                        <div className={styles.brand}>{header.logo}</div>
                        <div className={styles.footerDisclaimer}>{footer.disclaimer}</div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
