import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Headphones, ShieldCheck, HeartHandshake, Target } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import Stats from '@/components/Stats';
import BrandTicker from '@/components/BrandTicker';
import { useInView } from '@/hooks/useInView';

const pillars = [
  { icon: Users, title: 'Teamwork' },
  { icon: Lightbulb, title: 'Innovative Mindset' },
  { icon: Headphones, title: 'Responsiveness to Customers' },
  { icon: ShieldCheck, title: 'Safety' },
  { icon: HeartHandshake, title: 'Social Responsibilities' },
  { icon: Target, title: 'Commitment' },
];

function AboutSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`max-w-4xl mx-auto space-y-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
            About Tarokem Pharmaceuticals
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Tarokem Pharmaceuticals, based in <strong>Navi Mumbai, Maharashtra, India</strong>, is a leader in the nutraceutical and functional food industry. We specialize in delivering <strong>scientifically backed healthcare solutions</strong> that enhance health, wellness, and nutrition.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We currently have over ten contract manufacturers producing our branded products at various locations across India.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We have established a pan-India presence with 49+ sales executives marketing our brands to over 9,000+ healthcare practitioners in specialties such as orthopedics, gynecology, diabetes, cardiology, neurology, and physicians.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Employees are taught the value of work culture and the critical role of integrity in it beginning with their induction. Our honesty is reflected in our SOPs (Standard Operating Procedures) and the practices that follow them. Customers and the industry as a whole have gained a lot of trust as a result of this.
          </p>
          <p className="text-2xl font-heading font-bold text-primary pt-4 leading-relaxed">
            To cultivate a work culture that combines technical capabilities with a keen and compassionate grasp of the civilizations with which we interact.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const values = [
    { title: 'Core Values', description: 'Driven by Innovation, Care, and Quality to deliver ethical and sustainable healthcare solutions' },
    { title: 'Vision', description: 'Aspiring to be India\u2019s leading name in pharmaceuticals, health, wellness, innovation, and quality care' },
    { title: 'Mission', description: 'Providing high-quality, innovative medicines that are accessible, affordable, and available worldwide' },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#e9f8f8' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h4 className="text-2xl font-heading font-bold text-primary mb-4">{v.title}</h4>
              <p className="text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-gray-900 text-center mb-12 pb-6">
          Our Pillars of Success: Innovation, Commitment & Trust
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`group flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition-all duration-500 ${
                  inView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-500">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="font-heading font-semibold text-gray-800 text-sm">{p.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkProcess() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const steps = [
    { title: 'Contact To Test', icon: '01' },
    { title: 'Lab Generates Proposal', icon: '02' },
    { title: 'Get Clean & Fresh', icon: '03' },
    { title: 'Enjoy Our Service', icon: '04' },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#e9f8f8' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h6 className="text-primary font-heading font-bold text-lg uppercase tracking-wide mb-2">Work Process</h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative text-center p-8 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="text-6xl font-heading font-extrabold text-primary/20 mb-4">{step.icon}</div>
              <h4 className="text-xl font-heading font-bold text-gray-800">{step.title}</h4>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageBanner
        title="About"
        backgroundImage="https://consiapharma.in/assets/images/background/about-banner-three.jpg"
      />
      <AboutSection />
      <ValuesSection />
      <PillarsSection />
      <Stats />
      <WorkProcess />
      <BrandTicker />
    </>
  );
}
