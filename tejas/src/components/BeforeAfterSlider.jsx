import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sun, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-bg-secondary dark:bg-[#060c18] border-y border-border-color dark:border-dark-border/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Comparison</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            Before & After <span className="text-accent">Solar Integration</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Drag the slider to see how switching to Teja Solar rooftop panels dramatically slashes your monthly utility bill and powers your life with clean energy.
          </p>
        </div>

        {/* Slider Box Card Container */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-[2.5rem] p-6 md:p-8 shadow-sm">
          
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[320px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden cursor-ew-resize shadow-md select-none"
          >
            {/* BEFORE SOLAR (Left base image / screen) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col justify-between p-8 text-white select-none">
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full text-red-400 font-extrabold text-xs uppercase tracking-wider">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Before Solar</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Monthly Expense</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-500 mt-1 select-all font-sans">
                    ₹7,500/mo
                  </div>
                </div>
              </div>

              {/* Grid Background graphics */}
              <div className="my-auto opacity-35 flex flex-col items-center">
                <Zap className="w-16 h-16 text-slate-500 animate-pulse mb-4" />
                <p className="text-xs sm:text-sm text-center max-w-sm font-semibold tracking-wide text-slate-400">
                  Grid dependent power bills, recurring tariff hikes, and frequent load shedding.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold">Utility Dependency</span>
                <span className="text-sm font-bold text-slate-300">100% Fossil Fuel Sourced Grid</span>
              </div>
            </div>

            {/* AFTER SOLAR (Right sliding layer) */}
            <div
              className="absolute inset-y-0 right-0 left-0 bg-gradient-to-br from-[#0c2240] to-[#040c16] flex flex-col justify-between p-8 text-white select-none overflow-hidden transition-all duration-75"
              style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
            >
              {/* Inner content shifts horizontally so it is readable while sliding */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                
                <div className="flex justify-between items-start">
                  {/* Empty space for slider clip-path compatibility on left side */}
                  <div></div>
                  
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 font-extrabold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>After Teja Solar</span>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Net Expense</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#36FB04] mt-1 select-all font-sans">
                      ₹500/mo
                    </div>
                  </div>
                </div>

                {/* Solar graphics overlay */}
                <div className="my-auto flex flex-col items-center">
                  <Sun className="w-16 h-16 text-[#36FB04] animate-spin-slow mb-4" />
                  <p className="text-xs sm:text-sm text-center max-w-sm font-semibold tracking-wide text-white/80">
                    Clean, sustainable, state-subsidized rooftop solar generation with 25-year reliability!
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div></div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold">System Status</span>
                    <span className="text-sm font-bold text-[#36FB04]">93% Monthly Grid Independence</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Drag Handle Bar and circular knob */}
            <div
              className="absolute inset-y-0 w-1 bg-accent cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-accent hover:bg-accent-hover text-text-main rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing transform transition-transform hover:scale-115">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7 16l-4-4 4-4v3h10v-3l4 4-4 4v-3h-10v3z" />
                </svg>
              </div>
            </div>

          </div>

          {/* Quick Stats Grid under comparison slider */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border-color dark:border-dark-border/40 text-center">
            <div>
              <strong className="block text-lg sm:text-2xl font-extrabold text-red-500">₹7,000</strong>
              <span className="text-[9px] sm:text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Saved Monthly</span>
            </div>
            <div className="border-x border-border-color dark:border-dark-border/40">
              <strong className="block text-lg sm:text-2xl font-extrabold text-emerald-500">93.3%</strong>
              <span className="text-[9px] sm:text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Bill Reduction</span>
            </div>
            <div>
              <strong className="block text-lg sm:text-2xl font-extrabold text-[#268BFF]">3.8 Yrs</strong>
              <span className="text-[9px] sm:text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Avg Payback</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
