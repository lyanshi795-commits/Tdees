import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    GLP1_DRUGS,
    GLP1Drug,
    GLP1_DRUG_LABELS,
    generateGLP1Paths,
} from '@/lib/seo/config';
import {
    getDrugContent,
    generateFAQSchema,
    getOtherDrugs,
} from '@/lib/seo/drugContent';
import styles from './page.module.css';

// Generate static paths
export function generateStaticParams() {
    return generateGLP1Paths();
}

// Validate params
function isValidDrug(drug: string): boolean {
    return GLP1_DRUGS.includes(drug as GLP1Drug);
}

// Dynamic metadata with rich SEO
export async function generateMetadata({
    params
}: {
    params: { drug: string }
}): Promise<Metadata> {
    const { drug } = params;

    if (!isValidDrug(drug)) {
        return { title: 'Page Not Found' };
    }

    const content = getDrugContent(drug as GLP1Drug);

    return {
        title: content.metaTitle,
        description: content.metaDescription,
        keywords: content.keywords,
        openGraph: {
            title: content.metaTitle,
            description: content.metaDescription,
            type: 'article',
            locale: 'en_US',
        },
        other: {
            'article:published_time': '2024-01-01',
            'article:modified_time': new Date().toISOString().split('T')[0],
        }
    };
}

export default function DrugRecoveryPage({
    params
}: {
    params: { drug: string }
}) {
    const { drug } = params;

    if (!isValidDrug(drug)) {
        notFound();
    }

    const drugTyped = drug as GLP1Drug;
    const drugInfo = GLP1_DRUG_LABELS[drugTyped];
    const content = getDrugContent(drugTyped);
    const otherDrugs = getOtherDrugs(drugTyped);
    const faqSchema = generateFAQSchema(drugTyped);

    return (
        <>
            {/* FAQ Schema JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Breadcrumb */}
                    <nav className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/glp1/overview">Recovery</Link>
                        <span>/</span>
                        <span>{content.brandName}</span>
                    </nav>

                    {/* Hero */}
                    <section className={styles.hero}>
                        <span className={styles.drugBadge}>
                            <span className={styles.pillIcon}>💊</span>
                            {content.genericName} ({content.brandName})
                        </span>
                        <h1 className={styles.title}>
                            Post-{content.brandName} Recovery
                            <span className={styles.gradient}> & Metabolism Guide</span>
                        </h1>
                        <p className={styles.subtitle}>
                            {content.introduction}
                        </p>
                    </section>

                    {/* Clinical Data Stats */}
                    <section className={styles.statsSection}>
                        <h2>Clinical Data: What Research Shows</h2>
                        <p className={styles.trialNote}>
                            Data from {content.clinicalData.trialName} ({content.clinicalData.trialDuration})
                        </p>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statValue}>{content.clinicalData.avgWeightLoss}</div>
                                <div className={styles.statLabel}>Average Weight Loss</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statValue} style={{ color: 'var(--color-warning)' }}>
                                    {content.clinicalData.reboundRate}
                                </div>
                                <div className={styles.statLabel}>Regain After Stopping</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statValue}>{content.clinicalData.leanMassLoss}</div>
                                <div className={styles.statLabel}>Lean Mass Lost</div>
                            </div>
                        </div>
                        <p className={styles.statDisclaimer}>
                            *Clinical trial results. Individual outcomes vary. This tool helps track your personal response.
                        </p>
                    </section>

                    {/* Challenges */}
                    <section className={styles.challengeSection}>
                        <h2>What Happens After Stopping {content.brandName}</h2>
                        <div className={styles.challengeGrid}>
                            {content.challenges.map((challenge, i) => (
                                <div key={i} className={styles.challengeCard}>
                                    <span className={styles.challengeNumber}>{i + 1}</span>
                                    <h3>{challenge.title}</h3>
                                    <p>{challenge.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Solution */}
                    <section className={styles.solutionSection}>
                        <h2>Our Adaptive Recovery Approach</h2>
                        <div className={styles.solutionGrid}>
                            <div className={styles.solutionCard}>
                                <h3>📊 Adaptive TDEE Tracking</h3>
                                <p>
                                    Generic calorie formulas underestimate your needs after major weight loss.
                                    Our EWMA algorithm uses your real data to find your true maintenance level.
                                </p>
                            </div>
                            <div className={styles.solutionCard}>
                                <h3>🥩 High Protein Guidance</h3>
                                <p>
                                    We recommend 2.0g/kg protein to support muscle recovery and improve satiety
                                    as your natural appetite signals return.
                                </p>
                            </div>
                            <div className={styles.solutionCard}>
                                <h3>📈 Reverse Dieting Protocol</h3>
                                <p>
                                    Weekly check-ins guide gradual calorie increases (50-100 kcal),
                                    letting your metabolism adapt without triggering rapid weight gain.
                                </p>
                            </div>
                            <div className={styles.solutionCard}>
                                <h3>🎯 Metabolic Gap Visibility</h3>
                                <p>
                                    See the difference between predicted and actual TDEE—proof that your
                                    metabolism has adapted, and context for your recovery journey.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Accordion */}
                    <section className={styles.faqSection}>
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqList}>
                            {content.faqs.map((faq, i) => (
                                <details key={i} className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        {faq.question}
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className={styles.ctaSection}>
                        <h2>Start Your Post-{content.brandName} Recovery</h2>
                        <p>
                            Join thousands using adaptive TDEE tracking to maintain their progress.
                            Free, private, and built for your specific situation.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/dashboard" className={styles.ctaButton}>
                                Open Recovery Dashboard
                            </Link>
                            <Link href="/calculator" className={styles.ctaSecondary}>
                                Try the Calculator
                            </Link>
                        </div>
                    </section>

                    {/* Related Drugs */}
                    <section className={styles.relatedSection}>
                        <h3>Recovery Guides for Other Medications</h3>
                        <div className={styles.relatedGrid}>
                            {otherDrugs.map(d => {
                                const info = GLP1_DRUG_LABELS[d];
                                return (
                                    <Link key={d} href={`/glp1/${d}`} className={styles.relatedCard}>
                                        <span className={styles.relatedBrand}>{info.brand}</span>
                                        <span className={styles.relatedGeneric}>{info.generic}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>

                    {/* Related Searches for SEO */}
                    <section className={styles.searchTerms}>
                        <h4>People Also Search For</h4>
                        <div className={styles.termsList}>
                            {content.relatedSearches.map((term, i) => (
                                <span key={i} className={styles.searchTerm}>{term}</span>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
