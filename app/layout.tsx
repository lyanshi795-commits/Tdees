import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'TDEE Calculator - Free & Accurate Daily Calorie Calculator',
        template: '%s | TDEE Calculator',
    },
    description: 'Free TDEE Calculator to find your Total Daily Energy Expenditure. Calculate how many calories you burn per day with our accurate BMR and activity-based calculator.',
    keywords: ['TDEE calculator', 'calorie calculator', 'BMR calculator', 'daily energy expenditure', 'weight loss calculator', 'macro calculator'],
    authors: [{ name: 'TDEE Calculator' }],
    metadataBase: new URL('https://tdee-calculator.vercel.app'),
    openGraph: {
        title: 'TDEE Calculator - Free & Accurate Daily Calorie Calculator',
        description: 'Calculate your Total Daily Energy Expenditure for free. Find out exactly how many calories you need to lose weight, gain muscle, or maintain.',
        url: 'https://tdee-calculator.vercel.app',
        siteName: 'TDEE Calculator',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TDEE Calculator',
        description: 'Free TDEE Calculator - Find your daily calorie needs instantly.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://tdee-calculator.vercel.app',
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
            <body>
                <Header />
                <div style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
