import React from 'react';

const FlyThroughVideo: React.FC = () => (
  <section className="bg-green-950 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/iAbkTrWU1lQ"
              title="Glenaladale Disc Golf Course Fly-Through"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-sans font-light text-yellow-primary text-xs tracking-[0.3em] uppercase mb-4">
            October 2023
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl text-white tracking-wide mb-6">
            Explore Our Course
          </h2>
          <div className="w-12 h-0.5 bg-yellow-primary mb-8" />
          <p className="font-serif text-green-200 text-base leading-relaxed">
            Take a fly-through of our course as it was in the autumn of 2023. At this point we had
            recently opened our red and blue layouts and had spent much of the year cleaning up from
            Hurricane Fiona. Don't be surprised if the course looks better when you arrive — we are
            constantly making improvements.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FlyThroughVideo;
