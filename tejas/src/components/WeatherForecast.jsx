import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, CloudSun, Sunrise, Sunset, BatteryCharging, CloudLightning, Thermometer, MapPin } from 'lucide-react';

const CITIES_WEATHER = {
  rajahmundry: {
    city: "Rajahmundry",
    temp: "34°C",
    condition: "Clear Sky / Sunny",
    potential: "Excellent",
    sunHours: "5.8 hrs",
    units: "17.4 kWh",
    sunrise: "5:44 AM",
    sunset: "6:34 PM",
    icon: Sun
  },
  kakinada: {
    city: "Kakinada",
    temp: "32°C",
    condition: "Partly Cloudy / Humid",
    potential: "Good",
    sunHours: "5.2 hrs",
    units: "15.6 kWh",
    sunrise: "5:42 AM",
    sunset: "6:33 PM",
    icon: CloudSun
  },
  amalapuram: {
    city: "Amalapuram",
    temp: "33°C",
    condition: "Bright Sunny Day",
    potential: "Excellent",
    sunHours: "5.7 hrs",
    units: "17.1 kWh",
    sunrise: "5:43 AM",
    sunset: "6:33 PM",
    icon: Sun
  },
  eluru: {
    city: "Eluru",
    temp: "35°C",
    condition: "Very Sunny / Dry",
    potential: "Extreme",
    sunHours: "6.1 hrs",
    units: "18.3 kWh",
    sunrise: "5:46 AM",
    sunset: "6:36 PM",
    icon: Sun
  },
  visakhapatnam: {
    city: "Visakhapatnam",
    temp: "31°C",
    condition: "Partly Humid Sun",
    potential: "Good",
    sunHours: "5.0 hrs",
    units: "15.0 kWh",
    sunrise: "5:39 AM",
    sunset: "6:30 PM",
    icon: CloudSun
  }
};

export default function WeatherForecast() {
  const [selectedCity, setSelectedCity] = useState('rajahmundry');
  const weather = CITIES_WEATHER[selectedCity];
  const WeatherIcon = weather.icon;

  return (
    <section className="py-20 md:py-24 bg-bg-primary dark:bg-dark-bg-primary relative overflow-hidden select-none border-b border-border-color dark:border-dark-border/40">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-yellow-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <Sun className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Solar Forecast widget</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            Weather & Solar <span className="text-[#36FB04]">Potential</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Select a service area to inspect current regional meteorological readings, estimated daily solar irradiance, and generation efficiency.
          </p>
        </div>

        {/* Forecast Card Frame */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50/50 dark:from-[#0a1426] dark:to-[#050a14] border border-border-color dark:border-dark-border rounded-[2.5rem] p-6 md:p-8 shadow-sm">
          
          {/* City Selection Tabs */}
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-6 border-b border-border-color/45 dark:border-dark-border/10 scrollbar-none mb-8">
            {Object.keys(CITIES_WEATHER).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCity(key)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                  selectedCity === key
                    ? "bg-accent text-text-main border border-accent shadow-sm"
                    : "bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border/40 text-text-muted dark:text-dark-text-muted hover:border-accent"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{CITIES_WEATHER[key].city}</span>
              </button>
            ))}
          </div>

          {/* Forecast details with transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCity}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Big Weather Temperature Info (5 cols) */}
              <div className="md:col-span-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-[#0c2240] dark:to-[#040c16] rounded-3xl p-6 border border-amber-500/20 dark:border-sky-500/10 text-center flex flex-col items-center justify-center min-h-[220px]">
                <WeatherIcon className="w-16 h-16 text-amber-500 mb-4 animate-pulse" />
                <span className="text-4xl md:text-5xl font-black text-text-main dark:text-white font-sans tracking-tight">
                  {weather.temp}
                </span>
                <span className="text-sm font-bold text-text-main dark:text-white mt-2 leading-none uppercase tracking-wide">
                  {weather.condition}
                </span>
                <span className="text-[10px] text-text-muted dark:text-dark-text-muted mt-2 font-bold uppercase tracking-wider">
                  AP Meteorological Estimate
                </span>
              </div>

              {/* Right Column: Solar potential statistics (7 cols) */}
              <div className="md:col-span-7 grid grid-cols-2 gap-4">
                
                {/* Potential */}
                <div className="p-4 bg-white dark:bg-dark-primary/10 border border-border-color dark:border-dark-border/40 rounded-2xl flex flex-col justify-center">
                  <span className="text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mb-1.5">Solar Potential</span>
                  <strong className={`text-base font-extrabold font-sans leading-none ${
                    weather.potential === "Extreme" || weather.potential === "Excellent" ? "text-emerald-500" : "text-amber-500"
                  }`}>
                    {weather.potential}
                  </strong>
                </div>

                {/* Sun hours */}
                <div className="p-4 bg-white dark:bg-dark-primary/10 border border-border-color dark:border-dark-border/40 rounded-2xl flex flex-col justify-center">
                  <span className="text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mb-1.5">Peak Sun Hours</span>
                  <strong className="text-base font-extrabold text-text-main dark:text-white font-sans leading-none">
                    {weather.sunHours}
                  </strong>
                </div>

                {/* Expected units */}
                <div className="p-4 bg-white dark:bg-dark-primary/10 border border-border-color dark:border-dark-border/40 rounded-2xl flex flex-col justify-center col-span-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Est. Generation Today</span>
                    <BatteryCharging className="w-4 h-4 text-[#36FB04] animate-pulse" />
                  </div>
                  <strong className="text-lg font-extrabold text-[#36FB04] font-sans leading-none">
                    {weather.units}
                  </strong>
                  <span className="text-[9px] text-text-muted/65 dark:text-dark-text-muted/65 font-bold uppercase tracking-widest mt-1">
                    * Calculated for standard 3 kW system array
                  </span>
                </div>

                {/* Sunrise */}
                <div className="p-4 bg-white dark:bg-dark-primary/10 border border-border-color dark:border-dark-border/40 rounded-2xl flex items-center gap-3">
                  <Sunrise className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <span className="block text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider leading-none mb-1">Sunrise</span>
                    <strong className="text-xs font-bold text-text-main dark:text-white leading-none">{weather.sunrise}</strong>
                  </div>
                </div>

                {/* Sunset */}
                <div className="p-4 bg-white dark:bg-dark-primary/10 border border-border-color dark:border-dark-border/40 rounded-2xl flex items-center gap-3">
                  <Sunset className="w-5 h-5 text-orange-500 shrink-0" />
                  <div>
                    <span className="block text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider leading-none mb-1">Sunset</span>
                    <strong className="text-xs font-bold text-text-main dark:text-white leading-none">{weather.sunset}</strong>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
