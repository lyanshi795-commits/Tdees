export const SITE_COPY = {
    header: {
        logo: "TDEE Green",
        nav: [
            { label: "Calculator", href: "/calculator" },
            { label: "Dashboard", href: "/dashboard" },
            { label: "Guides", href: "/guides" },
            { label: "Routine Reset", href: "/routine-reset" },
            { label: "About", href: "/about" }
        ],
        cta: "Calculate"
    },
    hero: {
        h1: "TDEE Calculator",
        sub: "Estimate your maintenance calories in seconds.",
        support: "Built for sustainable routines—not crash diets.",
        disclaimer: "Estimates vary by person. Not medical advice.",
        primaryCta: "Calculate My TDEE",
        secondaryCta: "How it works",
        microcopy: "Free • Mobile-friendly • No sign-up required"
    },
    quick: {
        title: "Quick estimate",
        sub: "Enter your stats to get a starting point you can adjust over time.",
        button: "Calculate",
        resultTitle: "Your daily calorie estimate",
        tip: "Tip: Start here, then adjust based on your weekly trend."
    },
    value: {
        title: "What you’ll get",
        cards: [
            {
                title: "Simple inputs",
                text: "Height, weight, age, and activity level—nothing extra."
            },
            {
                title: "Clear output",
                text: "Maintenance, deficit, and surplus ranges you can actually use."
            },
            {
                title: "Built for consistency",
                text: "Track trends over time—without obsession."
            }
        ]
    },
    howItWorks: {
        title: "How it works",
        steps: ["Enter your stats", "Choose an activity level", "Get your daily estimate"],
        cta: "Try it now"
    },
    goals: {
        title: "Pick a direction",
        sub: "You can change this anytime. Start with what feels realistic.",
        items: [
            {
                title: "Maintain",
                text: "Steady routines and stable energy.",
                cta: "Use maintenance",
                href: "/calculator?goal=maintain"
            },
            {
                title: "Small deficit",
                text: "A gentler cut that’s often easier to sustain.",
                cta: "Use mild deficit",
                href: "/calculator?goal=deficit"
            },
            {
                title: "Lean bulk",
                text: "A small surplus to support training performance.",
                cta: "Use surplus",
                href: "/calculator?goal=bulk"
            }
        ]
    },
    activityGuide: {
        title: "Not sure about activity level?",
        text: "Most people overestimate. Use the level that matches your average week—not your best week.",
        cta: "View the activity guide →"
    },
    dashboard: {
        title: "Track trends, not single days",
        sub: "Log quick check-ins and see how intake, weight, and consistency move over time.",
        bullets: [
            "Weekly patterns over daily noise",
            "Simple entries, clear charts",
            "Your data stays yours"
        ],
        primaryCta: "Open dashboard",
        secondaryCta: "See a demo →",
        emptyState: {
            title: "Your dashboard is ready.",
            text: "Add your first check-in to start tracking patterns over time.",
            primaryCta: "Add my first entry",
            secondaryCta: "Use demo data",
            helper: "Trends become clearer after a few days."
        }
    },
    guides: {
        title: "Helpful guides",
        items: [
            { title: "What is TDEE?", href: "/guides/what-is-tdee" },
            { title: "TDEE vs BMR", href: "/guides/tdee-vs-bmr" },
            { title: "Calorie deficit: how to start", href: "/guides/calorie-deficit" }
        ]
    },
    faq: {
        title: "FAQ",
        items: [
            {
                q: "What is TDEE?",
                a: "TDEE is your total daily energy expenditure—how many calories you burn in a day."
            },
            {
                q: "TDEE vs BMR—what’s the difference?",
                a: "BMR is calories burned at rest. TDEE includes daily movement and exercise."
            },
            {
                q: "Why does my number differ from my smartwatch?",
                a: "Wearables use different assumptions and can vary by device and usage."
            },
            {
                q: "Which activity level should I pick?",
                a: "Choose the level that matches most days—not your best day."
            },
            {
                q: "How should I use a calorie deficit?",
                a: "Start small and track weekly trends. Extreme cuts are harder to sustain."
            }
        ]
    },
    finalCta: {
        title: "Ready to get your estimate?",
        sub: "A clean starting point—then you refine it with real-world data.",
        primaryCta: "Calculate My TDEE",
        secondaryCta: "View guides"
    },
    footer: {
        columns: [
            {
                title: "Product",
                links: [
                    { label: "Calculator", href: "/calculator" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Activity guide", href: "/guides/activity" }
                ]
            },
            {
                title: "Resources",
                links: [
                    { label: "Guides", href: "/guides" },
                    { label: "FAQ", href: "#faq" }
                ]
            },
            {
                title: "Company",
                links: [
                    { label: "About", href: "/about" },
                    { label: "Contact", href: "/contact" }
                ]
            },
            {
                title: "Legal",
                links: [
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms", href: "/terms" }
                ]
            }
        ],
        disclaimer: "For informational purposes only. Not medical advice."
    },
    seo: {
        title: "TDEE Calculator – Free Maintenance Calories Estimate",
        description: "Calculate your TDEE and daily calories for maintenance, fat loss, or muscle gain. Clean, science-based estimates. Free & mobile-friendly.",
        ogTitle: "TDEE Calculator",
        ogDescription: "A minimalist TDEE calculator for sustainable routines."
    }
};
