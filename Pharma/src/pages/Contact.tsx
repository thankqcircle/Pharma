import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { contactInfo } from '@/data/siteData';
import { useInView } from '@/hooks/useInView';

function ContactInfo() {
  const items = [
    { icon: MapPin, title: 'Location', value: contactInfo.address },
    { icon: Phone, title: 'Contact', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: Mail, title: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group text-center p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-500">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-lg font-heading font-bold text-gray-900 mb-3">{item.title}</h4>
                {item.href ? (
                  <a href={item.href} className="text-gray-600 hover:text-primary transition-colors text-sm leading-relaxed">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900">
            Have Any Questions? Contact With Us
          </h2>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-primary/5 rounded-2xl animate-scale-in">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-lg font-heading font-semibold hover:bg-primary-600 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className={`space-y-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary hover:bg-primary-600 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:shadow-xl group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="bg-gray-100">
      <div className="w-full h-[400px]">
        <iframe
          title="Tarokem Pharmaceuticals Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.8466!3d19.1333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA4JzAwLjAiTiA3MsKwNTAnNDcuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact"
        backgroundImage="https://consiapharma.in/assets/images/background/contact-three.jpg"
      />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </>
  );
}
