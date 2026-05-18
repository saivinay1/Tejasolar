import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSolarPanel } from '@fortawesome/free-solid-svg-icons';



export default function ProductSection() {
  const services = [
    {
      id: 1,
      image: "https://5.imimg.com/data5/SELLER/Default/2025/11/561550924/US/CC/FS/68759268/off-grid-solar-power-plant-500x500.png",
      category: 'Smart Integration',
      title: 'HYBRID GRID',
      desc: 'Combine grid stability with solar energy independence, relying on advanced battery backups to keep your operations active during blackouts.',
    },
    {
      id: 2,
      image: "https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/649bdb7d0cf4801a457a70de_Off-Grid%20Solar%20System.webp",
      category: 'Standalone Power',
      title: 'OFF GRID',
      desc: 'Achieve complete energy independence in remote areas using high-performance solar panels paired with premium battery storage solutions.',
    },
    {
      id: 3,
      image: "https://kenbrooksolar.com/wp-content/uploads/2016/02/10-kW-On-Grid-Solar-Power-Plant-Photo.jpg",
      category: 'Grid-Tied Solutions',
      title: 'ON GRID',
      desc: 'Drastically reduce your monthly utility bills by feeding excess solar power back to the grid, enjoying state subsidies and net-metering benefits.',
    },
    {
      id: 4,
      image: "https://www.agritecture.com/hubfs/Imported_Blog_Media/Agrivoltaic-Jacks-Solar-Farm-Photo-by-Werner-Slocum-NREL-3.jpeg",
      category: 'Agricultural Solar',
      title: 'FARM FIELD SOLAR',
      desc: 'Empower your agricultural operations with efficient solar energy solutions for irrigation systems, farm equipment, and rural power needs while reducing electricity costs and ensuring sustainable farming.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const autoplayRef = useRef(null);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = services.length - visibleCards;

  // Autoplay function
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [maxIndex]);

  // Handle bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const handlePrev = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    startAutoplay();
  };

  const handleNext = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    startAutoplay();
  };

  const handleDotClick = (index) => {
    stopAutoplay();
    setCurrentIndex(index);
    startAutoplay();
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
    <section id="products" className="py-20 md:py-24 bg-gray-50/70 dark:bg-dark-primary/10 border-b border-border-color dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Centered Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent font-extrabold text-xs uppercase tracking-widest mb-4">
            <FontAwesomeIcon icon={faSolarPanel} />
            <span>OUR SERVICES</span>
          </span>
          <h2 className="inline-block relative pb-4 text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-tight uppercase">
            SERVICES WE OFFERED
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-base md:text-[1.05rem] leading-relaxed">
            Discover the benefits of switching to clean, renewable solar energy for your home, farm, or commercial business with our end-to-end solar solutions.
          </p>
        </div>

        {/* Carousel Container Wrapper */}
        <div className="relative mt-8 select-none px-2 group/arrows">

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-15px] md:left-[-30px] top-[40%] -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 bg-white dark:bg-[#0a1426] border border-border-color dark:border-dark-border text-text-main dark:text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 opacity-80 md:opacity-0 group-hover/arrows:opacity-100 cursor-pointer"
            aria-label="Previous services slide"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-15px] md:right-[-30px] top-[40%] -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 bg-white dark:bg-[#0a1426] border border-border-color dark:border-dark-border text-text-main dark:text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 opacity-80 md:opacity-0 group-hover/arrows:opacity-100 cursor-pointer"
            aria-label="Next services slide"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          {/* Hidden slider viewport */}
          <div className="overflow-hidden w-full py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {services.map((s) => (
                <div
                  key={s.id}
                  style={{ width: `${100 / visibleCards}%` }}
                  className="shrink-0 px-4"
                >
                  <div className="flex flex-col bg-transparent group h-full">
                    {/* Rounded Image Frame */}
                    <div className="relative h-56 sm:h-60 md:h-64 w-full overflow-hidden rounded-[2rem] shadow-sm border border-border-color dark:border-dark-border/20 mb-5">
                      <img
                        src={s.image}
                        alt={`${s.title} - Teja Solar Solutions ${s.category}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 bg-dark-primary/80 backdrop-blur-md text-white font-extrabold text-[0.68rem] tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                        {s.category}
                      </span>
                    </div>

                    {/* Text block directly below */}
                    <div className="flex flex-col flex-grow px-2">
                      <h3 className="text-xl font-extrabold text-text-main dark:text-dark-text-main mb-2.5 group-hover:text-accent transition-colors duration-300 leading-snug tracking-tight uppercase">
                        {s.title}
                      </h3>
                      <p className="text-text-muted dark:text-dark-text-muted text-sm leading-relaxed mb-6 flex-grow font-medium">
                        {s.desc}
                      </p>
                      <div className="mt-auto">
                        <a
                          href="#contact"
                          onClick={handleScrollToCalculator}
                          className="inline-flex items-center gap-2 font-extrabold text-xs md:text-sm text-black bg-[#36FB04] hover:bg-[#2ed603] active:scale-95 shadow-sm hover:shadow-md transition-all duration-300 px-6 py-2.5 rounded-full"
                        >
                          <span>Read More</span>
                          <FontAwesomeIcon icon={faArrowRight} className="text-black shrink-0 transition-transform group-hover:translate-x-1 duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator Section */}
          <div className="flex justify-center gap-2.5 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === i
                  ? 'bg-[#36FB04] w-7 shadow-sm'
                  : 'bg-gray-300 dark:bg-dark-border hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
