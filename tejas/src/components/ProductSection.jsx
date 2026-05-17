import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProductSection() {
  const products = [
    {
      id: 1,
      image: '/assets/solar_residential.png',
      category: 'Residential',
      title: 'Premium Rooftop Solar Grid',
      desc: 'Sleek, high-efficiency double-glass N-Type mono panels customized strictly for modern home roofs. Maximum offsets with visual integration.',
    },
    {
      id: 2,
      image: '/assets/solar_commercial.png',
      category: 'Commercial',
      title: 'Commercial & Industrial Solar Array',
      desc: 'Engineered for scalability. Flat-roof utility configurations and solar carport structures designed to cut long-term business energy overheads.',
    },
    {
      id: 3,
      image: '/assets/solar_farm_fields.png',
      category: 'Agricultural Grids',
      title: 'Fields (Form Fields) Panels',
      desc: 'High-capacity ground-mounted solar tracker panel structures specifically customized for agricultural crop fields, open farm lands, and utility agrivoltaic operations.',
    },
  ];

  const handleScrollToCalculator = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      {/* Centered Heading Block */}
      <div className="text-center mb-16">
        <h2 className="inline-block relative pb-4 text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-tight after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-accent after:rounded-full">
          Customized Solar Solutions
        </h2>
        <p className="max-w-2xl mx-auto mt-5 text-text-muted dark:text-dark-text-muted text-base md:text-[1.05rem] leading-relaxed">
          From microgrids powering enterprise warehouse systems to modular smart residential roofs and specialized crop field installations, we design systems that generate maximum clean yields.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {products.map((p) => (
          <div 
            key={p.id} 
            className="flex flex-col bg-white dark:bg-dark-primary/25 border border-border-color dark:border-dark-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-accent/40 dark:hover:border-accent/45 transition-all duration-300 group"
          >
            {/* Card Image Area */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <span className="absolute top-4 left-4 bg-accent text-text-main font-bold text-[0.72rem] md:text-xs uppercase px-3 py-1 rounded-full z-10 shadow-md">
                {p.category}
              </span>
            </div>

            {/* Card Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-text-main dark:text-dark-text-main mb-3 group-hover:text-accent transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="text-text-muted dark:text-dark-text-muted text-sm leading-relaxed mb-6 flex-grow">
                {p.desc}
              </p>
              <a 
                href="#contact" 
                onClick={handleScrollToCalculator}
                className="mt-auto inline-flex items-center gap-2 font-bold text-xs md:text-sm text-text-main dark:text-dark-text-main hover:text-accent dark:hover:text-accent transition-all group-hover:translate-x-1 duration-300"
              >
                <span>Calculate Setup Cost</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-accent group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
