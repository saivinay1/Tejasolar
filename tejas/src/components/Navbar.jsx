import { useState, useEffect } from 'react';
import TejaSolarLogo from './TejaSolarLogo';
import logo from "../assets/Teja.jpeg"


export default function Navbar({ view, navigateTo, activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateTo('landing', 'home');
  };

  const handleMenuItemClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (item.id === 'locations') {
      navigateTo('locations');
    } else {
      navigateTo('landing', item.id);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Services' },
    { id: 'testimonials', label: 'Products' },
    { id: 'projects', label: 'Happy Customers' },
    { id: 'locations', label: 'Our Locations' },
    { id: 'contact', label: 'Quote Calculator' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300 border-b bg-white dark:bg-[#0a1426] border-border-color dark:border-dark-border ${scrolled
      ? 'py-2 shadow-md'
      : 'py-3.5 shadow-sm'
      }`}>

      <a
        href="#home"
        className="flex items-center tracking-tight transition-transform active:scale-95 group focus:outline-none"
        onClick={handleLogoClick}
        aria-label="Teja Solar Solutions Home"
      >
        {/* Render refined modern vector logo and glowing typography */}
        <img src={logo} alt="Logo" className="h-24 sm:h-24 md:h-24 w-36 md:w-56 object-contain transition-all duration-300 group-hover:brightness-105" />
        <TejaSolarLogo className="-ml-4 sm:-ml-6 md:-ml-8" />
      </a>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Hamburger Toggle Button */}
      <button
        className="flex flex-col justify-center items-center gap-1.5 md:hidden w-11 h-11 p-2.5 z-50 rounded-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-90 transition-all duration-200"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={mobileMenuOpen}
      >
        <span className={`w-6 h-0.5 bg-text-main dark:bg-dark-text-main transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
        <span className={`w-6 h-0.5 bg-text-main dark:bg-dark-text-main transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
          }`}></span>
        <span className={`w-6 h-0.5 bg-text-main dark:bg-dark-text-main transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
      </button>

      {/* Navigation List links */}
      <ul className={`${mobileMenuOpen
        ? 'flex absolute top-full left-0 right-0 flex-col bg-white/98 dark:bg-[#0a1426]/98 backdrop-blur-xl border-b border-border-color dark:border-dark-border p-5 gap-2 shadow-2xl z-50 max-h-[calc(100vh-85px)] overflow-y-auto animate-fade-in'
        : 'hidden'
        } md:flex md:static md:flex-row md:bg-transparent md:border-none md:p-0 md:shadow-none md:gap-2 lg:gap-3 items-center list-none`}>
        {navItems.map((item) => {
          const isItemActive = (item.id === 'locations' && view === 'locations') || (item.id !== 'locations' && view === 'landing' && activeSection === item.id);
          return (
            <li key={item.id} className="relative group w-full md:w-auto">
              <a
                href={`#${item.id}`}
                className={`font-semibold text-[0.95rem] transition-all duration-200 flex items-center justify-between md:inline-block min-h-[48px] md:min-h-0 py-3 md:py-2 px-4 rounded-xl md:rounded-lg active:scale-95 ${isItemActive
                  ? 'text-accent dark:text-accent bg-accent/10 dark:bg-accent/15'
                  : 'text-text-main/80 dark:text-dark-text-main/80 hover:text-accent dark:hover:text-accent hover:bg-accent/10 dark:hover:bg-accent/10 active:bg-accent/15'
                  }`}
                onClick={(e) => handleMenuItemClick(e, item)}
              >
                <span>{item.label}</span>
                {/* Mobile active indicator pill */}
                {isItemActive && (
                  <span className="md:hidden w-2 h-2 rounded-full bg-accent shadow-sm"></span>
                )}
              </a>
              {/* Desktop bottom active transition line */}
              <span className={`hidden md:block absolute bottom-[-4px] left-3 right-3 h-[2px] bg-accent rounded-full transition-all duration-300 ${isItemActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                }`}></span>
            </li>
          );
        })}
        <li className="w-full md:w-auto mt-3 md:mt-0 md:ml-3">
          <button
            onClick={(e) => handleMenuItemClick(e, { id: 'contact' })}
            className="w-full md:w-auto min-h-[48px] md:min-h-0 px-6 py-2.5 bg-primary-light text-text-light rounded-xl md:rounded-lg font-bold transition-all duration-300 hover:bg-accent hover:text-text-main dark:hover:text-dark-primary shadow-sm hover:shadow-md cursor-pointer border border-border-color dark:border-dark-border text-center text-xs md:text-sm active:scale-95 btn-lift"
          >
            Calculate Savings
          </button>
        </li>
      </ul>

    </nav>
  );
}
