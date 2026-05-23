import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/memberships', label: 'Memberships' },
  { to: '/contact', label: 'Contact' },
  { to: '/course-design', label: 'Course Design' },
];

const Footer: React.FC = () => (
  <footer className="bg-green-950 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="/glenaladale-icon.svg" alt="Glenaladale Disc Golf" className="h-10 w-10" />
            <span className="font-headline text-xs leading-tight uppercase tracking-wide">
              Glenaladale<br />Disc Golf
            </span>
          </div>
          <p className="font-sans font-light text-green-300 text-sm leading-relaxed tracking-wide">
            A premier wooded disc golf course on the historic Glenaladale Estate, Prince Edward Island.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com/glenaladalediscgolf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-yellow-primary transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/glenaladalediscgolf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-yellow-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-headline text-xs tracking-widest uppercase text-yellow-primary mb-5">
            Explore
          </h3>
          <nav className="space-y-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block font-sans font-light text-sm text-green-300 hover:text-white transition-colors tracking-wide"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://udisc.com/courses/glenaladale-disc-golf-course-gl5b"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans font-light text-sm text-green-300 hover:text-white transition-colors tracking-wide"
            >
              UDisc ↗
            </a>
            <a
              href="https://www.facebook.com/groups/1189083618627541"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans font-light text-sm text-green-300 hover:text-white transition-colors tracking-wide"
            >
              FB Community ↗
            </a>
          </nav>
        </div>

        <div>
          <h3 className="font-headline text-xs tracking-widest uppercase text-yellow-primary mb-5">
            Contact
          </h3>
          <div className="space-y-3 font-sans font-light text-sm text-green-300 tracking-wide">
            <p>
              <a href="mailto:info@glenaladalediscgolf.com" className="hover:text-white transition-colors">
                info@glenaladalediscgolf.com
              </a>
            </p>
            <p>
              <a href="tel:+19023307666" className="hover:text-white transition-colors">
                (902) 330-7666
              </a>
            </p>
            <p className="mt-5 leading-relaxed">
              257 Blooming Point Rd<br />
              Mount Stewart, PE C0A 1T0
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 mt-12 pt-6 text-center">
        <p className="font-sans font-light text-xs text-green-600 tracking-wider">
          &copy; {new Date().getFullYear()} Glenaladale Disc Golf
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
