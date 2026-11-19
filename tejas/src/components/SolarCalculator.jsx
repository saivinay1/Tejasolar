import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSolarPanel, faIndianRupeeSign, faClock, faTree, faMapMarkerAlt, faHome, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { jsPDF } from 'jspdf';

// High performance internal count-up for calculations
function CountUp({ target, duration = 800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(target);
    if (start === end || isNaN(end)) return;

    const totalFrames = Math.round(duration / 16.7);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress); // easeOutQuad

      const currentCount = easeProgress * end;
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 16.7);

    return () => clearInterval(counter);
  }, [target, duration]);

  if (target % 1 !== 0) {
    return <span>{count.toFixed(1)}</span>;
  }
  return <span>{Math.round(count).toLocaleString()}</span>;
}

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919391110007';

export default function SolarCalculator({ preselectedService, onServiceUsed }) {
  const [formData, setFormData] = useState({
    systemType: '',
    fullName: '',
    mobile: '',
    bill: '4500', // default value for slider
    roofArea: '300', // default value for slider
    city: '',
    address: '',
    pincode: '',
  });

  const [results, setResults] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, systemType: preselectedService }));
      if (onServiceUsed) onServiceUsed();
    }
  }, [preselectedService, onServiceUsed]);

  const sendWhatsAppRedirect = (calcResults) => {
    const message = `Hello Teja Solar Team,

I calculated my Solar Savings Estimate on your website! Here is my energy profile:

👤 Name: ${formData.fullName}
📞 Phone: ${formData.mobile}
📍 Address: ${formData.address}
🏙️ City: ${formData.city}
📮 Pincode: ${formData.pincode}
📐 Roof Area: ${formData.roofArea} sq. ft.
⚡ Avg. Monthly Bill: ₹${formData.bill}
💡 Option Selected: ${formData.systemType}

Recommended Specs:
📐 System Size: ${calcResults.systemSize} kW
📋 Est. Panels Needed: ${calcResults.panelsCount} Panels
💰 Gov Subsidy Slab: ₹${calcResults.subsidy}
💸 Total Install Cost: ₹${calcResults.totalCost}
💎 Net Out-of-pocket Cost: ₹${calcResults.netCost}
⏳ Payback Period: ${calcResults.paybackPeriod} Years
📈 25-Year Lifetime Savings: ₹${calcResults.lifetimeSavings}
🌳 CO2 Trees Offset: ${calcResults.treesOffset} Trees / year

I would like to book a Free Site Survey & Custom Design!`;

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (isCalculating) return;

    // Validate inputs with proper feedback
    const newErrors = {};
    if (!formData.systemType) {
      newErrors.systemType = 'Please select a solar installation sector.';
    }
    if (!formData.city) {
      newErrors.city = 'Please select your city in Andhra Pradesh.';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your street address or landmark.';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }
    const cleanPin = formData.pincode.replace(/\D/g, '');
    if (!/^\d{6}$/.test(cleanPin)) {
      newErrors.pincode = 'Please enter a valid 6-digit postal PIN code.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsCalculating(true);

    const monthlyBill = parseFloat(formData.bill);
    const roof = parseFloat(formData.roofArea);

    // Dynamic solar computations matching standard market rates in AP:
    // Recommended system size roughly: bill / 1500, capped or rounded
    let systemSize = Math.max(1.5, parseFloat((monthlyBill / 1500).toFixed(1)));
    
    // Check space constraints (approx 80 sq.ft per kW)
    const maxSpaceCapacity = parseFloat((roof / 80).toFixed(1));
    if (systemSize > maxSpaceCapacity) {
      systemSize = Math.max(1.5, maxSpaceCapacity);
    }

    // Estimated panel count (assuming ~550W high-efficiency panels)
    const panelsCount = Math.ceil((systemSize * 1000) / 550);

    // Subsidy computation: PM Surya Ghar Yojana
    // 1kW = 30k, 2kW = 60k, 3kW or more = 78k max
    let subsidy = 0;
    if (systemSize >= 3) {
      subsidy = 78000;
    } else if (systemSize >= 2) {
      subsidy = 60000;
    } else if (systemSize >= 1) {
      subsidy = 30000;
    } else {
      subsidy = Math.round(systemSize * 30000);
    }

    // Cost computation: approx ₹65,000 per kW (Standard tier-1 mono PERC/TOPCon)
    const totalCost = Math.round(systemSize * 65000);
    const netCost = Math.max(0, totalCost - subsidy);

    // Financial returns
    const annualSavings = Math.round(monthlyBill * 12 * 0.90);
    const lifetimeSavings = Math.round(annualSavings * 25 * 1.20);
    const paybackPeriod = parseFloat((Math.max(3.2, netCost / annualSavings)).toFixed(1));
    const treesOffset = Math.round(systemSize * 42);

    const calculatedResults = {
      systemSize,
      panelsCount,
      subsidy,
      totalCost,
      netCost,
      annualSavings,
      lifetimeSavings,
      paybackPeriod,
      treesOffset,
    };

    // Smooth computation loading state before revealing and redirecting
    setTimeout(() => {
      setResults(calculatedResults);
      setIsSubmitted(true);
      setIsCalculating(false);
      sendWhatsAppRedirect(calculatedResults);
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsCalculating(false);
    setErrors({});
    setResults(null);
    setFormData({
      systemType: '',
      fullName: '',
      mobile: '',
      bill: '4500',
      roofArea: '300',
      city: '',
      address: '',
      pincode: '',
    });
  };

  const handleDownloadPDF = () => {
    if (!results) return;

    const doc = new jsPDF();
    const primaryColor = "#0a1426";
    const accentColor = "#f97316";

    // Header styling
    doc.setFillColor(10, 20, 38); // dark background
    doc.rect(0, 0, 210, 45, 'F');

    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("TEJA SOLAR SOLUTIONS", 15, 20);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(180, 180, 180);
    doc.text("State-Registered Channel Partner | Andhra Pradesh Support", 15, 27);
    doc.text("Tel: +91 93911 10007 | Email: tejasolar18@gmail.com", 15, 34);

    // Decorative line
    doc.setDrawColor(249, 115, 22); // orange accent
    doc.setLineWidth(1.5);
    doc.line(0, 45, 210, 45);

    // Customer profile block
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(10, 20, 38);
    doc.text("CUSTOM SOLAR ESTIMATE PROPOSAL", 15, 60);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`Customer Name:  ${formData.fullName}`, 15, 70);
    doc.text(`Mobile Number:   ${formData.mobile}`, 15, 76);
    doc.text(`Installation ID:   TS-${Math.floor(100000 + Math.random() * 900000)}`, 15, 82);
    doc.text(`Address Profile:  ${formData.address}, ${formData.city} - ${formData.pincode}`, 15, 88);

    doc.line(15, 94, 195, 94);

    // Recommended System specs
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(10, 20, 38);
    doc.text("Recommended Solar Setup Details", 15, 105);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Recommended System Size:   ${results.systemSize} kW`, 15, 115);
    doc.text(`Estimated Panels Needed:     ${results.panelsCount} Panels (~550W Mono PERC/TOPCon)`, 15, 121);
    doc.text(`Roof Space Required:         ~${results.systemSize * 80} Sq. Ft. (Shade-Free Roof)`, 15, 127);
    doc.text(`Application Sector:          ${formData.systemType || 'Residential System'}`, 15, 133);

    doc.line(15, 139, 195, 139);

    // Financial Analysis
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Financial Savings & Cost Breakdown", 15, 150);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Estimated Total Capital Cost:   INR ${results.totalCost.toLocaleString()}`, 15, 160);
    doc.text(`Government Subsidy Slab:        - INR ${results.subsidy.toLocaleString()} (PM Surya Ghar)`, 15, 166);

    // Highlight Net Cost
    doc.setFont("helvetica", "bold");
    doc.setTextColor(34, 197, 94); // green
    doc.text(`Net Out-of-Pocket Expense:      INR ${results.netCost.toLocaleString()}`, 15, 174);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(`Est. Annual Electricity Savings: INR ${results.annualSavings.toLocaleString()}`, 15, 182);
    doc.text(`25-Year Cumulative Savings:     INR ${results.lifetimeSavings.toLocaleString()}`, 15, 188);
    doc.text(`Investment Payback Period:      ${results.paybackPeriod} Years`, 15, 194);
    doc.text(`Carbon Offset Equivalence:      ${results.treesOffset} Trees Planted / Year`, 15, 200);

    doc.line(15, 208, 195, 208);

    // Footer clauses
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.setFont("helvetica", "italic");
    doc.text("* This estimate is generated based on standard solar solar irradiance models in Andhra Pradesh.", 15, 218);
    doc.text("* Actual pricing and NREDCAP approvals are subject to site survey measurements and local regulations.", 15, 223);
    doc.text("* Subsidies are dispersed directly to bank accounts by MNRE following net meter sync.", 15, 228);

    // Signature stamp
    doc.setFont("helvetica", "bold");
    doc.setTextColor(10, 20, 38);
    doc.text("Authorized Integrator stamp", 140, 255);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("TEJA SOLAR SOLUTIONS PVT LTD", 140, 260);

    doc.save(`Teja_Solar_Proposal_${formData.fullName.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <section id="contact" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12 scroll-mt-20">
      <div className="flex flex-col lg:flex-row bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border rounded-3xl overflow-hidden shadow-sm">
        
        {/* Left Side */}
        <div className="flex-1 p-8 lg:p-12 bg-bg-secondary dark:bg-[#0a1426]/50 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-color dark:border-dark-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/20 text-[#dc2626] dark:text-red-400 font-extrabold text-xs uppercase tracking-wider mb-6 w-fit">
            <FontAwesomeIcon icon={faStar} />
            <span>Advanced Solar Savings Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-dark-text-main mb-4 tracking-tight leading-tight">
            Calculate Your Solar Returns
          </h2>
          <p className="text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed mb-6">
            Find out exactly how much clean power you can harvest, calculate your government subsidies under PM Surya Ghar Yojana, and estimate your 25-year financial savings instantly with Teja Solar's smart system estimator.
          </p>

          <div className="flex flex-col gap-4 text-xs font-semibold text-text-muted dark:text-dark-text-muted">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span>100% compliant with Central Gov subsidy models</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#36FB04]"></span>
              <span>Calculated with regional AP solar potential parameters</span>
            </div>
          </div>
        </div>

        {/* Right Side form / results */}
        <div className="flex-[1.2] p-8 lg:p-12 flex flex-col justify-center">
          {!isSubmitted ? (
            <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* System Type select */}
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-wider mb-2">Solar Installation Sector</label>
                <select
                  name="systemType"
                  value={formData.systemType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm cursor-pointer"
                  required
                >
                  <option value="" disabled>-Please choose an option-</option>
                  <option value="Residential Solar">Residential Solar Installation</option>
                  <option value="Commercial Solar Grid">Commercial Solar Array</option>
                  <option value="Field (Farm Fields) Solar Panels">Field (Farm Fields) Solar Panels</option>
                  <option value="Utility / Farm Field Solar Grid">Utility / Farm Field Solar Grid</option>
                </select>
              </div>

              {/* Sliders Area */}
              <div className="sm:col-span-2 space-y-5 bg-bg-secondary dark:bg-[#0a1426]/30 p-5 rounded-2xl border border-border-color dark:border-dark-border/40">
                
                {/* Monthly bill slider */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-wider">Avg. Monthly Bill</label>
                    <span className="text-sm font-extrabold text-accent">₹{parseFloat(formData.bill).toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    name="bill"
                    min="1000"
                    max="50000"
                    step="500"
                    value={formData.bill}
                    onChange={handleInputChange}
                    className="w-full h-1.5 bg-gray-200 dark:bg-dark-border rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-[9px] text-text-muted dark:text-dark-text-muted mt-1.5 font-bold uppercase">
                    <span>₹1,000</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                {/* Roof area slider */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-wider">Available Roof/Field Area</label>
                    <span className="text-sm font-extrabold text-[#268BFF]">{formData.roofArea} Sq. Ft.</span>
                  </div>
                  <input
                    type="range"
                    name="roofArea"
                    min="100"
                    max="5000"
                    step="50"
                    value={formData.roofArea}
                    onChange={handleInputChange}
                    className="w-full h-1.5 bg-gray-200 dark:bg-dark-border rounded-lg appearance-none cursor-pointer accent-[#268BFF]"
                  />
                  <div className="flex justify-between text-[9px] text-text-muted dark:text-dark-text-muted mt-1.5 font-bold uppercase">
                    <span>100 sq.ft</span>
                    <span>5,000+ sq.ft</span>
                  </div>
                </div>

              </div>

              {/* City select */}
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-xs font-bold text-text-muted dark:text-dark-text-muted uppercase tracking-wider mb-2">Select Your City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm cursor-pointer"
                  required
                >
                  <option value="" disabled>-Select City-</option>
                  <option value="Rajahmundry">Rajahmundry</option>
                  <option value="Kakinada">Kakinada</option>
                  <option value="Amalapuram">Amalapuram</option>
                  <option value="Eluru">Eluru</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Vijayawada">Vijayawada</option>
                </select>
              </div>

              {/* Address input */}
              <div className="sm:col-span-2 flex flex-col">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address or Landmark"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  required
                />
              </div>

              {/* Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  required
                />
              </div>

              {/* Pincode */}
              <div className="sm:col-span-2 flex flex-col">
                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  required
                />
              </div>

              <div className="sm:col-span-2 flex justify-end mt-2">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-xl transition-all duration-300 active:scale-98 shadow-md hover:shadow-lg cursor-pointer text-center text-sm md:text-base border-none"
                >
                  Calculate & Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col">
              
              {/* Estimate Profile Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border-color dark:border-dark-border pb-6 mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-text-main dark:text-dark-text-main">
                    Solar Generation Estimate
                  </h3>
                  <p className="text-xs text-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                    Calculated for <strong>{formData.fullName}</strong> | City: <strong>{formData.city}</strong> | Space: <strong>{formData.roofArea} sq.ft</strong>
                  </p>
                </div>
                <button 
                  onClick={handleReset} 
                  className="px-5 py-2.5 bg-bg-secondary dark:bg-[#0a1426]/50 text-text-main dark:text-dark-text-main font-bold rounded-xl border border-border-color dark:border-dark-border text-xs hover:border-accent cursor-pointer transition-all duration-300 shrink-0"
                >
                  Recalculate
                </button>
              </div>

              {/* Estimate metrics grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                
                {/* System size */}
                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm">
                    <FontAwesomeIcon icon={faSolarPanel} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-none">
                    <CountUp target={results.systemSize} /> kW
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    System Size
                  </span>
                </div>

                {/* Panel Count */}
                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-none">
                    <CountUp target={results.panelsCount} /> panels
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    Est. Panels (~550W)
                  </span>
                </div>

                {/* Government Subsidy */}
                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 mb-3 text-sm">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-emerald-500 tracking-tight leading-none">
                    ₹<CountUp target={results.subsidy} />
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    MNRE Subsidy
                  </span>
                </div>

                {/* Net Out-of-pocket Cost */}
                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-accent tracking-tight leading-none">
                    ₹<CountUp target={results.netCost} />
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    Net Consumer Cost
                  </span>
                </div>

                {/* Payback period */}
                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-none">
                    <CountUp target={results.paybackPeriod} /> Yrs
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    Payback Period
                  </span>
                </div>

                {/* 25-Year return */}
                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 mb-3 text-sm">
                    <FontAwesomeIcon icon={faTree} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-emerald-500 tracking-tight leading-none">
                    ₹<CountUp target={results.lifetimeSavings} />
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    25-Yr Return Savings
                  </span>
                </div>

              </div>

              {/* Action Buttons: PDF Proposal + WhatsApp Redirect */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button
                  onClick={handleDownloadPDF}
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-accent to-orange-500 hover:from-accent-hover hover:to-orange-600 text-white font-extrabold transition-all duration-300 active:scale-98 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center text-sm cursor-pointer border-none"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Download Proposal PDF</span>
                </button>

                <button
                  onClick={() => sendWhatsAppRedirect(results)}
                  className="px-6 py-4 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-extrabold transition-all duration-300 active:scale-98 shadow-md hover:shadow-xl flex items-center justify-center gap-2 text-center text-sm border-none cursor-pointer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  <span>Request Site Survey</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
