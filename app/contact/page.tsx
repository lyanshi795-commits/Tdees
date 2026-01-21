import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — TDEE Wellness",
    description: "Get in touch with the TDEE Wellness team.",
};

export default function ContactPage() {
    return (
        <main style={{ padding: "40px 20px", maxWidth: "720px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none", marginBottom: "24px", display: "inline-block" }}>
                ← Back to Home
            </Link>

            <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "16px" }}>Contact Us</h1>

            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
                Have questions, feedback, or suggestions? We'd love to hear from you.
            </p>

            <div style={{
                background: "var(--color-bg-secondary)",
                padding: "24px",
                borderRadius: "12px",
                border: "1px solid rgba(210, 210, 215, 0.55)",
                marginBottom: "24px"
            }}>
                <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>Email</h2>
                <a
                    href="mailto:support@tdeewellness.com"
                    style={{ color: "var(--color-primary)", textDecoration: "none" }}
                >
                    support@tdeewellness.com
                </a>
            </div>

            <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", lineHeight: 1.7 }}>
                We typically respond within 24-48 hours. For urgent matters, please include "URGENT" in your subject line.
            </p>
        </main>
    );
}
