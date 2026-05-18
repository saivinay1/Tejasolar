import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faAward,
  faCheckCircle,
  faInfoCircle,
  faHandHoldingHand,
  faPercent,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

export default function PMSuryaGhar() {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplayRef = useRef(null);

  const subsidies = [
    {
      capacity: '1 kW System',
      subsidy: '₹ 30,000',
      avgCost: '₹ 50,000 - 60,000',
      netCost: '₹ 20,000 - 30,000',
      description: 'Ideal for small residential homes with 1-2 rooms and basic energy loads (lights, fans, TV).',
      popular: false,
    },
    {
      capacity: '2 kW System',
      subsidy: '₹ 60,000',
      avgCost: '₹ 1,00,000 - 1,20,000',
      netCost: '₹ 40,000 - 60,000',
      description: 'Best for standard double-bedroom households with minor cooling loads (fridge, 1 small AC).',
      popular: true,
    },
    {
      capacity: '3 kW - 10 kW',
      subsidy: '₹ 78,000 (Max)',
      avgCost: '₹ 1,50,000 - 1,80,000',
      netCost: '₹ 72,000 - 1,02,000',
      description: 'Maximum financial benefit. Perfect for standard homes with multiple ACs, heaters, or heavy appliances.',
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: faLightbulb,
      title: '300 Units Free Electricity',
      desc: 'Slash your monthly electricity bill down to zero and earn additional income by feeding excess energy back to the state grid.',
    },
    {
      icon: faPercent,
      title: 'Zero-Collateral Solar Loans',
      desc: 'Get highly subsidized solar loans (under 7% p.a.) from partner banks like SBI, Canara Bank, Union Bank, and Bank of Baroda.',
    },
    {
      icon: faHandHoldingHand,
      title: 'End-to-End Assistance',
      desc: 'Teja Solar manages your entire application: net-metering approvals, site inspections, NREDCAP paperwork, and direct subsidy release.',
    },
  ];

  // Auto-play government approval slides
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev < 2 ? prev + 1 : 0));
    }, 3800);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const handleDotClick = (index) => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    setActiveSlide(index);
  };

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
    <section className="py-20 md:py-24 bg-white dark:bg-dark-bg-primary transition-colors duration-300 relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* PM SURYA GHAR Trust Banner Section - Mimics User Reference Image EXACTLY */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 border-b border-gray-100 dark:border-dark-border/40 pb-16 mb-20 select-none">

          {/* Left Column: Trust Badges / Emblem Carousel with Dots (Width: 60% on desktop) */}
          <div className="w-full lg:w-[60%] flex flex-col items-center">

            {/* Header Text matching reference */}
            <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white tracking-tight uppercase leading-none text-center mb-10 font-sans">
              PM SURYA GHAR
            </h2>

            {/* Carousel Slide Viewer */}
            <div className="relative w-full h-44 sm:h-48 md:h-52 flex items-center justify-center overflow-hidden">

              {/* Slide 1: Official MNRE Approved Channel Partner stamp image */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${activeSlide === 0 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-5 sm:gap-7 px-4 bg-white/70 dark:bg-dark-primary/30 rounded-3xl p-5 border border-border-color dark:border-dark-border/30 shadow-sm max-w-lg">
                  <img 
                    src="https://5.imimg.com/data5/SELLER/Default/2023/7/327130975/GM/FD/WK/193249440/mnre-logo.png" 
                    alt="Official MNRE Approved Channel Partner Logo" 
                    className="w-18 h-18 sm:w-22 sm:h-22 object-contain shrink-0" 
                  />
                  <div className="flex flex-col text-left">
                    <strong className="text-lg sm:text-xl font-black text-red-600 dark:text-red-500 tracking-tight leading-tight uppercase">
                      MNRE APPROVED
                    </strong>
                    <span className="text-[0.65rem] sm:text-[0.72rem] font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-widest mt-1.5 leading-none">
                      GOVERNMENT OF INDIA CHANNEL PARTNER
                    </span>
                    <p className="text-xs text-text-muted dark:text-dark-text-muted mt-2 max-w-xs leading-relaxed font-medium">
                      Teja Solar is registered as an approved rooftop solar integrator with the Ministry of New & Renewable Energy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide 2: Official Ministry of New and Renewable Energy Emblem image */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${activeSlide === 1 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
              >
                <div className="flex items-center gap-5 sm:gap-7 px-4 bg-white/70 dark:bg-dark-primary/30 rounded-3xl p-5 border border-border-color dark:border-dark-border/30 shadow-sm max-w-lg">
                  <img 
                    src="https://ammoniaenergy.org/wp-content/uploads/2023/02/MNRE_India.png" 
                    alt="Official MNRE India Logo" 
                    className="w-18 h-18 sm:w-22 sm:h-22 object-contain shrink-0 bg-white rounded-xl p-1 shadow-sm" 
                  />
                  <div className="flex flex-col text-left justify-center">
                    <span className="text-[0.66rem] sm:text-[0.74rem] font-bold text-text-main dark:text-white leading-none">
                      नवीन एवं नवीकरणीय ऊर्जा मंत्रालय
                    </span>
                    <strong className="text-base sm:text-[1.18rem] font-black text-text-main dark:text-white uppercase tracking-tight leading-snug mt-1 max-w-[280px]">
                      MINISTRY OF NEW & RENEWABLE ENERGY
                    </strong>
                    <span className="text-[0.6rem] sm:text-[0.65rem] font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-widest mt-1.5 leading-none">
                      GOVERNMENT OF INDIA
                    </span>
                  </div>
                </div>
              </div>

              {/* Slide 3: PM SURYA GHAR MUFT BIJLI YOJANA branding text logo */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${activeSlide === 2 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
              >
                <div className="flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0c2240] dark:text-[#50b7ff] tracking-tight uppercase leading-none">
                    PM SURYA GHAR
                  </h3>
                  <strong className="text-xl sm:text-2xl font-black text-[#dc2626] tracking-tight uppercase leading-none mt-2">
                    MUFT BIJLI YOJANA
                  </strong>
                  <span className="text-[0.62rem] sm:text-[0.68rem] font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-widest mt-3.5 leading-none">
                    ⚡ Central Govt. Free Electricity Subsidy Scheme
                  </span>
                </div>
              </div>

            </div>

            {/* Carousel navigation Dots matching reference EXACTLY */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === i
                      ? 'bg-black dark:bg-white scale-110 shadow-sm'
                      : 'bg-gray-300 dark:bg-dark-border hover:bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Premium Narendra Modi Photo with Rounded Saffron Vest (Width: 35%) */}
          <div className="w-full lg:w-[35%] flex justify-center">
            <div className="relative p-1.5 border-2 border-[#36FB04] dark:border-[#36FB04] rounded-[2.5rem] shadow-lg bg-white dark:bg-dark-primary/10 overflow-hidden max-w-[280px] sm:max-w-[310px]">
              <img
                src="https://theleaderspage.com/wp-content/uploads/2019/11/Narendra-Modi-the-Leaders-Page.png"
                alt="Prime Minister Narendra Modi - PM Surya Ghar Muft Bijli Yojana"
                className="w-full h-auto object-cover rounded-[2.2rem]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center select-none z-10 pointer-events-none">
                <span className="bg-black/80 backdrop-blur-sm text-white font-extrabold text-[0.6rem] sm:text-[0.68rem] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Shri Narendra Modi
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Subsidy Slab Rate Structure & Empanellment Details Grid - Neatly structured below trust banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Subsidy Slabs Cards (8 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3.5 mb-2 pl-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              <h3 className="text-xl md:text-2xl font-extrabold text-text-main dark:text-dark-text-main uppercase tracking-tight">
                Government Subsidy Structure
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {subsidies.map((slab, i) => (
                <div
                  key={i}
                  className={`relative p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-50/50 dark:bg-dark-primary/15 border rounded-3xl transition-all duration-300 select-none ${slab.popular
                      ? 'border-[#268BFF]/45 dark:border-[#268BFF]/50 shadow-md ring-1 ring-[#268BFF]/30'
                      : 'border-border-color dark:border-dark-border hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-md'
                    }`}
                >
                  {slab.popular && (
                    <span className="absolute -top-3.5 left-6 bg-[#268BFF] text-white font-extrabold text-[0.66rem] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      Most Popular Setup
                    </span>
                  )}

                  <div className="flex-grow max-w-md">
                    <h4 className="text-lg md:text-xl font-extrabold text-text-main dark:text-dark-text-main leading-none">
                      {slab.capacity}
                    </h4>
                    <p className="text-text-muted dark:text-dark-text-muted text-xs md:text-sm mt-3 leading-relaxed">
                      {slab.description}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-[0.72rem] md:text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase">
                      <span>Est. Cost: <strong className="text-text-main dark:text-dark-text-main">{slab.avgCost}</strong></span>
                      <span className="hidden sm:inline text-border-color dark:text-dark-border">|</span>
                      <span>Net Consumer Cost: <strong className="text-emerald-500">{slab.netCost}</strong></span>
                    </div>
                  </div>

                  {/* Subsidy Value Bubble */}
                  <div className="shrink-0 flex flex-col items-center justify-center p-4 bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 dark:border-emerald-500/10 rounded-2xl md:w-36 md:h-24 text-center">
                    <span className="text-[0.62rem] md:text-[0.68rem] text-emerald-600 dark:text-emerald-400 font-extrabold uppercase tracking-widest leading-none mb-1">
                      Direct Subsidy
                    </span>
                    <strong className="text-xl md:text-2xl font-extrabold text-emerald-500 leading-none">
                      {slab.subsidy}
                    </strong>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[0.72rem] md:text-xs text-text-muted dark:text-dark-text-muted leading-relaxed pl-2 mt-2 flex items-start gap-2">
              <FontAwesomeIcon icon={faInfoCircle} className="text-accent shrink-0 mt-0.5" />
              <span>Subsidies are deposited directly into the consumer's bank account within 30 days of installation, site inspection, and net-metering synchronization by local DISCOM officials.</span>
            </p>
          </div>

          {/* Right Column - Trust Credentials and Vendor Benefits (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-4">
            <div className="flex items-center gap-3.5 mb-2 pl-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              <h3 className="text-xl md:text-2xl font-extrabold text-text-main dark:text-dark-text-main uppercase tracking-tight">
                Scheme Benefits & Trust
              </h3>
            </div>

            {/* Scheme benefits bullet grid */}
            <div className="flex flex-col gap-5">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50/50 dark:bg-dark-primary/15 border border-border-color dark:border-dark-border rounded-2xl hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center text-accent text-lg shadow-sm">
                    <FontAwesomeIcon icon={b.icon} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-extrabold text-text-main dark:text-dark-text-main leading-tight mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-text-muted dark:text-dark-text-muted text-xs md:text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Andhra Pradesh Official Empanelled Vendor Card */}
            <div className="relative p-6 border border-amber-500/25 dark:border-amber-500/30 rounded-3xl bg-amber-500/5 shadow-md overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full filter blur-2xl pointer-events-none"></div>

              <h4 className="text-base font-extrabold text-text-main dark:text-dark-text-main flex items-center gap-2 mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-amber-500 text-base" />
                <span>NREDCAP Registered Partner</span>
              </h4>
              <p className="text-text-muted dark:text-dark-text-muted text-xs md:text-sm leading-relaxed mb-4 font-medium">
                Teja Solar Solutions is an officially approved rooftop solar vendor under NREDCAP and APCPDCL/APEPDCL. We handle the entire application process, net-metering approvals, and bank financing coordination.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.66rem] text-amber-700 dark:text-amber-400 font-extrabold uppercase tracking-wide">
                <span>✔ 100% Subsidy Guarantee</span>
                <span>✔ Direct Bank Disbursement</span>
              </div>
            </div>

          </div>

        </div>

        {/* Global Tricolor CTA banner block at the bottom */}
        <div className="mt-16 p-8 md:p-12 border border-border-color dark:border-dark-border rounded-[2.5rem] bg-gradient-to-br from-[#09152b] via-[#050a14] to-[#03070f] text-center shadow-lg relative overflow-hidden select-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#36FB04]/10 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#268BFF]/10 rounded-full filter blur-3xl pointer-events-none"></div>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight uppercase">
            Start Generating Free Solar Power Today
          </h3>
          <p className="max-w-2xl mx-auto mt-4 text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
            Get in touch with our engineers today. We will assess your roof capacity, prepare the NREDCAP paperwork, and calculate your exact out-of-pocket costs after the government subsidy.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              onClick={handleScrollToCalculator}
              className="inline-flex items-center gap-2 font-extrabold text-xs md:text-sm text-black bg-[#36FB04] hover:bg-[#2ed603] active:scale-95 shadow-md transition-all duration-300 px-8 py-3.5 rounded-full uppercase"
            >
              <span>Calculate Setup Cost & Subsidy</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-black shrink-0 transition-transform group-hover:translate-x-1 duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
