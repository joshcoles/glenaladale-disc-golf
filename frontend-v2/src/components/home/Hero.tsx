import React from 'react';

const Hero: React.FC = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src="/landing-background.jpg"
      alt="Glenaladale Disc Golf Course"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-green-950/65" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="font-sans font-light text-yellow-primary text-sm tracking-[0.3em] uppercase mb-5">
        Prince Edward Island
      </p>
      <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-tight">
        GLENALADALE<br />DISC GOLF
      </h1>
      <div className="mt-6 w-16 h-0.5 bg-yellow-primary mx-auto" />
      <p className="mt-6 font-sans font-light text-green-100 text-base sm:text-lg tracking-wide max-w-xl mx-auto leading-relaxed">
        A wooded disc golf course 20 minutes north of Charlottetown, on the historic Glenaladale Estate.
      </p>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
);

export default Hero;
