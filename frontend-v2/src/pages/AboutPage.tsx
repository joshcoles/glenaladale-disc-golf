import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  caption?: string;
  reverse?: boolean;
  bg?: string;
  dark?: boolean;
}> = ({ title, children, image, imageAlt, caption, reverse = false, bg = 'bg-white', dark = false }) => (
  <section className={bg}>
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start py-14 sm:py-20 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div>
        <h2
          className={`font-headline text-2xl sm:text-3xl tracking-wide mb-5 ${
            dark ? 'text-white' : 'text-green-950'
          }`}
        >
          {title}
        </h2>
        <div className="w-10 h-0.5 bg-yellow-primary mb-7" />
        <div
          className={`space-y-4 font-serif text-base leading-relaxed ${
            dark ? 'text-green-100' : 'text-brown-primary'
          }`}
        >
          {children}
        </div>
      </div>
      <div>
        <img src={image} alt={imageAlt} className="w-full h-64 sm:h-80 object-cover" />
        {caption && (
          <p
            className={`mt-3 font-sans font-light text-xs tracking-wide leading-relaxed ${
              dark ? 'text-green-700' : 'text-gray-400'
            }`}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  </section>
);

const AboutPage: React.FC = () => (
  <>
    <PageHeader
      title="About the Course"
      subtitle="Learn more about the origin story of the course, the land on which it stands, and the team behind it."
      image="/overhead-2.jpg"
    />

    <Section
      title="The Course"
      image="/4-overhead.webp"
      imageAlt="Aerial view of Glenaladale Disc Golf Course surrounded by forest"
      bg="bg-white"
    >
      <p>
        Glenaladale Disc Golf Course opened in June of 2022. It is a separate entity from the
        Glenaladale Heritage Trust, from which it leases the course's land. The course is
        grateful to the trust for their help and for letting them share their space.
      </p>
      <p>
        The course was designed and built by course owners and operators{' '}
        <strong>Josh Coles</strong>, <strong>Andrew Clark</strong>, and{' '}
        <strong>Patrick Callbeck</strong>. The three are close friends and avid disc golfers who
        wanted to try their hand at adding to the list of world-class destination disc golf
        courses on PEI, and to create one with a strong community.
      </p>
      <p>
        At approximately 7,000 ft long from the red layout and 8,000 ft from the blue layout,
        the course is a challenging mix of woods and open disc golf. A shorter Green layout (~4,500 ft)
        is also available for less experienced players, while competitive players can challenge themselves
        on long and technical holes.
      </p>
    </Section>

    <Section
      title="The Team"
      image="/team.jpg"
      imageAlt="Glenaladale Disc Golf team - Patrick Callbeck, Andrew Clark, Alexis Bulman, and Josh Coles"
      caption="Clockwise from top left: Patrick Callbeck, Andrew Clark, Alexis Bulman, Josh Coles. Alexis created much of the initial signage of the course and contributes to its maintenance and beautification."
      reverse
      bg="bg-green-950"
      dark
    >
      <p>
        The course is operated and maintained by the three primary owners with help from
        volunteers, friends and family. The land belongs to the Glenaladale Heritage Trust,
        and is leased to the course owners.
      </p>
      <p>
        <strong>Andrew</strong> is a climate data and policy specialist from Charlottetown,
        working with the government of PEI. He has background in GIS and was part of the UPEI
        Climate Lab team that built CLIVE. He started playing disc golf around 2013 and quickly
        became interested in competing in tournaments across the Maritimes.
      </p>
      <p>
        <strong>Josh</strong> is a software engineer from Charlottetown. He began playing disc
        golf in 2011 and continued to play casually after moving to Vancouver and then Toronto,
        where he became interested in the competitive side of the sport. His return to PEI
        coincided with the development and opening of the course.
      </p>
      <p>
        <strong>Patrick</strong> is a carpenter from Charlottetown specializing in finish
        carpentry and custom cabinetry. Upon moving back to PEI in 2020 he got a job restoring
        the Glenaladale schoolhouse. Introduced to disc golf by Josh, he was instantly hooked
        and quickly caught up to more experienced players.
      </p>
    </Section>

    <Section
      title="The Land"
      image="/overhead.jpg"
      imageAlt="Aerial view of Glenaladale Estate with disc golf holes, field, schoolhouse, and Tracadie Harbour"
      caption="An aerial view from above hole 5. Holes 11 and 7 are visible, as is the field next to hole 1. In the distance: the Glenaladale Schoolhouse, Glenaladale House itself, and the Tracadie Harbour."
      bg="bg-beige-50"
    >
      <p>
        The course takes up approximately 30 acres of the over 500 that belong to the
        Glenaladale Heritage Trust, and is across the road from the historic Glenaladale Estate.
        Before that it was home to Mi'kmaq, followed by the Acadians, the 1772 Glenaladale
        Scots, and later the MacKinnon family. For more information, visit the{' '}
        <a
          href="https://glenaladalepei.com/past/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-primary underline hover:text-green-700 transition-colors"
        >
          Glenaladale Website
        </a>
        .
      </p>
      <p>
        Before the course, this land was forested as recently as about 2015. We also have holes
        that play along the edge of an active farmer's field, as well as holes through an
        established tree plantation with neatly organized rows of trees, providing natural disc
        golf fairways.
      </p>
      <p>
        In September of 2022 the course was hit by Hurricane Fiona, which carried winds of
        approximately 150 km/h. Certain holes were changed significantly — hole 13 lost nearly
        every tree on its fairway, and half of hole 16 was destroyed, requiring hundreds of
        hours of manual cleanup.
      </p>
    </Section>

    <Section
      title="The Course's Origins"
      image="/build.jpg"
      imageAlt="Construction of hole 2 tee pad at Glenaladale Disc Golf Course"
      caption="Construction of hole 2's tee pad, built on top of a pile of rocks collected by farmers over the years from the adjacent field."
      reverse
      bg="bg-green-50"
    >
      <p>
        The idea for the course began in 2020 when Patrick moved home from Montreal and began
        working with the Glenaladale Heritage Trust to restore the historic Schoolhouse, which
        now sits prominently at the entrance to the estate.
      </p>
      <p>
        At the time, the heritage trust was looking for ways to extend the reach of the estate
        into the community — in particular to a younger demographic. Patrick brought Josh in, who
        brought Andrew in. They pitched the idea of a disc golf course to the trust, who gave
        their support.
      </p>
      <p>
        The initial build was financed largely by an ACOA grant, which the heritage trust helped
        acquire. Since then the course has been self-sufficient, reinvesting revenue from
        memberships and day access back into its development. The long-term plan is to continue
        growing into a world-class disc golf destination.
      </p>
    </Section>
  </>
);

export default AboutPage;
