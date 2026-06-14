import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';

const SITE_URL = 'https://glenaladalediscgolf.com';

const SectionPhoto: React.FC<{ src?: string; alt?: string; caption?: string }> = ({
  src,
  alt,
  caption,
}) => (
  <div className="mt-10">
    {src ? (
      <img src={src} alt={alt ?? ''} className="w-full h-72 sm:h-96 object-cover" />
    ) : (
      <div className="w-full h-72 sm:h-96 bg-gray-100 flex items-center justify-center">
        <span className="font-sans text-xs text-gray-400 tracking-widest uppercase">Photo</span>
      </div>
    )}
    {caption && (
      <p className="mt-3 font-sans font-light text-xs text-gray-400 tracking-wide leading-relaxed">
        {caption}
      </p>
    )}
  </div>
);

const CourseDesignPage: React.FC = () => (
  <>
    <Helmet>
      <title>Course Design | Glenaladale Disc Golf</title>
      <meta
        name="description"
        content="Glenaladale designs disc golf courses for municipalities, landowners, and organizations across Atlantic Canada. Spatial analysis, experienced construction oversight, and full-lifecycle support from a team that runs its own facility."
      />
      <meta property="og:title" content="Course Design | Glenaladale Disc Golf" />
      <meta
        property="og:description"
        content="Glenaladale designs disc golf courses for municipalities, landowners, and organizations across Atlantic Canada. Spatial analysis, experienced construction oversight, and full-lifecycle support from a team that runs its own facility."
      />
      <meta property="og:url" content={`${SITE_URL}/course-design`} />
      <link rel="canonical" href={`${SITE_URL}/course-design`} />
    </Helmet>

    <PageHeader
      title="Course Design"
      subtitle="We design courses that work with the land and for the people who play them. From initial site analysis through installation, Glenaladale manages the full process."
      image="/build.jpg"
    />

    {/* The Approach — white */}
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-2xl sm:text-3xl text-green-950 tracking-wide mb-5">
          The Approach
        </h2>
        <div className="w-10 h-0.5 bg-yellow-primary mb-7" />
        <div className="space-y-4 font-serif text-brown-primary text-base leading-relaxed max-w-3xl">
          <p>
            We design courses the same way we built our own: starting with the terrain, not against it.
          </p>
          <p>
            Before we flag a single hole, we've studied the site through field visits, aerial imagery,
            topographic data, and drone surveys. That analysis shapes hole routing, clearing strategy,
            and infrastructure placement.
          </p>
          <p>
            Andrew leads design and site analysis. Patrick handles construction. Josh manages
            communications and course promotion. Together, the client gets design, build, and
            post-launch support from a team that has run its own facility since 2022.
          </p>
        </div>
        <SectionPhoto src="/overhead.jpg" alt="Aerial terrain analysis and hole routing" />
      </div>
    </section>

    {/* How We Work — warm beige */}
    <section className="bg-beige-50 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-2xl sm:text-3xl text-green-950 tracking-wide mb-5">
          How We Work
        </h2>
        <div className="w-10 h-0.5 bg-yellow-primary mb-7" />
        <div className="space-y-10 max-w-3xl">
          <div>
            <h3 className="font-headline text-base sm:text-lg text-green-950 tracking-wide mb-3">
              Initial Design and Routing
            </h3>
            <div className="w-8 h-0.5 bg-beige-300 mb-4" />
            <p className="font-serif text-brown-primary text-base leading-relaxed">
              We start by visiting the site to get a sense of the potential. We track our locations
              and take notes along the way. Aerial imagery, topographic data, and drone surveys give
              us a detailed picture of the terrain. From there we develop an initial routing: hole
              layout, course flow, and how the design moves through the landscape. We deliver routing
              maps, a preliminary materials list, a project timeline, and a clearing strategy with
              estimated costs.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-base sm:text-lg text-green-950 tracking-wide mb-3">
              Design Refinement and Fairway Development
            </h3>
            <div className="w-8 h-0.5 bg-beige-300 mb-4" />
            <p className="font-serif text-brown-primary text-base leading-relaxed">
              We revisit the site and verify the routing through flagging. Fairway corridors get
              marked, mowing areas defined, and tree removal coordinated. This is where the design
              gets tested against actual conditions and adjusted accordingly.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-base sm:text-lg text-green-950 tracking-wide mb-3">
              Fairway Refinement and Infrastructure Planning
            </h3>
            <div className="w-8 h-0.5 bg-beige-300 mb-4" />
            <p className="font-serif text-brown-primary text-base leading-relaxed">
              We finalize basket and tee locations through survey work, define fairway boundaries and
              maintenance zones, and complete tree limbing, thinning, and stump grinding. Hole layout
              maps are produced for signage.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-base sm:text-lg text-green-950 tracking-wide mb-3">
              Course Installation and Completion
            </h3>
            <div className="w-8 h-0.5 bg-beige-300 mb-4" />
            <p className="font-serif text-brown-primary text-base leading-relaxed">
              We oversee all installation: basket construction, concrete sleeve installation, and tee
              pad construction (topsoil removal, leveling, framing, gravel, synthetic turf). Signage
              goes in, paths get defined, and finish mowing completes the course.
            </p>
          </div>
        </div>
        <SectionPhoto src="/build.jpg" alt="Tee pad construction at a disc golf course" />
      </div>
    </section>

    {/* Our Work — white */}
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-2xl sm:text-3xl text-green-950 tracking-wide mb-5">
          Our Work
        </h2>
        <div className="w-10 h-0.5 bg-yellow-primary mb-7" />
        <div className="divide-y divide-gray-100">

          <div className="pb-16">
            <p className="font-sans font-light text-xs text-gray-400 tracking-widest uppercase mb-2">
              Mount Stewart, PEI &nbsp;|&nbsp; 2022 &nbsp;|&nbsp; Co-designed, co-owned and operated
            </p>
            <h3 className="font-headline text-xl text-green-950 tracking-wide mb-3">
              Glenaladale Disc Golf Course
            </h3>
            <div className="w-8 h-0.5 bg-green-200 mb-5" />
            <div className="space-y-4 font-serif text-brown-primary text-base leading-relaxed max-w-3xl">
              <p>
                Glenaladale is our home course and the foundation of everything we do. We designed and
                built it from scratch on the historic Glenaladale Estate, with three layouts: Blue
                (championship), Red (intermediate), and Green (beginner). The course was ranked #3 on
                PEI in both 2024 and 2025 and #38 in Canada.
              </p>
              <p>
                Running the course gives us something most designers don't have: direct experience with
                what happens after opening. Maintenance cycles, drainage, player flow, league
                operations. That experience feeds directly into how we design for other clients.
              </p>
            </div>
            <SectionPhoto src="/4-overhead.webp" alt="Aerial view of Glenaladale Disc Golf Course" />
          </div>

          <div className="py-16">
            <p className="font-sans font-light text-xs text-gray-400 tracking-widest uppercase mb-2">
              PEI &nbsp;|&nbsp; 2024–2025
            </p>
            <h3 className="font-headline text-xl text-green-950 tracking-wide mb-3">
              Forest Hills Disc Golf Course Redesign
            </h3>
            <div className="w-8 h-0.5 bg-green-200 mb-5" />
            <div className="space-y-4 font-serif text-brown-primary text-base leading-relaxed max-w-3xl">
              <p>
                An established course on a 9-hole golf course property needed a redesign. We created
                Red and Blue layouts that work with the golf course terrain while staying compatible
                with ongoing golf operations. Dual-use courses require careful routing to keep both
                user groups safe and the experience clean for each.
              </p>
            </div>
            <SectionPhoto />
          </div>

          <div className="py-16">
            <p className="font-sans font-light text-xs text-gray-400 tracking-widest uppercase mb-2">
              PEI &nbsp;|&nbsp; 2025
            </p>
            <h3 className="font-headline text-xl text-green-950 tracking-wide mb-3">
              Hillcrest Farm Micro Course
            </h3>
            <div className="w-8 h-0.5 bg-green-200 mb-5" />
            <div className="space-y-4 font-serif text-brown-primary text-base leading-relaxed max-w-3xl">
              <p>
                A new micro course added to Canada's top-ranked disc golf facility. Holes run 150 to
                250 feet, designed for accessibility and quick play. The challenge was fitting
                meaningful course design into a limited footprint. Tight routing, distinct hole
                characters, and terrain use were the tools.
              </p>
            </div>
            <SectionPhoto />
          </div>

          <div className="pt-16">
            <p className="font-sans font-light text-xs text-gray-400 tracking-widest uppercase mb-2">
              PEI &nbsp;|&nbsp; 2023–2024
            </p>
            <h3 className="font-headline text-xl text-green-950 tracking-wide mb-3">
              Fox Meadow Tournament Layouts
            </h3>
            <div className="w-8 h-0.5 bg-green-200 mb-5" />
            <div className="space-y-4 font-serif text-brown-primary text-base leading-relaxed max-w-3xl">
              <p>
                Two temporary championship layouts for the Disc Golf PEI Tour Finale. Red and Blue
                configurations for competitive play. Temporary layouts require the same design rigor
                as permanent ones, plus logistics planning for installation and removal.
              </p>
            </div>
            <SectionPhoto />
          </div>

        </div>
      </div>
    </section>

    {/* The Team — dark green */}
    <section className="bg-green-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-2xl sm:text-3xl text-white tracking-wide mb-5">
          The Team
        </h2>
        <div className="w-10 h-0.5 bg-yellow-primary mb-7" />
        <div className="space-y-4 font-serif text-green-100 text-base leading-relaxed max-w-3xl">
          <p>
            The course design service comes from the same three people who built and operate Glenaladale.
          </p>
          <p>
            Andrew Clark leads design and site analysis. He brings spatial data tools to every project
            — terrain modeling, aerial analysis, and high-accuracy survey work — and has designed every
            course in our portfolio.
          </p>
          <p>
            Patrick Callbeck handles construction. A finish carpenter by trade, he brings build
            precision to tee pad construction, basket installation, and site work. The quality shows in
            how the infrastructure holds up over time.
          </p>
          <p>
            Josh Coles manages communications and course promotion. He reviews design work, handles
            UDisc setup, and knows what it takes to get a new course found and used once it opens.
          </p>
        </div>
        <SectionPhoto src="/team.jpg" alt="The Glenaladale course design team" />
      </div>
    </section>

    {/* What's Included — light green */}
    <section className="bg-green-50 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-2xl sm:text-3xl text-green-950 tracking-wide mb-5">
          What's Included
        </h2>
        <div className="w-10 h-0.5 bg-yellow-primary mb-7" />
        <p className="font-serif text-brown-primary text-base leading-relaxed max-w-3xl">
          Every project is scoped to the site and the client. Our standard work covers routing maps and
          hole layout drawings, a preliminary and final materials list, a project timeline and clearing
          strategy, fairway flagging and corridor marking, tree clearing coordination, survey-located
          infrastructure placement, and construction oversight through to completion, including tee pad
          and basket installation and signage. We can also handle UDisc setup and course promotion as
          part of the project scope.
        </p>
      </div>
    </section>

    {/* Get in Touch — yellow, clearly distinct from the dark green footer */}
    <section className="bg-yellow-primary py-16 lg:py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="font-headline text-2xl text-green-950 tracking-wide mb-4">
          Get in Touch
        </h2>
        <div className="w-10 h-0.5 bg-green-950 mx-auto mb-6" />
        <p className="font-serif text-green-950 text-base leading-relaxed mb-3">
          If you're exploring a new disc golf course or considering a redesign, reach out. We're glad to
          talk through the site and what the process looks like.
        </p>
        <p className="font-sans font-light text-green-900 text-sm tracking-wide mb-8">
          info@glenaladalediscgolf.com
        </p>
        <a
          href="mailto:info@glenaladalediscgolf.com"
          className="inline-block font-headline text-xs tracking-widest uppercase px-8 py-3 bg-green-950 text-white hover:bg-green-800 transition-colors"
        >
          Email us
        </a>
      </div>
    </section>
  </>
);

export default CourseDesignPage;
