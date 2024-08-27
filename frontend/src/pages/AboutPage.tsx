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
						{/* Primary Image */}
						<div className="flex justify-center mb-8">
							<img
								src="https://via.placeholder.com/600x400"
								alt="Primary"
								className="w-full h-auto max-h-96 object-cover rounded-lg"
							/>
						</div>

						{/* Content Sections */}
						<div className="space-y-8">
							{/* Section 1 */}
							<div className="flex sm:flex-col md:flex-row md:items-center md:space-x-8">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										Section 1 Title
									</h2>
									<p className="text-gray-700">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Integer nec odio.
										Praesent libero. Sed cursus ante dapibus
										diam.
									</p>
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="https://via.placeholder.com/600x400"
										alt="Section 1"
										className="w-full h-auto rounded-lg object-cover"
									/>
								</div>
							</div>

							{/* Section 2 */}
							<div className="flex sm:flex-col md:flex-row-reverse md:items-center md:space-x-8 md:space-x-reverse">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										Section 2 Title
									</h2>
									<p className="text-gray-700">
										Sed nisi. Nulla quis sem at nibh
										elementum imperdiet. Duis sagittis
										ipsum. Praesent mauris.
									</p>
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="https://via.placeholder.com/600x400"
										alt="Section 2"
										className="w-full h-auto rounded-lg object-cover"
									/>
								</div>
							</div>

							{/* Section 3 */}
							<div className="flex sm:flex-col md:flex-row md:items-center md:space-x-8">
								<div className="md:w-1/2">
									<h2 className="text-xl font-semibold mb-4">
										Section 3 Title
									</h2>
									<p className="text-gray-700">
										Fusce nec tellus sed augue semper porta.
										Mauris massa. Vestibulum lacinia arcu
										eget nulla.
									</p>
								</div>
								<div className="mt-4 md:mt-0 md:w-1/2">
									<img
										src="https://via.placeholder.com/600x400"
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
							{/* Add more photos as needed */}
						</div>
					</section>
				);
			default:
				return null;
		}
	};

	return (
		<section className="bg-yellow-primary px-5 flex flex-col flex-grow items-center">
			<h2>About Us</h2>
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
