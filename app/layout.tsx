import type { Metadata } from 'next';
import { SITE_COPY } from '@/lib/constants/copy';
import './globals.css';

export const metadata: Metadata = {
    title: SITE_COPY.seo.title,
    description: SITE_COPY.seo.description,
    keywords: ['TDEE calculator', 'metabolism', 'energy balance', 'wellness', 'recovery', 'adaptive TDEE'],
    authors: [{ name: 'TDEE Wellness' }],
    metadataBase: new URL('https://tdees.vercel.app'),
    openGraph: {
        title: SITE_COPY.seo.ogTitle,
        description: SITE_COPY.seo.ogDescription,
        url: 'https://tdees.vercel.app',
        siteName: 'TDEE Wellness',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_COPY.seo.title,
        description: SITE_COPY.seo.description,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
