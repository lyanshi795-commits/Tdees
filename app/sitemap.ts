import { MetadataRoute } from 'next';
import {
    generateAllSEOPaths,
    generateGLP1Paths
} from '@/lib/seo/config';

const BASE_URL = 'https://tdee-repair.vercel.app'; // 部署后替换

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // 静态页面
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/dashboard`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];

    // 动态 SEO 页面 (性别/年龄/目标)
    const calculatorPages: MetadataRoute.Sitemap = generateAllSEOPaths().map(
        ({ gender, age, goal }) => ({
            url: `${BASE_URL}/calculator/${gender}/${age}/${goal}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })
    );

    // GLP-1 页面
    const glp1Pages: MetadataRoute.Sitemap = generateGLP1Paths().map(
        ({ drug }) => ({
            url: `${BASE_URL}/glp1/${drug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })
    );

    return [...staticPages, ...calculatorPages, ...glp1Pages];
}
