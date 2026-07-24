export interface ProductSpecification {
  [key: string]: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: 'Solar & UPS Batteries' | 'Motorcycle Batteries' | 'Cells & BMS';
  shortSpec: string;
  voltage: string;
  capacity: string;
  price: number;
  oldPrice?: number;
  description: string;
  specifications: ProductSpecification;
  features: string[];
  images: string[];
  inStock: boolean;
  useCases: string[];
}

export const CATEGORIES = [
  'All Products',
  'Solar & UPS Batteries',
  'Motorcycle Batteries',
  'Cells & BMS'
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'aa-51-100',
    sku: 'aa-51-100',
    name: 'Alpha Ampere 51.2V 100Ah LiFePO4 Battery',
    slug: 'alpha-ampere-51-2v-100ah-lithium-battery',
    category: 'Solar & UPS Batteries',
    shortSpec: '51.2V • 5.12kWh Storage',
    voltage: '51.2V',
    capacity: '100Ah',
    price: 229000,
    oldPrice: 245000,
    description: 'Model: Alpha51.2ML100. Commercial and residential 5.12kWh LiFePO4 battery pack engineered for 48V hybrid solar inverters and long-duration load-shedding backup.',
    specifications: {
      'Nominal Voltage': '51.2 V',
      'Capacity': '100 Ah (5,120 Wh)',
      'Chemistry': 'LiFePO4 (Grade-A Prismatic Cells)',
      'Continuous Discharge Current': '100 A (1C)',
      'Recommended Charge Current': '50 A',
      'Communication': 'Smart Bluetooth App + RS485 / CAN',
      'Cycle Life': '8,000+ Cycles @ 80% DOD',
      'Designed Lifespan': '15 Years',
      'Dimensions': '482 × 440 × 177 mm (3U Rack Compatible)',
      'Weight': '42.5 kg'
    },
    features: [
      'Grade-A Prismatic Lithium Iron Phosphate cells',
      'Smart BMS with real-time Bluetooth telemetry app',
      'Compatible with leading 5kW & 6kW Pakistani hybrid inverters (Inverex, Crown, SolarMax, Nitrox)',
      'Zero thermal runaway risk, non-combustible construction',
      '8,000+ deep cycles maintaining 80% capacity'
    ],
    images: [
      '/images/products/aa-51-100-0.png',
      '/images/products/aa-51-100-1.png',
      '/images/products/aa-51-100-2.png'
    ],
    inStock: true,
    useCases: [
      '5kW / 6kW Hybrid Solar Inverter Systems',
      'Whole-Home UPS & Off-Grid Backup',
      'Commercial Energy Storage'
    ]
  },
  {
    id: 'aa-24-100',
    sku: 'aa-24-100',
    name: 'Alpha Ampere 24V 100Ah LiFePO4 Battery',
    slug: 'alpha-ampere-24v-100ah-lithium-battery',
    category: 'Solar & UPS Batteries',
    shortSpec: '25.6V • 2.56kWh Storage',
    voltage: '25.6V',
    capacity: '100Ah',
    price: 139000,
    oldPrice: 149000,
    description: 'Model: Alpha25.6ML100. High-efficiency 2.56kWh LiFePO4 power pack engineered for 24V home UPS systems and 2kW/3kW solar setups. Replaces two standard 12V lead-acid batteries.',
    specifications: {
      'Nominal Voltage': '25.6 V',
      'Capacity': '100 Ah (2,560 Wh)',
      'Chemistry': 'LiFePO4 (Grade-A Cells)',
      'Continuous Discharge Current': '100 A',
      'Recommended Charge Current': '50 A',
      'Communication': 'Smart Bluetooth App',
      'Cycle Life': '8,000+ Cycles',
      'Designed Lifespan': '15 Years',
      'Dimensions': '440 × 320 × 165 mm',
      'Weight': '22.8 kg'
    },
    features: [
      'Direct plug-and-play replacement for 2x 12V lead-acid batteries',
      'Integrated Smart BMS with cell balancing',
      'Bluetooth app monitoring for voltage, current, and temperature',
      'Fast charge capability (0 to 80% in under 2 hours)',
      'Lightweight aluminum alloy chassis'
    ],
    images: [
      '/images/products/24v1-hero.png',
      '/images/products/aa-24-100-0.png',
      '/images/products/aa-24-100-1.png'
    ],
    inStock: true,
    useCases: [
      '2kW / 3kW 24V Hybrid & Off-Grid Solar Systems',
      'Standard Home UPS Load-Shedding Backup',
      'Small Business Power Storage'
    ]
  },
  {
    id: 'aa-12-100',
    sku: 'aa-12-100',
    name: 'Alpha Ampere 12V 100Ah LiFePO4 Battery',
    slug: 'alpha-ampere-12v-100ah-lithium-battery',
    category: 'Solar & UPS Batteries',
    shortSpec: '12.8V • 1.28kWh Storage',
    voltage: '12.8V',
    capacity: '100Ah',
    price: 78000,
    oldPrice: 85000,
    description: 'Model: Alpha12.8ML100. Lightweight 12.8V 100Ah (1.28kWh) drop-in replacement for standard 12V tubular lead-acid batteries. Built-in Bluetooth diagnostics.',
    specifications: {
      'Nominal Voltage': '12.8 V',
      'Capacity': '100 Ah (1,280 Wh)',
      'Chemistry': 'LiFePO4',
      'Max Discharge Current': '100 A',
      'Charge Cut-off Voltage': '14.6 V',
      'Discharge Cut-off Voltage': '10.0 V',
      'Communication': 'Smart Bluetooth App',
      'Cycle Life': '8,000+ Cycles',
      'Weight': '11.5 kg'
    },
    features: [
      '3x lighter than standard lead-acid batteries',
      'Smart Bluetooth smartphone app telemetry',
      'Zero maintenance, zero water refill requirement',
      'Sub-2 hour rapid charging capability'
    ],
    images: [
      '/images/products/aa-12-100-0.png',
      '/images/products/aa-12-100-1.png',
      '/images/products/aa-12-100-2.png'
    ],
    inStock: true,
    useCases: [
      '12V Single Battery UPS Systems',
      'Solar Street & Home Lighting',
      'Marine & Camping Power'
    ]
  },
  {
    id: 'ab-12-100',
    sku: 'ab-12-100',
    name: 'Alpha Ampere 12V 6.5Ah Self-Start Bike Battery',
    slug: 'alpha-ampere-12v-6-5ah-lithium-lfp-battery-bike',
    category: 'Motorcycle Batteries',
    shortSpec: '12.8V • High Cranking CCA',
    voltage: '12.8V',
    capacity: '6.5Ah',
    price: 6200,
    oldPrice: 7000,
    description: 'Model: Alpha12SS6. High cranking performance 12.8V 6.5Ah LiFePO4 battery for self-start motorcycles (CD125, YBR, GS150). Delivers reliable cold starting and 10-year service life.',
    specifications: {
      'Nominal Voltage': '12.8 V',
      'Capacity': '6.5 Ah (6,500 mAh)',
      'Cold Cranking Amps (CCA)': '150 A Peak',
      'Chemistry': 'LiFePO4',
      'Cycle Life': '2,000+ Cycles',
      'Lifespan': '10 Years',
      'Weight': '0.95 kg'
    },
    features: [
      'Instant self-start ignition in cold weather',
      'Never acid spills or degrades in storage',
      '10-year service lifespan',
      'Integrated mini BMS protection'
    ],
    images: [
      '/images/products/ab-12-100-0.png',
      '/images/products/ab-12-100-1.png'
    ],
    inStock: true,
    useCases: [
      '125cc & 150cc Self-Start Motorcycles',
      'Heavy Bikes & Scooters'
    ]
  },
  {
    id: 'ab-13-100',
    sku: 'ab-13-100',
    name: 'Alpha Ampere 12V 2.5Ah Kick-Start Bike Battery',
    slug: 'alpha-ampere-12v-2-5ah-lithium-lfp-battery-bike',
    category: 'Motorcycle Batteries',
    shortSpec: '12.8V • Compact Kick-Start',
    voltage: '12.8V',
    capacity: '2.5Ah',
    price: 4300,
    oldPrice: 5000,
    description: 'Model: Alpha12KS3. Ultra-compact 12.8V 2.5Ah LiFePO4 battery for kick-start motorbikes (70cc, 100cc). Powers headlights, indicators, and horns with zero voltage drop.',
    specifications: {
      'Nominal Voltage': '12.8 V',
      'Capacity': '2.5 Ah (2,500 mAh)',
      'Chemistry': 'LiFePO4',
      'Cycle Life': '2,000+ Cycles',
      'Weight': '0.42 kg'
    },
    features: [
      'Ultra lightweight (under 500 grams)',
      'Stable headlight brightness & crisp horn response',
      'Zero self-discharge over extended parking'
    ],
    images: [
      '/images/products/ab-13-100-1.png'
    ],
    inStock: true,
    useCases: [
      '70cc & 100cc Kick-Start Motorbikes'
    ]
  },
  {
    id: 'ac-12-100',
    sku: 'ac-12-100',
    name: 'REPT 3.2V 100Ah Grade-A LiFePO4 Cell',
    slug: 'rept-3-2v-100ah-cell-lithium-iron-phosphate-lfp',
    category: 'Cells & BMS',
    shortSpec: '3.2V • Grade-A Prismatic Cell',
    voltage: '3.2V',
    capacity: '100Ah',
    price: 9500,
    oldPrice: 9800,
    description: 'Authentic REPT 3.2V 100Ah Grade-A Lithium Iron Phosphate cell with laser-threaded M6 terminals for custom battery pack building.',
    specifications: {
      'Nominal Voltage': '3.2 V',
      'Capacity': '100 Ah',
      'Internal Resistance': '≤ 0.5 mΩ',
      'Chemistry': 'LiFePO4',
      'Cycle Life': '6,000+ Cycles',
      'Weight': '1.98 kg'
    },
    features: [
      '100% Grade-A factory cell with QR code verification',
      'Low internal resistance for high discharge',
      'Includes nickel busbars and terminal screws'
    ],
    images: [
      '/images/products/ac-12-100-0.png'
    ],
    inStock: true,
    useCases: [
      'Custom DIY Battery Pack Assembly (12V, 24V, 48V)',
      'Solar Bank Upgrades'
    ]
  },
  {
    id: 'ac-13-100',
    sku: 'ac-13-100',
    name: 'Gotion 3.2V 27Ah Grade-A LiFePO4 Cell',
    slug: 'gotion-3-2v-27ah-cell-lithium-iron-phosphate-lfp',
    category: 'Cells & BMS',
    shortSpec: '3.2V • Compact Prismatic Cell',
    voltage: '3.2V',
    capacity: '27Ah',
    price: 3500,
    oldPrice: 3800,
    description: 'Genuine Gotion High-Tech 3.2V 27Ah LiFePO4 cell. Compact prismatic form factor for portable power packs and light electric vehicles.',
    specifications: {
      'Nominal Voltage': '3.2 V',
      'Capacity': '27 Ah',
      'Chemistry': 'LiFePO4',
      'Cycle Life': '4,000+ Cycles',
      'Weight': '0.58 kg'
    },
    features: [
      'High energy density cell',
      'Laser welded aluminum casing',
      'Stable thermal performance'
    ],
    images: [
      '/images/products/ac-13-100-0.png'
    ],
    inStock: true,
    useCases: [
      'Portable Power Stations',
      'E-Bikes & Solar Lighting'
    ]
  },
  {
    id: 'ac-14-100',
    sku: 'ac-14-100',
    name: 'JK BMS 4S-8S 100A Active Balancer Smart BMS',
    slug: 'jk-bms-4s-8s-100a-li-ion-lifepo4',
    category: 'Cells & BMS',
    shortSpec: '4S-8S • 100A Discharge • 1A Balancer',
    voltage: '12V-24V',
    capacity: '100A',
    price: 13500,
    oldPrice: 14000,
    description: 'Industry-standard JK (JiKong) Smart BMS supporting 4S to 8S LiFePO4 series configurations with 100A continuous discharge and 1A active balancing.',
    specifications: {
      'Brand': 'JK (JiKong)',
      'Series Count': '4S to 8S (12V - 24V)',
      'Continuous Discharge': '100 A',
      'Active Balancer Current': '1.0 A',
      'Communication': 'Bluetooth Mobile App'
    },
    features: [
      '1A active cell balancer eliminates cell drift',
      'Full overcharge, overdischarge, and short-circuit protection',
      'Smartphone app telemetry'
    ],
    images: [
      '/images/products/ac-14-100-0.jpg'
    ],
    inStock: true,
    useCases: [
      'Custom 12V / 24V LiFePO4 Pack Protection & Balancing'
    ]
  }
];

export const COMPANY_DETAILS = {
  name: 'Metalectrics',
  brand: 'Alpha Ampere',
  tagline: 'Power You Can Rely On',
  phonePrimary: '+92 309 8000565',
  phoneSecondary: '+92 344 6760259',
  whatsapp: '+923098000565',
  emailPrimary: 'metalectrics@gmail.com',
  emailSecondary: 'info@metalectrics.com',
  address: 'Faisalabad Road, Okara, Punjab, Pakistan',
  businessHours: 'Saturday – Thursday: 10:00 AM – 8:00 PM'
};
