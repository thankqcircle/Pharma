import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, products, aboutImageUrl } from '@/data/siteData';
import { useInView } from '@/hooks/useInView';
import WhyChoose from '@/components/WhyChoose';
import Stats from '@/components/Stats';
import BrandTicker from '@/components/BrandTicker';

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent((index + heroSlides.length) % heroSlides.length);

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(-90deg, #0d7a83, #162a41 100%)' }}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`transition-all duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`text-center lg:text-left ${i === current ? 'animate-slide-in-left' : ''}`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-6 text-balance">
                  {slide.title}
                </h1>
                <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  {slide.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-600 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
                >
                  Explore Our Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className={`flex justify-center ${i === current ? 'animate-slide-in-right' : ''}`}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="max-h-[400px] md:max-h-[500px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-10 h-3 bg-primary' : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref} className={`space-y-6 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h6 className="text-primary font-heading font-bold text-lg uppercase tracking-wide">About Us</h6>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Tarokem Pharmaceuticals, based in Navi Mumbai, Maharashtra, India, we specialize in providing innovative, high-quality nutraceuticals and functional food solutions. Our mission is to deliver scientifically backed healthcare products that promote better health and well-being.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Tarokem, we prioritize excellence in research, development, and manufacturing, ensuring our products meet the highest standards of quality and compliance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a focus on delivering impactful solutions, Tarokem Pharmaceuticals continues to expand its portfolio, forging a path toward better health and well-being for all.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className={`relative ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary/20 rounded-2xl" />
            <img
              src={aboutImageUrl}
              alt="Tarokem Pharmaceuticals - Leading Nutraceutical and Functional Food Manufacturer in India"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24" style={{ backgroundColor: '#cde7e7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Our Nutraceutical & Pharmaceutical Products
          </h1>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.slice(0, 4).map((product, i) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-white font-heading font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-600 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:shadow-xl group"
          >
            More Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://consiapharma.in/assets/images/background/parallax-img.jpg)' }}
    >
      <div className="absolute inset-0 bg-[#06194b]/60" />
      <div className="relative flex items-center justify-center">
        <a
          href="https://youtu.be/_8h1HBDJ__c?si=YuLGYXB5WPxE7oNn"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-24 h-24 rounded-full bg-primary/90 hover:bg-primary transition-colors duration-500"
        >
          <span className="absolute inset-0 rounded-full bg-primary/60 animate-ping" />
          <Play className="w-10 h-10 text-white ml-1" fill="white" />
        </a>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#06194b' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-white leading-tight max-w-4xl mx-auto">
          Our products are made in high-tech facilities that have been selected and audited to meet international standards (WHO-cGMP Certified)
        </h2>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <WhyChoose />
      <VideoSection />
      <Stats />
      <BrandTicker />
      <CTASection />
    </>
  );
}
