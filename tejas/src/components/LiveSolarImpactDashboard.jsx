import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, IndianRupee, Leaf, Trees, Activity, Flame } from 'lucide-react';

function LiveCountUp({ baseValue, incrementRate, decimalPlaces = 0, suffix = "" }) {
  const [value, setValue] = useState(baseValue);

  useEffect(() => {
    // Quick initial count-up from 90% of value
    const start = baseValue * 0.95;
    const end = baseValue;
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      
      const current = start + easeProgress * (end - start);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [baseValue]);

  // Real-time ticking up simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(prev => prev + incrementRate * (0.8 + Math.random() * 0.4));
    }, 1500);
    return () => clearInterval(timer);
  }, [incrementRate]);

  return (
    <span>
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
      })}
      {suffix}
    </span>
  );
}

export default function LiveSolarImpactDashboard() {
  const [timeframe, setTimeframe] = useState('lifetime'); // 'lifetime' | 'annual'

  // Values in AP solar context
  const statsData = {
    lifetime: [
      {
        id: 'energy',
        label: 'Total Energy Generated',
        base: 3482910.4,
        rate: 0.35, // 0.35 kWh generated every 1.5 seconds
        decimal: 1,
        suffix: ' kWh',
        icon: Sun,
        color: 'from-amber-400 to-orange-500',
        textColor: 'text-amber-500',
        bgGlow: 'rgba(245, 158, 11, 0.15)',
        desc: 'Clean power produced by our statewide AP installations'
      },
      {
        id: 'money',
        label: 'Total Money Saved',
        base: 24380370,
        rate: 2.45, // ₹2.45 saved every 1.5 seconds
        decimal: 0,
        prefix: '₹',
        icon: IndianRupee,
        color: 'from-emerald-400 to-teal-500',
        textColor: 'text-emerald-500',
        bgGlow: 'rgba(16, 185, 129, 0.15)',
        desc: 'Cumulative money saved by consumers on utility bills'
      },
      {
        id: 'co2',
        label: 'CO₂ Emissions Reduced',
        base: 2786328.2,
        rate: 0.28, // 0.28 kg CO2 reduced every 1.5s
        decimal: 1,
        suffix: ' kg',
        icon: Leaf,
        color: 'from-cyan-400 to-blue-500',
        textColor: 'text-cyan-500',
        bgGlow: 'rgba(6, 182, 212, 0.15)',
        desc: 'Greenhouse gas emissions offset from coal grid'
      },
      {
        id: 'trees',
        label: 'Equivalent Trees Planted',
        base: 146282.1,
        rate: 0.015, // tree equivalent equivalent
        decimal: 1,
        icon: Trees,
        color: 'from-green-400 to-emerald-600',
        textColor: 'text-green-500',
        bgGlow: 'rgba(34, 197, 94, 0.15)',
        desc: 'Eco-benefit equivalent to planting young forests'
      }
    ],
    annual: [
      {
        id: 'energy',
        label: 'Annual Energy Generated',
        base: 875240,
        rate: 0.08,
        decimal: 0,
        suffix: ' kWh',
        icon: Sun,
        color: 'from-amber-400 to-orange-500',
        textColor: 'text-amber-500',
        bgGlow: 'rgba(245, 158, 11, 0.15)',
        desc: 'Average annual green power output'
      },
      {
        id: 'money',
        label: 'Annual Money Saved',
        base: 6126680,
        rate: 0.62,
        decimal: 0,
        prefix: '₹',
        icon: IndianRupee,
        color: 'from-emerald-400 to-teal-500',
        textColor: 'text-emerald-500',
        bgGlow: 'rgba(16, 185, 129, 0.15)',
        desc: 'Yearly financial savings across all families'
      },
      {
        id: 'co2',
        label: 'Annual CO₂ Offset',
        base: 700192,
        rate: 0.07,
        decimal: 0,
        suffix: ' kg',
        icon: Leaf,
        color: 'from-cyan-400 to-blue-500',
        textColor: 'text-cyan-500',
        bgGlow: 'rgba(6, 182, 212, 0.15)',
        desc: 'Carbon footprints neutralized per year'
      },
      {
        id: 'trees',
        label: 'Annual Trees Equivalent',
        base: 36852,
        rate: 0.004,
        decimal: 0,
        icon: Trees,
        color: 'from-green-400 to-emerald-600',
        textColor: 'text-green-500',
        bgGlow: 'rgba(34, 197, 94, 0.15)',
        desc: 'Yearly ecological value in tree equivalence'
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 75, damping: 15 }
    }
  };

  return (
    <section className="py-20 md:py-24 bg-bg-primary dark:bg-dark-bg-primary relative overflow-hidden select-none border-b border-border-color dark:border-dark-border/40">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-accent/10 dark:bg-accent/5 rounded-full filter blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#268BFF]/10 dark:bg-[#268BFF]/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-emerald-500/10">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Live Generation Impact</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
              Live Solar Impact <span className="text-[#36FB04]">Dashboard</span>
            </h2>
            <p className="max-w-xl mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
              Track the immediate environmental and financial benefits being generated by Teja Solar systems in real-time across Andhra Pradesh.
            </p>
          </div>

          {/* Timeframe Slider Toggle */}
          <div className="flex bg-bg-secondary dark:bg-[#0a1426] p-1 rounded-xl border border-border-color dark:border-dark-border/40 self-start md:self-end">
            <button
              onClick={() => setTimeframe('lifetime')}
              className={`px-5 py-2 rounded-lg font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                timeframe === 'lifetime'
                  ? 'bg-accent text-text-main shadow-md'
                  : 'text-text-muted dark:text-dark-text-muted hover:text-text-main dark:hover:text-white'
              }`}
            >
              Lifetime Impact
            </button>
            <button
              onClick={() => setTimeframe('annual')}
              className={`px-5 py-2 rounded-lg font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                timeframe === 'annual'
                  ? 'bg-accent text-text-main shadow-md'
                  : 'text-text-muted dark:text-dark-text-muted hover:text-text-main dark:hover:text-white'
              }`}
            >
              Annual Average
            </button>
          </div>
        </div>

        {/* Real-time updating stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {statsData[timeframe].map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                className="relative flex flex-col p-6 md:p-8 bg-white/45 dark:bg-[#0a1426]/40 backdrop-blur-md border border-border-color dark:border-dark-border/40 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 group cursor-pointer hover:border-accent/40 dark:hover:border-accent/40"
              >
                {/* Background soft glow gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${stat.bgGlow} 0%, transparent 60%)`
                  }}
                ></div>

                {/* Card Icon Header */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-500 group-hover:scale-110`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Animated counter block */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-main dark:text-white tracking-tight leading-none mb-2 font-sans flex items-baseline gap-1 select-all">
                  {stat.prefix && <span className={stat.textColor}>{stat.prefix}</span>}
                  <LiveCountUp
                    baseValue={stat.base}
                    incrementRate={stat.rate}
                    decimalPlaces={stat.decimal}
                    suffix={stat.suffix || ""}
                  />
                </h3>

                {/* Labels and description */}
                <span className="text-text-main dark:text-white font-bold text-xs uppercase tracking-wider mb-2">
                  {stat.label}
                </span>
                
                <p className="text-text-muted dark:text-dark-text-muted text-[0.74rem] md:text-xs leading-relaxed mt-auto pt-2 border-t border-border-color/45 dark:border-dark-border/20">
                  {stat.desc}
                </p>

                {/* Top border active status bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live Grid updates heartbeat ticker */}
        <div className="mt-10 flex items-center justify-center gap-2.5 text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-widest bg-bg-secondary dark:bg-[#0a1426]/30 border border-border-color dark:border-dark-border/40 py-2.5 px-6 rounded-full w-fit mx-auto shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36FB04] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#36FB04]"></span>
          </span>
          <Activity className="w-3.5 h-3.5 text-[#36FB04] animate-pulse" />
          <span>Simulating Real-Time Solar Generation Output Across AP</span>
        </div>

      </div>
    </section>
  );
}
