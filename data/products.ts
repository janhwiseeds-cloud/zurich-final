export interface Product {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    category: "Pesticide" | "Fertilizer" | "Growth Promoter";
    description: string;
    howToUse: string[];
    usageDetails: string;
    features: string[];
    image: string;
}

export const products: Product[] = [
    {
        id: "1",
        slug: "master-blaster-505",
        name: "Master Blaster 505",
        shortDescription: "Dual action insecticide for effective pest control.",
        category: "Pesticide",
        description:
            "Master Blaster 505 contains Chlorpyriphos 50% + Cypermethrin 5% EC, providing quick knockdown and long-lasting control against sucking and chewing pests in multiple crops.",
        howToUse: [
            "Mix 2 ml per liter of water.",
            "Spray uniformly on crop foliage.",
            "Apply during early infestation stage."
        ],
        usageDetails: "400–500 ml per acre",
        features: [
            "Broad-spectrum insect control",
            "Quick knockdown effect",
            "Long residual action"
        ],
        image: "/master.jpeg"
    },

    {
        id: "2",
        slug: "protex-super",
        name: "Protex Super",
        shortDescription: "Powerful insecticide for resistant pests.",
        category: "Pesticide",
        description:
            "Protex Super is a strong insecticide formulation designed to control major crop pests and help manage resistance through effective contact and stomach action.",
        howToUse: [
            "Use 1.5–2 ml per liter of water.",
            "Ensure thorough spray coverage."
        ],
        usageDetails: "300–400 ml per acre",
        features: [
            "Effective on resistant pests",
            "Fast action",
            "Reliable performance"
        ],
        image: "/protex.jpeg"
    },

    {
        id: "3",
        slug: "spot-10",
        name: "Spot-10",
        shortDescription: "Synthetic pyrethroid insecticide for fast knockdown.",
        category: "Pesticide",
        description:
            "Spot-10 (Alphamethrin 10% EC) is a contact insecticide providing rapid knockdown against a wide range of insect pests in field and vegetable crops.",
        howToUse: [
            "Mix 1 ml per liter of water.",
            "Spray evenly on affected crop parts."
        ],
        usageDetails: "200–250 ml per acre",
        features: [
            "Quick knockdown",
            "Low dose requirement",
            "Effective against sucking pests"
        ],
        image: "/spot.jpeg"
    },

    {
        id: "4",
        slug: "zuri-power",
        name: "Zuri Power",
        shortDescription: "Multi-nutrient plant growth enhancer.",
        category: "Growth Promoter",
        description:
            "Zuri Power enhances crop vigor, improves nutrient absorption, and supports healthy plant growth across all stages.",
        howToUse: [
            "Mix 2–3 ml per liter of water.",
            "Apply as foliar spray."
        ],
        usageDetails: "500 ml per acre",
        features: [
            "Improves crop vitality",
            "Enhances nutrient uptake",
            "Supports higher yield"
        ],
        image: "/zuripower.jpeg"
    },

    {
        id: "5",
        slug: "rain-drop",
        name: "Rain Drop",
        shortDescription: "Advanced spray adjuvant and spreader.",
        category: "Growth Promoter",
        description:
            "Rain Drop improves spray coverage, adhesion, and penetration of agrochemicals, reducing wash-off and improving efficacy.",
        howToUse: [
            "Add 0.3 ml per liter of spray solution.",
            "Mix with insecticides, fungicides, or herbicides."
        ],
        usageDetails: "30 ml per acre",
        features: [
            "Better spray spread",
            "Rainfastness improvement",
            "Enhanced chemical efficiency"
        ],
        image: "/raindrop.jpeg"
    },

    {
        id: "6",
        slug: "vinash-pretilachlor",
        name: "Vinash",
        shortDescription: "Selective pre-emergence herbicide for paddy.",
        category: "Pesticide",
        description:
            "Vinash (Pretilachlor 50% EC) controls major grassy and broad-leaf weeds in transplanted rice during early crop stages.",
        howToUse: [
            "Apply within 3–5 days after transplanting.",
            "Maintain thin water layer in field."
        ],
        usageDetails: "500–600 ml per acre",
        features: [
            "Effective weed control in rice",
            "Pre-emergence action",
            "Improves crop establishment"
        ],
        image: "/vinash.jpeg"
    },

    {
        id: "7",
        slug: "all-clean-paraquat",
        name: "All Clean",
        shortDescription: "Non-selective contact herbicide.",
        category: "Pesticide",
        description:
            "All Clean (Paraquat Dichloride 24% SL) is a fast-acting herbicide used for weed control in non-crop areas and orchards.",
        howToUse: [
            "Mix 4–5 ml per liter of water.",
            "Avoid spray drift on crops."
        ],
        usageDetails: "1–1.25 liter per acre",
        features: [
            "Quick burn-down effect",
            "Controls broad-leaf & grassy weeds",
            "Rainfast action"
        ],
        image: "/allclean.jpeg"
    },

    {
        id: "8",
        slug: "mitinash",
        name: "Mitinash",
        shortDescription: "Strong bio-miticide for mite control.",
        category: "Pesticide",
        description:
            "Mitinash is a bio-based miticide that effectively controls red spider mites while being safer for beneficial insects.",
        howToUse: [
            "Mix 2 ml per liter of water.",
            "Spray on leaf undersides."
        ],
        usageDetails: "300–400 ml per acre",
        features: [
            "Effective mite control",
            "Low residue",
            "Eco-friendly formulation"
        ],
        image: "/mitinash.jpeg"
    },

    {
        id: "9",
        slug: "larvinash",
        name: "Larvinash",
        shortDescription: "Targeted larva control bio-larvicide.",
        category: "Pesticide",
        description:
            "Larvinash is a biological larvicide that targets early larval stages of insects, preventing future infestations.",
        howToUse: [
            "Use 1.5–2 ml per liter of water.",
            "Apply at early larval stage."
        ],
        usageDetails: "250–300 ml per acre",
        features: [
            "Effective larval control",
            "Reduces resistance risk",
            "Safe to crops"
        ],
        image: "/larvinash.jpeg"
    }
];
