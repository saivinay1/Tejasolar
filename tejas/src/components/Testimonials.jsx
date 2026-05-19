import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBolt, faSlidersH, faCheck, faShieldAlt, faMicrochip } from '@fortawesome/free-solid-svg-icons';

import adani from '../assets/adani_solar.jpg';
import vikram from '../assets/vikram_solar.webp';
import polycab from '../assets/polycab.webp';
import waaree from '../assets/waaree.png';


export default function Testimonials() {
  const products = [

    {
      id: 1,
      title: 'Waaree Solar Panels',
      image: waaree,
      desc: 'Tier-1 high-efficiency monocrystalline N-type TOPCon PV modules designed for high energy yield and reliable performance in tropical environments.',
      features: [
        'Advanced N-Type TOPCon Technology',
        'Mitigated LID & PID for Long-Term Reliability',
        'Superior Performance under Low-Light Conditions',
      ],
      specs: {
        capacity: '550Wp - 575Wp',
        efficiency: '22.2% - 22.3% Efficiency',
        warranty: '30-Year Performance Warranty',
      },
    },
    {
      id: 2,
      title: 'Vikram Solar Panels',
      image: vikram,
      desc: 'Ultra-efficient half-cut cell panels engineered to maximize roof space utilization and increase energy yield in shading.',
      features: [
        'Multi-Busbar Cell Design',
        'Severe Weather Tolerance (5400 Pa)',
        'Low Temperature Coefficient',
      ],
      specs: {
        capacity: '450Wp - 550Wp',
        efficiency: '21.8% Efficiency',
        warranty: 'AP State Subsidy Approved',
      },
    },
    {
      id: 3,
      title: 'Polycab On-Grid Inverters',
      image: polycab,
      desc: 'Smart, cloud-connected string inverters featuring dual high-frequency MPPT inputs for optimized solar yields.',
      features: [
        'Dual MPPT Tracker Logic',
        'Smart App Grid Monitoring',
        'IP65 Waterproof Housing',
      ],
      specs: {
        capacity: '3 kW - 50 kW Solutions',
        efficiency: '98.6% Peak Efficiency',
        warranty: 'Built-in AC/DC SPD Protection',
      },
    },
    {
      id: 4,
      title: 'Adani Solar Panels',
      image: adani,
      desc: 'Tier-1 high-yield monocrystalline N-type PV modules built for maximum performance and durability under hot climates.',
      features: [
        'N-Type Cell Technology',
        'Zero LID & PID Degradation',
        'Excellent Low-Light Performance',
      ],
      specs: {
        capacity: '550Wp - 575Wp',
        efficiency: '22.3% Efficiency',
        warranty: '25-Year Performance Warranty',
      },
    },

  ];

  return (
    <section id="testimonials" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12 bg-bg-primary dark:bg-dark-bg-primary">

      {/* Centered Heading */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
          <FontAwesomeIcon icon={faStar} />
          <span>Tier-1 Technical Hardware</span>
        </span>
        <h2 className="inline-block relative pb-4 text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-tight after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-accent after:rounded-full">
          Our Products & Solutions
        </h2>
        <p className="max-w-2xl mx-auto mt-5 text-text-muted dark:text-dark-text-muted text-base md:text-[1.05rem] leading-relaxed">
          We install only premium-grade, field-tested components from industry giants to guarantee decades of high-yield clean energy generation.
        </p>
      </div>

      {/* Highlights Bar */}
      <div className="max-w-3xl mx-auto mb-16 p-6 bg-bg-secondary dark:bg-[#060c18] border border-border-color dark:border-dark-border rounded-3xl flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent-light dark:bg-accent/10 flex items-center justify-center shrink-0">
            <FontAwesomeIcon icon={faBolt} className="text-accent text-xl" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-text-main dark:text-dark-text-main">Starting from 2 KW</h4>
            <p className="text-text-muted dark:text-dark-text-muted text-xs mt-0.5">Scalable configurations for homes & small farms</p>
          </div>
        </div>

        <div className="hidden sm:block h-10 w-px bg-border-color dark:bg-dark-border"></div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent-light dark:bg-accent/10 flex items-center justify-center shrink-0">
            <FontAwesomeIcon icon={faSlidersH} className="text-accent text-xl" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-text-main dark:text-dark-text-main">100% Customized Setup</h4>
            <p className="text-text-muted dark:text-dark-text-muted text-xs mt-0.5">Optimized dynamically based on your site dimensions</p>
          </div>
        </div>
      </div>

      {/* Modern Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex flex-col bg-white dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent/35 dark:hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5"
          >
            {/* Card Image Area */}
            <div className="relative h-48 w-full overflow-hidden bg-bg-secondary shrink-0">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
            </div>

            {/* Card Details Area */}
            <div className="p-6 flex flex-col flex-grow justify-between">

              <div>
                {/* Title */}
                <h3 className="text-lg font-extrabold text-text-main dark:text-dark-text-main mb-3 leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted dark:text-dark-text-muted text-xs leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Key Features List */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-[0.72rem] text-text-main dark:text-dark-text-main font-semibold">
                      <FontAwesomeIcon icon={faCheck} className="text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Area */}
              <div className="border-t border-border-color dark:border-dark-border pt-4 mt-auto">
                <div className="flex flex-col gap-2 text-[0.7rem] font-bold text-text-muted dark:text-dark-text-muted">
                  <div className="flex justify-between items-center">
                    <span className="opacity-75">Capacity:</span>
                    <span className="text-text-main dark:text-dark-text-main">{p.specs.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-75">Efficiency:</span>
                    <span className="text-accent">{p.specs.efficiency}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-75">Standard:</span>
                    <span className="text-text-main dark:text-dark-text-main text-right truncate max-w-[120px]">{p.specs.warranty}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
