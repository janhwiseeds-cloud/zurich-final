export interface Product {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
  category: string;
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
        image: "/masterbg.jpeg"
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
        image: "/protexbg.jpeg"
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
        image: "/spotbg.jpeg"
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
        image: "/zuripowerbg.jpeg"
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
        image: "/raindropbg.jpeg"
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
        image: "/vinashbg.jpeg"
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
        image: "/allcleanbg.jpeg"
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
    },
    {
        id: "10",
        slug: "ratnil",
        name: "Ratnil",
        shortDescription: "Powerful rodenticide for effective rat control.",
        category: "Pesticide",
        description:
            "Ratnil contains Zinc Phosphide 80% WP, specially formulated to control rats and rodents in agricultural fields, godowns, and storage areas.",
        howToUse: [
            "Prepare bait as per recommendation.",
            "Place bait near rat burrows and pathways.",
            "Avoid direct handling; use gloves."
        ],
        usageDetails: "10–20 g bait per location",
        features: [
            "Highly effective rodent control",
            "Fast action",
            "Suitable for field and storage use"
        ],
        image: "/ratnil.jpeg"
    },
    {
        id: "11",
        slug: "sakha",
        name: "Sakha",
        shortDescription: "Selective systemic herbicide for weed control in paddy.",
        category: "Pesticide",
        description:
            "Sakha contains Pyrazosulfuron Ethyl 10% WP, a selective systemic herbicide effective against broadleaf weeds and sedges in transplanted rice.",
        howToUse: [
            "Mix recommended dose in water.",
            "Spray uniformly on moist soil.",
            "Apply within 3–5 days of transplanting."
        ],
        usageDetails: "40 g per acre",
        features: [
            "Selective weed control",
            "Safe for paddy crop",
            "Long-lasting effect"
        ],
        image: "/sakha.jpeg"
    },
    {
        id: "12",
        slug: "action-25",
        name: "Action-25",
        shortDescription: "Systemic insecticide for sucking pests.",
        category: "Pesticide",
        description:
            "Action-25 contains Thiamethoxam 25% WG, providing effective control of aphids, jassids, thrips, and whiteflies in various crops.",
        howToUse: [
            "Dissolve in water as per dose.",
            "Spray evenly on crop foliage.",
            "Use at early pest infestation."
        ],
        usageDetails: "80–100 g per acre",
        features: [
            "Systemic action",
            "Quick pest control",
            "Low dose requirement"
        ],
        image: "/action-25.jpeg"
    },
    {
        id: "13",
        slug: "chloro-max",
        name: "Chloro Max",
        shortDescription: "Broad-spectrum insecticide for soil and foliar pests.",
        category: "Pesticide",
        description:
            "Chloro Max contains Chlorpyriphos 10% GR, widely used for termite, root borer, and soil insect control in crops.",
        howToUse: [
            "Apply granules uniformly in soil.",
            "Irrigate field after application.",
            "Do not mix with water."
        ],
        usageDetails: "10 kg per acre",
        features: [
            "Effective soil insect control",
            "Long residual action",
            "Easy granular application"
        ],
        image: "/chloro-max.jpeg"
    },
    {
        id: "14",
        slug: "zaterra",
        name: "Zaterra",
        shortDescription: "Granular insecticide for effective control of rice stem borer and leaf folder.",
        category: "Pesticide",
        description:
            "Zaterra contains Chlorantraniliprole 0.4% w/w GR, a modern anthranilic diamide insecticide that provides long-lasting control of stem borer, leaf folder, and other lepidopteran pests in paddy. It acts by causing muscle paralysis in insects, leading to quick feeding cessation and extended protection.",
        howToUse: [
            "Apply granules uniformly in standing water or moist soil.",
            "Ensure proper water level in the field at the time of application.",
            "Do not mix granules with water for spraying."
        ],
        usageDetails: "4 kg per acre",
        features: [
            "Highly effective against stem borer and leaf folder",
            "Long residual control",
            "Low dose granular formulation",
            "Safe to beneficial insects when used as recommended"
        ],
        image: "/zaterra.jpeg"
    },
    {
        id: "15",
        slug: "tika",
        name: "Tika",
        shortDescription: "Systemic and contact fungicide for disease control.",
        category: "Pesticide",
        description:
            "Tika contains Carbendazim 12% + Mancozeb 63% WP, offering dual protection against fungal diseases in multiple crops.",
        howToUse: [
            "Mix required quantity in water.",
            "Spray on affected crop parts.",
            "Repeat at 10–12 day interval if needed."
        ],
        usageDetails: "500–600 g per acre",
        features: [
            "Systemic + contact action",
            "Broad-spectrum disease control",
            "Improves crop vigor"
        ],
        image: "/tika.jpeg"
    },
    {
        id: "16",
        slug: "cobra",
        name: "Cobra",
        shortDescription: "Contact insecticide for fast pest knockdown.",
        category: "Pesticide",
        description:
            "Cobra contains Cypermethrin 0.25% DP, effective against caterpillars, borers, and other chewing insects.",
        howToUse: [
            "Dust uniformly on crop.",
            "Apply during calm weather.",
            "Avoid inhalation."
        ],
        usageDetails: "10–12 kg per acre",
        features: [
            "Quick knockdown action",
            "Easy dust formulation",
            "Cost-effective solution"
        ],
        image: "/cobra.jpeg"
    },
    {
        id: "17",
        slug: "tiger-3g",
        name: "Tiger 3G",
        shortDescription: "Granular insecticide for stem borer control.",
        category: "Pesticide",
        description:
            "Tiger 3G contains Carbofuran 3% CG, effective for controlling stem borers and soil insects in crops like paddy and maize.",
        howToUse: [
            "Apply granules in standing water or soil.",
            "Use at early crop stage.",
            "Follow safety precautions."
        ],
        usageDetails: "10–15 kg per acre",
        features: [
            "Strong systemic action",
            "Effective soil pest control",
            "Long duration protection"
        ],
        image: "/tiger-3g.jpeg"
    }, {
        id: "19",
        slug: "soldier-24d-amine",
        name: "Soldier",
        shortDescription: "Selective systemic herbicide for broad-leaf weed control.",
        category: "Pesticide",
        description:
            "Soldier (2,4-D Amine Salt 58% SL) is a selective post-emergence herbicide effective against broad-leaf weeds in cereal crops. It works by disrupting weed growth hormones, leading to quick wilting and death.",
        howToUse: [
            "Mix 2–3 ml per liter of water.",
            "Spray uniformly on actively growing weeds.",
            "Avoid spray drift on nearby sensitive crops."
        ],
        usageDetails: "400–500 ml per acre",
        features: [
            "Selective action on broad-leaf weeds",
            "Systemic herbicide with quick results",
            "Safe for cereal crops when used as directed"
        ],
        image: "/soldier.jpeg"
    }
    ,
  {
    id: "20",
    slug: "massage-70-ws",
    name: "Massage 70 WS",
    shortDescription: "Systemic insecticide for seed treatment protection.",
    category: "Insecticide",
    description:
      "Massage 70 WS contains Imidacloprid 70% WS, a systemic insecticide used for seed treatment to protect crops from sucking pests during early growth stages.",
    howToUse: [
      "Mix recommended quantity with seeds before sowing.",
      "Coat seeds uniformly and allow them to dry in shade.",
      "Use treated seeds within recommended time."
    ],
    usageDetails: "5–10 g per kg seed",
    features: [
      "Effective seed treatment insecticide",
      "Provides early-stage pest protection",
      "Systemic action with long-lasting control"
    ],
    image: "/massage.jpeg"
  },
  {
    id: "21",
    slug: "soldier-24d-amine",
    name: "Soldier",
    shortDescription: "Selective herbicide for broad-leaf weed control.",
    category: "Herbicide",
    description:
      "Soldier contains 2,4-D Amine Salt 58% SL, a selective systemic herbicide used for post-emergence control of broad-leaf weeds in cereal and field crops.",
    howToUse: [
      "Mix with water as recommended.",
      "Spray uniformly on actively growing weeds.",
      "Avoid drift to sensitive crops."
    ],
    usageDetails: "400–500 ml per acre",
    features: [
      "Selective action on broad-leaf weeds",
      "Systemic herbicide with quick control",
      "Suitable for cereal crops"
    ],
    image: "/soldier2.jpeg"
  },

  {
    id: "22",
    slug: "abarich-abamectin",
    name: "Abarich",
    shortDescription: "Powerful insecticide and acaricide for mite and pest control.",
    category: "Insecticide",
    description:
      "Abarich contains Abamectin 1.9% EC, effective against mites, leaf miners, thrips, and other sucking pests through contact and stomach action.",
    howToUse: [
      "Dilute recommended quantity in water.",
      "Spray thoroughly on both sides of leaves.",
      "Apply during early pest infestation."
    ],
    usageDetails: "150–250 ml per acre",
    features: [
      "Controls mites and sucking pests",
      "Translaminar movement for better protection",
      "Fast knockdown action"
    ],
    image: "/abarich.jpeg"
  },

  {
    id: "23",
    slug: "azo-star",
    name: "Azo-Star",
    shortDescription: "Broad-spectrum systemic fungicide for disease control.",
    category: "Fungicide",
    description:
      "Azo-Star contains Azoxystrobin 18.2% + Difenoconazole 11.4% SC, a dual-action fungicide used to control fungal diseases in various crops.",
    howToUse: [
      "Mix recommended dose in water.",
      "Spray evenly on crop foliage.",
      "Repeat based on disease severity."
    ],
    usageDetails: "300–400 ml per acre",
    features: [
      "Broad-spectrum fungal protection",
      "Preventive and curative action",
      "Improves crop health"
    ],
    image: "/azo-star.jpeg"
  },

  {
    id: "24",
    slug: "delta-guard",
    name: "Delta Guard",
    shortDescription: "Fast-acting insecticide for chewing and sucking pests.",
    category: "Insecticide",
    description:
      "Delta Guard contains Deltamethrin 2.8% EC, a pyrethroid insecticide effective against a wide range of crop pests with quick knockdown action.",
    howToUse: [
      "Dilute with clean water.",
      "Spray uniformly on affected crops.",
      "Use during early pest attack."
    ],
    usageDetails: "200–300 ml per acre",
    features: [
      "Quick knockdown effect",
      "Broad-spectrum pest control",
      "Effective at low dosage"
    ],
    image: "/delta-guard.jpeg"
  },

  {
    id: "25",
    slug: "richstar-bifenthrin",
    name: "RichStar",
    shortDescription: "Broad-spectrum insecticide for effective pest management.",
    category: "Insecticide",
    description:
      "RichStar contains Bifenthrin 10% EC, a synthetic pyrethroid insecticide used to control sucking and chewing pests in multiple crops.",
    howToUse: [
      "Mix in recommended quantity with water.",
      "Spray evenly across crop canopy.",
      "Apply during active pest infestation."
    ],
    usageDetails: "250–300 ml per acre",
    features: [
      "Long residual control",
      "Controls multiple pests",
      "Fast contact action"
    ],
    image: "/richstar.jpeg"
  },

  {
    id: "26",
    slug: "hexagon",
    name: "Hexagon",
    shortDescription: "Systemic fungicide for fungal disease management.",
    category: "Fungicide",
    description:
      "Hexagon contains Hexaconazole 5% SC, a systemic fungicide effective against sheath blight, powdery mildew, rust, and other fungal diseases.",
    howToUse: [
      "Mix recommended dose in water.",
      "Spray evenly on infected crops.",
      "Repeat application if required."
    ],
    usageDetails: "200–300 ml per acre",
    features: [
      "Systemic disease protection",
      "Effective against major fungal diseases",
      "Long-lasting action"
    ],
    image: "/hexagon.jpeg"
  },

  {
    id: "27",
    slug: "gibbar",
    name: "Gibbar",
    shortDescription: "Plant growth regulator for improved crop growth.",
    category: "Plant Growth Regulator",
    description:
      "Gibbar contains Gibberellic Acid 0.001% L, a plant growth regulator used to enhance plant growth, flowering, and crop yield.",
    howToUse: [
      "Dilute with water before spraying.",
      "Spray during active growth stage.",
      "Avoid over-application."
    ],
    usageDetails: "200–250 ml per acre",
    features: [
      "Promotes plant growth",
      "Enhances flowering and fruit setting",
      "Improves crop vigor"
    ],
    image: "/gibbar.jpeg"
  },

  {
    id: "28",
    slug: "roxyfen",
    name: "Roxyfen",
    shortDescription: "Insecticide for effective control of whiteflies and sucking pests.",
    category: "Insecticide",
    description:
      "Roxyfen contains Pyriproxyfen 10% EC, an insect growth regulator effective against whiteflies, aphids, and other sucking pests.",
    howToUse: [
      "Mix recommended quantity with water.",
      "Spray on affected crop area.",
      "Use during early pest stages."
    ],
    usageDetails: "300–400 ml per acre",
    features: [
      "Controls immature pest stages",
      "Effective insect growth regulator",
      "Long residual activity"
    ],
    image: "/roxyfen.jpeg"
  },

  {
    id: "29",
    slug: "perfect-thiamethoxam",
    name: "Perfect",
    shortDescription: "Systemic insecticide for sucking pest management.",
    category: "Insecticide",
    description:
      "Perfect contains Thiamethoxam 30% FS, a systemic insecticide used mainly for seed treatment and protection against sucking pests.",
    howToUse: [
      "Treat seeds uniformly before sowing.",
      "Allow treated seeds to dry before use.",
      "Follow crop-specific dosage recommendations."
    ],
    usageDetails: "8–10 ml per kg seed",
    features: [
      "Excellent seed treatment solution",
      "Long-lasting systemic protection",
      "Controls sucking pests effectively"
    ],
    image: "/perfect.jpeg"
  },

  {
    id: "30",
    slug: "ema-nova",
    name: "EMA NOVA",
    shortDescription: "Advanced insecticide for caterpillar and larval pest control.",
    category: "Insecticide",
    description:
      "EMA NOVA contains Novaluron 5.25% + Emamectin Benzoate 0.9% SC, providing dual-action control against caterpillars and lepidopteran pests.",
    howToUse: [
      "Dilute in recommended amount of water.",
      "Spray thoroughly on crop foliage.",
      "Apply during early larval stage."
    ],
    usageDetails: "200–250 ml per acre",
    features: [
      "Dual-action insecticide formula",
      "Effective against caterpillars",
      "Long residual control"
    ],
    image: "/ema-nova.jpeg"
  },

  {
    id: "31",
    slug: "klaasen",
    name: "Klaasen",
    shortDescription: "Selective herbicide for weed management in crops.",
    category: "Herbicide",
    description:
      "Klaasen contains Mesotrione 2.27% + Atrazine 22.7% SC, a selective herbicide used for pre and post-emergence weed control.",
    howToUse: [
      "Mix with recommended quantity of water.",
      "Spray evenly on field surface.",
      "Apply at early weed growth stage."
    ],
    usageDetails: "800–1000 ml per acre",
    features: [
      "Controls broadleaf and grassy weeds",
      "Selective herbicide action",
      "Suitable for maize crops"
    ],
    image: "/klaasen.jpeg"
  }



];
