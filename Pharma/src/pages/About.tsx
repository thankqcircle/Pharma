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
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            15+ Years of Industry Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
            Driven by 15 Years of Pharmaceutical Experience
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Built on 15 years of experience in the pharmaceutical industry, our company was founded with a clear vision—to bring better therapies, trusted quality, and meaningful healthcare solutions to patients and healthcare professionals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Over the years, our experience across the pharmaceutical sector has given us a strong understanding of evolving healthcare needs, medical science, product quality, and the importance of building lasting relationships with healthcare professionals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we are transforming that experience into a focused pharmaceutical company committed to delivering reliable, high-quality, and scientifically driven products across key therapeutic areas.
          </p>

          <div className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary my-6">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Our Approach</h3>
            <p className="text-gray-700 font-medium">
              Understand the need, deliver the right therapy, and create lasting value.
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            With a combination of industry experience, scientific thinking, quality-focused processes, and a passion for healthcare, we aim to build a pharmaceutical organization that healthcare professionals can trust and patients can rely on.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const values = [
    {
      title: 'Our Vision',
      description:
        'To become a trusted pharmaceutical company recognized for quality, innovation, and better healthcare outcomes.',
    },
    {
      title: 'Our Mission',
      description:
        'To provide better therapies through quality-driven products, scientific excellence, and responsible pharmaceutical practices, while continuously working towards improving the health and well-being of the communities we serve.',
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#f1eefb' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h4 className="text-2xl font-heading font-bold text-primary mb-4">{v.title}</h4>
              <p className="text-gray-600 leading-relaxed text-base">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Tagline Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-700 text-white p-8 md:p-10 rounded-2xl shadow-xl text-center">
          <p className="text-xl md:text-2xl font-heading font-bold tracking-wide">
            15 Years of Experience. One Purpose — Better Therapies. <span className="text-emerald-400 font-extrabold">Better Health.</span>
          </p>
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
    <section className="py-20" style={{ backgroundColor: '#f1eefb' }}>
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
