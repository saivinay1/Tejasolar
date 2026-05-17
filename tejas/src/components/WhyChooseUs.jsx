import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faHeadset, faCompass, faHardHat } from '@fortawesome/free-solid-svg-icons';

export default function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      icon: faSolarPanel,
      title: 'Top-Tier N-Type Panels',
      desc: 'We utilize ultra-high-efficiency bi-facial double-glass modules that generate up to 22.8% more solar electricity than industry standard setups.',
    },
    {
      id: 2,
      icon: faHeadset,
      title: 'Proactive Support',
      desc: 'Reliable support and assistance available round the clock to ensure smooth operation and peace of mind.',
    },
    {
      id: 3,
      icon: faCompass,
      title: 'Free Site Survey & Design',
      desc: 'Free site inspection conducted by experienced engineers to ensure accurate solar planning.',
    },
    {
      id: 4,
      icon: faHardHat,
      title: 'In-House Solar Engineers',
      desc: 'Expert design and installation executed strictly by local, certified in-house technicians. Zero subcontractors, guaranteeing clean craftsmanship.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-24 bg-bg-secondary dark:bg-[#060c18] border-y border-border-color dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="inline-block relative pb-4 text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-tight after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-accent after:rounded-full">
            Why Choose Teja Solar?
          </h2>
          <p className="max-w-2xl mx-auto mt-5 text-text-muted dark:text-dark-text-muted text-base md:text-[1.05rem] leading-relaxed">
            We blend state-of-the-art N-Type double-glass solar panels with elite engineering standards to deliver optimal electricity offset solutions.
          </p>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((c) => (
            <div 
              key={c.id} 
              className="flex flex-col p-6 bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border rounded-2xl hover:shadow-md hover:border-accent/35 dark:hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-5 text-lg">
                <FontAwesomeIcon icon={c.icon} />
              </div>
              <h4 className="text-lg font-bold text-text-main dark:text-dark-text-main mb-2.5 leading-snug">
                {c.title}
              </h4>
              <p className="text-text-muted dark:text-dark-text-muted text-[0.88rem] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
