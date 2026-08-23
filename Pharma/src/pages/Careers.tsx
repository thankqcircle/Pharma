import { useState } from 'react';
import { X, Upload, Briefcase } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { jobs } from '@/data/siteData';
import { useInView } from '@/hooks/useInView';

function CareersIntro() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={inView ? 'animate-slide-in-left' : 'opacity-0'}>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-6">
              Be Part of a Team Revolutionizing Global Healthcare
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Tarokem, we are committed to fostering innovation, embracing inclusivity, and empowering our people to thrive.
            </p>
          </div>
          <div className={inView ? 'animate-slide-in-right' : 'opacity-0'}>
            <img
              src="https://consiapharma.in/assets/images/banner/career.jpg"
              alt="Career at Tarokem"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({ title, description, onApply, index, inView }: {
  title: string;
  description: string;
  onApply: () => void;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
          <Briefcase className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">{title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>
          <button
            onClick={onApply}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-heading font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

function HiringSection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [modalJob, setModalJob] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900">We're Hiring</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, i) => (
            <JobCard
              key={job.title}
              title={job.title}
              description={job.description}
              onApply={() => setModalJob(job.title)}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      {modalJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setModalJob(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 animate-scale-in">
            <button
              onClick={() => setModalJob(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h5 className="text-xl font-heading font-bold text-gray-900 mb-6 pr-8">
              Apply For {modalJob}
            </h5>
            <form onSubmit={(e) => { e.preventDefault(); setModalJob(null); }} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Years of Experience"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              <label className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors">
                <Upload className="w-5 h-5 text-primary" />
                <span className="text-gray-500 text-sm">Upload your resume</span>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-600 text-white font-heading font-semibold rounded-lg transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function LifeAtTarokem() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-gray-900 text-center mb-12 pb-6">
          Life at Tarokem: Where Innovation Meets Inclusivity
        </h2>
        <div className={`rounded-2xl overflow-hidden shadow-2xl ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <img
            src="https://consiapharma.in/assets/images/banner/career-two.avif"
            alt="Life at Tarokem"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function Careers() {
  return (
    <>
      <PageBanner
        title="Careers"
        backgroundImage="https://consiapharma.in/assets/images/background/careers-two.jpg"
      />
      <CareersIntro />
      <HiringSection />
      <LifeAtTarokem />
    </>
  );
}
