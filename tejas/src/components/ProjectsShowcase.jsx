import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faCheckCircle, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.jpeg"
import image6 from "../assets/image6.jpeg"


export default function ProjectsShowcase() {
  const projects = [
    {
      id: 1,
      customerName: 'Srinivas Rao',
      location: 'Rajamahendravaram',
      projectType: '10 kW Residential Rooftop',
      feedback: 'Teja Solar reduced our monthly electricity bill from ₹18,000 to just ₹1,200! The installation was done in 2 days and the team handled all net-metering approvals.',
      avatarInitials: 'SR',
      projectImage: image1,
    },
    {
      id: 2,
      customerName: 'Lakshmi Narayana',
      location: 'Vijayawada',
      projectType: '250 kW Home Solar Setup',
      feedback: 'Installing solar on our cold storage warehouse was the best decision. Our operational cost dropped by 40% and our investment payback is on track for 3.5 years.',
      avatarInitials: 'LN',
      projectImage: image2,
    },
    {
      id: 3,
      customerName: 'Venkatesh Prasad',
      location: 'Kakinada',
      projectType: '15 kW Home Solar Setup',
      feedback: 'Running our high-capacity agricultural water pumps on solar fields has made irrigation cost-free. Teja Solar’s field panels are robust and highly efficient.',
      avatarInitials: 'VP',
      projectImage: image3,
    },
    {
      id: 4,
      customerName: 'Rama Krishna',
      location: 'Guntur',
      projectType: '150 kW Residential Rooftop',
      feedback: 'Excellent service and highly professional crew. The smart monitoring app is fantastic; we can track exactly how much power our panels produce daily.',
      avatarInitials: 'RK',
      projectImage: image4,
    },
    {
      id: 5,
      customerName: 'Vijaya Kumar',
      location: 'Visakhapatnam',
      projectType: '40 kW Home Solar Setup',
      feedback: 'The solar carports provide shade for our employee parking while generating mega-watts of clean power. A perfect dual-use solar engineering design.',
      avatarInitials: 'VK',
      projectImage: image5,
    },
    {
      id: 6,
      customerName: 'Satyanarayana Murthy',
      location: 'Rajavolu',
      projectType: '50 kW Residential Rooftop',
      feedback: 'We installed agrivoltaic ground panels over our crop fields. The partial shade is actually improving our plant growth while generating free power!',
      avatarInitials: 'SM',
      projectImage: image6,
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

      {/* Testimonial-Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5"
          >
            {/* Top half: Stunning Completed Project Image from local folder */}
            <div className="relative h-[200px] md:h-[220px] overflow-hidden bg-bg-secondary shrink-0">
              <img
                src={p.projectImage}
                alt={`${p.customerName}'s Completed Solar Grid`}
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

              {/* Customer Profile & Specs */}
              <div className="border-t border-border-color dark:border-dark-border mt-auto">
                {/* <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 rounded-full bg-accent-light dark:bg-accent/10 border border-accent/25 text-accent font-extrabold text-xs tracking-widest uppercase shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {p.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-text-main dark:text-dark-text-main leading-tight flex items-center gap-1.5">
                      <span>{p.customerName}</span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 text-xs" title="Verified Customer" />
                    </h4>
                    <p className="text-text-muted dark:text-dark-text-muted text-[0.7rem] mt-0.5">
                      {p.location}, AP
                    </p>
                  </div>
                </div> */}

                <div className="pt-2 flex items-center gap-2 border-t border-dashed border-border-color dark:border-dark-border text-[0.72rem] text-text-muted dark:text-dark-text-muted font-bold">
                  <FontAwesomeIcon icon={faSolarPanel} className="text-accent shrink-0" />
                  <span>{p.projectType}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
