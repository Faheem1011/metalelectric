export interface ProductSpecification {
  [key: string]: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: 'LiFePO4 Solar Batteries' | 'Motorcycle Batteries' | 'Battery Accessories';
  subcategory: string;
  price: number;
  oldPrice?: number;
  description: string;
  badge?: string;
  rating?: number;
  reviewsCount?: number;
  specifications: ProductSpecification;
  features: string[];
  images: string[];
  inStock: boolean;
  recommendedFor?: string;
}

export const CATEGORIES = [
  'All Products',
  'LiFePO4 Solar Batteries',
  'Motorcycle Batteries',
  'Battery Accessories'
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'aa-51-100',
    sku: 'aa-51-100',
    name: 'Alpha Ampere 51.2V 100Ah Lithium (LiFePO4) Battery',
    slug: 'alpha-ampere-51-2v-100ah-lithium-battery',
    category: 'LiFePO4 Solar Batteries',
    subcategory: 'UPS & Solar Batteries',
    price: 229000,
    oldPrice: 245000,
    badge: 'Flagship 5.12kWh • Smart Bluetooth',
    rating: 4.9,
    reviewsCount: 48,
    description: 'Model: Alpha51.2ML100. High-capacity 5.12kWh Lithium Iron Phosphate (LiFePO4) battery engineered for 48V residential solar inverters, commercial UPS backup, and heavy load off-grid storage. Features real-time Bluetooth telemetry and Grade-A prismatic cells with 15-year life design.',
    specifications: {
      'Nominal Voltage': '51.2 V',
      'Capacity': '100 Ah (5.12 kWh)',
      'Chemistry': 'LiFePO4 (Grade-A Prismatic Cells)',
      'Max Discharge Rate': '1C (100A continuous)',
      'Recommended Charge Current': '50 A',
      'Communication': 'Smart Bluetooth App + RS485 / CAN / WiFi',
      'Cycle Life': '8,000+ Cycles @ 0.5C 80% DOD',
      'Expected Lifespan': '15+ Years',
      'Operating Temp': '-10°C to 55°C',
      'Charge Cut-off': '58.4 V',
      'Discharge Cut-off': '43.2 V',
      'Weight': '42.5 kg',
      'Dimensions': '482 × 440 × 177 mm'
    },
    features: [
      'Built-in Smart BMS with active cell balancing',
      'Bluetooth Mobile App live voltage & state-of-charge telemetry',
      'Compatible with leading Pakistani 5kW & 6kW hybrid inverters (Inverex, Crown, SolarMax, Nitrox)',
      'Non-toxic, ultra-safe LiFePO4 chemistry with zero thermal runaway risk',
      '15-year design lifespan with 8000+ deep discharge cycles'
    ],
    images: [
      '/images/products/aa-51-100-0.png',
      '/images/products/aa-51-100-1.png',
      '/images/products/aa-51-100-2.png'
    ],
    inStock: true,
    recommendedFor: '5kW / 6kW Hybrid Solar Inverters & Whole-Home UPS'
  },
  {
    id: 'aa-24-100',
    sku: 'aa-24-100',
    name: 'Alpha Ampere 24V 100Ah Lithium (LiFePO4) Battery',
    slug: 'alpha-ampere-24v-100ah-lithium-battery',
    category: 'LiFePO4 Solar Batteries',
    subcategory: 'UPS & Solar Batteries',
    price: 139000,
    oldPrice: 149000,
    badge: 'Popular 2.56kWh • 3D Showcase Featured',
    rating: 5.0,
    reviewsCount: 89,
    description: 'Model: Alpha25.6ML100. Premier 25.6V 100Ah (2.56kWh) LiFePO4 power pack equipped with smart Bluetooth connectivity, heavy-duty laser-welded copper terminals, and robust BMS protection. Designed to seamlessly upgrade 24V solar inverters and home UPS systems with zero maintenance.',
    specifications: {
      'Nominal Voltage': '25.6 V',
      'Capacity': '100 Ah (2.56 kWh)',
      'Chemistry': 'LiFePO4 (Lithium Iron Phosphate)',
      'Max Discharge Rate': '1C (100A Continuous / 200A Peak)',
      'Recommended Charge Current': '50 A',
      'Communication': 'Smart Bluetooth App + CAN / RS485',
      'Cycle Life': '8,000+ Cycles @ 0.5C',
      'Expected Lifespan': '15+ Years',
      'Operating Temp': '-10°C to 55°C',
      'Charge Cut-off': '29.2 V',
      'Discharge Cut-off': '21.6 V',
      'Weight': '22.8 kg',
      'Dimensions': '440 × 320 × 165 mm'
    },
    features: [
      'Direct plug-and-play drop-in replacement for old 2x 12V lead-acid batteries',
      'Real-time Bluetooth mobile app monitoring for cell voltage, temperature, and current',
      'Integrated High-Current BMS with thermal and short-circuit protection',
      '98% round-trip energy efficiency saving electricity bills during solar charging',
      'Lightweight metal alloy chassis with ergonomic carry handles'
    ],
    images: [
      '/images/products/24v1-hero.png',
      '/images/products/aa-24-100-0.png',
      '/images/products/aa-24-100-1.png'
    ],
    inStock: true,
    recommendedFor: '2kW / 3kW 24V Solar Inverters, Home UPS & Load-Shedding Backup'
  },
  {
    id: 'aa-12-100',
    sku: 'aa-12-100',
    name: 'Alpha Ampere 12V 100Ah Lithium (LiFePO4) Battery',
    slug: 'alpha-ampere-12v-100ah-lithium-battery',
    category: 'LiFePO4 Solar Batteries',
    subcategory: 'UPS & Solar Batteries',
    price: 78000,
    oldPrice: 85000,
    badge: 'Compact 1.28kWh Replacement',
    rating: 4.8,
    reviewsCount: 62,
    description: 'Model: Alpha12.8ML100. Ultra-durable 12.8V 100Ah (1.28kWh) LiFePO4 battery pack engineered as the ultimate replacement for standard tubular lead-acid batteries. Built-in Bluetooth tracking allows instant phone diagnosis.',
    specifications: {
      'Nominal Voltage': '12.8 V',
      'Capacity': '100 Ah (1.28 kWh)',
      'Chemistry': 'LiFePO4',
      'Max Discharge Current': '100 A',
      'Charge Cut-off Voltage': '14.6 V',
      'Discharge Cut-off Voltage': '10.0 V',
      'Communication': 'Smart Bluetooth App',
      'Cycle Life': '8,000+ Cycles',
      'Lifespan': '15+ Years',
      'Operating Temp': '-10°C to 55°C',
      'Weight': '11.5 kg'
    },
    features: [
      'Over 3x lighter than standard 100Ah lead-acid batteries with 4x longer cycle life',
      'Smart Bluetooth smartphone app telemetry',
      'Instant charging capability (0 to 80% in under 2 hours)',
      'Ideal for 12V single-battery UPS systems, solar lighting, camping, and boat power'
    ],
    images: [
      '/images/products/aa-12-100-0.png',
      '/images/products/aa-12-100-1.png',
      '/images/products/aa-12-100-2.png'
    ],
    inStock: true,
    recommendedFor: '1kW 12V Single Battery UPS & Solar Lighting Setup'
  },
  {
    id: 'ab-12-100',
    sku: 'ab-12-100',
    name: 'Alpha Ampere 12V 6.5Ah LiFePO4 Battery for Self-Start Motorcycles',
    slug: 'alpha-ampere-12v-6-5ah-lithium-lfp-battery-bike',
    category: 'Motorcycle Batteries',
    subcategory: 'Motorcycle Batteries',
    price: 6200,
    oldPrice: 7000,
    badge: 'Heavy Cranking Power',
    rating: 4.9,
    reviewsCount: 114,
    description: 'Model: Alpha12SS6. High cranking amp 12.8V 6.5Ah LiFePO4 motorcycle battery built for self-start bikes (CD125, YBR, Suzuki GS150, Heavy Bikes). Delivers high CCA, zero sulfation, and 10-year service life.',
    specifications: {
      'Nominal Voltage': '12.8 V',
      'Capacity': '6,500 mAh (6.5 Ah)',
      'Cold Cranking Amps (CCA)': '150 A Peak',
      'Chemistry': 'LiFePO4 (LFP)',
      'Compatibility': 'Self-Start Motorcycles (125cc - 250cc)',
      'Cycle Life': '2,000+ Cycles',
      'Lifespan': '10 Years',
      'Operating Temp': '-10°C to 55°C',
      'Weight': '0.95 kg'
    },
    features: [
      'Instant engine ignition even in freezing winters',
      'Never acid spills or requires water refills',
      '10-year lifespan vs 1-year standard motorcycle battery',
      'Built-in mini BMS with over-voltage and short circuit protection'
    ],
    images: [
      '/images/products/ab-12-100-0.png',
      '/images/products/ab-12-100-1.png'
    ],
    inStock: true,
    recommendedFor: '125cc, 150cc, and Self-Start Motorbikes'
  },
  {
    id: 'ab-13-100',
    sku: 'ab-13-100',
    name: 'Alpha Ampere 12V 2.5Ah LiFePO4 Battery for Kick-Start Motorcycles',
    slug: 'alpha-ampere-12v-2-5ah-lithium-lfp-battery-bike',
    category: 'Motorcycle Batteries',
    subcategory: 'Motorcycle Batteries',
    price: 4300,
    oldPrice: 5000,
    badge: 'Ultra Compact & Lightweight',
    rating: 4.7,
    reviewsCount: 76,
    description: 'Model: Alpha12KS3. Compact 12.8V 2.5Ah LiFePO4 battery pack for kick-start motorcycles (70cc, 100cc, CD70). Delivers bright headlight power, crisp indicator blinking, and reliable horn response.',
    specifications: {
      'Nominal Voltage': '12.8 V',
      'Capacity': '2,500 mAh (2.5 Ah)',
      'Chemistry': 'LiFePO4',
      'Compatibility': 'Kick-Start Motorbikes (70cc - 100cc)',
      'Cycle Life': '2,000+ Cycles',
      'Lifespan': '10 Years',
      'Weight': '0.42 kg'
    },
    features: [
      'Ultra lightweight construction (under 500g)',
      'Maintains full voltage stability for lights and horns',
      'Zero self-discharge even when bike is unused for months'
    ],
    images: [
      '/images/products/ab-13-100-1.png'
    ],
    inStock: true,
    recommendedFor: '70cc & 100cc Kick Start Motorbikes'
  },
  {
    id: 'ac-12-100',
    sku: 'ac-12-100',
    name: 'REPT 3.2V 100Ah Grade-A LiFePO4 Prismatic Cell',
    slug: 'rept-3-2v-100ah-cell-lithium-iron-phosphate-lfp',
    category: 'Battery Accessories',
    subcategory: 'Battery Cells',
    price: 9500,
    oldPrice: 9800,
    badge: 'Grade-A Certified Cell',
    rating: 4.9,
    reviewsCount: 35,
    description: 'Genuine REPT 3.2V 100Ah Grade-A Lithium Iron Phosphate prismatic cell with M6 laser-threaded terminals. Perfect for custom battery builders crafting 12V, 24V, or 48V power banks.',
    specifications: {
      'Nominal Voltage': '3.2 V',
      'Capacity': '100 Ah',
      'Internal Resistance': '≤ 0.5 mΩ',
      'Chemistry': 'LiFePO4',
      'Cycle Life': '6,000+ Cycles',
      'Dimensions': '174 × 130 × 36 mm',
      'Weight': '1.98 kg'
    },
    features: [
      '100% Grade-A new cell tested with QR code verification',
      'Ultra-low internal resistance for high-current discharge',
      'Includes free nickel busbars and terminal hardware'
    ],
    images: [
      '/images/products/ac-12-100-0.png'
    ],
    inStock: true,
    recommendedFor: 'Custom Pack Builders & DIY Energy Storage Systems'
  },
  {
    id: 'ac-13-100',
    sku: 'ac-13-100',
    name: 'Gotion 3.2V 27Ah Grade-A LiFePO4 Prismatic Cell',
    slug: 'gotion-3-2v-27ah-cell-lithium-iron-phosphate-lfp',
    category: 'Battery Accessories',
    subcategory: 'Battery Cells',
    price: 3500,
    oldPrice: 3800,
    badge: 'High Energy Density',
    rating: 4.8,
    reviewsCount: 29,
    description: 'Authentic Gotion High-Tech 3.2V 27Ah LiFePO4 cell. Compact form factor for light electric vehicles, portable power stations, and custom battery designs.',
    specifications: {
      'Nominal Voltage': '3.2 V',
      'Capacity': '27 Ah',
      'Chemistry': 'LiFePO4',
      'Cycle Life': '4,000+ Cycles',
      'Weight': '0.58 kg'
    },
    features: [
      'High power density cell',
      'Stable thermal performance up to 60°C',
      'Laser welded aluminum casing'
    ],
    images: [
      '/images/products/ac-13-100-0.png'
    ],
    inStock: true,
    recommendedFor: 'Portable Power Packs, Ebikes, and Solar Lights'
  },
  {
    id: 'ac-14-100',
    sku: 'ac-14-100',
    name: 'JK BMS 4S-8S 100A Active Balancer Smart BMS',
    slug: 'jk-bms-4s-8s-100a-li-ion-lifepo4',
    category: 'Battery Accessories',
    subcategory: 'Battery Management Systems',
    price: 13500,
    oldPrice: 14000,
    badge: '1A Active Balancing • Bluetooth',
    rating: 5.0,
    reviewsCount: 52,
    description: 'Industry-leading JK (JiKong) Smart BMS supporting 4S to 8S LiFePO4 series configurations with 100A continuous discharge and 1A active cell balancing. Built-in Bluetooth app control with temperature sensors.',
    specifications: {
      'Brand': 'JK (JiKong)',
      'Series Compatibility': '4S to 8S (12V - 24V Systems)',
      'Continuous Discharge Current': '100 A',
      'Active Balancer Current': '1.0 A Active Transfer',
      'Cell Chemistry': 'LiFePO4 / Li-ion / LTO',
      'Communication': 'Bluetooth Android & iOS App + NTC Temp Sensors'
    },
    features: [
      '1A active cell balancing keeps every cell balanced without energy heat waste',
      'Full protection against overcharge, overdischarge, overcurrent, and temperature extremes',
      'Real-time smartphone app graph tracking and parameter adjustments'
    ],
    images: [
      '/images/products/ac-14-100-0.jpg'
    ],
    inStock: true,
    recommendedFor: '12V / 24V Custom LiFePO4 Battery Build Management'
  }
];

export const COMPANY_DETAILS = {
  name: 'Metalectrics',
  brand: 'Alpha Ampere',
  tagline: 'Powering Tomorrow with Premium Lithium Technology',
  phonePrimary: '+92 309 8000565',
  phoneSecondary: '+92 344 6760259',
  whatsapp: '+923098000565',
  emailPrimary: 'metalectrics@gmail.com',
  emailSecondary: 'info@metalectrics.com',
  address: 'Faisalabad Road, Okara, Punjab, Pakistan',
  businessHours: 'Saturday – Thursday: 10:00 AM – 8:00 PM',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61576602905984',
    instagram: 'https://www.instagram.com/metalectrics/',
    youtube: 'https://www.youtube.com/@METALECTRICS'
  }
};
