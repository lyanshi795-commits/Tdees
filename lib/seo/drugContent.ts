/**
 * GLP-1 药物丰富内容数据
 * 用于 SEO 落地页，包含临床数据、FAQ、长尾关键词
 */

import { GLP1Drug } from './config';

// 药物详细信息类型
export interface DrugContent {
    // 基础信息
    brandName: string;
    genericName: string;
    manufacturer: string;
    approvedYear: number;
    approvedFor: string[];

    // SEO 元数据
    metaTitle: string;
    metaDescription: string;
    keywords: string[];

    // 临床数据
    clinicalData: {
        avgWeightLoss: string;          // 平均体重下降百分比
        trialName: string;              // 关键临床试验名称
        trialDuration: string;          // 试验持续时间
        reboundRate: string;            // 停药后反弹率
        leanMassLoss: string;           // 瘦体重流失比例
    };

    // 页面描述
    introduction: string;

    // 停药挑战
    challenges: {
        title: string;
        description: string;
    }[];

    // FAQ
    faqs: {
        question: string;
        answer: string;
    }[];

    // 相关搜索词
    relatedSearches: string[];
}

// 所有药物的详细内容
export const DRUG_CONTENT: Record<GLP1Drug, DrugContent> = {
    ozempic: {
        brandName: 'Ozempic',
        genericName: 'Semaglutide',
        manufacturer: 'Novo Nordisk',
        approvedYear: 2017,
        approvedFor: ['Type 2 Diabetes', 'Cardiovascular Risk Reduction'],

        metaTitle: 'Post-Ozempic Recovery: TDEE & Metabolism Guide | TDEE Wellness',
        metaDescription: 'Struggling after stopping Ozempic? Learn how to rebuild your metabolism, prevent weight rebound, and maintain progress with our adaptive TDEE tracking system.',
        keywords: [
            'ozempic weight rebound',
            'after stopping ozempic',
            'ozempic withdrawal',
            'ozempic weight gain after stopping',
            'ozempic metabolism recovery',
            'post ozempic diet',
            'semaglutide rebound weight',
            'ozempic tdee calculator',
        ],

        clinicalData: {
            avgWeightLoss: '14.9%',
            trialName: 'STEP 1 Trial',
            trialDuration: '68 weeks',
            reboundRate: '66.7%',
            leanMassLoss: '20-40%',
        },

        introduction: `Ozempic (semaglutide) is a GLP-1 receptor agonist originally developed for type 2 diabetes. While highly effective for weight management, discontinuation often leads to significant metabolic challenges. Clinical data from the STEP 1 extension study shows that patients regain approximately two-thirds of lost weight within one year of stopping treatment.`,

        challenges: [
            {
                title: 'Appetite Signal Rebound',
                description: 'Without GLP-1 suppression, hunger hormones like ghrelin surge dramatically. Many users report experiencing stronger appetite than before starting treatment.'
            },
            {
                title: 'Metabolic Adaptation',
                description: 'After significant weight loss, your body operates on fewer calories. Studies show metabolism can remain suppressed for months after stopping medication.'
            },
            {
                title: 'Lean Mass Deficit',
                description: 'Research indicates 20-40% of weight lost on GLP-1 drugs comes from muscle mass, not just fat. This further reduces your resting metabolic rate.'
            },
            {
                title: 'Psychological Adjustment',
                description: 'Transitioning from medication-assisted appetite control to natural hunger signals requires building new habits and coping strategies.'
            }
        ],

        faqs: [
            {
                question: 'How much weight will I regain after stopping Ozempic?',
                answer: 'According to the STEP 1 extension study, patients regained an average of 66.7% of lost weight within 52 weeks of discontinuation. However, with proper metabolic tracking and reverse dieting, this rate can be significantly reduced.'
            },
            {
                question: 'How long does it take for metabolism to recover after Ozempic?',
                answer: 'Metabolic recovery varies by individual but typically takes 3-6 months. Factors include how long you were on the medication, total weight lost, and whether you maintained muscle mass during treatment.'
            },
            {
                question: 'Should I reduce calories immediately after stopping?',
                answer: 'No. Aggressive calorie restriction after stopping GLP-1 medication can further damage your metabolism. We recommend a gradual reverse dieting approach, slowly increasing calories while monitoring weight trends.'
            },
            {
                question: 'How much protein should I eat after stopping Ozempic?',
                answer: 'Higher protein intake (1.6-2.0g per kg of body weight) is recommended to support muscle recovery and satiety. Protein helps preserve lean mass while your appetite signals normalize.'
            },
            {
                question: 'Can I prevent weight rebound after Ozempic?',
                answer: 'Complete prevention may not be realistic, but strategic approaches can minimize rebound: gradual calorie increases, high protein intake, resistance training, and consistent tracking of your actual TDEE.'
            }
        ],

        relatedSearches: [
            'ozempic rebound prevention',
            'how to maintain weight after ozempic',
            'ozempic to natural weight maintenance',
            'semaglutide discontinuation',
            'ozempic muscle loss recovery',
        ]
    },

    wegovy: {
        brandName: 'Wegovy',
        genericName: 'Semaglutide',
        manufacturer: 'Novo Nordisk',
        approvedYear: 2021,
        approvedFor: ['Chronic Weight Management'],

        metaTitle: 'Post-Wegovy Recovery: Prevent Weight Rebound | TDEE Wellness',
        metaDescription: 'Stopped taking Wegovy? Our adaptive TDEE tracker helps you maintain weight loss and rebuild your natural metabolism after semaglutide treatment.',
        keywords: [
            'wegovy weight rebound',
            'after stopping wegovy',
            'wegovy discontinuation',
            'wegovy weight gain',
            'post wegovy metabolism',
            'wegovy withdrawal symptoms',
            'semaglutide weight regain',
            'wegovy maintenance calories',
        ],

        clinicalData: {
            avgWeightLoss: '16.9%',
            trialName: 'STEP 1 Trial',
            trialDuration: '68 weeks',
            reboundRate: '66.7%',
            leanMassLoss: '25-39%',
        },

        introduction: `Wegovy is the first FDA-approved semaglutide dose (2.4mg weekly) specifically for chronic weight management. While it produces impressive results—averaging nearly 17% body weight loss—the challenge begins when treatment ends. The same metabolic adaptations that made weight loss possible now work against you.`,

        challenges: [
            {
                title: 'Higher Baseline Expectations',
                description: 'Wegovy users often experience greater initial weight loss than Ozempic, which means more metabolic adaptation to address post-treatment.'
            },
            {
                title: 'Rapid Appetite Return',
                description: 'The higher dose of semaglutide provides stronger appetite suppression. When discontinued, the rebound in hunger signals can feel overwhelming.'
            },
            {
                title: 'Social & Emotional Factors',
                description: 'Many users develop psychological dependence on the medication for portion control. Learning to trust natural fullness cues takes practice.'
            },
            {
                title: 'Cost-Driven Discontinuation',
                description: 'Many users stop Wegovy due to cost or insurance changes rather than medical decisions, often without adequate preparation for the transition.'
            }
        ],

        faqs: [
            {
                question: 'Is Wegovy the same as Ozempic?',
                answer: 'Both contain semaglutide, but Wegovy is dosed at 2.4mg weekly for weight management, while Ozempic maxes at 2.0mg and is approved for diabetes. The recovery considerations are similar, though Wegovy users may face stronger appetite rebound.'
            },
            {
                question: 'How do I transition off Wegovy safely?',
                answer: 'Work with your healthcare provider to taper dosage if possible. Simultaneously, establish consistent tracking habits, increase protein intake, and begin a structured reverse dieting protocol before fully stopping.'
            },
            {
                question: 'What should my calorie target be after Wegovy?',
                answer: 'Your actual TDEE after weight loss is likely 15-25% lower than formulas predict. Our adaptive calculator uses your real data to find your true maintenance level, avoiding the guesswork that leads to rebound.'
            },
            {
                question: 'Will I be hungry all the time after stopping Wegovy?',
                answer: 'Initially, yes. Hunger signals typically normalize over 4-8 weeks. High protein intake, fiber-rich foods, and regular meal timing can help manage appetite during this transition period.'
            },
            {
                question: 'Should I start Wegovy again if I regain weight?',
                answer: 'This is a personal medical decision. Some patients cycle on and off, while others focus on building sustainable habits. Our tool helps either approach by tracking your metabolic response accurately.'
            }
        ],

        relatedSearches: [
            'wegovy before and after',
            'wegovy vs ozempic weight loss',
            'wegovy rebound stories',
            'how to stop wegovy',
            'wegovy metabolism effects',
        ]
    },

    mounjaro: {
        brandName: 'Mounjaro',
        genericName: 'Tirzepatide',
        manufacturer: 'Eli Lilly',
        approvedYear: 2022,
        approvedFor: ['Type 2 Diabetes'],

        metaTitle: 'Post-Mounjaro Recovery: Tirzepatide Weight Maintenance | TDEE Wellness',
        metaDescription: 'Stopping Mounjaro after weight loss? Learn evidence-based strategies to maintain results and prevent the typical 50%+ weight rebound with our TDEE tracker.',
        keywords: [
            'mounjaro weight rebound',
            'after stopping mounjaro',
            'tirzepatide discontinuation',
            'mounjaro weight gain after stopping',
            'post mounjaro diet plan',
            'mounjaro metabolism',
            'tirzepatide rebound weight',
            'mounjaro to maintenance',
        ],

        clinicalData: {
            avgWeightLoss: '22.5%',
            trialName: 'SURMOUNT-1 Trial',
            trialDuration: '72 weeks',
            reboundRate: '50%+',
            leanMassLoss: '20-35%',
        },

        introduction: `Mounjaro (tirzepatide) represents a new class of dual GIP/GLP-1 receptor agonist, producing the largest weight loss results seen in clinical trials—up to 22.5% body weight. However, this powerful effect comes with equally significant metabolic adaptations that require careful management after discontinuation.`,

        challenges: [
            {
                title: 'Dual Hormone System Reset',
                description: 'Unlike single-action GLP-1 drugs, Mounjaro affects both GIP and GLP-1 pathways. Discontinuation requires your body to readjust two interconnected hormone systems.'
            },
            {
                title: 'Greater Weight Loss = Greater Adaptation',
                description: 'Users who lose 20%+ of body weight experience proportionally larger metabolic adaptations. Your body fights harder to return to its previous weight.'
            },
            {
                title: 'Muscle Mass Concerns',
                description: 'Despite Mounjaro showing slightly better muscle preservation than semaglutide, significant lean mass loss still occurs during rapid weight reduction.'
            },
            {
                title: 'Limited Long-term Data',
                description: 'As the newest medication in this class, there is less published data on long-term discontinuation outcomes compared to semaglutide.'
            }
        ],

        faqs: [
            {
                question: 'Is weight rebound worse with Mounjaro?',
                answer: 'Early data suggests rebound rates may be similar to or slightly better than semaglutide-based drugs. However, because Mounjaro produces greater initial weight loss, the absolute amount of potential regain is higher.'
            },
            {
                question: 'How is Mounjaro different from Ozempic for recovery?',
                answer: 'Mounjaro targets both GIP and GLP-1 receptors, while Ozempic only targets GLP-1. This dual action may affect how your body readjusts after stopping, though both require similar recovery strategies.'
            },
            {
                question: 'What is my real TDEE after losing 20%+ on Mounjaro?',
                answer: 'Your actual energy needs are significantly lower than standard formulas predict. Our adaptive algorithm uses your real weight and intake data to calculate your true maintenance calories—often 300-500 kcal below generic estimates.'
            },
            {
                question: 'How long should I wait before increasing calories?',
                answer: 'We recommend weekly check-ins with small adjustments (50-100 kcal). If weight increases more than 0.5% weekly, hold steady. If stable or decreasing, continue gradual increases until you find true maintenance.'
            },
            {
                question: 'Can I switch from Mounjaro to Wegovy to taper?',
                answer: 'Some providers use this approach, though it is not FDA-recommended. Always consult your healthcare provider about transition strategies. Our tool tracks your response regardless of the approach taken.'
            }
        ],

        relatedSearches: [
            'mounjaro vs ozempic results',
            'tirzepatide weight maintenance',
            'mounjaro muscle loss',
            'mounjaro rebound stories reddit',
            'how to keep weight off after mounjaro',
        ]
    },

    zepbound: {
        brandName: 'Zepbound',
        genericName: 'Tirzepatide',
        manufacturer: 'Eli Lilly',
        approvedYear: 2023,
        approvedFor: ['Chronic Weight Management'],

        metaTitle: 'Post-Zepbound Recovery: Maintain Your Weight Loss | TDEE Wellness',
        metaDescription: 'Planning to stop Zepbound? Our evidence-based TDEE tracker helps you transition off tirzepatide while minimizing weight regain through adaptive metabolism tracking.',
        keywords: [
            'zepbound weight rebound',
            'after stopping zepbound',
            'zepbound discontinuation',
            'zepbound weight gain',
            'post zepbound maintenance',
            'tirzepatide weight management',
            'zepbound metabolism',
            'zepbound vs wegovy recovery',
        ],

        clinicalData: {
            avgWeightLoss: '22.5%',
            trialName: 'SURMOUNT-1 Trial',
            trialDuration: '72 weeks',
            reboundRate: '50%+',
            leanMassLoss: '20-35%',
        },

        introduction: `Zepbound is tirzepatide approved specifically for chronic weight management, using the same powerful dual GIP/GLP-1 mechanism as Mounjaro. With FDA approval in late 2023, it represents the most effective weight loss medication currently available—and requires equally comprehensive post-treatment planning.`,

        challenges: [
            {
                title: 'Highest Efficacy = Highest Stakes',
                description: 'As the most effective weight loss medication available, Zepbound users have the most to lose (and potentially regain) when discontinuing.'
            },
            {
                title: 'Insurance & Cost Barriers',
                description: 'Unlike Mounjaro (diabetes-approved), Zepbound may face more insurance restrictions, leading to forced discontinuation without adequate preparation time.'
            },
            {
                title: 'Body Composition Changes',
                description: 'Rapid weight loss at this magnitude significantly alters body composition. Rebuilding metabolic rate requires strategic nutrition and exercise approaches.'
            },
            {
                title: 'Limited Real-World Data',
                description: 'As the newest medication in this class, real-world discontinuation experiences are still emerging. Our tool helps track your individual response.'
            }
        ],

        faqs: [
            {
                question: 'Is Zepbound the same as Mounjaro?',
                answer: 'Yes, both contain tirzepatide. Mounjaro is approved for type 2 diabetes, while Zepbound is specifically approved for chronic weight management. The dosing and medication are identical.'
            },
            {
                question: 'What is the best diet after stopping Zepbound?',
                answer: 'Focus on high protein (2.0g/kg body weight), adequate fiber, and consistent meal timing. Use our adaptive tracker to find your actual calorie needs rather than following generic recommendations.'
            },
            {
                question: 'How fast will I regain weight after Zepbound?',
                answer: 'Without intervention, studies suggest 50%+ of weight can return within 12-18 months. However, strategic reverse dieting and consistent tracking can significantly slow or limit this rebound.'
            },
            {
                question: 'Should I exercise more after stopping Zepbound?',
                answer: 'Resistance training is particularly important to rebuild or preserve muscle mass. This helps increase your resting metabolic rate. Aim for 2-3 strength sessions weekly combined with moderate cardio.'
            },
            {
                question: 'How do I know my real maintenance calories?',
                answer: 'Generic formulas underestimate your needs after major weight loss. Our TDEE tracker uses your actual weight trends and intake data to calculate your true maintenance—typically 15-25% lower than predicted.'
            }
        ],

        relatedSearches: [
            'zepbound vs wegovy',
            'tirzepatide for weight loss',
            'zepbound reviews weight loss',
            'zepbound maintenance phase',
            'zepbound side effects after stopping',
        ]
    }
};

// 获取药物内容
export function getDrugContent(drug: GLP1Drug): DrugContent {
    return DRUG_CONTENT[drug];
}

// 为 FAQ 生成结构化数据 (JSON-LD)
export function generateFAQSchema(drug: GLP1Drug): object {
    const content = DRUG_CONTENT[drug];

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": content.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// 获取所有药物用于交叉链接
export function getOtherDrugs(currentDrug: GLP1Drug): GLP1Drug[] {
    const allDrugs: GLP1Drug[] = ['ozempic', 'wegovy', 'mounjaro', 'zepbound'];
    return allDrugs.filter(d => d !== currentDrug);
}
