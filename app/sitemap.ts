import { MetadataRoute } from 'next';
import {
    generateAllSEOPaths,
    generateGLP1Paths
} from '@/lib/seo/config';

const BASE_URL = 'https://tdee-calculator.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Core tool pages (highest priority)
    const toolPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/tdee-calculator`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/bmr-calculator`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/calorie-deficit-calculator`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/macro-calculator`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // Content/Learn pages
    const contentPages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/what-is-tdee`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/how-to-calculate-tdee`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/tdee-for-weight-loss`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/tdee-for-muscle-gain`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/activity-level-guide`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/tdee-vs-bmr`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // Dashboard and other app pages
    const appPages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/dashboard`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/calculator`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ];

    // Legal pages
    const legalPages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/terms`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Programmatic SEO pages (gender/age/goal combinations)
    const seoCalculatorPages: MetadataRoute.Sitemap = generateAllSEOPaths().map(
        ({ gender, age, goal }) => ({
            url: `${BASE_URL}/calculator/${gender}/${age}/${goal}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })
    );

    // GLP-1 recovery pages
    const glp1Pages: MetadataRoute.Sitemap = generateGLP1Paths().map(
        ({ drug }) => ({
            url: `${BASE_URL}/glp1/${drug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })
    );

    return [
        ...toolPages,
        ...contentPages,
        ...appPages,
        ...legalPages,
        ...seoCalculatorPages,
        ...glp1Pages,
    ];
}

