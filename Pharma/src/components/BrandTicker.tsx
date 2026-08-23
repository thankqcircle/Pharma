import { brandTickerItems } from '@/data/siteData';

export default function BrandTicker() {
  const items = [...brandTickerItems, ...brandTickerItems];

  return (
    <section className="py-8 overflow-hidden" style={{ backgroundColor: '#cde7e7' }}>
      <div className="flex animate-slide-left gap-6 whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 px-10 py-5 rounded-xl bg-white shadow-sm">
            <h4
              className={`font-heading font-bold text-2xl md:text-3xl ${item.colorClass}`}
            >
              {item.text}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
