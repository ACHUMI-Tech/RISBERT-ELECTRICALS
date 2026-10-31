export interface ProductOption {
  name: string;
  price: string;
  inStock: boolean;
  specs?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'cables' | 'lighting' | 'panels' | 'switches';
  categoryLabel: string;
  badge: string;
  standardBadge: string;
  categoryTag: string;
  stockTag: string;
  description: string;
  image: string;
  imageFallback: string;
  keySpecs: string[];
  startingPrice: string;
  priceUnit: string;
  manufacturer: string;
  inStock: boolean;
  leadTime: string;
  warranty: string;
  certification: string;
  detailedOverview: string;
  specifications: Record<string, string>;
  options: ProductOption[];
  whatsappMessage: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'cables', label: 'Cables & Wiring' },
  { id: 'lighting', label: 'Lighting & Bulbs' },
  { id: 'panels', label: 'Distribution & Breakers' },
  { id: 'switches', label: 'Switches & Sockets' },
] as const;

export const BRANDS = [
  'All Brands',
  'Coleman Cables & Wires',
  'Schneider Electric',
  'ABB',
  'Philips Lighting',
  'Legrand',
  'Havells',
  'Chint Electric',
] as const;

export const STOCK_FILTERS = [
  'All Availability',
  'Immediate Island Stock',
  'Contractor Bulk Supply',
  'Tested & Ready to Ship',
] as const;

export const PRODUCTS: ProductItem[] = [
  {
    id: 'cables-wiring',
    title: 'Cables & Wiring',
    category: 'cables',
    categoryLabel: 'Cables & Wiring',
    badge: 'Pure Copper & Fire-Resistant',
    standardBadge: 'ISO / NIS Standard',
    categoryTag: 'Cable Inventory',
    stockTag: 'Immediate Stock',
    description: 'Single core, multi-core, armored conduit cables, earth wires, and heavy gauge industrial flexible cords for safe transmission.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBL2kwwPDIr0Uf_620ntmT5hzBq8NkmpEgWKZhO9H9sMYqOBgUeDY8-1a-7kEOYfkoX-YN5p9ZL8No_5rKib__uP34KK8a96WORrIEmds2ag3F7FRZ8JQseHiS2fzFVInsUsZjwJUwazynfUOUuOFiaXAmCStnfnKrrf0jDyRXMUmNnP_tzbizUFhr0n9DRFOo57TRCV_-QCsgwK-lsiqForJf0OYyiGtpePl7Y3Rl8NgRP0nrqrKhGA',
    imageFallback: '/public/assets/aistudio/Image_1_fc3c1997.jpeg',
    keySpecs: ['1.5mm - 16mm Cables', 'Conduit Pipes', 'Cable Ties'],
    startingPrice: '₦28,500',
    priceUnit: 'per 100m roll',
    manufacturer: 'Coleman Cables & Wires',
    inStock: true,
    leadTime: 'Immediate pickup at Adeniji Adele / same-day dispatch',
    warranty: 'Manufacturer Guaranteed 99.9% Pure Copper',
    certification: 'SONCAP / NIS / ISO 9001 certified',
    detailedOverview: 'Engineered for commercial high-rises, industrial complexes, and residential developments across Lagos. Our rolls are certified electrolytic oxygen-free copper with zero recycled impurities, preventing overheating, voltage drop, and electrical fire hazards.',
    specifications: {
      'Conductor Material': '99.99% Electrolytic Oxygen-Free Copper',
      'Insulation Type': 'Flame Retardant PVC (Class 5 Flex)',
      'Voltage Rating': '450V / 750V (Continuous Heavy Load)',
      'Temperature Range': '-15°C to +70°C Operational',
      'Standard Length': '100 Meters Full Coil (Guaranteed Length)',
      'Compliance Standard': 'BS 6004 / IEC 60227 / NIS 142:2006',
    },
    options: [
      { name: '1.5mm² Single Core Pure Copper (100m)', price: '₦28,500', inStock: true, specs: 'Lighting circuits & extraction unit feeds' },
      { name: '2.5mm² Single Core Pure Copper (100m)', price: '₦44,000', inStock: true, specs: '13A socket rings & standard building power' },
      { name: '4.0mm² Single Core Pure Copper (100m)', price: '₦68,000', inStock: true, specs: 'Water heaters & dedicated 1.5HP AC lines' },
      { name: '6.0mm² Single Core Pure Copper (100m)', price: '₦98,000', inStock: true, specs: 'Electric cookers & heavy 2.5HP+ split ACs' },
      { name: '10.0mm² Single Core Main Sub-feed (100m)', price: '₦165,000', inStock: true, specs: 'Consumer unit primary feeder cables' },
      { name: '16.0mm² 4-Core Armored Underground (per meter)', price: '₦19,500', inStock: true, specs: 'Sub-station to main breaker underground line' },
    ],
    whatsappMessage: 'Hello Risbert Electricals, I am inquiring about Cables & Wiring from your Lagos Island store catalog.',
  },
  {
    id: 'lighting-bulbs',
    title: 'Lighting & Bulbs',
    category: 'lighting',
    categoryLabel: 'Lighting & Bulbs',
    badge: 'Architectural & Energy Saving',
    standardBadge: 'Warm / Daylight CCT',
    categoryTag: 'Commercial & Living',
    stockTag: 'Bulk Discounts',
    description: 'Contemporary LED chandeliers, recessed panel spotlights, industrial floodlights, smart warm/cool bulbs, and versatile track lights.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADNU0rd8PKpAbrHri_AJshUuYDhZKr3cGYtofo5H1ZoYVw6cWiQIRF8h4PcrAZ3-zOAFyViL5syobv3OwAyXRDP6isZM9cdGmzbj_anOBO10QK2GyGka31GjdeJOtiN1k51Hu3UjbCjgDUoSzH0cWNRO1reYQzF5mj9hzsH0M1K0Cdyg9ZZBSSpTBJERi23QAY7x7qrYNWUcpOYA0E6nCG2mtgsIbs8WJ4FkDRd_qpS63BSBMLkdMgcg',
    imageFallback: '/public/assets/aistudio/Image_1_fc3c1997.jpeg',
    keySpecs: ['LED Panels', 'Solar Floodlights', 'Track Lights'],
    startingPrice: '₦3,500',
    priceUnit: 'starting unit price',
    manufacturer: 'Philips Lighting / Havells',
    inStock: true,
    leadTime: 'In showroom stock (bulk contractor orders packed in 1 hour)',
    warranty: '2-Year Official Replacement Guarantee',
    certification: 'CE / RoHS / Energy Star Grade A++',
    detailedOverview: 'High luminous efficacy fixtures designed to endure erratic generator harmonic frequencies and voltage spikes without flicker. From luxury architectural POP chandeliers to industrial high-bay floodlighting.',
    specifications: {
      'Luminous Efficacy': '120 - 140 Lumens per Watt',
      'Color Rendering Index (CRI)': '> 85 Ra for accurate color reproduction',
      'Color Temperatures': '3000K (Warm), 4000K (Natural), 6500K (Daylight)',
      'Driver Architecture': 'Isolated IC Driver with 4kV Surge Protection',
      'Ingress Protection': 'IP65 / IP66 (Outdoor & Industrial models)',
      'Operational Lifespan': '50,000 Hours (L70 B50 rated)',
    },
    options: [
      { name: '600x600mm 48W Recessed POP LED Panel', price: '₦14,800', inStock: true, specs: 'Office suspended ceilings & modern architectural spaces' },
      { name: '200W Commercial Solar LED Floodlight + Panel', price: '₦38,500', inStock: true, specs: 'Includes monocrystalline panel, remote & mounting bracket' },
      { name: 'Magnetic Surface Track Rail (2m) + 3 Spotlights', price: '₦42,000', inStock: true, specs: 'Architectural matte black finish with 3000K spots' },
      { name: '12W Deep Recessed Anti-Glare Downlight (Pack of 4)', price: '₦12,500', inStock: true, specs: 'COB warm white with die-cast aluminum heatsink' },
      { name: 'High-Bay 150W Industrial UFO Warehouse Lamp', price: '₦34,000', inStock: true, specs: 'High ceiling factories & workshop distribution' },
    ],
    whatsappMessage: 'Hello Risbert Electricals, I am inquiring about Lighting & Bulbs from your Lagos Island store catalog.',
  },
  {
    id: 'panels-switches',
    title: 'Distribution & Breakers',
    category: 'panels',
    categoryLabel: 'Distribution & Breakers',
    badge: 'Industrial & Domestic Grade',
    standardBadge: 'Schneider & ABB Stamped',
    categoryTag: 'Switchgear & Protection',
    stockTag: 'Contractor Choice',
    description: 'Schneider & ABB standard distribution boards, miniature circuit breakers (MCBs), molded case breakers (MCCBs), changeovers, and surge protection.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcH1CIrqVS0DNUt8oay__u_4qPN93rmMtq73AtQ2vyZYMZtdz5qWjHUmS_IIhGbUKxRt75Qpxxt8TMSl_q88o9Fvh5t7Dm-aiVy2Nd6wi6OXVTdXq7YfYwdrvHNfFWgj2-e4FNSJZ-nKsDtw-DvOpN_gW5O2yzySWjMnHNv57_e4y8ylorc1GCIFFuJA3EA3NdEDigab7k5eRBhaIoVXDX2JLpwPCgvvMlurC1W2z0BggYEkeMS5_EEw',
    imageFallback: '/public/assets/aistudio/Image_1_fc3c1997.jpeg',
    keySpecs: ['DB Boxes', 'MCB / MCCB', 'Surge Arresters'],
    startingPrice: '₦4,800',
    priceUnit: 'starting component price',
    manufacturer: 'Schneider Electric / ABB',
    inStock: true,
    leadTime: 'Immediate counter delivery at Oroyinyin Street',
    warranty: '5-Year Manufacturer Warranty on Switchgear',
    certification: 'IEC 60947-2 / KEMA KEUR / CE Approved',
    detailedOverview: 'Certified genuine European switchgear for complete electrical circuit safety. We stock verified distribution enclosures, thermal-magnetic breakers, automatic generator changeover systems, and industrial busbar trunking.',
    specifications: {
      'Breaking Capacity': '6kA / 10kA / 25kA Short Circuit Rating',
      'Trip Curve Characteristic': 'Type B, Type C, and Type D Industrial',
      'Surge Protection': 'Type 2 SPD (40kA Lightning/Grid Discharge)',
      'Enclosure Material': 'Electro-galvanized Steel with Anti-Rust Epoxy',
      'Number of Ways': '4-Way, 8-Way, 12-Way, 16-Way, 24-Way 3-Phase',
      'Contacts': 'Silver-Nickel Alloy with High Arc Suppression',
    },
    options: [
      { name: 'Schneider Acti9 12-Way 3-Phase Metal DB Box', price: '₦88,000', inStock: true, specs: 'Includes copper neutral & earth terminal bars' },
      { name: 'ABB 63A Dual-Power Automatic Changeover Switch', price: '₦54,000', inStock: true, specs: 'Seamless Mains/Gen ATS switching with status indicator' },
      { name: 'Schneider Electric 32A Single Pole MCB (6kA)', price: '₦4,800', inStock: true, specs: 'DIN-rail standard circuit breaker' },
      { name: 'ABB 40kA 4-Pole Surge Protection Device (SPD)', price: '₦32,000', inStock: true, specs: 'Protection against lightning & grid voltage spikes' },
      { name: '100A 3-Pole Molded Case Circuit Breaker (MCCB)', price: '₦68,000', inStock: true, specs: 'Adjustable thermal trip for industrial motor & panel control' },
    ],
    whatsappMessage: 'Hello Risbert Electricals, I am inquiring about Distribution & Breakers from your Lagos Island store catalog.',
  },
  {
    id: 'switches-accessories',
    title: 'Switches & Sockets',
    category: 'switches',
    categoryLabel: 'Switches & Sockets',
    badge: 'British Standard & Heavy Duty',
    standardBadge: 'BS 1363 / CE Certified',
    categoryTag: 'Wiring Devices',
    stockTag: 'Immediate Stock',
    description: 'Heavy-duty 13A/15A switched sockets, luxury brushed metal wall plates, weatherproof IP66 isolators, and PVC conduit accessories.',
    image: '/assets/images/switches_sockets_devices.jpg',
    imageFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcH1CIrqVS0DNUt8oay__u_4qPN93rmMtq73AtQ2vyZYMZtdz5qWjHUmS_IIhGbUKxRt75Qpxxt8TMSl_q88o9Fvh5t7Dm-aiVy2Nd6wi6OXVTdXq7YfYwdrvHNfFWgj2-e4FNSJZ-nKsDtw-DvOpN_gW5O2yzySWjMnHNv57_e4y8ylorc1GCIFFuJA3EA3NdEDigab7k5eRBhaIoVXDX2JLpwPCgvvMlurC1W2z0BggYEkeMS5_EEw',
    keySpecs: ['13A Switched Sockets', 'Wall Plates', 'IP66 Isolators'],
    startingPrice: '₦3,800',
    priceUnit: 'starting unit price',
    manufacturer: 'Legrand / Schneider Electric',
    inStock: true,
    leadTime: 'In showroom stock / immediate trade counter collection',
    warranty: '5-Year Mechanical & Electrical Operation Guarantee',
    certification: 'BS 1363 / IEC 60669-1 / SONCAP Certified',
    detailedOverview: 'Premium wiring devices built with solid brass terminals, fire-retardant poly-carbonate bodies, and reinforced silver-alloy contacts. Designed for rigorous commercial developments, high-traffic offices, and luxury residential projects across Lagos.',
    specifications: {
      'Rated Voltage': '220V - 250V AC, 50/60Hz',
      'Current Ratings': '10AX (Lighting), 13A (Standard), 20A (DP), 45A (Cooker)',
      'Terminal Capacity': 'Up to 3x 2.5mm² or 2x 4.0mm² conductors',
      'Contact Material': 'Silver-Nickel Alloy with High Arc Suppression',
      'Faceplate Finishes': 'Brushed Stainless Steel, Matte Black, Champagne Gold, White',
      'Standards Compliance': 'BS 1363-2, BS EN 60669-1, IEC 60884-1',
    },
    options: [
      { name: 'Double 13A Switched Socket with Dual USB-A/C Fast Charge', price: '₦14,500', inStock: true, specs: 'Brushed metal plate with built-in high-speed charging modules' },
      { name: '3-Gang 2-Way Luxury Brushed Steel Wall Light Switch', price: '₦8,900', inStock: true, specs: 'Solid tactile click with anti-fingerprint coating' },
      { name: '32A 3-Pole IP66 Weatherproof Industrial Rotary Isolator', price: '₦18,200', inStock: true, specs: 'Outdoor AC condensing units & industrial machine isolation' },
      { name: '45A Double Pole Cooker Control Unit with Neon Indicator', price: '₦12,800', inStock: true, specs: 'Heavy gauge load terminal for commercial and domestic kitchens' },
      { name: '20A Double Pole Water Heater Switch with Indicator Lamp', price: '₦6,500', inStock: true, specs: 'High inrush current protection for immersion boilers' },
      { name: '20mm Heavy Gauge PVC Conduit Pipe (Pack of 10x 3m Lengths)', price: '₦16,000', inStock: true, specs: 'Impact-resistant PVC with couplers and inspection bends' },
    ],
    whatsappMessage: 'Hello Risbert Electricals, I am inquiring about Switches, Sockets & Accessories from your Lagos Island store catalog.',
  },
];
