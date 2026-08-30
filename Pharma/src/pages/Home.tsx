import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, products, aboutImageUrl } from '@/data/siteData';
import { useInView } from '@/hooks/useInView';
import WhyChoose from '@/components/WhyChoose';
import Stats from '@/components/Stats';
import BrandTicker from '@/components/BrandTicker';

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index: number) => setCurrent((index + heroSlides.length) % heroSlides.length);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      goTo(current + 1);
    } else if (distance < -minSwipeDistance) {
      goTo(current - 1);
    }
  };

  return (
    <section
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative w-full min-h-[580px] landscape:min-h-[380px] sm:min-h-[440px] md:aspect-[2/1] md:min-h-[480px] md:max-h-[760px] flex items-center overflow-hidden touch-pan-y py-4 md:py-0"
      style={{ background: 'linear-gradient(-90deg, #2e1a99, #160b52 100%)' }}
    >
      {/* Background image layer for slides with bgImage */}
      {heroSlides.map((slide, i) =>
        slide.bgImage ? (
          <div
            key={`bg-${i}`}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
            }}
          >
            <picture className="w-full h-full block">
              {slide.bgImageMobile && (
                <source media="(max-width: 767px) and (orientation: portrait)" srcSet={slide.bgImageMobile} />
              )}
              <img
                src={slide.bgImage}
                alt={slide.alt || 'Banner'}
                className="w-full h-full object-cover object-top sm:object-center"
              />
            </picture>
            {/* Subtle gradient overlay for contrast on text */}
            {slide.title ? (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/40 to-transparent" />
            ) : null}
          </div>
        ) : null
      )}

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="relative">
          {/* Height spacer keeps the slide track tall enough for absolutely positioned slides */}
          <div className="invisible pointer-events-none" aria-hidden="true">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center py-4 md:py-8">
              <div className="text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-snug md:leading-tight mb-2 sm:mb-3 md:mb-6 text-balance">
                  {heroSlides[1]?.title || 'Wellness Solutions'}
                </h1>
                <p className="text-xs sm:text-sm md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  {heroSlides[1]?.description || ''}
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-8 sm:py-3.5 text-xs sm:text-base font-heading font-semibold rounded-lg">
                  Explore Our Products
                </span>
              </div>
              <div className="flex justify-center h-[130px] sm:h-[220px] md:h-[450px]">
              </div>
            </div>
          </div>

          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'translateX(0)' : `translateX(${(i - current) * 40}px)`,
                pointerEvents: i === current ? 'auto' : 'none',
              }}
            >
              {slide.title ? (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
                  <div className="text-center sm:text-left">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-extrabold text-white leading-snug md:leading-tight mb-2 sm:mb-3 md:mb-5 text-balance drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 max-w-lg mx-auto sm:mx-0 drop-shadow-md line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                      {slide.description}
                    </p>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-xs sm:text-sm md:text-base bg-primary hover:bg-primary-600 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 group"
                    >
                      Explore Our Products
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    {slide.image && (
                      <img
                        src={slide.image}
                        alt={slide.alt || ''}
                        className="max-h-[130px] sm:max-h-[200px] md:max-h-[450px] object-contain rounded-2xl drop-shadow-2xl"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  to="/products"
                  className="w-full h-full block cursor-pointer"
                  aria-label={slide.alt || 'Explore Our Products'}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow (Desktop only) */}
      <button
        onClick={() => goTo(current - 1)}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-primary text-white items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right arrow (Desktop only) */}
      <button
        onClick={() => goTo(current + 1)}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-primary text-white items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 leading-tight">
              Driven by 15 Years of Pharmaceutical Experience
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Built on 15 years of experience in the pharmaceutical industry, Tarokem Pharmaceuticals was founded with a clear vision—to bring better therapies, trusted quality, and meaningful healthcare solutions to patients and healthcare professionals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, our experience across the pharmaceutical sector has given us a strong understanding of evolving healthcare needs, medical science, product quality, and the importance of building lasting relationships with healthcare professionals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we are transforming that experience into a focused pharmaceutical company committed to delivering reliable, high-quality, and scientifically driven products across key therapeutic areas.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-600 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className={`relative ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary/20 rounded-2xl" />
            <img
              src={aboutImageUrl}
              alt="Tarokem Pharmaceuticals - Driven by 15 Years of Pharmaceutical Experience"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
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
    <section className="py-24" style={{ backgroundColor: '#e5e0f7' }}>
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

function CTASection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#160b52' }}>
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
      <Stats />
      <BrandTicker />
      <CTASection />
    </>
  );
}
