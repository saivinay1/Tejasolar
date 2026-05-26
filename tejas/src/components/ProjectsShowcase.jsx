import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.jpeg"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import image8 from "../assets/image8.jpeg"
import image9 from "../assets/image9.jpeg"
import image10 from "../assets/image10.jpeg"
import image11 from "../assets/image11.jpeg"
import image12 from "../assets/image12.jpeg"


export default function ProjectsShowcase() {
  const projects = [
    {
      id: 1,
      projectType: '3 kW Residential Rooftop',
      feedback: 'Teja Solar reduced our monthly electricity bill from ₹18,000 to just ₹1,200! The installation was done in 2 days and the team handled all net-metering approvals.',
      projectImage: image1,
    },
    {
      id: 2,
      projectType: '3 kW Commercial Rooftop',
      feedback: 'Installing solar on our cold storage warehouse was the best decision. Our operational cost dropped by 40% and our investment payback is on track for 3.5 years.',
      projectImage: image2,
    },
    {
      id: 3,
      projectType: '3 kW Agricultural Pump System',
      feedback: 'Running our high-capacity agricultural water pumps on solar fields has made irrigation cost-free. Teja Solar’s field panels are robust and highly efficient.',
      projectImage: image3,
    },
    {
      id: 4,
      projectType: '3 kW Commercial Rooftop',
      feedback: 'Excellent service and highly professional crew. The smart monitoring app is fantastic; we can track exactly how much power our panels produce daily.',
      projectImage: image4,
    },
    {
      id: 5,
      projectType: '3 kW Commercial Carport Setup',
      feedback: 'The solar carports provide shade for our employee parking while generating mega-watts of clean power. A perfect dual-use solar engineering design.',
      projectImage: image5,
    },
    {
      id: 6,
      projectType: '3 kW Agrivoltaic Farm Setup',
      feedback: 'We installed agrivoltaic ground panels over our crop fields. The partial shade is actually improving our plant growth while generating free power!',
      projectImage: image6,
    },
    {
      id: 7,
      projectType: '2 kW Residential Rooftop',
      feedback: 'Teja Solar team did an exceptional job installing the panels. Our monthly power bills have plummeted, and the system runs smoothly without any issues.',
      projectImage: image7,
    },
    {
      id: 8,
      projectType: '3 kW Commercial Rooftop',
      feedback: 'Very professional execution and premium mounting structures. The panels have withstood high winds easily and output is consistently above expectations.',
      projectImage: image8,
    },
    {
      id: 9,
      projectType: '3 kW Commercial Setup',
      feedback: 'The ROI on this solar setup is fantastic. Teja Solar made the entire documentation and subsidy process completely hassle-free for our business.',
      projectImage: image9,
    },
    {
      id: 10,
      projectType: '2 kW Agricultural Pump System',
      feedback: 'Our agricultural pump setup now operates completely on solar. No more relying on erratic grid power timings to irrigate our plantations.',
      projectImage: image10,
    },
    {
      id: 11,
      projectType: '3 kW Hybrid Solar Solution',
      feedback: 'This hybrid setup with battery storage has completely insulated us from power fluctuations. Clean power during the day, silent backup at night—it’s pure energy freedom.',
      projectImage: image11,
    },
    {
      id: 12,
      projectType: '3 kW Industrial Rooftop',
      feedback: 'High-efficiency TOPCon panels have proven to be the ultimate asset for our light manufacturing unit. The system operates at peak capacity even during overcast days.',
      projectImage: image12,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12">

      {/* Centered Heading */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
          <FontAwesomeIcon icon={faStar} />
          <span>Real Credibility & Trust</span>
        </span>
        <h2 className="inline-block relative pb-4 text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-tight after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1.5 after:bg-accent after:rounded-full">
          Our Happy Customers
        </h2>
        <p className="max-w-2xl mx-auto mt-5 text-text-muted dark:text-dark-text-muted text-base md:text-[1.05rem] leading-relaxed">
          Nothing proves performance like the success stories of our clients. Explore real solar setups and feedback from residential, business, and farm owners across Andhra Pradesh.
        </p>
      </div>

      {/* Testimonial-Project Grid (Flex Wrap for centering leftover cards) */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] flex flex-col bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5"
          >
            {/* Top half: Stunning Completed Project Image from local folder */}
            <div className="relative h-[200px] md:h-[220px] overflow-hidden bg-bg-secondary shrink-0">
              <img
                src={p.projectImage}
                alt={`Completed Solar Grid - Teja Solar ${p.projectType}, Andhra Pradesh`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Bottom overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Bottom half: Testimonial & Customer Bio */}
            <div className="flex-grow p-6 flex flex-col justify-between">

              {/* Review Testimonial Quote */}
              <div className="mb-6 relative">
                <FontAwesomeIcon icon={faQuoteLeft} className="absolute -top-2.5 -left-1 text-accent/15 text-3xl pointer-events-none" />
                <p className="text-text-main dark:text-dark-text-main text-xs sm:text-sm italic leading-relaxed relative z-10 pl-6">
                  "{p.feedback}"
                </p>
              </div>

              {/* Completed Project Specs */}
              <div className="border-t border-border-color dark:border-dark-border mt-auto pt-4 flex items-center gap-2 text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold">
                <FontAwesomeIcon icon={faSolarPanel} className="text-accent shrink-0" />
                <span>{p.projectType}</span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
