export type SystemType =
  | 'Plumbing'
  | 'Heating'
  | 'Cooling'
  | 'External systems'
  | 'Floor heating'

export interface Product {
  id: number
  name: string
  type: string
  category: SystemType
  price: string
  priceValue: number
  dateAdded: string // ISO date — used for newest/oldest sorting
  keywords: string[]
  image: string
  description: string
  specs: { label: string; value: string }[]
}

export interface CartItem {
  product: Product
  quantity: number
}

export const SYSTEM_TYPES: SystemType[] = [
  'Plumbing',
  'Heating',
  'Cooling',
  'External systems',
  'Floor heating',
]

export const productsData: Product[] = [
  {
    id: 1,
    name: 'EcoTherm Pro Boiler',
    type: 'Heating Unit',
    category: 'Heating',
    price: '$2,499',
    priceValue: 2499,
    dateAdded: '2024-01-15',
    keywords: ['boiler', 'gas', 'hot water', 'condensing', 'heating'],
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'High-efficiency condensing boiler designed for modern residential heating. Delivers consistent hot water and space heating with minimal energy waste.',
    specs: [
      { label: 'Efficiency', value: '95% AFUE' },
      { label: 'Fuel Type', value: 'Natural Gas / Propane' },
      { label: 'Warranty', value: '10 Years' },
    ],
  },
  {
    id: 2,
    name: 'SmartFlow Radiator',
    type: 'Heat Distribution',
    category: 'Heating',
    price: '$450',
    priceValue: 450,
    dateAdded: '2024-03-02',
    keywords: ['radiator', 'panel', 'smart', 'thermostat', 'heating'],
    image:
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Architectural panel radiator with integrated smart thermostatic controls. Sleek design fits any modern interior while providing rapid heat distribution.',
    specs: [
      { label: 'Material', value: 'Powder-coated Steel' },
      { label: 'Output', value: '5000 BTU/hr' },
      { label: 'Connectivity', value: 'Wi-Fi enabled' },
    ],
  },
  {
    id: 3,
    name: 'AeroCool Inverter AC',
    type: 'Cooling System',
    category: 'Cooling',
    price: '$1,850',
    priceValue: 1850,
    dateAdded: '2024-05-20',
    keywords: ['ac', 'air conditioner', 'inverter', 'mini-split', 'cooling'],
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Ultra-quiet ductless mini-split air conditioner. Uses advanced inverter technology to maintain precise temperatures while reducing electricity consumption.',
    specs: [
      { label: 'SEER Rating', value: '22' },
      { label: 'Noise Level', value: '19 dB' },
      { label: 'Coverage', value: 'Up to 800 sq ft' },
    ],
  },
  {
    id: 4,
    name: 'PureWater Filtration Hub',
    type: 'Plumbing Accessory',
    category: 'Plumbing',
    price: '$899',
    priceValue: 899,
    dateAdded: '2024-02-10',
    keywords: ['water', 'filter', 'filtration', 'descaler', 'plumbing'],
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Whole-house water filtration and descaling system. Protects your plumbing infrastructure and appliances from hard water damage.',
    specs: [
      { label: 'Flow Rate', value: '15 GPM' },
      { label: 'Filter Life', value: '100,000 Gallons' },
      { label: 'Maintenance', value: 'Annual' },
    ],
  },
  {
    id: 5,
    name: 'RadiantFloor Mat System',
    type: 'Floor Heating',
    category: 'Floor heating',
    price: '$1,200',
    priceValue: 1200,
    dateAdded: '2024-06-12',
    keywords: ['floor', 'radiant', 'underfloor', 'mat', 'heating'],
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Electric radiant floor heating mats designed for easy installation under tile, stone, or engineered wood floors.',
    specs: [
      { label: 'Voltage', value: '120V / 240V' },
      { label: 'Thickness', value: '1/8 inch' },
      { label: 'Control', value: 'Smart Thermostat required' },
    ],
  },
  {
    id: 6,
    name: 'Industrial Circulator Pump',
    type: 'Plumbing Accessory',
    category: 'Plumbing',
    price: '$320',
    priceValue: 320,
    dateAdded: '2023-11-05',
    keywords: ['pump', 'circulator', 'cast iron', 'fluid', 'plumbing'],
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Heavy-duty cast iron circulator pump for demanding heating and cooling systems. Ensures reliable fluid movement across large networks.',
    specs: [
      { label: 'Max Pressure', value: '150 PSI' },
      { label: 'Material', value: 'Cast Iron' },
      { label: 'Power', value: '1/6 HP' },
    ],
  },
  {
    id: 7,
    name: 'Smart Climate Hub',
    type: 'System Control',
    category: 'Cooling',
    price: '$299',
    priceValue: 299,
    dateAdded: '2024-07-01',
    keywords: ['control', 'thermostat', 'smart', 'hub', 'climate'],
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Centralized touchscreen control panel for managing all Werker heating, cooling, and ventilation systems from one interface.',
    specs: [
      { label: 'Display', value: '7-inch OLED' },
      { label: 'Connectivity', value: 'Wi-Fi / Bluetooth' },
      { label: 'Compatibility', value: 'All Werker Systems' },
    ],
  },
  {
    id: 8,
    name: 'External Heat Pump Unit',
    type: 'Heating & Cooling',
    category: 'External systems',
    price: '$3,400',
    priceValue: 3400,
    dateAdded: '2024-08-18',
    keywords: [
      'heat pump',
      'external',
      'air source',
      'no renovation',
      'outdoor',
    ],
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'High-capacity external air-source heat pump. Provides powerful climate control without invasive interior ductwork.',
    specs: [
      { label: 'Capacity', value: '3 Ton' },
      { label: 'SEER Rating', value: '20' },
      { label: 'Operating Range', value: '-15°F to 115°F' },
    ],
  },
  {
    id: 9,
    name: 'OutClima External Cooler',
    type: 'External Cooling',
    category: 'External systems',
    price: '$2,750',
    priceValue: 2750,
    dateAdded: '2024-09-09',
    keywords: ['external', 'cooler', 'outdoor', 'no renovation', 'cooling'],
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'External cooling array engineered for retrofit installations that require zero interior renovation. Ideal for historic and finished homes.',
    specs: [
      { label: 'Capacity', value: '4 Ton' },
      { label: 'Install', value: 'No interior renovation' },
      { label: 'Noise Level', value: '24 dB' },
    ],
  },
  {
    id: 10,
    name: 'ThermaFloor Pro Manifold',
    type: 'Floor Heating',
    category: 'Floor heating',
    price: '$680',
    priceValue: 680,
    dateAdded: '2024-04-22',
    keywords: ['floor', 'manifold', 'underfloor', 'hydronic', 'heating'],
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Stainless steel hydronic manifold for multi-zone underfloor heating systems. Precise flow balancing for every room.',
    specs: [
      { label: 'Zones', value: 'Up to 8' },
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Flow Meters', value: 'Included' },
    ],
  },
  {
    id: 11,
    name: 'AquaLine Pipe Kit',
    type: 'Plumbing Accessory',
    category: 'Plumbing',
    price: '$180',
    priceValue: 180,
    dateAdded: '2023-12-14',
    keywords: ['pipe', 'pex', 'plumbing', 'intake', 'fittings'],
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Complete PEX pipe and fittings kit for cold/hot water intake and outtake systems. Everything needed for a clean install.',
    specs: [
      { label: 'Length', value: '100 ft' },
      { label: 'Material', value: 'PEX-A' },
      { label: 'Fittings', value: '40 pcs' },
    ],
  },
  {
    id: 12,
    name: 'VentMax Cooling Fan',
    type: 'Cooling System',
    category: 'Cooling',
    price: '$540',
    priceValue: 540,
    dateAdded: '2024-10-03',
    keywords: ['fan', 'ventilation', 'cooling', 'airflow', 'industrial'],
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'High-airflow industrial ventilation fan for large spaces. Quiet operation with variable speed control.',
    specs: [
      { label: 'Airflow', value: '4500 CFM' },
      { label: 'Speeds', value: 'Variable' },
      { label: 'Diameter', value: '24 inch' },
    ],
  },
]

export const PRICE_MIN = 0
export const PRICE_MAX = 3500
