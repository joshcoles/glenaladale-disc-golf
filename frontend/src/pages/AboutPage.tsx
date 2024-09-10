import React, { useState } from 'react';
import CourseMaps from '../components/CourseMaps';

const AboutPage: React.FC = () => {
	const [activeSection, setActiveSection] = useState('about');
	const [activeClasses] = useState('bg-green-primary text-white');
	const [inactiveClasses] = useState('bg-white text-green-primary');

	const renderSection = () => {
		switch (activeSection) {
			case 'about':
				return (
					<section className="max-w-screen-xl mx-auto p-4 md:p-8 text-brown-950">
						<h2 className="text-brown-primary mb-5 text-center text-4xl">
							About Us
						</h2>
						<div className="flex justify-center mb-8">
							<img
								src="/overhead.jpg"
								alt="Primary"
								className="w-full h-auto max-h-96 object-cover rounded-lg"
							/>
						</div>
						<div className="mb-4">
							<p className="mb-2">
								Glenaladale Disc Golf Course opened in 2022 on
								land belonging to the Glenaladale Heritage
								Trust. It was designed and built by course
								owners / operators Josh Coles, Andrew Clark and
								Patrick Callbeck.
							</p>
							<p className="mb-2">
								At approximately 7,000ft long from the red
								layout and 8,000ft from the blue layout, the
								course is a challenging mix of woods and open
								disc golf.
							</p>
						</div>

						<div className="space-y-8">
							<div className="flex flex-col md:!flex-row md:space-x-8 mt-12">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										The Team
									</h2>
									<p className="mb-2">
										The course is operated by the three
										primary owners with help from
										volunteers, friends and family. The land
										on which the course lies belongs to the
										Glenaladale Heritage Trust, and is
										leased to the course owners.
									</p>
									<p className="mb-2">
										Andrew is a climate data and policy
										specialist from Charlottetown, working
										with the government of PEI. He has
										background in GIS and was part of the
										UPEI Climate Lab team that initially
										built CLIVE (CoastaL Impacts
										Visualization Environment). He started
										playing disc golf around 2013, and
										quickly became interested in travelling
										around the maritimes competing in
										tournaments.
									</p>
									<p className="mb-2">
										Josh is a software engineer from
										Charlottetown. He began playing disc
										golf in 2011 when his friend Jeff
										introduced him to Hillcrest Farm, which
										had just opened. He continued to play
										casually after moving to Vancouver and
										then Toronto, where he became interested
										in the competitive side of Disc Golf.
										His moving back to PEI coincided with
										the development and opening of the
										course.
									</p>
									<p className="mb-2">
										Patrick is a carpenter from
										Charlottetown specializing in finish
										carpentry and custom cabinetry, which he
										learned largely while living and working
										in Montreal. Upon moving back to PEI in
										2020 he got a job restoring the
										Glenaladale schoolhouse, which now acts
										as a central hub for the Glenaladale
										Heritage Trust. After playing a handful
										of rounds of disc golf in the 2010s, he
										was introduced to the sport in 2020 by
										Josh and like many "covid disc golfers",
										was instantly hooked.
									</p>
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="team.jpg"
										alt="Section 1"
										className="w-full h-auto rounded-lg object-cover"
									/>
									<figcaption className="mb-2">
										Clockwise from top left: Patrick
										Callbeck, Andrew Clark, Alexis Bulman,
										Josh Coles. Alexis created much of the
										initial signage of the course and
										contributes to maintenance and
										beutification on a regular basis.
									</figcaption>
								</div>
							</div>

							<div className="flex flex-col md:!flex-row-reverse md:space-x-8 md:space-x-reverse mt-12">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										The Land
									</h2>
									<p className="mb-2">
										The course takes up approximately 30
										acres of the over 500 that belongs to
										the Glenaladale Heritage Trust, and is
										across the road from the historic
										Glenaladale Estate. Before that it was
										home to Mi’kmaq, followed by the
										Acadians, the 1772 Glenaladale Scots,
										and later the Mackinnnon family. For
										more information, please visit the
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
										Much of the course is built on sections
										of forest which have been harvested as
										recently as about 2015. These sections
										were slightly easier to develop into
										grassy fairways than the hole which were
										cut out of mature forest. We also have
										holes that play along the edge of an
										active farmer's field, as well as holes
										which play through an established tree
										plantation with neatly organized rows of
										trees, providing "natural" disc golf
										fairways.
									</p>
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="overhead-2.jpg"
										alt="Section 2"
										className="w-full h-auto rounded-lg object-cover"
									/>
								</div>
							</div>

							<div className="flex flex-col md:!flex-row md:space-x-8 mt-12 mb-12">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										The Course's Origins
									</h2>
									<p className="mb-2">
										The idea for the course began in 2020
										when Patrick moved home from Montreal
										and began working with the Glenaladale
										Heritage Trust to restore the historic
										Schoolhouse, which now sits prominently
										at the entrance to the estate.
									</p>

									<p className="mb-2">
										At the time, the heritage trust was
										looking for ways to extend the reach of
										the estate into the community, in
										particular to a younger demographic than
										what the estate was typically frequented
										by. Having recently been re-introduced
										to disc golf by Josh, Patrick pitched
										the idea of installing a course on the
										property and brought Josh into the
										conversation. Josh suggested including
										Andrew, mutual friend who had previously
										expressed interest in building a course
										elsewhere on PEI.
									</p>

									<p className="mb-2">
										The initial course build was financed
										largely by an ACOA grant, which the
										heritage trust helped the disc golf team
										acquire. Since then the course has been
										financed by course revenue, which has
										then been reinvested into the course
										each year.
									</p>
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="build.jpg"
										alt="Section 3"
										className="w-full h-auto rounded-lg object-cover"
									/>
								</div>
							</div>
						</div>
					</section>
				);
			case 'courseMaps':
				return <CourseMaps />;
			case 'coursePhotos':
				return (
					<section className="max-w-screen-xl mx-auto p-4 md:p-8 text-brown-950">
						<h2 className=" mb-5 text-center text-4xl">
							Course Photos
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							<img
								src="https://via.placeholder.com/600x400"
								alt="Course Photo 1"
								className="w-full h-auto rounded-lg object-cover"
							/>
							<img
								src="https://via.placeholder.com/600x400"
								alt="Course Photo 2"
								className="w-full h-auto rounded-lg object-cover"
							/>
							<img
								src="https://via.placeholder.com/600x400"
								alt="Course Photo 3"
								className="w-full h-auto rounded-lg object-cover"
							/>
						</div>
					</section>
				);
			default:
				return null;
		}
	};

	return (
		<section className="bg-yellow-primary px-5 flex flex-col flex-grow items-center">
			<div className="max-w-screen-xl flex flex-col items-center">
				<div className=" flex justify-center my-4">
					{['about', 'courseMaps', 'coursePhotos'].map((section) => (
						<button
							key={section}
							className={`px-4 py-2 ${activeSection === section ? activeClasses : inactiveClasses}`}
							onClick={() => setActiveSection(section)}
						>
							{section === 'about'
								? 'About Us'
								: section === 'courseMaps'
									? 'Course Maps'
									: 'Course Photos'}
						</button>
					))}
				</div>
				{renderSection()}
			</div>
		</section>
	);
};

export default AboutPage;
