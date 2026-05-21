import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              NEWSLETTER
            </h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center bg-gray-800 px-4 py-3">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-gray-300 placeholder-gray-500"
              />
              <span className="text-white text-lg ml-2 cursor-pointer hover:text-cyan-400 transition-colors">
                ↗
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Destinations", href: "/destinations" },
                { label: "My Bookings", href: "/my-bookings" },
                { label: "My Profile", href: "/profile" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-sm">
              {["Help Center", "Terms of Service", "Privacy Policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              CONTACT US
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:7869011622" className="hover:text-white transition-colors">
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="hover:text-white transition-colors"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center sm:text-left">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex gap-5 text-white text-lg">
            <span className="cursor-pointer hover:text-cyan-400 transition-colors">
              X
            </span>
            <span className="cursor-pointer hover:text-cyan-400 transition-colors">
              in
            </span>
            <span className="cursor-pointer hover:text-cyan-400 transition-colors">
              ◎
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;