'use client';

import { useState, useEffect } from 'react';

interface Stat {
  icon: React.ReactNode;
  metric: string;
  caption: string;
}

interface TrustStatsProps {
  stats: Stat[];
}

export default function TrustStats({ stats }: TrustStatsProps) {
  const [animatedStats, setAnimatedStats] = useState<number[]>(new Array(stats.length).fill(0));

  useEffect(() => {
    const animateNumbers = () => {
      stats.forEach((stat, index) => {
        const target = parseInt(stat.metric.replace(/[^\d]/g, ''));
        if (isNaN(target)) return;

        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('trust-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [stats]);

  return (
    <section id="trust-stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                  <div className="text-gold text-2xl">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-slate">
                  {stat.metric.includes('+') || stat.metric.includes('%') ? 
                    `${animatedStats[index] || 0}${stat.metric.replace(/[\d]/g, '')}` : 
                    stat.metric
                  }
                </div>
                <p className="text-gray-600 font-medium">{stat.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
