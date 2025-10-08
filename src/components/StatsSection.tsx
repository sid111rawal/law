export default function StatsSection() {
  const stats = [
    {
      number: '2000+',
      label: 'Happy Clients',
      sublabel: 'Businesses & Individuals',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '₹2.5 Cr+',
      label: 'Taxes Saved',
      sublabel: 'Every Year',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '100%',
      label: 'Notice Coverage',
      sublabel: 'Guarantee',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '15+',
      label: 'Years Experience',
      sublabel: 'Expert Team',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C9A34A] to-yellow-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-300">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
