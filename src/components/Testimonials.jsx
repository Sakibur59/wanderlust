import { LuMapPin, LuQuote } from "react-icons/lu";

const testimonials = [
  {
    rating: 5,
    quote:
      "Wanderlust made our Bali trip absolutely seamless. Every detail was perfect — from the villa to the excursions. We'll never book travel any other way.",
    name: "Sarah Rahman",
    location: "Dhaka, Bangladesh",
    destination: "Bali, Indonesia",
    initials: "SR",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    rating: 5,
    quote:
      "Dubai exceeded every expectation. The booking was instant, the itinerary was stunning, and support was there when our flight got delayed. Truly 5-star service.",
    name: "Marcus Klein",
    location: "Berlin, Germany",
    destination: "Dubai, UAE",
    initials: "MK",
    color: "bg-violet-100 text-violet-800",
  },
  {
    rating: 5,
    quote:
      "I've used many travel platforms but nothing compares to Wanderlust. The Kyoto package was breathtaking. Already planning my next trip with them.",
    name: "Priya Lal",
    location: "Mumbai, India",
    destination: "Kyoto, Japan",
    initials: "PL",
    color: "bg-rose-100 text-rose-800",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 ">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-3">
              Traveller stories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Loved by explorers
              <br className="hidden sm:block" /> around the world
            </h2>
            <p className="text-gray-500 max-w-md text-[15px] leading-relaxed">
              Real experiences from real travellers who trusted Wanderlust to
              deliver the extraordinary.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col justify-between"
            >
              {/* Stars */}
              <div>
                <div className="flex gap-0.5 text-amber-400 text-sm mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                    <LuMapPin size={10} />
                    {t.destination}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;