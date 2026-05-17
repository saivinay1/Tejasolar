import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer({ navigateTo }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    navigateTo('landing', id);
  };

  const handleLocationsClick = (e) => {
    e.preventDefault();
    navigateTo('locations');
  };

  return (
    <footer className="bg-primary dark:bg-dark-primary text-white pt-20 pb-12 border-t border-border-color dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

        {/* Brand Column */}
        <div className="flex flex-col gap-5 text-left">
          <span className="font-extrabold text-2xl text-white tracking-tight leading-none">
            TEJA <span className="text-accent">SOLAR</span>
          </span>
          <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
            Andhra Pradesh’s leading provider of tier-1 high-yield solar rooftop installations, customized industrial energy microgrids, and ground-mounted farm panels.
          </p>
          {/* <div className="flex gap-3 mt-1">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white hover:text-text-main transition-all duration-300 shadow-sm hover:scale-105 active:scale-95" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white hover:text-text-main transition-all duration-300 shadow-sm hover:scale-105 active:scale-95" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white hover:text-text-main transition-all duration-300 shadow-sm hover:scale-105 active:scale-95" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div> */}
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-6 text-left">
          <h4 className="text-lg font-bold text-white tracking-tight relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent after:rounded">
            Services
          </h4>
          <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
            <li>
              <a href="#products" onClick={(e) => handleScrollTo(e, 'products')} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Residential Rooftops
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleScrollTo(e, 'products')} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Commercial Solar Grids
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleScrollTo(e, 'products')} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Ground-Mount Field Panels
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleScrollTo(e, 'products')} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Smart Energy Audits
              </a>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-6 text-left">
          <h4 className="text-lg font-bold text-white tracking-tight relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent after:rounded">
            Company
          </h4>
          <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
            <li>
              <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Completed Grids
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Solar Cost Estimator
              </a>
            </li>
            <li>
              <a href="#locations" onClick={handleLocationsClick} className="text-white/70 hover:text-accent font-semibold text-sm transition-colors duration-300 block">
                Our Locations
              </a>
            </li>
          </ul>
        </div>

        {/* Get in Touch Column */}
        <div className="flex flex-col gap-6 text-left">
          <h4 className="text-lg font-bold text-white tracking-tight relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent after:rounded">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3.5 text-white/70 text-sm">
              <FontAwesomeIcon icon={faPhone} className="text-accent shrink-0 text-base" />
              <a href="tel:+919391110007" className="hover:text-accent font-semibold transition-colors">
                +91 93911 10007
              </a>
            </div>
            <div className="flex items-center gap-3.5 text-white/70 text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="text-accent shrink-0 text-base" />
              <span>tejasolar18@gmail.com</span>
            </div>
            <div className="flex items-center gap-3.5 text-white/70 text-sm">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent shrink-0 text-base" />
              <span>100-3, Near Teja Milk Dairy, Kondayyapeta, Rajavolu - 533124, Andhra Pradesh</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom copyright area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-xs text-white/50 font-medium">
        <p>&copy; {new Date().getFullYear()} Teja Solar Inc. All rights reserved.</p>
        <p>AP Solar Grid Registration #533103</p>
      </div>
    </footer>
  );
}
