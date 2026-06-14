import React from 'react';

const CourseOverview: React.FC = () => (
  <section className="bg-beige-50 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="font-sans font-light text-green-primary text-xs tracking-[0.3em] uppercase mb-4">
            Welcome
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl text-green-950 tracking-wide mb-6">
            Welcome to Glenaladale
          </h2>
          <div className="w-12 h-0.5 bg-yellow-primary mb-8" />
          <div className="space-y-5 font-serif text-brown-primary text-base leading-relaxed">
            <p>
              Nestled in the woods of the historic Glenaladale Estate, our disc golf course offers
              visitors a unique blend of nature, history, and challenging wooded disc golf.
            </p>
            <p>
              Established in 2022, the course has quickly become a favourite destination and
              community for disc golfers on PEI. With holes ranging from technical, short par 3s to
              long, winding par 5s, the course has developed a reputation as a "bomber" course with
              the ability to throw drivers along clearly defined wooded fairways.
            </p>
            <p>
              At approximately 7,000 ft long from the red layout and 8,000 ft from the blue layout,
              the course offers a genuine challenge for experienced players. A shorter Green layout (~4,500 ft)
              is also available for less experienced players.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="/4-overhead.webp"
            alt="Aerial view of Glenaladale Disc Golf Course"
            className="w-full h-80 sm:h-96 object-cover"
          />
          <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-yellow-primary -z-10 hidden lg:block" />
        </div>
      </div>
    </div>
  </section>
);

export default CourseOverview;
