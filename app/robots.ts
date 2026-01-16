import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://tdee-repair.vercel.app'; // 部署后替换

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
