import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef();

  const slides = [
    {
      subtitle: 'Premium Rooftop Solar',
      title: 'Power Your Home With The Sun',
      desc: 'Seamless residential solar installations designed for peak energy efficiency, maximum architectural appeal, and zero carbon footprint.',
      image: '/assets/solar_residential.png',
      cta1: 'Calculate Savings',
      cta2: 'Our Installations',
    },
    {
      subtitle: 'Commercial & Industrial Solar',
      title: 'Lower Operational Costs Today',
      desc: 'Scale your business sustainably. Custom commercial solar grids constructed for long-term power generation and high returns on investment.',
      image: '/assets/solar_commercial.png',
      cta1: 'Request Enterprise Bid',
      cta2: 'View Case Studies',
    },
    {
      subtitle: 'Fields (Farm Fields) Panels',
      title: 'Agrivoltaic Grids & Farm Fields Solar',
      desc: 'Double your land yield. High-capacity ground-mounted tracker solar configurations designed specifically for crop fields, farm lands, and open acreage.',
      image: '/assets/solar_farm_fields.png',
      cta1: 'Calculate Farm Savings',
      cta2: 'View Farm Installations',
    },
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

  return (
    <section
      id="home"
      className="relative h-[600px] md:h-[750px] lg:h-[820px] w-full overflow-hidden bg-black"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-[1000ms] ease-in-out ${
                isActive 
                  ? 'opacity-100 pointer-events-auto z-10' 
                  : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              {/* Background with custom gradient overlay */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                } before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/85 before:via-black/55 before:to-black/35 before:z-10`}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Slider Content */}
              <div className={`absolute bottom-20 md:bottom-28 left-6 md:left-16 lg:left-24 max-w-[90%] md:max-w-[700px] z-20 text-white transition-all duration-700 delay-300 transform ${
                isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}>
                <span className="text-accent font-bold tracking-widest text-xs md:text-sm uppercase mb-3 block">
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight font-sans">
                  {slide.title}
                </h1>
                <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-[600px] mb-8 font-medium leading-relaxed">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleScrollTo('contact')} 
                    className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/20 cursor-pointer text-center text-sm md:text-base active:scale-98"
                  >
                    {slide.cta1}
                  </button>
                  <button 
                    onClick={() => handleScrollTo('products')} 
                    className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer text-center text-sm md:text-base active:scale-98"
                  >
                    {slide.cta2}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-300 border border-white/15 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hidden sm:flex"
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="sm" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-300 border border-white/15 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hidden sm:flex"
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </button>

      {/* Dots Indicator */}
      <ul className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 list-none p-0">
        {slides.map((_, index) => (
          <li key={index}>
            <button
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === current ? 'w-8 bg-accent' : 'w-2.5 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          </li>
        ))}
      </ul>
    </section>
  );
}
