export interface Product {
  name: string;
  image: string;
  alt: string;
}


export const products: Product[] = [
  {
    name: 'Taropan DSR',
    image: '/images/products/taropan-dsr-plain.jpg',
    alt: 'Taropan DSR pharmaceutical product',
  },
  {
    name: 'Neurovida',
    image: '/images/products/neurovida-plain.jpg',
    alt: 'Neurovida neurological health product',
  },
  {
    name: 'Raberef DSR',
    image: '/images/products/raberef-dsr-plain.jpg',
    alt: 'Raberef DSR pharmaceutical product',
  },
  {
    name: 'Pregavida-MNT',
    image: '/images/products/pregavida-mnt-plain.jpg',
    alt: 'Pregavida-MNT pharmaceutical product',
  },
  {
    name: 'Esovida',
    image: '/images/products/esovida-plain.jpg',
    alt: 'Esovida pharmaceutical product',
  },
  {
    name: 'Bliss-D3 60K',
    image: '/images/products/bliss-d3-60k-plain.jpg',
    alt: 'Bliss-D3 60K vitamin D3 product',
  },
  {
    name: 'Dolzida-SP',
    image: '/images/products/dolzida-sp-plain.jpg',
    alt: 'Dolzida-SP pharmaceutical product',
  },
  {
    name: 'Suhem',
    image: '/images/products/suhem-plain.jpg',
    alt: 'Suhem pharmaceutical product',
  },
  {
    name: 'Bilacys M',
    image: '/images/products/bilacys-m-plain.jpg',
    alt: 'Bilacys M pharmaceutical product',
  },
  {
    name: 'Flupirock',
    image: '/images/products/flupirock-plain.jpg',
    alt: 'Flupirock pharmaceutical product',
  },
  {
    name: 'Gabavida-NT',
    image: '/images/products/gabavida-nt.png',
    alt: 'Gabavida-NT pharmaceutical product',
  },
];

export interface BrandTickerItem {
  text: string;
  colorClass: string;
}

export const brandTickerItems: BrandTickerItem[] = [
  { text: 'TAROPAN DSR', colorClass: 'text-primary' },
  { text: 'NEUROVIDA', colorClass: 'text-brand-red' },
  { text: 'RABEREF DSR', colorClass: 'text-primary' },
  { text: 'PREGAVIDA-MNT', colorClass: 'text-brand-seabukhthon' },
  { text: 'ESOVIDA', colorClass: 'text-primary' },
  { text: 'BLISS-D3 60K', colorClass: 'text-brand-gold' },
  { text: 'DOLZIDA-SP', colorClass: 'text-brand-red' },
  { text: 'SUHEM', colorClass: 'text-brand-red' },
  { text: 'BILACYS M', colorClass: 'text-brand-seabukhthon' },
  { text: 'FLUPIROCK', colorClass: 'text-primary' },
  { text: 'GABAVIDA-NT', colorClass: 'text-brand-seabukhthon' },
];

export interface Slide {
  title: string;
  description: string;
  image?: string;
  bgImage?: string;
  bgImageMobile?: string;
  alt?: string;
}

export const heroSlides: Slide[] = [
  {
    title: 'Driven by 15 Years of Pharmaceutical Excellence',
    description: 'Bringing better therapies, trusted quality, and meaningful healthcare solutions across key therapeutic areas.',
    bgImage: '/images/betterTheaptyBanner.png',
    bgImageMobile: '/images/betterTheaptyBanner_p.png',
    alt: 'Better Therapies, Better Health - Tarokem Pharmaceuticals',
  },
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
  { icon: 'shield', value: 11, suffix: '+', label: 'Products' },
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
  'Taropan DSR', 'Neurovida', 'Raberef DSR', 'Pregavida-MNT',
  'Esovida', 'Bliss-D3 60K', 'Dolzida-SP', 'Suhem', 'Bilacys M', 'Flupirock', 'Gabavida-NT',
];

export const contactInfo = {
  address: 'H.No: 5-8-310 part, B N R Nagar, Hyderabad-500070, Telangana, INDIA.',
  phone: '+91 9848808268',
  email: 'sales@tarokem.com',
};

export const logoUrl = '/images/logo_blue.png';
export const footerLogoUrl = '/images/logo_blue.png';
export const aboutImageUrl = 'https://consiapharma.in/assets/images/resource/about-pharma.jpg';
