import { MapPin, CheckCircle, Shield } from 'lucide-react';

const AREAS = [
  {
    id: 1,
    city: "Rajahmundry (HQ)",
    count: "140+ Installations",
    desc: "Our primary corporate operations base. Coordinates statewide site surveys, MNRE portal uploads, and APEPDCL approvals."
  },
  {
    id: 2,
    city: "Visakhapatnam",
    count: "110+ Installations",
    desc: "Serving residential villas on Beach Road and heavy commercial arrays within industrial development zones."
  },
  {
    id: 3,
    city: "Kakinada",
    count: "85+ Installations",
    desc: "Active domestic installations and seaport commercial grids utilizing high-durability, rust-proof mounting structures."
  },
  {
    id: 4,
    city: "Amalapuram",
    count: "60+ Installations",
    desc: "Delivering solar submersible water pumps and agricultural farm grids across the fertile Konaseema fields."
  },
  {
    id: 5,
    city: "Eluru",
    count: "50+ Installations",
    desc: "Securing domestic solar rooftop setups and net-metering approvals under central subsidy programs."
  }
];

export default function ServiceAreas() {
  return (
    <section className="py-20 md:py-24 bg-bg-primary dark:bg-dark-bg-primary relative overflow-hidden select-none border-b border-border-color dark:border-dark-border/40">
      
      {/* Decorative Orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regional Coverage Network</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            Our Active <span className="text-[#36FB04]">Service Areas</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Teja Solar provides localized logistics, rapid structural inspections, and DISCOM coordination across coastal and agricultural Andhra Pradesh.
          </p>
        </div>

        {/* Areas Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {AREAS.map((area) => (
            <div
              key={area.id}
              className="p-6 md:p-8 bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-3xl shadow-sm hover:shadow-md hover:border-[#268BFF]/40 dark:hover:border-[#268BFF]/45 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-light dark:bg-accent/10 text-accent flex items-center justify-center transition-transform group-hover:scale-105">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 px-3 py-1.5 rounded-xl">
                  {area.count}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-text-main dark:text-white tracking-tight leading-none mb-3 font-sans">
                {area.city}
              </h3>
              
              <p className="text-text-muted dark:text-dark-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                {area.desc}
              </p>

              <div className="flex gap-4 border-t border-border-color dark:border-dark-border/30 pt-4 text-[10px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#36FB04]" /> 48h Inspection</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-accent" /> Local Support</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
