import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function CallUsBanner() {
  return (
    <section className="py-16 bg-primary dark:bg-dark-primary text-white border-y border-border-color dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
          <div className="w-14 h-14 flex items-center justify-center shrink-0 rounded-2xl bg-white/10 text-accent text-xl shadow-inner">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">
              Have a Question? Talk to our Expert
            </h3>
            <p className="text-white/70 text-sm md:text-base max-w-[550px] leading-relaxed">
              Our dedicated team members are available to guide you 7 days a week through every phase of your solar offset.
            </p>
          </div>
        </div>

        {/* Right Side CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <a 
            href="tel:+91-9391110007" 
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-lg transition-all duration-300 active:scale-98 shadow-md text-center text-sm md:text-base cursor-pointer"
          >
            <FontAwesomeIcon icon={faPhone} />
            <span>Call +91-9391110007</span>
          </a>
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-lg transition-all duration-300 border border-white/20 hover:border-white/35 active:scale-98 text-center text-sm md:text-base cursor-pointer"
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Schedule Virtual Consult</span>
          </a>
        </div>

      </div>
    </section>
  );
}
