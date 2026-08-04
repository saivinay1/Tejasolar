import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, HardHat, Info, Zap, X } from 'lucide-react';

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";

const LOCATIONS = [
  {
    id: "rajahmundry",
    city: "Rajahmundry (HQ)",
    capacity: "25 kW",
    type: "Commercial Rooftop Grid",
    date: "Jan 12, 2026",
    photo: image1,
    description: "Installed on a commercial cold storage unit in Kondayyapeta, generating massive operational energy savings.",
    coords: { x: "42%", y: "48%" }
  },
  {
    id: "kakinada",
    city: "Kakinada",
    capacity: "15 kW",
    type: "Residential Rooftop",
    date: "Feb 18, 2026",
    photo: image2,
    description: "High-efficiency tier-1 TOPCon panel installation for a luxury dual-AC villa near Kakinada port area.",
    coords: { x: "55%", y: "52%" }
  },
  {
    id: "amalapuram",
    city: "Amalapuram",
    capacity: "8 kW",
    type: "Agricultural Solar Grid",
    date: "Dec 05, 2025",
    photo: image11,
    description: "Subsidized farm field pump installation enabling 100% daytime diesel-independent field irrigation.",
    coords: { x: "48%", y: "70%" }
  },
  {
    id: "eluru",
    city: "Eluru",
    capacity: "12 kW",
    type: "Residential Rooftop Solar",
    date: "Mar 22, 2026",
    photo: image10,
    description: "Completed rooftop system supplying 300+ free monthly electricity units with net-metering approvals.",
    coords: { x: "28%", y: "55%" }
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    capacity: "50 kW",
    type: "Industrial Solar Array",
    date: "Apr 14, 2026",
    photo: image12,
    description: "Robust solar rooftop array supplying green energy to a light manufacturing facility in Vizag steel zone.",
    coords: { x: "85%", y: "25%" }
  }
];

export default function InteractiveProjectMap() {
  const [selectedProject, setSelectedProject] = useState(LOCATIONS[0]);

  return (
    <section className="py-20 md:py-24 bg-bg-primary dark:bg-dark-bg-primary relative overflow-hidden select-none border-b border-border-color dark:border-dark-border/40">
      
      {/* Decorative Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <HardHat className="w-3.5 h-3.5" />
            <span>Statewide Support</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            Interactive Project <span className="text-[#268BFF]">Map</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Select a service area to inspect real installation credentials, capacity deployments, and completed solar grid layouts across Andhra Pradesh.
          </p>
        </div>

        {/* Map and Info Card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stylized AP Map Card (7 cols) */}
          <div className="lg:col-span-7 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border/40 p-6 rounded-[2.5rem] flex flex-col justify-between min-h-[380px] sm:min-h-[450px] relative shadow-sm">
            
            <div className="absolute top-6 left-6 flex items-center gap-1.5 bg-white/80 dark:bg-[#0a1426]/80 px-3 py-1.5 rounded-xl border border-border-color dark:border-dark-border/40 text-xs font-bold text-text-muted dark:text-dark-text-muted z-10 shadow-sm">
              <Info className="w-3.5 h-3.5 text-accent" />
              <span>Click a glowing pin on the map</span>
            </div>

            {/* Stylized Vector Map representation of Coastal AP */}
            <div className="relative flex-grow w-full flex items-center justify-center py-10">
              
              {/* Map Outline SVG Background */}
              <svg className="w-full h-full max-h-[300px] text-slate-200 dark:text-dark-border/20 fill-current opacity-80" viewBox="0 0 500 250">
                <path d="M50 180 C80 160, 110 180, 150 170 C200 150, 240 180, 280 150 C320 120, 350 130, 390 100 C430 70, 460 70, 480 30 C490 20, 480 50, 460 80 C440 110, 410 120, 370 140 C330 160, 300 165, 270 185 C240 205, 210 200, 180 220 C150 240, 100 230, 50 180 Z" />
              </svg>

              {/* Glowing Location Pins */}
              {LOCATIONS.map((loc) => {
                const isSelected = selectedProject.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedProject(loc)}
                    className="absolute cursor-pointer transition-all duration-300 focus:outline-none"
                    style={{ left: loc.coords.x, top: loc.coords.y }}
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      {/* Pulse ring */}
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? "bg-accent" : "bg-[#268BFF]"
                      }`}></span>
                      {/* Pin base */}
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 items-center justify-center shadow-md border border-white ${
                        isSelected ? "bg-accent scale-120" : "bg-[#268BFF]"
                      }`}>
                        <MapPin className="w-2.5 h-2.5 text-white" />
                      </span>
                    </span>
                    {/* Small Text Label */}
                    <span className={`absolute top-6 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[9px] font-extrabold whitespace-nowrap shadow-sm border transition-all duration-300 ${
                      isSelected
                        ? "bg-accent text-text-main border-accent scale-105"
                        : "bg-white dark:bg-[#0a1426] text-text-muted dark:text-dark-text-muted border-border-color dark:border-dark-border/40"
                    }`}>
                      {loc.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* List selectors for mobile responsiveness */}
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap pt-4 border-t border-border-color/45 dark:border-dark-border/10 scrollbar-none">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedProject(loc)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border cursor-pointer active:scale-95 ${
                    selectedProject.id === loc.id
                      ? "bg-accent text-text-main border-accent shadow-sm"
                      : "bg-white dark:bg-[#0a1426] border-border-color dark:border-dark-border/40 text-text-muted dark:text-dark-text-muted hover:border-accent"
                  }`}
                >
                  {loc.city}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Dynamic Project Details Display Card (5 cols) */}
          <div className="lg:col-span-5 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md"
              >
                {/* Project Image */}
                <div className="relative h-[200px] overflow-hidden bg-bg-secondary shrink-0">
                  <img
                    src={selectedProject.photo}
                    alt={`Teja Solar ${selectedProject.city} Installation`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute bottom-4 left-6 bg-accent text-text-main font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md border border-accent/25">
                    {selectedProject.city}
                  </span>
                </div>

                {/* Details Content */}
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-text-main dark:text-white tracking-tight leading-snug mb-3 font-sans">
                      {selectedProject.type}
                    </h3>
                    <p className="text-text-muted dark:text-dark-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      {selectedProject.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 border-t border-border-color dark:border-dark-border/30 pt-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent-light dark:bg-accent/10 text-accent flex items-center justify-center shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Capacity Deployed</span>
                          <strong className="text-sm font-extrabold text-text-main dark:text-white">{selectedProject.capacity}</strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent-light dark:bg-accent/10 text-accent flex items-center justify-center shrink-0">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Completion Date</span>
                          <strong className="text-sm font-extrabold text-text-main dark:text-white">{selectedProject.date}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Consultation WhatsApp CTA */}
                  <div className="mt-8 pt-4 border-t border-border-color dark:border-dark-border/20">
                    <a
                      href={`https://wa.me/919391110007?text=Hello Teja Solar Team, I saw your ${selectedProject.capacity} installation in ${selectedProject.city} and want to learn more!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#268BFF] hover:bg-[#1a7ae0] text-white font-extrabold rounded-xl transition-all duration-300 active:scale-98 shadow-sm hover:shadow-md cursor-pointer text-xs md:text-sm"
                    >
                      <span>Inquire About Similar Setups</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
