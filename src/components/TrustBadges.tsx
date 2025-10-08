export default function TrustBadges() {
  const badges = [
    { icon: '🏆', label: 'ICAI Certified', description: 'Licensed CAs' },
    { icon: '🔒', label: '100% Secure', description: 'Data Protected' },
    { icon: '⚡', label: 'Quick Response', description: 'Within 2 Hours' },
    { icon: '✅', label: 'Notice Coverage', description: '100% Guarantee' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C9A34A]/10 to-yellow-400/10 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{badge.icon}</span>
              </div>
              <h3 className="font-semibold text-slate text-sm mb-1">{badge.label}</h3>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
