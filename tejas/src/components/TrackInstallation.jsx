import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Search, Loader2, CheckCircle2, Clock, Calendar, Smartphone, FileKey } from 'lucide-react';

export default function TrackInstallation() {
  const [mobile, setMobile] = useState('');
  const [installId, setInstallId] = useState('');
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!mobile.trim() || !installId.trim()) return;

    setLoading(true);

    // Simulate database lookup
    setTimeout(() => {
      setLoading(false);
      setTrackingData({
        id: installId.toUpperCase(),
        phone: mobile,
        customerName: "Srinivasa Reddy",
        capacity: "3 kW On-Grid",
        location: "Rajahmundry",
        progress: 75,
        estDays: 3,
        steps: [
          { name: "Site Survey Completed", status: "done", desc: "Physical dimensions and shadow analysis logged." },
          { name: "Government Subsidy Approved", status: "done", desc: "NREDCAP feasibility clearance issued." },
          { name: "Solar Panel Installation Completed", status: "done", desc: "Panel mounting and inverter wiring finished." },
          { name: "Bidirectional Net Meter Integration", status: "pending", desc: "APEPDCL synchronization scheduled." }
        ]
      });
    }, 1800);
  };

  const handleReset = () => {
    setMobile('');
    setInstallId('');
    setTrackingData(null);
  };

  return (
    <section className="py-20 md:py-24 bg-bg-secondary dark:bg-[#060c18] border-b border-border-color dark:border-dark-border/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Order Tracker</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            Track My <span className="text-accent">Installation</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Enter your mobile number and unique Installation ID below to trace real-time paperwork status, physical assembly progress, and net-metering dispatch schedules.
          </p>
        </div>

        {/* Tracker panel */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-[2.5rem] p-6 md:p-8 shadow-sm">
          
          <AnimatePresence mode="wait">
            {!trackingData && !loading && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleTrack}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Mobile */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-accent" />
                      <span>Mobile Number</span>
                    </label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter 10-digit Mobile Number"
                      className="w-full px-4 py-3 bg-bg-secondary dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-white rounded-xl font-medium focus:outline-none focus:border-accent text-sm"
                      required
                    />
                  </div>

                  {/* ID */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FileKey className="w-3.5 h-3.5 text-accent" />
                      <span>Installation ID</span>
                    </label>
                    <input
                      type="text"
                      value={installId}
                      onChange={(e) => setInstallId(e.target.value)}
                      placeholder="e.g. AP-SOL-99"
                      className="w-full px-4 py-3 bg-bg-secondary dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-white rounded-xl font-medium focus:outline-none focus:border-accent text-sm"
                      required
                    />
                  </div>

                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-xl transition-all duration-300 active:scale-98 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 border-none"
                  >
                    <Search className="w-4 h-4" />
                    <span>Track Installation</span>
                  </button>
                </div>
              </motion.form>
            )}

            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <Loader2 className="w-10 h-10 text-accent animate-spin mb-6" />
                <h3 className="text-lg font-extrabold text-text-main dark:text-white mb-2">
                  Fetching Project Record
                </h3>
                <p className="text-xs text-text-muted dark:text-dark-text-muted font-medium">
                  Connecting to Teja Solar internal dispatch and APEPDCL net-meter portals...
                </p>
              </motion.div>
            )}

            {trackingData && !loading && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                {/* Header Summary info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border-color dark:border-dark-border/40 pb-6 gap-4">
                  <div>
                    <span className="text-[10px] text-accent font-black uppercase tracking-widest block mb-1">
                      Active Deployment Profile
                    </span>
                    <h3 className="text-xl font-extrabold text-text-main dark:text-white tracking-tight font-sans">
                      ID: {trackingData.id}
                    </h3>
                    <p className="text-xs text-text-muted dark:text-dark-text-muted mt-1.5 font-bold uppercase tracking-wide">
                      Client: <strong>{trackingData.customerName}</strong> | Specs: <strong>{trackingData.capacity}</strong>
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-bg-secondary dark:bg-[#0a1426]/50 text-text-main dark:text-white font-bold rounded-xl border border-border-color dark:border-dark-border/40 text-xs hover:border-accent cursor-pointer transition-all duration-300"
                  >
                    Track New ID
                  </button>
                </div>

                {/* Progress bar info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-wider">
                    <span>Overall Assembly Progress</span>
                    <span className="text-[#36FB04]">{trackingData.progress}% Complete</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-dark-border rounded-full overflow-hidden border border-border-color dark:border-dark-border/20">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${trackingData.progress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-[#36FB04]"
                    ></motion.div>
                  </div>
                </div>

                {/* Stepper Steps List */}
                <div className="space-y-6 pt-2">
                  {trackingData.steps.map((step, index) => {
                    const isDone = step.status === "done";
                    return (
                      <div key={index} className="flex gap-4 items-start relative select-none">
                        
                        {/* Connecting line between steps */}
                        {index < trackingData.steps.length - 1 && (
                          <div className={`absolute left-4 top-8 bottom-[-24px] w-0.5 ${
                            isDone ? "bg-[#36FB04]" : "bg-gray-200 dark:bg-dark-border/40"
                          }`}></div>
                        )}

                        {/* Step point Icon */}
                        {isDone ? (
                          <div className="w-8.5 h-8.5 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20 shadow-sm relative z-10 bg-white dark:bg-[#0a1426]">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          </div>
                        ) : (
                          <div className="w-8.5 h-8.5 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20 shadow-sm relative z-10 bg-white dark:bg-[#0a1426] animate-pulse">
                            <Clock className="w-5 h-5 text-amber-500" />
                          </div>
                        )}

                        {/* Text */}
                        <div className="flex-grow pt-0.5">
                          <h4 className={`text-sm sm:text-base font-extrabold tracking-tight leading-none mb-1.5 ${
                            isDone ? "text-text-main dark:text-white" : "text-amber-500 font-black"
                          }`}>
                            {step.name}
                          </h4>
                          <p className="text-xs text-text-muted dark:text-dark-text-muted font-medium leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Estimated Completion details */}
                <div className="p-5 bg-amber-500/5 border border-amber-500/25 dark:border-amber-500/30 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-amber-500 shrink-0" />
                    <div>
                      <span className="block text-[9px] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider leading-none mb-1">Estimated Dispatch Synchronization</span>
                      <strong className="text-xs font-bold text-text-main dark:text-white leading-none">Net meter setup scheduled by DISCOM.</strong>
                    </div>
                  </div>

                  <div className="shrink-0 bg-accent text-text-main font-black text-xs px-4 py-2 rounded-xl shadow-sm tracking-wide leading-none">
                    {trackingData.estDays} Days Remaining
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
