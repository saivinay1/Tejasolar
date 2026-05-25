import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faUsers, faBriefcase, faBolt } from '@fortawesome/free-solid-svg-icons';

function CountUp({ target, duration = 800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
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

  return <span>{Math.round(count).toLocaleString()}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: faSolarPanel,
      target: '25',
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      id: 2,
      icon: faUsers,
      target: '100',
      suffix: '+',
      label: 'Happy Clients',
    },
    {
      id: 3,
      icon: faBriefcase,
      target: '25',
      suffix: '+',
      label: 'In-House Technicians',
    },
    {
      id: 4,
      icon: faBolt,
      target: '15',
      suffix: 'MW+',
      label: 'Total Capacity Deployed',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-bg-secondary dark:bg-[#060c18] border-y border-border-color dark:border-dark-border">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-6 md:px-12">
        {stats.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-center text-center p-6 bg-white dark:bg-dark-primary/30 rounded-2xl border border-border-color dark:border-dark-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent-light dark:bg-accent/10 text-accent mb-4 text-xl">
              <FontAwesomeIcon icon={s.icon} />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-text-main dark:text-dark-text-main mb-1.5 tracking-tight font-sans">
              <CountUp target={s.target} />{s.suffix}
            </h3>
            <p className="text-text-muted dark:text-dark-text-muted text-[0.78rem] md:text-xs font-bold uppercase tracking-wider">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
