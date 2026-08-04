import { motion } from 'framer-motion';
import { ClipboardList, FileSpreadsheet, FileCheck2, HardHat, RefreshCw, Zap, Sparkles } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "Site Survey",
    day: "Day 1",
    desc: "Our expert solar engineers perform physical roof measurements, pitch analysis, structural checks, and plot surrounding shading obstacles.",
    icon: ClipboardList,
    color: "from-blue-400 to-indigo-500",
    bgGlow: "rgba(99, 102, 241, 0.15)"
  },
  {
    id: 2,
    title: "Engineering & Quotation",
    day: "Day 2",
    desc: "We generate a customized 3D solar layout, estimate annual energy output, select components (panels/inverter), and issue the pricing proposal.",
    icon: FileSpreadsheet,
    color: "from-amber-400 to-orange-500",
    bgGlow: "rgba(245, 158, 11, 0.15)"
  },
  {
    id: 3,
    title: "Government Feasibility Approval",
    day: "Day 5",
    desc: "We register your system on the central government portal under PM Surya Ghar Yojana and secure state DISCOM feasibility approval.",
    icon: FileCheck2,
    color: "from-cyan-400 to-blue-500",
    bgGlow: "rgba(6, 182, 212, 0.15)"
  },
  {
    id: 4,
    title: "Panel Installation",
    day: "Day 10",
    desc: "Our certified technician crew mounts the robust rust-proof structures, installs the panels, mounts the inverter, and completes all electrical wiring.",
    icon: HardHat,
    color: "from-red-400 to-rose-500",
    bgGlow: "rgba(244, 63, 94, 0.15)"
  },
  {
    id: 5,
    title: "Net Meter Integration",
    day: "Day 15",
    desc: "State DISCOM inspectors perform safety audits, synchronize your bidirectional net meter, and connect your solar array to the grid network.",
    icon: RefreshCw,
    color: "from-teal-400 to-emerald-500",
    bgGlow: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: 6,
    title: "Solar Activated",
    day: "Day 17",
    desc: "The system is turned on! You generate clean energy, feed surplus back to the grid, watch your bills plummet, and monitor stats via app.",
    icon: Zap,
    color: "from-[#36FB04] to-emerald-600",
    bgGlow: "rgba(54, 251, 4, 0.15)"
  }
];

export default function InstallationTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="py-20 md:py-24 bg-bg-primary dark:bg-dark-bg-primary relative overflow-hidden select-none border-b border-border-color dark:border-dark-border/40">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-[#268BFF]/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Process Timeline</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            How We Install <span className="text-[#36FB04]">Your Solar Grid</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Teja Solar provides end-to-end management, coordinating surveys, engineering, government approvals, and net-metering synchronization within 17 days.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central connector line (hidden on small screen, centered on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-amber-500 via-blue-500 via-rose-500 to-[#36FB04] transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Mobile vertical timeline line */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-dark-border/40 md:hidden"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-16"
          >
            {STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bubble point */}
                  {/* Desktop bubble position */}
                  <div className="absolute left-6 md:left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2 hidden md:block z-10">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md border-4 border-white dark:border-[#0a1426]`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Mobile bubble position */}
                  <div className="absolute left-6 top-5 transform -translate-x-1/2 md:hidden z-10">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Empty side for desktop spacing */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>

                  {/* Content card side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      className={`p-6 md:p-8 bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-3xl relative hover:shadow-md transition-shadow group cursor-default`}
                    >
                      {/* Active status top gradient indicator */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.color} rounded-t-3xl`}></div>

                      {/* Header details */}
                      <div className="flex justify-between items-baseline gap-4 mb-3">
                        <h3 className="text-base sm:text-lg font-extrabold text-text-main dark:text-white tracking-tight font-sans">
                          {step.title}
                        </h3>
                        <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider bg-gradient-to-br ${step.color} -webkit-background-clip-text text-transparent bg-clip-text`}>
                          {step.day}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-text-muted dark:text-dark-text-muted leading-relaxed font-medium">
                        {step.desc}
                      </p>

                      {/* Card background hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 90% 90%, ${step.bgGlow} 0%, transparent 60%)`
                        }}
                      ></div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
