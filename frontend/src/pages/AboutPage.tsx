import React, { useState } from 'react';
import CourseMapsSection from '../components/about/CourseMapsSection';
import AboutSection from '../components/about/AboutSection';
import FaqSection from '../components/about/FaqSection';
import { AboutPageSections } from '../types';

const AboutPage: React.FC = () => {
	const [activeSection, setActiveSection] =
		useState<AboutPageSections>('about');
	const [activeClasses] = useState(
		'bg-green-primary hover:bg-green-700 text-white shadow-button-primary-inset',
	);
	const [inactiveClasses] = useState(
		'bg-white hover:bg-slate-200 text-green-primary shadow-button-primary',
	);

	const aboutSection = () => (
		<section
			className={`${activeSection === 'about' ? 'block' : 'hidden'} max-w-screen-xl mx-auto p-4 md:p-8 text-brown-950`}
		>
			<AboutSection />
		</section>
	);

	const mapsSection = () => (
		<section
			className={`${activeSection === 'courseMaps' ? 'block' : 'hidden'} max-w-screen-xl mx-auto w-full`}
		>
			<CourseMapsSection />
		</section>
	);

	return (
		<section className="bg-yellow-primary px-5 flex flex-col flex-grow items-center">
			<div className="max-w-screen-xl flex flex-col items-center w-full">
				<div className=" flex justify-center mt-6 mb-4">
					{(['about', 'courseMaps'] as AboutPageSections[]).map(
						(section: AboutPageSections) => (
							<button
								key={section}
								className={`px-6 py-4 font-headline mx-1 ${activeSection === section ? activeClasses : inactiveClasses}`}
								onClick={() => setActiveSection(section)}
							>
								{section === 'about'
									? 'About The Course'
									: section === 'courseMaps'
										? 'Course Maps'
										: 'FAQ'}
							</button>
						),
					)}
				</div>
				{aboutSection()} {mapsSection()}
			</div>
		</section>
	);
};

export default AboutPage;
