import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'TDEE Wellness — Understand Your Metabolism',
    description: 'A minimalist TDEE experience built for clarity, consistency, and recovery. Discover your true energy balance.',
    keywords: ['TDEE calculator', 'metabolism', 'energy balance', 'wellness', 'recovery', 'adaptive TDEE'],
    authors: [{ name: 'TDEE Wellness' }],
    metadataBase: new URL('https://tdees.vercel.app'),
    openGraph: {
        title: 'TDEE Wellness — Understand Your Metabolism',
        description: 'A minimalist TDEE tool for wellness, vitality, and sustainable progress.',
        url: 'https://tdees.vercel.app',
        siteName: 'TDEE Wellness',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TDEE Wellness',
        description: 'Discover your true energy balance with adaptive tracking.',
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
