import React from 'react';

const AboutSection: React.FC = () => {
	return (
		<div className="max-w-screen-xl bg-green-primary p-6 pb-0 mb-5 text-left mx-auto text-brown-primary">
			<div className="bg-yellow-primary shadow-brown-offset p-5 mb-4">
				<div className="flex justify-center mb-8">
					<img
						src="/overhead.jpg"
						alt="Primary"
						className="w-full h-auto max-h-[500px] object-cover rounded-lg"
					/>
				</div>
				<p className="mb-5 font-bold">
					Glenaladale Disc Golf Course opened in June of 2022. It is a
					separate entity from the Glenaladale Heritage Trust, from
					which it leases the course's land. The course is grateful to
					the trust for their help and for letting them share their
					space!
				</p>
				<p className="mb-5">
					The course was designed and built by course owners /
					operators <strong>Josh Coles</strong>,{' '}
					<strong>Andrew Clark</strong> and{' '}
					<strong>Patrick Callbeck</strong>. The three are close
					friends and avid disc golfers. and wanted to try their hand
					at adding to the list of world-class destination disc golf
					courses on PEI, and to create one with a strong community.
				</p>
				<p className="">
					At approximately 7,000ft long from the red layout and
					8,000ft from the blue layout, the course is a challenging
					mix of woods and open disc golf. Newer players can enjoy the
					challenge and scale of the course while competitive players
					can challenge themselves on long and technical holes.
				</p>
			</div>

			<div>
				<div className="bg-yellow-primary shadow-brown-offset p-5 flex flex-col md:!flex-row md:space-x-8 mt-12 md:mt-16">
					<div className="md:w-1/2">
						<h2 className="text-4xl font-semibold mb-4">
							The Team
						</h2>
						<p className="mb-2 font-bold">
							The course is operated by the three primary owners
							with help from volunteers, friends and family. The
							land on which the course lies belongs to the
							Glenaladale Heritage Trust, and is leased to the
							course owners.
						</p>
						<p className="mb-2">
							<strong>Andrew</strong> is a climate data and policy
							specialist from Charlottetown, working with the
							government of PEI. He has background in GIS and was
							part of the UPEI Climate Lab team that initially
							built CLIVE (CoastaL Impacts Visualization
							Environment). He started playing disc golf around
							2013, and quickly became interested in travelling
							around the maritimes competing in tournaments.
						</p>
						<p className="mb-2">
							<strong>Josh</strong> is a software engineer from
							Charlottetown. He began playing disc golf in 2011
							when his friend Jeff introduced him to Hillcrest
							Farm, which had just opened. He continued to play
							casually after moving to Vancouver and then Toronto,
							where he became interested in the competitive side
							of Disc Golf. His moving back to PEI coincided with
							the development and opening of the course.
						</p>
						<p className="mb-2">
							<strong>Patrick</strong> is a carpenter from
							Charlottetown specializing in finish carpentry and
							custom cabinetry. Upon moving back to PEI in 2020 he
							got a job restoring the Glenaladale schoolhouse.
							After playing a handful of rounds of disc golf in
							the 2010s, he was introduced to the sport in 2020 by
							Josh and like many "covid disc golfers", was
							instantly hooked and quickly caught up to more
							experienced golfers.
						</p>
					</div>
					<div className="mt-4 md:mt-0 md:w-1/2">
						<img
							src="team.jpg"
							alt="Section 1"
							className="w-full h-auto rounded-lg object-cover"
						/>
						<figcaption className="mb-2 text-xs">
							Clockwise from top left: Patrick Callbeck, Andrew
							Clark, Alexis Bulman, Josh Coles. Alexis created
							much of the initial signage of the course and
							contributes to its maintenance and beautification.
						</figcaption>
					</div>
				</div>

				<div className="bg-yellow-primary shadow-brown-offset p-5 flex flex-col md:!flex-row-reverse md:space-x-8 md:space-x-reverse mt-12 md:mt-16">
					<div className="md:w-1/2">
						<h2 className="text-4xl font-semibold mb-4">
							The Land
						</h2>
						<p className="mb-2 font-bold">
							The course takes up approximately 30 acres of the
							over 500 that belongs to the Glenaladale Heritage
							Trust, and is across the road from the historic
							Glenaladale Estate. Before that it was home to
							Mi’kmaq, followed by the Acadians, the 1772
							Glenaladale Scots, and later the MacKinnnon family.
							For more information, please visit the
							<a
								className="p-1 text-brown-950 underline"
								href="https://glenaladalepei.com/past/"
								target="_blank"
							>
								Glenaladale Website
							</a>
							.
						</p>
						<p className="mb-2">
							Before the course, this land was forested as
							recently as about 2015. These sections were slightly
							easier to develop into grassy fairways than the
							holes which were cut out of mature forest. We also
							have holes that play along the edge of an active
							farmer's field, as well as holes which play through
							an established tree plantation with neatly organized
							rows of trees, providing "natural" disc golf
							fairways.
						</p>
						<p>
							In September of 2022 the course was hit by Hurricane
							Fiona, which carried winds of approximately 150
							km/h. While the course was not affected as much as
							others, certain holes were changed significantly.
							Hole 13 lost nearly every tree on its fairway—over
							15 mature birch trees. Half of hole 16 was
							destroyed, requiring well over 100 hours of manual
							cleanup. Holes 7 and 18 both lost 100+ year old
							mature, prominent pine trees. Thousands of trees
							were lost in total, slowing down the progress of the
							course's development as time was diverted to
							cleaning up these affected areas.
						</p>
					</div>
					<div className="mt-4 md:mt-0 md:w-1/2">
						<img
							src="overhead-2.jpg"
							alt="Section 2"
							className="w-full h-auto rounded-lg object-cover"
						/>
						<figcaption className="mb-2 text-xs">
							An aerial view from above hole 5. Holes 11 and 7 are
							visible, as is the field next to hole 1. In the
							distance the Glenaladale Schoolhouse, Glenaladale
							House itself, and the Tracadie Harbour.
						</figcaption>
					</div>
				</div>

				<div className="bg-yellow-primary shadow-brown-offset p-5 flex flex-col md:!flex-row md:space-x-8 mt-12 mb-12 md:mt-16">
					<div className="md:w-1/2">
						<h2 className="text-4xl font-semibold mb-4">
							The Course's Origins
						</h2>
						<p className="mb-2 font-bold">
							The idea for the course began in 2020 when Patrick
							moved home from Montreal and began working with the
							Glenaladale Heritage Trust to restore the historic
							Schoolhouse, which now sits prominently at the
							entrance to the estate.
						</p>
						<p className="mb-2">
							At the time, the heritage trust was looking for ways
							to extend the reach of the estate into the
							community, in particular to a younger demographic
							than what the estate was typically frequented by.
							Patrick got Josh involved, who got Andrew involved.
							They pitched the idea of installing a course on the
							property to the Glenaladale Heritage Trust, who gave
							their support.
						</p>
						<p className="mb-2">
							The initial course build was financed largely by an
							ACOA grant, which the heritage trust helped the disc
							golf team acquire. Since then the course has been
							financed by course revenue, which has then been
							reinvested into the course each year. The long-term
							plan for the course is to continue reinvesting any
							income into the development of the course to turn it
							into a world-class disc golf destination.
						</p>
					</div>
					<div className="mt-4 md:mt-0 md:w-1/2">
						<img
							src="build.jpg"
							alt="Section 3"
							className="w-full h-auto rounded-lg object-cover"
						/>
						<figcaption className="mb-2 text-xs">
							Construction of hole 2's tee pad. This frame was
							built on top of a pile of rocks which was found in
							this location while scouting the course's layout.
							The rocks were collected and placed here over the
							years by farmers who farmed the field just adjacent
							to the hole.
						</figcaption>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
