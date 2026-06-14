import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

type DirectLink = { type: 'link'; to: string; label: string };
type Dropdown = { type: 'dropdown'; label: string; items: { to: string; label: string }[] };
type NavItem = DirectLink | Dropdown;

const navItems: NavItem[] = [
  { type: 'link', to: '/', label: 'Home' },
  {
    type: 'dropdown',
    label: 'The Course',
    items: [
      { to: '/about', label: 'About' },
      { to: '/course-design', label: 'Course Design' },
    ],
  },
  { type: 'link', to: '/gallery', label: 'Gallery' },
  {
    type: 'dropdown',
    label: 'Plan Your Visit',
    items: [
      { to: '/faq', label: 'FAQ' },
      { to: '/memberships', label: 'Memberships' },
      { to: '/contact', label: 'Contact' },
    ],
  },
];

const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className ?? 'w-3 h-3'}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const baseDesktopLink = 'font-sans text-xs tracking-widest uppercase transition-colors pb-1 border-b-2';
const activeDesktopLink = 'text-yellow-primary border-yellow-primary';
const inactiveDesktopLink = 'text-white border-transparent hover:text-yellow-primary hover:border-yellow-primary/50';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [pathname]);

  const solid = !isHome || scrolled || mobileOpen;

  const handleDropdownEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `${baseDesktopLink} ${isActive ? activeDesktopLink : inactiveDesktopLink}`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              const isChildActive = item.items.some((child) => pathname.startsWith(child.to));
              const isOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    className={`${baseDesktopLink} flex items-center gap-1.5 ${
                      isChildActive ? activeDesktopLink : inactiveDesktopLink
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-green-950 border border-green-800 shadow-xl py-1 min-w-[11rem]">
                        {item.items.map(({ to, label }) => (
                          <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                              `block font-sans text-xs tracking-widest uppercase px-4 py-3 transition-colors ${
                                isActive
                                  ? 'text-yellow-primary bg-green-900'
                                  : 'text-white hover:text-yellow-primary hover:bg-green-900'
                              }`
                            }
                          >
                            {label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Hamburger */}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-green-800">
          <nav className="px-4 py-2">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block font-sans text-sm tracking-widest uppercase py-3.5 border-b border-green-800 last:border-0 ${
                        isActive ? 'text-yellow-primary' : 'text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              const isChildActive = item.items.some((child) => pathname.startsWith(child.to));
              const isExpanded = mobileExpanded === item.label;

              return (
                <div key={item.label} className="border-b border-green-800 last:border-0">
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                    aria-expanded={isExpanded}
                    className={`w-full flex items-center justify-between font-sans text-sm tracking-widest uppercase py-3.5 ${
                      isChildActive ? 'text-yellow-primary' : 'text-white'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-150 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pb-2 space-y-0.5">
                      {item.items.map(({ to, label }) => (
                        <NavLink
                          key={to}
                          to={to}
                          className={({ isActive }) =>
                            `block font-sans text-sm tracking-widest uppercase py-2.5 pl-5 ${
                              isActive ? 'text-yellow-primary' : 'text-white/70 hover:text-white'
                            }`
                          }
                        >
                          {label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
