import React from 'react';
import logo from "../assets/Teja.jpeg"

/**
 * TejaSolarLogo - Refined Vector Branding Component
 * Renders an ultra-sharp, responsive geometric sun symbol alongside elegant, high-impact typography.
 * Supports a custom hover shine effect and works perfectly in light/dark themes.
 */
export default function TejaSolarLogo({ className = "" }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Refined Geometric Solar Sunburst Icon */}

      {/* Bold, Elegant Typography with Hover Shine Skew class */}
      <div className="flex flex-col text-left hover-shine-effect rounded px-2 py-1 transition-all duration-300">
        <div className="flex items-baseline font-sans">
          <span className="font-extrabold text-[1.25rem] sm:text-[1.25rem] md:text-[2.05rem] tracking-tight text-[#36FB04] dark:text-white leading-none transition-colors duration-300">
            TEJA
          </span>
          <span className="font-extrabold text-[1.25rem] sm:text-[1.25rem] md:text-[2.05rem] tracking-tight text-[#268BFF] leading-none ml-1.5 transition-colors duration-300">
            SOLAR
          </span>
        </div>
        <span className="font-bold text-[0.46rem] sm:text-[0.46rem] md:text-[0.66rem] tracking-[0.26em] text-[#FF9500] dark:text-[#FF9500] uppercase leading-none mt-1 md:mt-2 transition-colors duration-300">
          SOLUTIONS
        </span>
      </div>
    </div>
  );
}
