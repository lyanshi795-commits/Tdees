import Link from 'next/link';
import styles from './RelatedTools.module.css';

interface RelatedItem {
    href: string;
    title: string;
    description: string;
    icon?: string;
}

interface RelatedToolsProps {
    title?: string;
    items: RelatedItem[];
    variant?: 'tools' | 'articles';
}

const DEFAULT_TOOLS: RelatedItem[] = [
    {
        href: '/tdee-calculator',
        title: 'TDEE Calculator',
        description: 'Calculate your Total Daily Energy Expenditure',
        icon: '⚡',
    },
    {
        href: '/bmr-calculator',
        title: 'BMR Calculator',
        description: 'Find your Basal Metabolic Rate',
        icon: '🔥',
    },
    {
        href: '/calorie-deficit-calculator',
        title: 'Deficit Calculator',
        description: 'Plan your calorie deficit for weight loss',
        icon: '📉',
    },
    {
        href: '/macro-calculator',
        title: 'Macro Calculator',
        description: 'Calculate your ideal macronutrient split',
        icon: '🥗',
    },
];

const DEFAULT_ARTICLES: RelatedItem[] = [
    {
        href: '/what-is-tdee',
        title: 'What is TDEE?',
        description: 'Learn the basics of Total Daily Energy Expenditure',
        icon: '📖',
    },
    {
        href: '/how-to-calculate-tdee',
        title: 'How to Calculate TDEE',
        description: 'Step-by-step guide to calculating your TDEE',
        icon: '🧮',
    },
    {
        href: '/tdee-for-weight-loss',
        title: 'TDEE for Weight Loss',
        description: 'Use TDEE to create an effective fat loss plan',
        icon: '🎯',
    },
    {
        href: '/tdee-vs-bmr',
        title: 'TDEE vs BMR',
        description: 'Understand the difference between TDEE and BMR',
        icon: '⚖️',
    },
];

export function RelatedTools({
    title = 'Related Tools',
    items,
    variant = 'tools'
}: RelatedToolsProps) {
    const displayItems = items || (variant === 'tools' ? DEFAULT_TOOLS : DEFAULT_ARTICLES);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.grid}>
                {displayItems.map((item) => (
                    <Link key={item.href} href={item.href} className={styles.card}>
                        {item.icon && <span className={styles.icon}>{item.icon}</span>}
                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.description}</p>
                        </div>
                        <svg
                            className={styles.arrow}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M7.5 5L12.5 10L7.5 15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export { DEFAULT_TOOLS, DEFAULT_ARTICLES };
