'use client';

import { useRef, useState, ReactNode } from 'react';
import html2canvas from 'html2canvas';
import styles from './ExportCard.module.css';

interface ExportCardProps {
    weekNumber: number;
    startWeight: number;
    endWeight: number;
    weightChangePercent: number;
    avgCalories: number;
    currentTDEE: number;
    action: 'increase' | 'hold' | 'decrease';
}

const ACTION_LABELS = {
    increase: '⬆️ Increasing Calories',
    hold: '➡️ Maintaining',
    decrease: '⬇️ Reducing Calories'
};

const ACTION_COLORS = {
    increase: '#34c759',
    hold: '#ff9500',
    decrease: '#ff3b30'
};

export function ExportCard({
    weekNumber,
    startWeight,
    endWeight,
    weightChangePercent,
    avgCalories,
    currentTDEE,
    action
}: ExportCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        if (!cardRef.current) return;

        setIsExporting(true);

        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: '#ffffff',
                scale: 2, // High resolution
                useCORS: true,
                logging: false,
            });

            // Convert to blob and download
            canvas.toBlob((blob) => {
                if (!blob) return;

                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `tdee-week-${weekNumber}-progress.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 'image/png');
        } catch (error) {
            console.error('Export failed:', error);
        } finally {
            setIsExporting(false);
        }
    };

    const weightDiff = (endWeight - startWeight).toFixed(1);
    const isGain = weightChangePercent > 0;

    return (
        <div className={styles.wrapper}>
            {/* Exportable Card */}
            <div ref={cardRef} className={styles.card}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>⚡</span>
                        <span>TDEE Wellness</span>
                    </div>
                    <div className={styles.week}>Week {weekNumber}</div>
                </div>

                {/* Main Stats */}
                <div className={styles.mainStat}>
                    <div className={styles.weightChange} style={{
                        color: isGain ? '#ff9500' : '#34c759'
                    }}>
                        {isGain ? '+' : ''}{weightChangePercent.toFixed(2)}%
                    </div>
                    <div className={styles.weightLabel}>Weekly Change</div>
                </div>

                {/* Stats Grid */}
                <div className={styles.statsGrid}>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>{startWeight.toFixed(1)}</div>
                        <div className={styles.statLabel}>Start (kg)</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>{endWeight.toFixed(1)}</div>
                        <div className={styles.statLabel}>Current (kg)</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>{avgCalories}</div>
                        <div className={styles.statLabel}>Avg Cal</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>{currentTDEE}</div>
                        <div className={styles.statLabel}>TDEE</div>
                    </div>
                </div>

                {/* Action Badge */}
                <div className={styles.actionBadge} style={{
                    backgroundColor: ACTION_COLORS[action],
                }}>
                    {ACTION_LABELS[action]}
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <span>Track your metabolism at</span>
                    <span className={styles.url}>tdee-wellness.vercel.app</span>
                </div>
            </div>

            {/* Export Button (outside the card) */}
            <button
                className={styles.exportBtn}
                onClick={handleExport}
                disabled={isExporting}
            >
                {isExporting ? 'Generating...' : '📷 Export as Image'}
            </button>
        </div>
    );
}

// Simple export hook for use in other components
export function useExportToImage() {
    const [isExporting, setIsExporting] = useState(false);

    const exportElement = async (element: HTMLElement, filename: string) => {
        setIsExporting(true);

        try {
            const canvas = await html2canvas(element, {
                backgroundColor: '#ffffff',
                scale: 2,
                useCORS: true,
                logging: false,
            });

            canvas.toBlob((blob) => {
                if (!blob) return;

                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 'image/png');
        } catch (error) {
            console.error('Export failed:', error);
        } finally {
            setIsExporting(false);
        }
    };

    return { exportElement, isExporting };
}
