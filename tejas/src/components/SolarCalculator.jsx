import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSolarPanel, faIndianRupeeSign, faClock, faTree } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// High performance internal count-up for calculations
function CountUp({ target, duration = 1000 }) {
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

  // Format correctly based on floats vs integers
  if (target % 1 !== 0) {
    return <span>{count.toFixed(1)}</span>;
  }
  return <span>{Math.round(count).toLocaleString()}</span>;
}

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919391110007';

export default function SolarCalculator() {
  const [formData, setFormData] = useState({
    systemType: '',
    fullName: '',
    mobile: '',
    bill: '',
    address: '',
    pincode: '',
  });

  const [results, setResults] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendWhatsAppRedirect = (calcResults) => {
    const message = `Hello Teja Solar Team,

I calculated my Solar Savings Estimate on your website! Here is my energy profile:

👤 Name: ${formData.fullName}
📞 Phone: ${formData.mobile}
📍 Address: ${formData.address}
📮 Pincode: ${formData.pincode}
⚡ Avg. Monthly Bill: ₹${formData.bill}
💡 Option Selected: ${formData.systemType}

Recommended Specs:
📐 System Size: ${calcResults.systemSize} kW
💰 Est. Annual Savings: ₹${calcResults.annualSavings}
💎 25-Year Lifetime Savings: ₹${calcResults.lifetimeSavings}
⏳ Payback Period: ${calcResults.paybackPeriod} Years
🌳 CO2 Trees Offset: ${calcResults.treesOffset} Trees / year

I would like to book a Free Site Survey & Custom Design!`;

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!formData.bill) return;

    const monthlyBill = parseFloat(formData.bill);

    // Interactive solar formulas
    const systemSize = Math.max(1.5, parseFloat((monthlyBill / 68).toFixed(1)));
    const annualSavings = Math.round(monthlyBill * 12 * 0.88);
    const lifetimeSavings = Math.round(annualSavings * 25 * 1.25);
    const paybackPeriod = parseFloat((Math.max(4.2, 8.5 - (monthlyBill / 100))).toFixed(1));
    const treesOffset = Math.round(systemSize * 42);

    const calculatedResults = {
      systemSize,
      annualSavings,
      lifetimeSavings,
      paybackPeriod,
      treesOffset,
    };

    setResults(calculatedResults);
    setIsSubmitted(true);
    sendWhatsAppRedirect(calculatedResults);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setResults(null);
    setFormData({
      systemType: '',
      fullName: '',
      mobile: '',
      bill: '',
      address: '',
      pincode: '',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border rounded-3xl overflow-hidden shadow-sm">
        
        {/* Left Side */}
        <div className="flex-1 p-8 lg:p-12 bg-bg-secondary dark:bg-[#0a1426]/50 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-color dark:border-dark-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/20 text-[#dc2626] dark:text-red-400 font-extrabold text-xs uppercase tracking-wider mb-6 w-fit">
            <FontAwesomeIcon icon={faStar} />
            <span>Solar Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-dark-text-main mb-4 tracking-tight leading-tight">
            Your Solar Savings Calculator
          </h2>
          <p className="text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed">
            Find out exactly how much clean power you can harvest and calculate your 25-year financial savings instantly with Teja Solar's smart system estimator.
          </p>
        </div>

        {/* Right Side form / results */}
        <div className="flex-[1.2] p-8 lg:p-12 flex flex-col justify-center">
          {!isSubmitted ? (
            <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2 flex flex-col">
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

              <div className="sm:col-span-2 flex flex-col">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address or Farm Field Location"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  required
                />
              </div>

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

              <div className="flex flex-col">
                <input
                  type="number"
                  name="bill"
                  placeholder="Your Average Monthly Bill? "
                  value={formData.bill}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-[#060c18]/80 border border-border-color dark:border-dark-border text-text-main dark:text-dark-text-main rounded-xl font-medium focus:outline-none focus:border-accent dark:focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  min="30"
                  max="10000"
                  required
                />
              </div>

              <div className="flex flex-col">
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
                  className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-xl transition-all duration-300 active:scale-98 shadow-md hover:shadow-lg cursor-pointer text-center text-sm md:text-base"
                >
                  Calculate & Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border-color dark:border-dark-border pb-6 mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-text-main dark:text-dark-text-main">
                    Estimated Savings Profile
                  </h3>
                  <p className="text-xs text-text-muted dark:text-dark-text-muted mt-1 leading-relaxed">
                    Calculated for <strong>{formData.fullName}</strong> | Location: <strong>{formData.address}, {formData.pincode}</strong> | Bill: <strong>₹{formData.bill}/mo</strong>
                  </p>
                </div>
                <button 
                  onClick={handleReset} 
                  className="px-5 py-2.5 bg-bg-secondary dark:bg-[#0a1426]/50 text-text-main dark:text-dark-text-main font-bold rounded-xl border border-border-color dark:border-dark-border text-xs md:text-sm hover:border-accent dark:hover:border-accent cursor-pointer transition-all duration-300 shrink-0"
                >
                  Recalculate
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm md:text-base">
                    <FontAwesomeIcon icon={faSolarPanel} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-none">
                    <CountUp target={results.systemSize} /> kW
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    Recommended System
                  </span>
                </div>

                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm md:text-base">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-accent tracking-tight leading-none">
                    ₹<CountUp target={results.annualSavings} />
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    Est. Annual Savings
                  </span>
                </div>

                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm md:text-base">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-emerald-500 tracking-tight leading-none">
                    ₹<CountUp target={results.lifetimeSavings} />
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    25-Yr Lifetime Savings
                  </span>
                </div>

                <div className="flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm md:text-base">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-none">
                    <CountUp target={results.paybackPeriod} /> Yrs
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    Payback Period
                  </span>
                </div>

                <div className="col-span-2 flex flex-col p-5 bg-bg-secondary dark:bg-[#0a1426]/50 border border-border-color dark:border-dark-border rounded-2xl shadow-inner">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-3 text-sm md:text-base">
                    <FontAwesomeIcon icon={faTree} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-500 tracking-tight leading-none">
                    <CountUp target={results.treesOffset} /> Trees
                  </span>
                  <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                    Carbon Offset (Equivalent trees planted yearly)
                  </span>
                </div>
              </div>

              {/* Bottom WhatsApp Redirect CTA */}
              <div className="mt-8 flex justify-center w-full">
                <button
                  onClick={() => sendWhatsAppRedirect(results)}
                  className="w-full max-w-[420px] px-6 py-4 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-extrabold transition-all duration-300 active:scale-98 shadow-md hover:shadow-xl flex items-center justify-center gap-2 text-center text-sm md:text-base border-none cursor-pointer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  <span>Share Results & Book Survey on WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
