import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, MessageCircle, X, Quote, Zap } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "K. Satyanarayana Rao",
    location: "Rajahmundry",
    capacity: "3 kW Residential",
    savings: "₹3,200 / month",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // rickroll or a general solar video
    quote: "Our monthly utility bills dropped from ₹3,800 to ₹600. The NREDCAP paper approval was completely coordinated by Teja Solar."
  },
  {
    id: 2,
    name: "L. Lakshmi Devi",
    location: "Visakhapatnam",
    capacity: "5 kW Rooftop System",
    savings: "₹5,400 / month",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "With 3 ACs running during peak summer afternoons, we get zero bill stress. Teja Solar structures are extremely heavy-duty and wind-resistant."
  },
  {
    id: 3,
    name: "M. Srinivas Rao",
    location: "Amalapuram fields",
    capacity: "5 HP Agricultural Pump",
    savings: "₹8,000 / month (Diesel Offset)",
    thumbnail: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "Running our irrigation borewells during daytime is now free. No more reliance on errant power supplies or expensive diesel containers."
  }
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 md:py-24 bg-bg-secondary dark:bg-[#060c18] border-b border-border-color dark:border-dark-border/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Video Reviews</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
              Customer <span className="text-[#268BFF]">Testimonials</span>
            </h2>
            <p className="max-w-xl mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
              Listen directly to our satisfied consumers detailing their installation speed, monthly bill cuts, and subsidy experiences.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl bg-white dark:bg-[#0a1426] border border-border-color dark:border-dark-border/40 text-text-main dark:text-white flex items-center justify-center cursor-pointer hover:border-accent active:scale-95 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl bg-white dark:bg-[#0a1426] border border-border-color dark:border-dark-border/40 text-text-main dark:text-white flex items-center justify-center cursor-pointer hover:border-accent active:scale-95 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel display frame */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md items-center"
            >
              
              {/* Left Column: Image with Play button overlay (5 cols) */}
              <div 
                onClick={() => setActiveVideo(TESTIMONIALS[currentIndex])}
                className="md:col-span-5 relative h-[250px] md:h-[350px] bg-black cursor-pointer group shrink-0 overflow-hidden"
              >
                <img
                  src={TESTIMONIALS[currentIndex].thumbnail}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-103 transition-transform duration-750"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent hover:bg-accent-hover text-text-main rounded-full flex items-center justify-center shadow-lg transform transition-all group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current text-text-main ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-center select-none bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded-xl border border-white/10">
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                    <Play className="w-3.5 h-3.5 text-accent" />
                    <span>Watch video review</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Customer Details & Quote (7 cols) */}
              <div className="md:col-span-7 p-8 flex flex-col justify-between h-full min-h-[250px] md:min-h-[350px]">
                
                {/* Quote details */}
                <div className="relative">
                  <Quote className="w-12 h-12 text-accent/15 absolute -top-5 -left-3 pointer-events-none" />
                  <p className="text-sm sm:text-base text-text-main dark:text-white italic leading-relaxed relative z-10 pl-6">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </p>
                </div>

                {/* Specs and profile */}
                <div className="mt-8 border-t border-border-color dark:border-dark-border/40 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <strong className="block text-base font-extrabold text-text-main dark:text-white">
                      {TESTIMONIALS[currentIndex].name}
                    </strong>
                    <span className="text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">
                      Location: {TESTIMONIALS[currentIndex].location}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 items-start sm:items-end">
                    <span className="text-[10px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Installed System</span>
                    <strong className="text-xs sm:text-sm font-extrabold text-[#268BFF]">
                      {TESTIMONIALS[currentIndex].capacity}
                    </strong>
                    <span className="text-[10px] text-emerald-500 font-extrabold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Saved {TESTIMONIALS[currentIndex].savings}
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video Player Modal overlay */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-black border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl"
              >
                
                {/* Header close */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="w-9 h-9 rounded-lg bg-black/60 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Aspect ratio video frame */}
                <div className="relative pt-[56.25%] w-full">
                  <iframe
                    title={`${activeVideo.name} Solar Review Video`}
                    src={activeVideo.videoUrl}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
