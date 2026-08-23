import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  backgroundImage: string;
}

export default function PageBanner({ title, backgroundImage }: PageBannerProps) {
  return (
    <section
      className="relative pt-32 pb-20 bg-cover bg-center min-h-[320px] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/80" />
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 animate-fade-up">
          {title}
        </h1>
        <nav className="flex items-center justify-center gap-2 text-sm text-gray-200 animate-fade-in">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-semibold">{title}</span>
        </nav>
      </div>
    </section>
  );
}
