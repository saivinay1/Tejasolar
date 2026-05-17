import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import StatsSection from './components/StatsSection';
import ProductSection from './components/ProductSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsShowcase from './components/ProjectsShowcase';
import Testimonials from './components/Testimonials';
import SolarCalculator from './components/SolarCalculator';
import CallUsBanner from './components/CallUsBanner';
import LocationsPage from './components/LocationsPage';
import Footer from './components/Footer';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919391110007';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'locations'
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (view !== 'landing') return;

    const handleScroll = () => {
      const sections = ['home', 'products', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  // Dynamic Browser Document Title updates for advanced SEO
  useEffect(() => {
    if (view === 'locations') {
      document.title = 'Teja Solar | Our Locations & Statewide Andhra Pradesh Support';
    } else {
      document.title = 'Teja Solar | Tier-1 Solar Rooftop & Field Panels in Andhra Pradesh';
    }
  }, [view]);

  // Master router navigation controller
  const navigateTo = (targetView, sectionId = '') => {
    setView(targetView);
    if (targetView === 'landing') {
      if (sectionId) {
        setActiveSection(sectionId);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
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
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setActiveSection('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary dark:bg-dark-bg-primary text-text-main dark:text-dark-text-main antialiased selection:bg-accent selection:text-text-main font-sans">
      <Navbar 
        view={view}
        navigateTo={navigateTo}
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <main className="flex flex-col w-full overflow-hidden">
        {view === 'landing' ? (
          <>
            <HeroCarousel />
            <StatsSection />
            <ProductSection />
            <WhyChooseUs />
            <ProjectsShowcase />
            <CallUsBanner />
            <Testimonials />
            <SolarCalculator />
          </>
        ) : (
          <LocationsPage />
        )}
      </main>
      
      <Footer navigateTo={navigateTo} />

      {/* Pulsing Floating WhatsApp Chat Bubble */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25d366]/40 z-[9999] transition-all duration-300 hover:scale-110 active:scale-95 text-2xl whatsapp-float-btn cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Teja Solar on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}
