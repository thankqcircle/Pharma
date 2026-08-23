import { Rocket, Cog, CheckCircle, Users, Handshake, Pill } from 'lucide-react';
import { features } from '@/data/siteData';
import { useInView } from '@/hooks/useInView';

const iconMap = {
  rocket: Rocket,
  cog: Cog,
  'check-circle': CheckCircle,
  users: Users,
  handshake: Handshake,
  pill: Pill,
};

export default function WhyChoose() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundColor: '#f1eefb' }}
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-90"
        style={{ backgroundImage: 'url(https://consiapharma.in/assets/images/background/man-working-as-pharmacist_23-2151734604.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f1eefb] via-[#f1eefb]/95 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h6 className="text-primary font-heading font-bold text-lg mb-3 uppercase tracking-wide">Why Choose</h6>
          <p className="text-gray-200 text-lg leading-relaxed">
            Tarokem Pharmaceuticals champions sustainable healthcare with eco-friendly practices and ethical sourcing. Our innovative research ensures safe, high-quality pharmaceutical solutions for a healthier future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.title}
                className={`group p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:border-primary/30 border border-transparent transition-all duration-500 ${
                  inView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-gray-900 font-heading font-bold text-xl mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
