import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ZoomIn, ChevronLeft, ChevronRight, Tags, Info } from 'lucide-react';

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";

const ITEMS = [
  { id: 1, title: "Terrace Solar Installation", category: "residential", capacity: "3 kW On-Grid", image: image1, tags: ["Rooftop", "TOPCon"] },
  { id: 2, title: "Commercial Warehouse Array", category: "commercial", capacity: "10 kW Commercial Grid", image: image2, tags: ["Warehouse", "DISCOM"] },
  { id: 3, title: "Office Workspace Rooftop", category: "commercial", capacity: "5 kW On-Grid", image: image3, tags: ["Office", "Bifacial"] },
  { id: 4, title: "Subsidized Domestic Setup", category: "residential", capacity: "3 kW Residential", image: image4, tags: ["Subsidy", "PM Surya Ghar"] },
  { id: 5, title: "Industrial Plant Panels", category: "commercial", capacity: "25 kW Grid Solar", image: image5, tags: ["Industrial", "Monocrystalline"] },
  { id: 6, title: "Townhouse Solar Terrace", category: "residential", capacity: "3 kW On-Grid", image: image6, tags: ["Townhouse", "Tier-1"] },
  { id: 7, title: "Retail Supermarket Array", category: "commercial", capacity: "15 kW Commercial", image: image7, tags: ["Retail", "Net Meter"] },
  { id: 8, title: "Farm Field Solar Submersible", category: "agricultural", capacity: "5 HP Solar Pump", image: image8, tags: ["Irrigation", "Farm Field"] },
  { id: 9, title: "Cold Storage Warehouse Setup", category: "commercial", capacity: "50 kW Industrial Array", image: image9, tags: ["Cold Storage", "Subsidy"] },
  { id: 10, title: "Subsidized Double-Bedroom Home", category: "residential", capacity: "2 kW PM Surya Ghar", image: image10, tags: ["PM Surya Ghar", "Rooftop"] },
  { id: 11, title: "Agricultural Irrigation Grid", category: "agricultural", capacity: "10 HP Solar Pump", image: image11, tags: ["Farm Grid", "NREDCAP"] },
  { id: 12, title: "Light Manufacturing Unit Setup", category: "commercial", capacity: "30 kW Commercial", image: image12, tags: ["Factory", "APCPDCL"] }
];

export default function InstallationGallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(false);

  const filteredItems = filter === 'all'
    ? ITEMS
    : ITEMS.filter(item => item.category === filter);

  const handleNext = (e) => {
    e.stopPropagation();
    setZoom(false);
    setLightboxIndex(prev => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setZoom(false);
    setLightboxIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="py-20 md:py-24 bg-bg-secondary dark:bg-[#060c18] border-b border-border-color dark:border-dark-border/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <Image className="w-3.5 h-3.5" />
            <span>Our Works Portfolio</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            Installation <span className="text-accent">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Filter and browse real, high-efficiency solar panel installations completed by our engineering teams for homes, businesses, and crop fields.
          </p>
        </div>

        {/* Filter Tab bar buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {['all', 'residential', 'commercial', 'agricultural'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 capitalize cursor-pointer active:scale-95 ${
                filter === cat
                  ? "bg-accent text-text-main shadow-md border border-accent"
                  : "bg-white dark:bg-[#0a1426] border border-border-color dark:border-dark-border/40 text-text-muted dark:text-dark-text-muted hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Column Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(idx)}
                className="break-inside-avoid mb-6 bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md cursor-zoom-in group relative"
              >
                {/* Photo container */}
                <div className="overflow-hidden relative bg-bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Details card floating context or bottom block */}
                <div className="p-5 flex flex-col justify-between">
                  <span className="text-[10px] text-accent font-extrabold uppercase tracking-wider mb-1.5 block">
                    {item.category} • {item.capacity}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-text-main dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Micro hover icon zoom indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 dark:bg-[#0a1426]/90 backdrop-blur-sm text-text-main dark:text-white flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 pointer-events-none">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Overlay Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setLightboxIndex(null);
                setZoom(false);
              }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-[99999] flex flex-col items-center justify-between p-4 sm:p-6"
            >
              {/* Header Details */}
              <div className="w-full max-w-5xl flex justify-between items-center text-white pb-4 border-b border-white/10 shrink-0">
                <div>
                  <span className="text-xs text-accent font-black uppercase tracking-widest">
                    {filteredItems[lightboxIndex].category} Project
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold tracking-tight mt-1">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    setZoom(false);
                  }}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Lightbox Frame */}
              <div className="relative flex-grow w-full max-w-5xl flex items-center justify-center py-4">
                
                {/* Prev Trigger */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Photo Viewer */}
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom(prev => !prev);
                  }}
                  className="relative max-w-full max-h-[60vh] sm:max-h-[70vh] rounded-2xl overflow-hidden cursor-zoom-in flex items-center justify-center"
                >
                  <img
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    className={`max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain transition-transform duration-300 ${
                      zoom ? "scale-130" : "scale-100"
                    }`}
                  />
                </div>

                {/* Next Trigger */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

              {/* Footer Panel */}
              <div className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white shrink-0">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-white/55 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-accent" />
                    <span>Project Technical Specifications</span>
                  </span>
                  <div className="text-sm font-bold flex items-center gap-2">
                    <span className="text-[#36FB04]">{filteredItems[lightboxIndex].capacity}</span>
                    <span className="opacity-30">|</span>
                    <span className="opacity-90">{filteredItems[lightboxIndex].tags.join(" • ")}</span>
                  </div>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/919391110007?text=Hello Teja Solar Team, I am interested in details regarding the project "${filteredItems[lightboxIndex].title}" of capacity ${filteredItems[lightboxIndex].capacity}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#36FB04] text-black font-extrabold rounded-xl transition-all duration-300 active:scale-95 text-center text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Discuss project specs on WhatsApp
                  </a>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
