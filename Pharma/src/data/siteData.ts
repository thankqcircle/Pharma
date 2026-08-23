export interface Product {
  name: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    name: 'Taropan DSR',
    image: '/images/products/taropan-dsr-card.jpg',
    alt: 'Taropan DSR pharmaceutical product',
  },
  {
    name: 'Taropan DSR',
    image: '/images/products/taropan-dsr-plain.jpg',
    alt: 'Taropan DSR pharmaceutical product logo',
  },
  {
    name: 'Neurovida-LC',
    image: '/images/products/neurovida-lc-card.jpg',
    alt: 'Neurovida-LC neurological health product',
  },
  {
    name: 'Neurovida',
    image: '/images/products/neurovida-plain.jpg',
    alt: 'Neurovida neurological health product logo',
  },
  {
    name: 'Raberef DSR',
    image: '/images/products/raberef-dsr-card.jpg',
    alt: 'Raberef DSR pharmaceutical product',
  },
  {
    name: 'Raberef DSR',
    image: '/images/products/raberef-dsr-plain.jpg',
    alt: 'Raberef DSR pharmaceutical product logo',
  },
  {
    name: 'Pregavida-MNT',
    image: '/images/products/pregavida-mnt-card.jpg',
    alt: 'Pregavida-MNT pharmaceutical product',
  },
  {
    name: 'Pregavida-MNT',
    image: '/images/products/pregavida-mnt-plain.jpg',
    alt: 'Pregavida-MNT pharmaceutical product logo',
  },
  {
    name: 'Esovida ITL DSR',
    image: '/images/products/esovida-itl-dsr-card.jpg',
    alt: 'Esovida ITL DSR pharmaceutical product',
  },
  {
    name: 'Esovida',
    image: '/images/products/esovida-plain.jpg',
    alt: 'Esovida pharmaceutical product logo',
  },
  {
    name: 'Bliss-D3',
    image: '/images/products/bliss-d3-card.jpg',
    alt: 'Bliss-D3 vitamin D3 softgels and nanoshots',
  },
  {
    name: 'Bliss-D3',
    image: '/images/products/bliss-d3-plain.jpg',
    alt: 'Bliss-D3 vitamin D3 product logo',
  },
  {
    name: 'Bliss-D3 60K',
    image: '/images/products/bliss-d3-60k-plain.jpg',
    alt: 'Bliss-D3 60K vitamin D3 product logo',
  },
  {
    name: 'Dolzida-SP',
    image: '/images/products/dolzida-sp-card.jpg',
    alt: 'Dolzida-SP pharmaceutical product',
  },
  {
    name: 'Dolzida-SP',
    image: '/images/products/dolzida-sp-plain.jpg',
    alt: 'Dolzida-SP pharmaceutical product logo',
  },
  {
    name: 'Suhem',
    image: '/images/products/suhem-card.jpg',
    alt: 'Suhem pharmaceutical product',
  },
  {
    name: 'Suhem',
    image: '/images/products/suhem-plain.jpg',
    alt: 'Suhem pharmaceutical product logo',
  },
  {
    name: 'Bilacys M',
    image: '/images/products/bilacys-m-card.jpg',
    alt: 'Bilacys M pharmaceutical product',
  },
  {
    name: 'Bilacys M',
    image: '/images/products/bilacys-m-plain.jpg',
    alt: 'Bilacys M pharmaceutical product logo',
  },
  {
    name: 'Flupirock-P',
    image: '/images/products/flupirock-p-card.jpg',
    alt: 'Flupirock-P pharmaceutical product',
  },
  {
    name: 'Flupirock',
    image: '/images/products/flupirock-plain.jpg',
    alt: 'Flupirock pharmaceutical product logo',
  },
  {
    name: 'Gabavida-NT',
    image: '/images/products/gabavida-nt-card.jpg',
    alt: 'Gabavida-NT pharmaceutical product',
  },
];

export interface BrandTickerItem {
  text: string;
  colorClass: string;
}

export const brandTickerItems: BrandTickerItem[] = [
  { text: 'TAROPAN DSR', colorClass: 'text-primary' },
  { text: 'NEUROVIDA-LC', colorClass: 'text-brand-red' },
  { text: 'RABEREF DSR', colorClass: 'text-primary' },
  { text: 'PREGAVIDA-MNT', colorClass: 'text-brand-seabukhthon' },
  { text: 'ESOVIDA ITL DSR', colorClass: 'text-primary' },
  { text: 'BLISS-D3', colorClass: 'text-brand-gold' },
  { text: 'DOLZIDA-SP', colorClass: 'text-brand-red' },
  { text: 'SUHEM', colorClass: 'text-brand-red' },
  { text: 'BILACYS M', colorClass: 'text-brand-seabukhthon' },
  { text: 'FLUPIROCK-P', colorClass: 'text-primary' },
  { text: 'GABAVIDA-NT', colorClass: 'text-brand-seabukhthon' },
];

export interface Slide {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const heroSlides: Slide[] = [
  {
    title: 'Wellness is Enthusiasm | Holistic Health & Vitality',
    description: 'Embrace positivity, passion, and energy for complete well-being beyond just physical health. Discover a healthier, happier you with our expert wellness solutions.',
    image: 'https://consiapharma.in/assets/images/banner/WELLNES-ENTHUASIM.png',
    alt: 'Wellness Enthusiasm - Healthy Living',
  },
  {
    title: 'Wellness is Fitness | Strength & Endurance',
    description: 'Boost your energy levels, improve endurance, and stay active with a balanced approach to fitness and well-being.',
    image: 'https://consiapharma.in/assets/images/banner/fitness-slider.png',
    alt: 'Physical Fitness for Health',
  },
  {
    title: 'Wellness is Peace | Mental Health & Harmony',
    description: 'Achieve inner peace, emotional stability, and stress relief with mindfulness and holistic well-being practices.',
    image: 'https://consiapharma.in/assets/images/banner/pease-w.png',
    alt: 'Inner Peace for Mental Well-being',
  },
  {
    title: 'Wellness is Exuberance | Joy & Positivity',
    description: 'Live a vibrant life filled with joy, positivity, and boundless energy. Wellness is about thriving, not just surviving.',
    image: 'https://consiapharma.in/assets/images/banner/WELLNESS-EXUBERANCE.png',
    alt: 'Wellness Exuberance - Joyful Living',
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  { icon: 'rocket', title: 'Pioneering Innovation', description: 'Leading the way with breakthrough ideas and modern solutions.' },
  { icon: 'cog', title: 'Cutting-Edge Solutions', description: 'Delivering advanced technologies for superior healthcare outcomes.' },
  { icon: 'check-circle', title: 'Uncompromising Quality', description: 'Ensuring top-tier standards with strict quality control measures.' },
  { icon: 'users', title: 'Expert-Led Team', description: 'A highly skilled team with extensive industry experience.' },
  { icon: 'handshake', title: 'Customer Approach', description: 'Prioritizing customer needs with dedicated support and care.' },
  { icon: 'pill', title: 'Comprehensive Therapies', description: 'Offering diverse pharmaceutical solutions across multiple specialties.' },
];

export interface Stat {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: 'brain', value: 2, suffix: '+', label: 'Therapy Areas' },
  { icon: 'shield', value: 18, suffix: '+', label: 'Products' },
  { icon: 'thumbs-up', value: 49, suffix: '+', label: 'Employees' },
  { icon: 'target', value: 3, suffix: '+', label: 'Operational States' },
];

export interface Job {
  title: string;
  description: string;
}

export const jobs: Job[] = [
  { title: 'BUSINESS MANAGER', description: 'Responsible for strategic planning, team leadership, client relations, and market analysis to drive growth in the pharmaceutical sector.' },
  { title: 'AREA BUSINESS MANAGER', description: 'Results-driven Area Business Manager with expertise in leading sales teams, implementing strategies, and building strong healthcare relationships in the pharmaceutical industry.' },
  { title: 'REGIONAL MANAGER', description: 'Experienced Regional Manager in the pharmaceutical industry, skilled in overseeing operations, leading sales teams, and driving business growth.' },
  { title: 'SALES MANAGER', description: 'Skilled in building strong relationships with healthcare professionals, managing key accounts, and analyzing market trends to expand market share and achieve sales targets.' },
];

export const footerProducts = [
  'Taropan DSR', 'Neurovida-LC', 'Neurovida', 'Raberef DSR', 'Pregavida-MNT',
  'Esovida ITL DSR', 'Esovida', 'Bliss-D3', 'Bliss-D3 60K', 'Dolzida-SP',
  'Suhem', 'Bilacys M', 'Flupirock-P', 'Flupirock', 'Gabavida-NT',
];

export const contactInfo = {
  address: 'Unit No: 611, Reliables Pride Anand Nagar, Jogeshwari West, MUMBAI Maharashtra - 400 102',
  phone: '+91 7569881289',
  email: 'sales@tarokempharma.com',
};

export const logoUrl = '/images/logo.png';
export const footerLogoUrl = '/images/logo.png';
export const aboutImageUrl = 'https://consiapharma.in/assets/images/resource/about-pharma.jpg';
