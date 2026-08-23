import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { footerLogoUrl, footerProducts, contactInfo } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="text-gray-700 border-t-[10px] border-primary" style={{ backgroundColor: '#f1eefb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Contact */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={footerLogoUrl} alt="Tarokem Pharmaceuticals" className="h-16" />
            </Link>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="md:ml-8">
            <h4 className="text-gray-900 font-heading font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-2.5 text-sm">
              {footerProducts.map((p) => (
                <li key={p}>
                  <Link
                    to="/products"
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="md:ml-8">
            <h4 className="text-gray-900 font-heading font-bold text-lg mb-6">Useful Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-gray-900 font-heading font-bold text-lg mb-6">Subscribe</h4>
            <p className="text-sm leading-relaxed mb-5">
              Get the latest in pharmaceuticals—new drugs, industry updates, and exclusive offers straight to your inbox
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="flex-1 px-4 py-3 bg-white text-gray-700 text-sm rounded-l-lg border border-gray-200 focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-primary hover:bg-primary-600 text-white rounded-r-lg transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center">
        <p className="text-sm">
          <Link to="/" className="text-primary hover:underline">tarokem pharmaceuticals</Link>
          {' '}&copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
