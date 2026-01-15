import React from 'react';

interface StatItem {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      title: 'Repair Warranty',
      value: '9 MONTHS',
      description: 'Comprehensive coverage on all our gearbox repairs',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      title: 'Average Repair Cost',
      value: 'R40K-R50K',
      description: 'Transparent, damage-based pricing structure',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      title: 'Parts Warranty',
      value: '30 DAYS',
      description: 'On all brand new and quality second-hand parts',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="dark-card rounded-2xl p-6 card-hover border-primary/30 hover:border-primary/60 transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mr-4">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-primary text-sm font-semibold tracking-wider">{stat.title}</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{stat.description}</p>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center text-xs text-gray-500">
              <svg className="w-3 h-3 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              Industry-leading coverage
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;