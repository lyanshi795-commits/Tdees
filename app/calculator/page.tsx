"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Sex = "male" | "female" | "unspecified";
type Activity =
    | "sedentary"
    | "light"
    | "moderate"
    | "very"
    | "extra";

const ACTIVITY_FACTOR: Record<Activity, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    extra: 1.9,
};

function clampNumber(n: number, min: number, max: number) {
    if (Number.isNaN(n)) return min;
    return Math.min(Math.max(n, min), max);
}

// Mifflin-St Jeor (informational estimate)
// male: +5, female: -161, unspecified: use a neutral midpoint (-78)
function estimateTDEE({
    sex,
    age,
    heightCm,
    weightKg,
    activity,
}: {
    sex: Sex;
    age: number;
    heightCm: number;
    weightKg: number;
    activity: Activity;
}) {
    const sexConstant = sex === "male" ? 5 : sex === "female" ? -161 : -78;
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + sexConstant;
    const tdee = bmr * ACTIVITY_FACTOR[activity];
    return Math.round(tdee);
}

function IconCalc() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M8 7h8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M8 11h2M12 11h2M16 11h0"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M8 15h2M12 15h2M16 15h0"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function CalculatorPage() {
    const [sex, setSex] = useState<Sex>("unspecified");
    const [age, setAge] = useState<string>("25");
    const [heightCm, setHeightCm] = useState<string>("175");
    const [weightKg, setWeightKg] = useState<string>("70");
    const [activity, setActivity] = useState<Activity>("moderate");
    const [goal, setGoal] = useState<"maintain" | "performance" | "recovery">("maintain");

    const parsed = useMemo(() => {
        const a = clampNumber(parseInt(age || "0", 10), 13, 90);
        const h = clampNumber(parseFloat(heightCm || "0"), 120, 220);
        const w = clampNumber(parseFloat(weightKg || "0"), 35, 200);
        return { a, h, w };
    }, [age, heightCm, weightKg]);

    const tdee = useMemo(() => {
        return estimateTDEE({
            sex,
            age: parsed.a,
            heightCm: parsed.h,
            weightKg: parsed.w,
            activity,
        });
    }, [sex, parsed.a, parsed.h, parsed.w, activity]);

    const planningRange = useMemo(() => {
        // Non-prescriptive: "possible planning range"
        if (goal === "performance") {
            return {
                min: Math.round(tdee * 1.05),
                max: Math.round(tdee * 1.1),
                label: "Possible planning range (performance support)",
            };
        }
        if (goal === "recovery") {
            return {
                min: Math.round(tdee * 0.95),
                max: Math.round(tdee * 1.05),
                label: "Possible planning range (stability & recovery)",
            };
        }
        return {
            min: Math.round(tdee * 0.98),
            max: Math.round(tdee * 1.02),
            label: "Possible planning range (maintenance)",
        };
    }, [tdee, goal]);

    return (
        <main className={styles.main}>
            <div className="container">
                <header className={styles.header}>
                    <Link href="/" className={styles.backLink}>
                        ← Home
                    </Link>
                </header>

                <section className={styles.hero}>
                    <span className="badge">
                        <IconCalc />
                        Energy Balance Calculator
                    </span>

                    <h1 className="h1">
                        A simple estimate
                        <br />
                        for everyday planning
                    </h1>

                    <p className={`${styles.subtitle} p`}>
                        This calculator provides an informational estimate based on your inputs. Real-world needs
                        can vary with sleep, stress, training load, and routine changes.
                    </p>

                    <div className={styles.ctas}>
                        <Link className="btn btnPrimary" href="/dashboard">
                            Open Dashboard
                        </Link>
                        <Link className="btn" href="/glp1/overview">
                            Recovery Overview
                        </Link>
                    </div>
                </section>

                <section className={styles.contentGrid}>
                    {/* Form */}
                    <div className={`${styles.card} surface`}>
                        <div className={styles.cardHead}>
                            <div className={styles.cardTitle}>Your inputs</div>
                            <div className={styles.cardHint}>
                                Designed for quick estimates—not clinical accuracy.
                            </div>
                        </div>

                        <div className={styles.formGrid}>
                            <label className={styles.field}>
                                <span className={styles.label}>Sex (for equation)</span>
                                <select
                                    className={styles.input}
                                    value={sex}
                                    onChange={(e) => setSex(e.target.value as Sex)}
                                >
                                    <option value="unspecified">Prefer not to say</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>

                            <label className={styles.field}>
                                <span className={styles.label}>Age</span>
                                <input
                                    className={styles.input}
                                    inputMode="numeric"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="25"
                                />
                                <span className={styles.help}>Range used: 13–90</span>
                            </label>

                            <label className={styles.field}>
                                <span className={styles.label}>Height (cm)</span>
                                <input
                                    className={styles.input}
                                    inputMode="decimal"
                                    value={heightCm}
                                    onChange={(e) => setHeightCm(e.target.value)}
                                    placeholder="175"
                                />
                                <span className={styles.help}>Range used: 120–220</span>
                            </label>

                            <label className={styles.field}>
                                <span className={styles.label}>Weight (kg)</span>
                                <input
                                    className={styles.input}
                                    inputMode="decimal"
                                    value={weightKg}
                                    onChange={(e) => setWeightKg(e.target.value)}
                                    placeholder="70"
                                />
                                <span className={styles.help}>Range used: 35–200</span>
                            </label>

                            <label className={styles.field}>
                                <span className={styles.label}>Activity level</span>
                                <select
                                    className={styles.input}
                                    value={activity}
                                    onChange={(e) => setActivity(e.target.value as Activity)}
                                >
                                    <option value="sedentary">Sedentary (mostly sitting)</option>
                                    <option value="light">Light (1–3 days/week)</option>
                                    <option value="moderate">Moderate (3–5 days/week)</option>
                                    <option value="very">Very active (6–7 days/week)</option>
                                    <option value="extra">Extra active (labor + training)</option>
                                </select>
                            </label>

                            <label className={styles.field}>
                                <span className={styles.label}>Goal</span>
                                <select
                                    className={styles.input}
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value as any)}
                                >
                                    <option value="maintain">Maintain & Feel Good</option>
                                    <option value="performance">Improve Performance</option>
                                    <option value="recovery">Recovery & Stability</option>
                                </select>
                            </label>
                        </div>

                        <div className={styles.disclaimer}>
                            Informational only. Not medical advice. Consider using weekly averages for a steadier view.
                        </div>
                    </div>

                    {/* Result */}
                    <div className={`${styles.card} surface`}>
                        <div className={styles.cardHead}>
                            <div className={styles.cardTitle}>Your estimate</div>
                            <div className={styles.cardHint}>Based on the selected inputs</div>
                        </div>

                        <div className={styles.result}>
                            <div className={styles.bigNumber}>{tdee.toLocaleString()}</div>
                            <div className={styles.unit}>kcal / day (estimated)</div>
                        </div>

                        <div className={styles.rangeBox}>
                            <div className={styles.rangeTitle}>{planningRange.label}</div>
                            <div className={styles.rangeValue}>
                                {planningRange.min.toLocaleString()} — {planningRange.max.toLocaleString()} kcal/day
                            </div>
                            <div className={styles.rangeHint}>
                                This range is presented as a planning reference. Adjust based on how you feel, perform, and recover.
                            </div>
                        </div>

                        <div className={styles.nextSteps}>
                            <div className={styles.nextTitle}>Next steps</div>
                            <ul className={styles.list}>
                                <li>Log today's intake in the dashboard for trend tracking.</li>
                                <li>Review weekly patterns instead of single-day fluctuations.</li>
                                <li>Use recovery guidance if your routine has shifted recently.</li>
                            </ul>

                            <div className={styles.ctasRow}>
                                <Link className="btn btnPrimary" href="/dashboard">
                                    Go to Dashboard
                                </Link>
                                <Link className="btn" href="/glp1/overview">
                                    View Recovery
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <div className={styles.footerInner}>
                        <div className={styles.brand}>TDEE • Wellness</div>
                        <div className={styles.legal}>Informational only. Not medical advice.</div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
