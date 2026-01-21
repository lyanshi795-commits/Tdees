import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — TDEE Wellness",
    description: "Privacy Policy for TDEE Wellness. Your data stays on your device.",
};

export default function PrivacyPage() {
    return (
        <main style={{ padding: "40px 20px", maxWidth: "720px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none", marginBottom: "24px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "16px" }}>Privacy Policy</h1>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "32px" }}>Last updated: January 2026</p>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Your Privacy Matters</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    TDEE Wellness is designed with privacy as a core principle. We believe your health data
                    should remain yours and yours alone.
                </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Data Storage</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    <strong>100% Local Storage:</strong> All your data—including weight logs, calorie entries,
                    and profile information—is stored locally in your browser using localStorage. We do not
                    have servers that collect, store, or process your personal health information.
                </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>What We Don't Collect</h2>
                <ul style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, paddingLeft: "20px" }}>
                    <li>Personal health data (weight, calories, goals)</li>
                    <li>Personal identification information</li>
                    <li>Location data</li>
                    <li>Device information beyond basic analytics</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Analytics</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    We may use anonymous, aggregated analytics to understand how the site is used and to
                    improve the user experience. This data cannot be used to identify individual users.
                </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Your Control</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    You can clear all your data at any time by clearing your browser's localStorage.
                    This will remove all stored information from your device.
                </p>
            </section>

            <section>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Contact</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    Questions about privacy? Contact us at{" "}
                    <a href="mailto:support@tdeewellness.com" style={{ color: "var(--color-primary)" }}>
                        support@tdeewellness.com
                    </a>
                </p>
            </section>
        </main>
    );
}
