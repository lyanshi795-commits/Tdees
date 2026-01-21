import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — TDEE Wellness",
    description: "Terms of Service for TDEE Wellness.",
};

export default function TermsPage() {
    return (
        <main style={{ padding: "40px 20px", maxWidth: "720px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none", marginBottom: "24px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "16px" }}>Terms of Service</h1>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "32px" }}>Last updated: January 2026</p>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Agreement</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    By using TDEE Wellness, you agree to these terms. If you do not agree, please do not use this service.
                </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Nature of Service</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    TDEE Wellness provides informational estimates of daily energy expenditure based on user-provided
                    inputs. This tool is designed for general wellness and planning purposes only.
                </p>
            </section>

            <section style={{
                marginBottom: "32px",
                padding: "20px",
                background: "rgba(255, 149, 0, 0.08)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 149, 0, 0.2)"
            }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#cc7700" }}>
                    ⚠️ Not Medical Advice
                </h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    <strong>TDEE Wellness is not a substitute for professional medical advice, diagnosis, or treatment.</strong>{" "}
                    The estimates provided are based on mathematical formulas and may not accurately reflect your
                    individual metabolic needs. Always consult a qualified healthcare provider or registered dietitian
                    before making significant changes to your diet or exercise routine.
                </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Accuracy Disclaimer</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    Caloric estimates are based on the Mifflin-St Jeor equation, which provides a general estimate.
                    Actual energy needs can vary significantly based on:
                </p>
                <ul style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, paddingLeft: "20px", marginTop: "12px" }}>
                    <li>Individual metabolism and body composition</li>
                    <li>Hormonal factors and medical conditions</li>
                    <li>Stress, sleep quality, and daily activity variations</li>
                    <li>Environmental factors and climate</li>
                </ul>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>User Responsibility</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    You are responsible for providing accurate information and using the estimates as a general
                    reference point. We encourage listening to your body and adjusting based on how you feel,
                    perform, and recover.
                </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Limitation of Liability</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    TDEE Wellness and its creators shall not be held liable for any health outcomes, decisions,
                    or actions taken based on the information provided by this tool.
                </p>
            </section>

            <section>
                <h2 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px" }}>Contact</h2>
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                    Questions about these terms? Contact us at{" "}
                    <a href="mailto:support@tdeewellness.com" style={{ color: "var(--color-primary)" }}>
                        support@tdeewellness.com
                    </a>
                </p>
            </section>
        </main>
    );
}
