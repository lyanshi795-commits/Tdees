'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    title?: string;
}

/**
 * Generates FAQPage JSON-LD schema for SEO
 */
export function generateFAQSchema(faqs: FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * FAQ Schema script component for embedding in pages
 */
export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
        />
    );
}

/**
 * FAQ Section component with accordion UI
 */
export function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.list}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                    >
                        <button
                            className={styles.question}
                            onClick={() => handleToggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{faq.question}</span>
                            <svg
                                className={styles.icon}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className={styles.answerWrapper}>
                            <div className={styles.answer}>
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
