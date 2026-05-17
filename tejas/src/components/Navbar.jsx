import { useState, useEffect } from 'react';
import logo from "../assets/teja_logo_solar.png"


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
    { id: 'projects', label: 'Happy Customers' },
    { id: 'testimonials', label: 'Products' },
    { id: 'locations', label: 'Our Locations' },
    { id: 'contact', label: 'Quote Calculator' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300 border-b ${scrolled
      ? 'py-3.5 bg-white/90 dark:bg-dark-primary/90 backdrop-blur-md shadow-md border-border-color dark:border-dark-border'
      : 'py-5 bg-white/70 dark:bg-[#0a1426]/70 backdrop-blur-md border-transparent'
      }`}>

      <a
        href="#home"
        className="flex items-center tracking-tight transition-transform active:scale-95 group"
        onClick={handleLogoClick}
      >
        {/* Preserves perfect aspect ratio, crisp rendering, and matches navbar heights */}
        <img
          src={logo}
          alt="Teja Solar Logo"
          className="h-9 sm:h-10 md:h-15 w-64 object-contain transition-all duration-300 group-hover:brightness-105"
        />
      </a>

      {/* Hamburger Toggle Button */}
      <button
        className="flex flex-col gap-1.5 md:hidden p-2 z-50 cursor-pointer focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
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
        ? 'flex absolute top-full left-0 right-0 flex-col bg-white/95 dark:bg-[#0a1426]/95 backdrop-blur-lg border-b border-border-color dark:border-dark-border p-6 gap-6 shadow-xl animate-fade-in'
        : 'hidden'
        } md:flex md:static md:flex-row md:bg-transparent md:border-none md:p-0 md:shadow-none md:gap-8 items-center list-none`}>
        {navItems.map((item) => {
          const isItemActive = (item.id === 'locations' && view === 'locations') || (item.id !== 'locations' && view === 'landing' && activeSection === item.id);
          return (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className={`font-semibold text-[0.98rem] transition-colors duration-300 block py-2 md:py-0 ${isItemActive
                  ? 'text-accent'
                  : 'text-text-main/80 dark:text-dark-text-main/80 hover:text-accent dark:hover:text-accent'
                  }`}
                onClick={(e) => handleMenuItemClick(e, item)}
              >
                {item.label}
              </a>
              {/* Bottom active transition line */}
              <span className={`absolute bottom-[-4px] left-0 h-[2px] bg-accent transition-all duration-300 ${isItemActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </li>
          );
        })}
        <li className="w-full md:w-auto mt-2 md:mt-0">
          <button
            onClick={(e) => handleMenuItemClick(e, { id: 'contact' })}
            className="w-full md:w-auto px-6 py-2.5 bg-primary-light text-text-light rounded-lg font-bold transition-all duration-300 hover:bg-accent hover:text-text-main dark:hover:text-dark-primary shadow-sm hover:shadow-md cursor-pointer border border-border-color dark:border-dark-border text-center text-xs md:text-sm"
          >
            Calculate Savings
          </button>
        </li>
      </ul>

    </nav>
  );
}
