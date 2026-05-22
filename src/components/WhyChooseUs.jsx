const features = [
  {
    icon: "🛡️",
    title: "Trusted & secure",
    desc: "Every booking is encrypted and protected. Your payment and personal data are always safe with us.",
  },
  {
    icon: "📍",
    title: "Curated destinations",
    desc: "Every destination is hand-vetted by our travel experts. No hidden surprises, only hidden gems.",
  },
  {
    icon: "🎧",
    title: "24/7 support",
    desc: "Our dedicated team is available around the clock so you never feel alone, wherever you are.",
  },
  {
    icon: "💰",
    title: "Best price guarantee",
    desc: "Find it cheaper elsewhere? We'll match it. Extraordinary experiences shouldn't break the bank.",
  },
];

const stats = [
  { num: "12K+", label: "Happy travellers" },
  { num: "80+", label: "Destinations" },
  { num: "98%", label: "Satisfaction rate" },
  { num: "6 yrs", label: "Of experience" },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs tracking-widest uppercase text-cyan-500 font-medium mb-3">
            Why Wanderlust
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Travel smarter,
            <br className="hidden sm:block" /> experience deeper
          </h2>
          <p className="text-gray-500  text-[15px] leading-relaxed">
            We don't just book trips — we craft memories that last a lifetime,
            with care in every detail.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-gray-100 rounded-xl p-6 bg-gray-50 hover:border-cyan-200 hover:bg-cyan-50 transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-cyan-100 flex items-center justify-center text-xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-[15px] mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 pt-10 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-500">
                {s.num}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;