import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight, 
  faHome, 
  faBuilding, 
  faSolarPanel, 
  faIndianRupeeSign, 
  faShieldAlt, 
  faCheck, 
  faBriefcase, 
  faBolt, 
  faTree, 
  faCompass,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef();

  const slides = [
    { image: '/assets/solar_residential.png' },
    { image: '/assets/solar_commercial.png' },
    { image: '/assets/solar_farm_fields.png' },
  ];

  const sectors = [
    {
      id: 0,
      title: 'Residential Solar',
      icon: faHome,
      theme: {
        text: 'text-accent',
        bg: 'bg-accent',
        border: 'border-accent/30',
        glow: 'shadow-[0_0_40px_-5px_rgba(249,115,22,0.35)]',
        bgLight: 'bg-accent/10',
        hover: 'hover:bg-accent-hover',
      },
      benefits: [
        {
          label: 'Up to 90% Bill Reduction',
          desc: 'Slash monthly grid utility costs immediately with high-efficiency rooftop panels.',
          icon: faIndianRupeeSign,
        },
        {
          label: '5-Year Maintenance Free',
          desc: 'Comprehensive system maintenance, periodic cleaning, and support covered completely.',
          icon: faShieldAlt,
        },
        {
          label: 'Vocal for Local Subsidy',
          desc: 'Direct government subsidies credited under the PM Surya Ghar Muft Bijli Yojana.',
          icon: faCheck,
        }
      ]
    },
    {
      id: 1,
      title: 'Commercial Solar',
      icon: faBuilding,
      theme: {
        text: 'text-emerald-400',
        bg: 'bg-emerald-500',
        border: 'border-emerald-500/30',
        glow: 'shadow-[0_0_40px_-5px_rgba(52,211,153,0.35)]',
        bgLight: 'bg-emerald-500/10',
        hover: 'hover:bg-emerald-600',
      },
      benefits: [
        {
          label: 'Accelerated 40% Depreciation',
          desc: 'Claim massive commercial tax write-offs in your business financial year.',
          icon: faBriefcase,
        },
        {
          label: 'High ROI & Flat Costs',
          desc: 'Lock in predictable flat power operational costs for 25 years with high returns.',
          icon: faBolt,
        },
        {
          label: 'Zero-Carbon Rating',
          desc: 'Elevate your enterprise ESG scores and secure green building credentials.',
          icon: faTree,
        }
      ]
    },
    {
      id: 2,
      title: 'Farm Field Solar',
      icon: faSolarPanel,
      theme: {
        text: 'text-amber-400',
        bg: 'bg-amber-500',
        border: 'border-amber-500/30',
        glow: 'shadow-[0_0_40px_-5px_rgba(245,158,11,0.35)]',
        bgLight: 'bg-amber-500/10',
        hover: 'hover:bg-amber-600',
      },
      benefits: [
        {
          label: 'Agrivoltaic Co-Generation',
          desc: 'Generate massive clean power while retaining partial shade for crops underneath.',
          icon: faSolarPanel,
        },
        {
          label: 'Solar Tracker Arrays',
          desc: 'Intelligent single-axis automatic tracker mechanisms for 25% higher annual yield.',
          icon: faCompass,
        },
        {
          label: 'High-Volume Yield',
          desc: 'Power high-horsepower agricultural water pumps, cold storage, and export surplus energy.',
          icon: faBolt,
        }
      ]
    }
  ];

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6500);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleNext = () => {
    stopAutoplay();
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startAutoplay();
  };

  const handlePrev = () => {
    stopAutoplay();
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoplay();
  };

  const handleDotClick = (index) => {
    stopAutoplay();
    setCurrent(index);
    startAutoplay();
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
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

  const activeTheme = sectors[current].theme;

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-[100vh] w-full overflow-hidden bg-black flex items-center justify-center pt-32 sm:pt-36 lg:pt-0 pb-16 lg:pb-0"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Background Ken Burns transition slider */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${
                  isActive ? 'animate-ken-burns' : ''
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          );
        })}
      </div>

      {/* Shared Dark responsive overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-black/95 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/75 lg:to-black/30 z-10 pointer-events-none" />

      {/* Cinematic Main Grid Layout */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center pt-4 pb-12 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* Left Column: Stationary Premium Content */}
          <div className="lg:col-span-7 flex flex-col text-white">
            <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold tracking-wider text-xs md:text-sm uppercase mb-5 self-start backdrop-blur-sm shadow-md animate-pulse">
              ⚡ Premier Tier-1 Solar Provider in Andhra Pradesh
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 tracking-tight font-sans text-white">
              Powering Your Home, Business & Farm Fields with Premium Solar
            </h1>
            <p className="text-white/85 text-xs md:text-base lg:text-lg max-w-[620px] mb-8 font-normal leading-relaxed">
              Cut your electricity bills by up to 90%. Teja Solar delivers high-efficiency, customized, and durable solar solutions with a 25-year performance warranty. Zero down-payment financing available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleScrollTo('contact')} 
                className="group px-8 py-3.5 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent/30 cursor-pointer text-center text-sm md:text-base active:scale-98 flex items-center justify-center gap-2"
              >
                Calculate Savings
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => handleScrollTo('projects')} 
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/45 cursor-pointer text-center text-sm md:text-base active:scale-98 backdrop-blur-sm"
              >
                Our Installations
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Sector Spotlight glass card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div 
              key={current} 
              className={`w-full max-w-[430px] backdrop-blur-md bg-black/45 border border-white/15 p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-500 transform translate-y-0 opacity-100 ${activeTheme.glow}`}
            >
              {/* Internal glow effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full filter blur-[50px] opacity-25 ${activeTheme.bg}`} />
              
              {/* Spotlight header */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/15 ${activeTheme.text} text-lg shadow-inner`}>
                    <FontAwesomeIcon icon={sectors[current].icon} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/50 block font-semibold">Sector Spotlight</span>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{sectors[current].title}</h3>
                  </div>
                </div>
                <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-white/80">
                  {current + 1} / 3
                </span>
              </div>

              {/* Spotlight benefits list */}
              <div className="space-y-4.5 mb-5 relative z-10">
                {sectors[current].benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex gap-3.5 items-start group">
                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-white/5 border border-white/10 ${activeTheme.text} text-sm group-hover:scale-105 transition-all duration-300`}>
                      <FontAwesomeIcon icon={benefit.icon} />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-white/95 leading-tight mb-1 tracking-wide">{benefit.label}</h4>
                      <p className="text-[11px] md:text-xs text-white/70 leading-relaxed font-normal">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bar indicator */}
              <div className="relative pt-2 z-10">
                <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                  <div key={current} className={`h-full rounded-full animate-hero-progress ${activeTheme.bg}`} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Control Arrows (hidden on small screens) */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/15 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hidden lg:flex"
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="sm" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/15 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hidden lg:flex"
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </button>

      {/* Bottom stylized Tab Buttons (replacing dots indicator) */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 w-full max-w-[90%] md:max-w-xl px-4">
        <div className="grid grid-cols-3 gap-2 md:gap-3 bg-black/45 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-xl">
          {sectors.map((sector, index) => {
            const isActive = index === current;
            const theme = sector.theme;
            
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 py-2 md:py-3.5 px-1.5 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 border ${
                  isActive
                    ? `${theme.bg} text-text-main font-bold border-transparent shadow-md`
                    : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10 text-white/80'
                }`}
                aria-label={`Switch to ${sector.title}`}
              >
                <FontAwesomeIcon icon={sector.icon} className={`text-xs md:text-sm ${isActive ? 'text-text-main' : theme.text}`} />
                <span className="text-[9px] md:text-xs tracking-wider uppercase font-bold whitespace-nowrap">
                  {index === 0 ? 'Home' : index === 1 ? 'Business' : 'Farm'}
                </span>
                
                {/* Visual indicator progress bar underneath active tab */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/35 overflow-hidden">
                    <div key={current} className="h-full bg-white animate-hero-progress" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
