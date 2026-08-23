import { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import BrandTicker from '@/components/BrandTicker';
import { products } from '@/data/siteData';
import { useInView, useResponsivePageSize } from '@/hooks/useInView';

function ProductGrid() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [page, setPage] = useState(1);
  const pageSize = useResponsivePageSize({ base: 2, sm: 4, lg: 6 });

  const totalPages = Math.ceil(products.length / pageSize);
  const start = (page - 1) * pageSize;
  const pageProducts = products.slice(start, start + pageSize);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <section className="py-24" style={{ backgroundColor: '#cde7e7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h6 className="text-primary font-heading font-bold text-lg uppercase tracking-wide mb-2">Featured Products</h6>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageProducts.map((product, i) => (
            <div
              key={start + i}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ${
                inView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-white font-heading font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 rounded-full hover:bg-primary hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-heading font-semibold transition-colors ${
                p === page ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 rounded-full hover:bg-primary hover:text-white transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
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

export default function Products() {
  return (
    <>
      <PageBanner
        title="Products"
        backgroundImage="https://consiapharma.in/assets/images/background/product-banner.jpg"
      />
      <ProductGrid />
      <BrandTicker />
      <CTASection />
    </>
  );
}
