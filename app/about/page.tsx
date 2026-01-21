import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — TDEE Wellness",
    description: "Learn about TDEE Wellness, a minimalist tool designed for clarity, consistency, and recovery.",
};

export default function AboutPage() {
    return (
        <main style={{ padding: "40px 20px", maxWidth: "720px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none", marginBottom: "24px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "16px" }}>About TDEE Wellness</h1>

            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
                TDEE Wellness is a minimalist tool designed to help you understand your energy balance without
                the confusion of complex formulas or aggressive diet culture.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Our Philosophy</h2>
            <ul style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, paddingLeft: "20px", marginBottom: "24px" }}>
                <li><strong>Clarity over complexity</strong> — Simple estimates for everyday planning</li>
                <li><strong>Privacy first</strong> — All data stored locally in your browser</li>
                <li><strong>Recovery focused</strong> — Support for sustainable routines, not extreme diets</li>
            </ul>

            <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>The Formula</h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
                We use the <strong>Mifflin-St Jeor equation</strong>, one of the most widely validated formulas
                for estimating Basal Metabolic Rate (BMR). Combined with activity multipliers, it provides a
                reasonable starting point for understanding your daily energy needs.
            </p>

            <p style={{ color: "var(--color-text-secondary)", fontSize: "13px", opacity: 0.8 }}>
                This tool is for informational purposes only and is not medical advice.
                Individual needs vary. Consult a healthcare professional for personalized guidance.
            </p>
        </main>
    );
}
