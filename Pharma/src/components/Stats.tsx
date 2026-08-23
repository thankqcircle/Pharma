import { Brain, Shield, ThumbsUp, Target } from 'lucide-react';
import { stats } from '@/data/siteData';
import { useInView, useCountUp } from '@/hooks/useInView';

const iconMap = {
  brain: Brain,
  shield: Shield,
  'thumbs-up': ThumbsUp,
  target: Target,
};

function StatCard({ icon, value, suffix, label, start }: {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary transition-transform duration-500 group-hover:scale-110">
        <Icon className="w-16 h-16" strokeWidth={1.5} />
      </div>
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
        {count}<span className="text-primary">{suffix}</span>
      </div>
      <h5 className="text-gray-300 font-heading font-semibold text-lg">{label}</h5>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://consiapharma.in/assets/images/background/funfact-1.jpg)' }}
    >
      <div className="absolute inset-0 bg-[#160b52]/85" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
