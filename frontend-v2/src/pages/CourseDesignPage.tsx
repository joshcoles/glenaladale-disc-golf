import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';

const SITE_URL = 'https://glenaladalediscgolf.com';

const placeholderCourses = [
  {
    name: 'Course Name',
    location: 'Location, PEI',
    description:
      'Replace this with a 1–3 sentence description of this course — what it is, where it is, and what role your team played in its design or development.',
  },
  {
    name: 'Course Name',
    location: 'Location, PEI',
    description:
      'Replace this with a 1–3 sentence description of this course — what it is, where it is, and what role your team played in its design or development.',
  },
  {
    name: 'Course Name',
    location: 'Location, NS',
    description:
      'Replace this with a 1–3 sentence description of this course — what it is, where it is, and what role your team played in its design or development.',
  },
];

const CourseDesignPage: React.FC = () => (
  <>
    <Helmet>
      <title>Course Design | Glenaladale Disc Golf</title>
      <meta
        name="description"
        content="The team behind Glenaladale Disc Golf has designed and consulted on disc golf courses across Prince Edward Island and the Maritimes. Explore our course design portfolio."
      />
      <meta property="og:title" content="Course Design | Glenaladale Disc Golf" />
      <meta
        property="og:description"
        content="The team behind Glenaladale Disc Golf has designed and consulted on disc golf courses across Prince Edward Island and the Maritimes. Explore our course design portfolio."
      />
      <meta property="og:url" content={`${SITE_URL}/course-design`} />
      <link rel="canonical" href={`${SITE_URL}/course-design`} />
    </Helmet>

    <PageHeader
      title="Course Design"
      subtitle="Crafting disc golf experiences across the Maritimes"
      image="/build.jpg"
    />

    {/* Intro */}
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-2xl text-green-950 tracking-wide mb-4">
          Design is in our roots
        </h2>
        <div className="w-12 h-0.5 bg-yellow-primary mx-auto mb-6" />
        <p className="font-serif text-brown-primary leading-relaxed text-lg">
          Building Glenaladale from the ground up gave our team a deep appreciation for what makes a
          great disc golf hole — and a great disc golf course. Since then, we've had the opportunity
          to bring that experience to other projects across the region, helping communities build
          courses that challenge, delight, and draw players back again and again.
        </p>
      </div>
    </section>

    {/* Featured: Glenaladale */}
    <section className="bg-green-950 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-headline text-xs tracking-widest uppercase text-yellow-primary mb-3">
              Flagship Design
            </p>
            <h2 className="font-headline text-3xl lg:text-4xl text-white tracking-wide mb-4">
              Glenaladale Disc Golf
            </h2>
            <div className="w-12 h-0.5 bg-yellow-primary mb-6" />
            <div className="space-y-4 font-sans font-light text-green-200 leading-relaxed tracking-wide">
              <p>
                Our own backyard — and our proudest achievement. Glenaladale is an 18-hole wooded
                course set on the historic Glenaladale Estate in Mount Stewart, Prince Edward Island.
                Every hole was designed by our team to work with the natural terrain: mature forest,
                rolling elevation, and the heritage landscape of one of PEI's most storied properties.
              </p>
              <p>
                The result is a course that rewards local knowledge while remaining accessible and
                enjoyable for first-time visitors. In both 2024 and 2025, UDisc users ranked
                Glenaladale the 3rd best disc golf course on Prince Edward Island.
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="/overhead.jpg"
              alt="Aerial view of Glenaladale Disc Golf course"
              className="w-full h-72 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Other Courses */}
    <section className="bg-green-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-2xl text-green-950 tracking-wide mb-4">
            Additional Projects
          </h2>
          <div className="w-12 h-0.5 bg-yellow-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderCourses.map((course, i) => (
            <div key={i} className="bg-white border border-green-100 p-7">
              <p className="font-headline text-xs tracking-widest uppercase text-yellow-primary mb-1">
                {course.location}
              </p>
              <h3 className="font-headline text-lg text-green-950 tracking-wide mb-3">
                {course.name}
              </h3>
              <div className="w-8 h-0.5 bg-green-200 mb-4" />
              <p className="font-sans font-light text-brown-primary text-sm leading-relaxed tracking-wide">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-white py-14">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="font-headline text-xl text-green-950 tracking-wide mb-3">
          Interested in working with us?
        </h2>
        <p className="font-sans font-light text-brown-primary text-sm leading-relaxed tracking-wide mb-6">
          We'd love to hear about your project. Get in touch and let's talk about what we can build
          together.
        </p>
        <a
          href="/contact"
          className="inline-block font-headline text-xs tracking-widest uppercase px-8 py-3 bg-green-950 text-white hover:bg-green-800 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  </>
);

export default CourseDesignPage;
