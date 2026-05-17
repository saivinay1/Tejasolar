import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faDirections, faMap, faCheckCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function LocationsPage() {
  const apDistricts = [
    'East Godavari (Rajahmundry HQ)',
    'Visakhapatnam District',
    'Krishna District (Vijayawada)',
    'Guntur District',
    'Kakinada & Konaseema',
    'West Godavari (Eluru)',
    'Nellore & Prakasam',
    'Kurnool & Kadapa',
    'Tirupati & Chittoor',
    'Anantapur & Vizianagaram',
  ];

  const branches = [
    {
      id: 1,
      title: 'Headquarters (Rajahmundry)',
      address: '100-3, Near Teja Milk Dairy, Kondayyapeta, Rajavolu - 533124, Andhra Pradesh',
      phone: '+91 93911 10007',
      hours: '9:00 AM - 7:00 PM (Mon - Sun)',
      email: 'tejasolar18@gmail.com',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=100-3,+Near+Teja+Milk+Dairy,+Kondayyapeta,+Rajavolu+-+533124,+Andhra+Pradesh',
      tag: 'Main Office',
    },
    {
      id: 2,
      title: 'Vijayawada Regional Office',
      address: 'Benz Circle, Vijayawada, Krishna District, Andhra Pradesh - 520010',
      phone: '+91 93911 10007',
      hours: '9:00 AM - 6:00 PM (Mon - Sat)',
      email: 'vijayawada@tejasolar.com',
      mapUrl: 'https://maps.google.com/?q=Benz+Circle,+Vijayawada,+Andhra+Pradesh',
      tag: 'Sales & Support Hub',
    },
    {
      id: 3,
      title: 'Visakhapatnam Regional Office',
      address: 'VIP Road, Siripuram, Visakhapatnam, Andhra Pradesh - 530003',
      phone: '+91 93911 10007',
      hours: '9:00 AM - 6:00 PM (Mon - Sat)',
      email: 'vizag@tejasolar.com',
      mapUrl: 'https://maps.google.com/?q=VIP+Road,+Siripuram,+Visakhapatnam,+Andhra+Pradesh',
      tag: 'Engineering Hub',
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 animate-fade-in">

      {/* Immersive Header Banner */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light dark:bg-accent/15 text-accent font-extrabold text-xs uppercase tracking-wider mb-4">
          <FontAwesomeIcon icon={faMap} />
          <span>Our Service Area</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-text-main dark:text-dark-text-main tracking-tight leading-tight mb-5 font-sans">
          Serving All of <span className="text-accent">Andhra Pradesh</span>
        </h1>
        <p className="max-w-2xl mx-auto text-text-muted dark:text-dark-text-muted text-base md:text-[1.05rem] leading-relaxed">
          Headquartered in the cultural heart of Rajahmundry, Teja Solar provides tier-1 residential rooftop panels, commercial arrays, and farm field grids to every district in Andhra Pradesh.
        </p>
      </div>

      {/* Main Office Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

        {/* Interactive Google Map Iframe */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-md border border-border-color dark:border-dark-border h-[350px] md:h-[480px] bg-bg-secondary dark:bg-[#0a1426]/50">
          <iframe
            title="Teja Solar Head Office Map"
            src="https://maps.google.com/maps?q=100-3,+Near+Teja+Milk+Dairy,+Kondayyapeta,+Rajavolu+-+533124,+Andhra+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Corporate HQ Details Card */}
        <div className="flex flex-col justify-between p-8 bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border rounded-3xl shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-[0.72rem] text-text-muted dark:text-dark-text-muted font-extrabold uppercase tracking-wider">
                Head Office
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-text-main dark:text-dark-text-main mb-4 tracking-tight leading-tight font-sans">
              Rajahmundry HQ
            </h3>

            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-start gap-3 text-text-muted dark:text-dark-text-muted">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent mt-0.5 shrink-0 text-base" />
                <span>100-3, Near Teja Milk Dairy, Kondayyapeta, Rajavolu - 533124, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted dark:text-dark-text-muted">
                <FontAwesomeIcon icon={faPhone} className="text-accent shrink-0 text-base" />
                <a href="tel:+919391110007" className="hover:text-accent font-semibold transition-colors">
                  +91 93911 10007
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-muted dark:text-dark-text-muted">
                <FontAwesomeIcon icon={faEnvelope} className="text-accent shrink-0 text-base" />
                <span>tejasolar18@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted dark:text-dark-text-muted">
                <FontAwesomeIcon icon={faClock} className="text-accent shrink-0 text-base" />
                <span>9:00 AM - 7:00 PM (Monday - Sunday)</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=100-3,+Near+Teja+Milk+Dairy,+Kondayyapeta,+Rajavolu+-+533124,+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-text-main font-bold rounded-xl transition-all duration-300 active:scale-98 shadow-sm hover:shadow-md cursor-pointer text-sm"
            >
              <FontAwesomeIcon icon={faDirections} />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>

      </div>

      {/* AP Districts Statewide Segment */}
      <div className="py-16 px-8 md:px-12 bg-bg-secondary dark:bg-[#060c18] border border-border-color dark:border-dark-border rounded-3xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* Key AP Highlights */}
          <div className="lg:col-span-1 text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-text-main dark:text-dark-text-main mb-4 tracking-tight leading-tight">
              Statewide Coverage Network
            </h3>
            <p className="text-text-muted dark:text-dark-text-muted text-sm md:text-base leading-relaxed mb-8">
              We dispatch local, in-house certified solar technicians across all AP districts. Enjoy full support on state solar subsidies, net-metering approvals, and localized structural site surveys.
            </p>

            <div className="flex flex-col gap-4 text-sm font-semibold">
              <div className="flex items-center gap-3 text-text-main dark:text-dark-text-main">
                <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 text-lg shrink-0" />
                <span>Guaranteed 48-Hour Site Survey</span>
              </div>
              <div className="flex items-center gap-3 text-text-main dark:text-dark-text-main">
                <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 text-lg shrink-0" />
                <span>Local Maintenance Dispatches</span>
              </div>
              <div className="flex items-center gap-3 text-text-main dark:text-dark-text-main">
                <FontAwesomeIcon icon={faShieldAlt} className="text-accent text-lg shrink-0" />
                <span>Subsidy & Net-Metering Assistance</span>
              </div>
            </div>
          </div>

          {/* District List Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {apDistricts.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-dark-primary/30 border border-border-color dark:border-dark-border rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="w-8 h-8 rounded-full bg-accent-light dark:bg-accent/10 text-accent font-extrabold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </span>
                  <span className="text-sm font-bold text-text-main dark:text-dark-text-main">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}
