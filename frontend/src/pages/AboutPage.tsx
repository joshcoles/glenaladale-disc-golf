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
					<section className="max-w-screen-xl mx-auto p-4 md:p-8">
						<h2>About Us</h2>
						<div className="flex justify-center mb-8">
							<img
								src="/overhead.jpg"
								alt="Primary"
								className="w-full h-auto max-h-96 object-cover rounded-lg"
							/>
						</div>
						<div className="mb-4">
							<p className="text-brown-950 mb-4">
								Glenaladale Disc Golf Course opened in 2022 on
								land belonging to the Glenaladale Heritage
								Trust. It was designed and built by course
								owners / operators Josh Coles, Andrew Clark and
								Patrick Callbeck.
							</p>

							<p className="text-brown-950">
								At approximately 7,000ft long from the red
								layout and 8,000ft from the blue layout, the
								course is a challenging mix of woods and open
								disc golf.
							</p>
						</div>

						<div className="space-y-8">
							<div className="flex flex-col md:!flex-row md:items-center md:space-x-8">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										The Team
									</h2>
									<p className="text-brown-950">
										The course is operated the three primary
										owners with help from volunteers,
										friends and family. The land on which
										the course lies belongs to the
										Glenaladale Heritage Trust, and is
										leased to the course owners.
									</p>
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="team.jpg"
										alt="Section 1"
										className="w-full h-auto rounded-lg object-cover"
									/>
									<figcaption className="text-brown-950">
										Clockwise from top left: Patrick
										Callbeck, Andrew Clark, Alexis Bulman,
										Josh Coles. Alexis created much of the
										initial signage of the course and
										contributes to maintenance and
										beutification on a regular basis.
									</figcaption>
								</div>
							</div>

							<div className="flex flex-col md:!flex-row-reverse md:items-center md:space-x-8 md:space-x-reverse">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										The Land
									</h2>
									<p className="text-brown-950">
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
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="overhead-2.jpg"
										alt="Section 2"
										className="w-full h-auto rounded-lg object-cover"
									/>
								</div>
							</div>

							<div className="flex flex-col md:!flex-row md:items-center md:space-x-8">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										The Course's Origins
									</h2>
									<p className="text-brown-950 mb-4">
										The idea for the course began in 2020
										when Patrick moved home from Montreal
										and began working with the Glenaladale
										Heritage Trust to restore the historic
										Schoolhouse, which now sits prominently
										at the entrance to the estate.
									</p>

									<p className="text-brown-950 mb-4">
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

									<p className="text-brown-950 mb-4">
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
					<section className="max-w-screen-xl mx-auto p-4 md:p-8">
						<h2 className="text-xl font-semibold mb-4">
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
