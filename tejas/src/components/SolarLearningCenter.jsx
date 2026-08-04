import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, ChevronRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "PM Surya Ghar Yojana Guide",
    summary: "Learn how the central government scheme provides up to ₹78,000 in direct solar rooftop subsidies and guarantees 300 units of free power.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=500&auto=format&fit=crop",
    details: [
      "The PM Surya Ghar Muft Bijli Yojana is a central government initiative to supply up to 300 free monthly electricity units.",
      "Direct financial subsidies are: 1 kW (₹30,000), 2 kW (₹60,000), 3 kW or higher (₹78,000 maximum limit).",
      "Consumers can apply online. Approved integrators (like Teja Solar) must complete the physical panel mounting.",
      "Partner banks offer low-interest solar financing under 7% p.a. without collateral requirement."
    ]
  },
  {
    id: 2,
    title: "On-grid vs Hybrid Systems",
    summary: "Examine the technical differences, installation costs, battery requirements, and utility grid dependencies of solar systems.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=500&auto=format&fit=crop",
    details: [
      "On-grid systems are synchronized directly to your local utility company. They are affordable, simple, and eligible for government subsidies.",
      "On-grid setups do not function during power cuts (to prevent safety hazards to grid technicians during repair).",
      "Hybrid systems combine panel arrays with battery banks. They store energy for nighttime use or emergency power cuts.",
      "Hybrid systems are roughly 40-60% more expensive due to lithium/lead-acid battery costs and hybrid-rated inverters."
    ]
  },
  {
    id: 3,
    title: "Panel Maintenance Practices",
    summary: "Simple steps to clean, maintain, and monitor your solar panels to ensure peak performance efficiency over their 25-year lifespan.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=500&auto=format&fit=crop",
    details: [
      "Clean panels at least twice a month using plain water and a soft wiper brush to clear dust, soot, and bird droppings.",
      "Do not wash panels during peak sun hours (hot glass plus cold water can trigger thermal fracture). Wash at dawn or dusk.",
      "Periodically check the smart Wi-Fi monitoring app for unexplained drops in generation capacity.",
      "Ensure surrounding trees are trimmed regularly to avoid shade coverage over the solar array."
    ]
  },
  {
    id: 4,
    title: "How Net Metering Works in AP",
    summary: "Understand the bidirectional grid meter integration, net billing mechanics, and DISCOM credit roll-overs in Andhra Pradesh.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=500&auto=format&fit=crop",
    details: [
      "A net meter is a bidirectional meter tracking energy imported from the grid vs energy exported from your solar panels.",
      "If your panels export more energy than you import, your DISCOM issues credit units to your bill.",
      "Net billing credits are rolled over to the next month within the financial year. Leftover units are compensated at state rates annually.",
      "APCPDCL and APEPDCL dictate safety checks and empanelled equipment checks before commissioning the net meter."
    ]
  },
  {
    id: 5,
    title: "Solar FAQs & Performance",
    summary: "Get immediate answers to solar warranties, crop-field setups, cloudy day outputs, and equipment durability questions.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=500&auto=format&fit=crop",
    details: [
      "Solar panels carry a 10-year product warranty and a 25-year linear performance warranty ensuring >80% capacity retention.",
      "During rainy or overcast days, panels still generate 10-25% of their peak capacity from diffused solar rays.",
      "Typical payback period ranges from 3.5 to 5 years. The remaining 20 years of power generation represent pure profit.",
      "Rooftop mounting structures are heavy-duty, hot-dip galvanized steel built to withstand wind speeds of up to 150 km/h."
    ]
  }
];

export default function SolarLearningCenter() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section className="py-20 md:py-24 bg-bg-secondary dark:bg-[#060c18] border-b border-border-color dark:border-dark-border/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Solar Learning Center</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            Solar Resources & <span className="text-[#268BFF]">Insights</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Expand your solar vocabulary. Read detailed guides about central government subsidies, maintenance protocols, and net metering in Andhra Pradesh.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="flex flex-col bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden bg-bg-secondary shrink-0">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text content summary */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-text-main dark:text-white tracking-tight leading-snug mb-3">
                    {art.title}
                  </h3>
                  <p className="text-text-muted dark:text-dark-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {art.summary}
                  </p>
                </div>

                <button
                  onClick={() => setActiveArticle(art)}
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-bg-secondary dark:bg-[#0a1426]/50 hover:bg-accent border border-border-color dark:border-dark-border/40 hover:text-text-main hover:border-accent text-text-muted dark:text-dark-text-muted font-bold rounded-xl text-xs transition-all duration-300 cursor-pointer active:scale-98"
                >
                  <span>Read Guide details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Detail Modal Overlay */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-white dark:bg-[#0a1426] border border-border-color dark:border-dark-border rounded-[2.5rem] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-bg-secondary dark:bg-[#060c18] border border-border-color dark:border-dark-border/40 hover:border-accent text-text-muted dark:text-dark-text-muted flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Article Header */}
                <span className="text-[10px] text-accent font-black uppercase tracking-widest block mb-2">
                  Solar Resource Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-text-main dark:text-white tracking-tight mb-6 pr-10">
                  {activeArticle.title}
                </h3>

                {/* Article Detail bullet list */}
                <div className="space-y-4">
                  {activeArticle.details.map((detail, index) => (
                    <div key={index} className="flex gap-4 items-start p-4 bg-bg-secondary dark:bg-[#060c18]/50 border border-border-color dark:border-dark-border/40 rounded-2xl">
                      <CheckCircle2 className="w-5 h-5 text-[#36FB04] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-text-main dark:text-white leading-relaxed font-medium">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer consultation CTA */}
                <div className="mt-8 pt-6 border-t border-border-color dark:border-dark-border/30 flex justify-end gap-3">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 bg-bg-secondary dark:bg-[#060c18] border border-border-color dark:border-dark-border/40 text-text-main dark:text-white font-bold rounded-xl text-xs transition-all cursor-pointer hover:border-accent active:scale-95"
                  >
                    Close
                  </button>

                  <a
                    href={`https://wa.me/919391110007?text=Hello Teja Solar Team, I read your article on "${activeArticle.title}" and want to get a direct technical consultation!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#36FB04] text-black font-extrabold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center active:scale-95 shadow-sm"
                  >
                    Consult on WhatsApp
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
