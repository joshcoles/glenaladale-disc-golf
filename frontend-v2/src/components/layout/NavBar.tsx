import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/course-design', label: 'Course Design' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/memberships', label: 'Memberships' },
  { to: '/contact', label: 'Contact' },
];

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-green-950 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/glenaladale-icon.svg" alt="Glenaladale Disc Golf" className="h-9 w-9" />
            <span className="font-headline text-white text-xs leading-tight hidden sm:block uppercase tracking-wide">
              Glenaladale<br />Disc Golf
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-sans text-xs tracking-widest uppercase transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-yellow-primary border-yellow-primary'
                      : 'text-white border-transparent hover:text-yellow-primary hover:border-yellow-primary/50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden text-white p-2 flex flex-col justify-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-green-800">
          <nav className="px-4 py-2">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block font-sans text-sm tracking-widest uppercase py-3.5 border-b border-green-800 last:border-0 ${
                    isActive ? 'text-yellow-primary' : 'text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
