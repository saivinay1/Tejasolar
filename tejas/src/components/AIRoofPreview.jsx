import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Eye, Cpu, Zap, RotateCcw, Columns, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AIRoofPreview() {
  const [image, setImage] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Mock estimates
  const [estimates, setEstimates] = useState({
    panels: 0,
    capacity: 0.0,
    generation: 0
  });

  const scanStepsText = [
    "Uploading and rendering image...",
    "Detecting roof boundaries & pitch...",
    "Analyzing solar irradiance & shadow zones...",
    "Optimizing panel orientation and layout...",
    "Generating solar potential profile..."
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        triggerScanning();
      };
      reader.readAsDataURL(file);
    }
  };

  const loadSample = () => {
    // A clean roof layout representation
    setImage("https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop");
    triggerScanning();
  };

  const triggerScanning = () => {
    setScanning(true);
    setScanStep(0);
    setShowResults(false);
  };

  useEffect(() => {
    if (!scanning) return;

    if (scanStep < scanStepsText.length) {
      const timer = setTimeout(() => {
        setScanStep(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setScanning(false);
      setShowResults(true);
      // Generate some realistic estimates
      setEstimates({
        panels: Math.floor(8 + Math.random() * 8), // 8 to 16 panels
        capacity: parseFloat((4.4 + Math.random() * 4).toFixed(1)), // 4.4 to 8.4 kW
        generation: Math.floor(520 + Math.random() * 480) // 520 to 1000 Units/month
      });
    }
  }, [scanning, scanStep]);

  const resetScanner = () => {
    setImage(null);
    setScanning(false);
    setScanStep(0);
    setShowResults(false);
  };

  return (
    <section className="py-20 md:py-24 bg-bg-primary dark:bg-dark-bg-primary relative overflow-hidden select-none border-b border-border-color dark:border-dark-border/40">
      
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-orange-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Powered Scanner</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-white tracking-tight leading-tight">
            AI Roof <span className="text-[#36FB04]">Preview</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Upload a photo of your terrace or farm area, and our simulated AI engine will automatically scan structural coordinates and overlay a mock solar panel grid.
          </p>
        </div>

        {/* Upload & Scanner interface */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-primary/20 border border-border-color dark:border-dark-border rounded-[2.5rem] p-6 md:p-8 shadow-sm">
          
          <AnimatePresence mode="wait">
            {!image && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="border-2 border-dashed border-border-color dark:border-dark-border/60 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[300px] hover:border-accent dark:hover:border-accent transition-colors relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-light dark:bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Upload className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-extrabold text-text-main dark:text-white mb-2">
                  Upload Roof or Site Picture
                </h3>
                <p className="text-xs text-text-muted dark:text-dark-text-muted max-w-sm mb-6 leading-relaxed">
                  Support JPEG, PNG formats. Make sure the roof or terrace space is clearly visible for optimal placement scanning.
                </p>

                {/* Upload Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <label className="px-6 py-3 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-xl text-xs transition-all cursor-pointer shadow-sm hover:shadow active:scale-95 text-center">
                    Choose Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  <button
                    onClick={loadSample}
                    className="px-6 py-3 bg-bg-secondary dark:bg-[#0a1426] border border-border-color dark:border-dark-border/40 hover:border-accent text-text-main dark:text-white font-bold rounded-xl text-xs transition-all cursor-pointer active:scale-95"
                  >
                    Try Sample Roof
                  </button>
                </div>
              </motion.div>
            )}

            {image && scanning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center min-h-[300px]"
              >
                {/* Scanner animation spinner */}
                <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-accent/25 border-t-accent"
                  ></motion.div>
                  <Cpu className="w-8 h-8 text-accent animate-pulse" />
                </div>

                <h3 className="text-lg font-extrabold text-text-main dark:text-white mb-1.5 animate-pulse">
                  Analyzing Structural Fit
                </h3>
                
                {/* Step indicator */}
                <span className="text-[10px] text-accent font-black uppercase tracking-wider mb-4">
                  Step {scanStep + 1} of {scanStepsText.length}
                </span>

                <p className="text-xs text-text-muted dark:text-dark-text-muted max-w-md font-medium leading-relaxed">
                  {scanStepsText[Math.min(scanStep, scanStepsText.length - 1)]}
                </p>

                {/* Progress bar */}
                <div className="w-full max-w-xs h-1.5 bg-gray-100 dark:bg-dark-border rounded-full overflow-hidden mt-6">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${(scanStep / scanStepsText.length) * 100}%` }}
                    transition={{ ease: "easeInOut" }}
                    className="h-full bg-accent"
                  ></motion.div>
                </div>
              </motion.div>
            )}

            {image && showResults && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Column: Picture Overlay Frame (7 cols) */}
                <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-inner border border-border-color dark:border-dark-border/40 h-[280px] sm:h-[340px] bg-black">
                  
                  {/* Base uploaded picture */}
                  <img
                    src={image}
                    alt="Uploaded roof site"
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />

                  {/* Panel Grid Overlay layout (simulated solar panel overlay) */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-4 grid-rows-3 gap-2 w-full max-w-md h-4/5 transform rotate-x-12 rotate-y-6 rotate-z-3 opacity-80 pointer-events-none">
                      {Array.from({ length: estimates.panels }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0.75, scale: 1 }}
                          transition={{ delay: i * 0.08, duration: 0.4 }}
                          className="bg-sky-950/80 border border-sky-400 rounded shadow-md flex flex-col justify-between p-1.5 relative overflow-hidden backdrop-blur-[1px]"
                        >
                          {/* Solar panel grid lines */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.2)_1px,transparent_1px)] bg-[size:6px_6px]"></div>
                          <div className="w-1 h-1 rounded-full bg-sky-300 self-end relative z-10"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Scanning beam line effect */}
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#36FB04] to-transparent shadow-[0_0_15px_#36FB04] animate-bounce z-10"></div>
                </div>

                {/* Right Column: AI Scan Estimations Card (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#36FB04] font-extrabold text-xs uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Roof Scan Completed</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-text-main dark:text-white tracking-tight leading-snug font-sans">
                      Estimated Solar Potential
                    </h3>
                  </div>

                  {/* Outputs */}
                  <div className="space-y-4">
                    
                    {/* Panels */}
                    <div className="flex justify-between items-center p-4 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border/40 rounded-2xl shadow-sm">
                      <span className="text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Estimated Panel Fit</span>
                      <strong className="text-lg font-extrabold text-text-main dark:text-white">{estimates.panels} Panels</strong>
                    </div>

                    {/* Capacity */}
                    <div className="flex justify-between items-center p-4 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border/40 rounded-2xl shadow-sm">
                      <span className="text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Capacity Estimate</span>
                      <strong className="text-lg font-extrabold text-[#36FB04]">{estimates.capacity} kW</strong>
                    </div>

                    {/* Generation */}
                    <div className="flex justify-between items-center p-4 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border/40 rounded-2xl shadow-sm">
                      <span className="text-xs text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider">Expected Generation</span>
                      <strong className="text-lg font-extrabold text-[#268BFF]">{estimates.generation} Units/mo</strong>
                    </div>

                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <button
                      onClick={resetScanner}
                      className="px-5 py-3.5 bg-bg-secondary dark:bg-[#0a1426] hover:border-accent border border-border-color dark:border-dark-border/40 text-text-main dark:text-white font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 flex-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Re-scan</span>
                    </button>

                    <a
                      href={`https://wa.me/919391110007?text=Hello Teja Solar Team, I scanned my roof on your AI Roof Preview and it estimated a ${estimates.capacity} kW layout. I'd like to schedule a real inspection!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 flex-2 text-center"
                    >
                      <span>Submit Scan Details</span>
                    </a>
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
