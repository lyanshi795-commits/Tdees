import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'TDEE 代谢修复计算器 | 自适应能量消耗追踪工具',
    description: '使用 EWMA 算法精准追踪你的真实 TDEE。专为代谢适应、反向饮食和 GLP-1 药物停用后恢复设计的科学工具。',
    keywords: ['TDEE计算器', '代谢修复', '反向饮食', 'Ozempic反弹', '代谢适应', 'EWMA', '自适应TDEE'],
    authors: [{ name: 'TDEE Repair Tool' }],
    openGraph: {
        title: 'TDEE 代谢修复计算器 | 打破代谢黑箱',
        description: '别让平台期困住你。用算法发现真实代谢率，科学修复受损代谢。',
        type: 'website',
        locale: 'zh_CN',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TDEE 代谢修复计算器',
        description: '用 EWMA 算法追踪真实 TDEE，量化代谢缺口',
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
        <html lang="zh-CN">
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
