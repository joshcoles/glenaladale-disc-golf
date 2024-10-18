import React from 'react';
import CourseMapsSection from '../components/about/CourseMapsSection';

const GalleryPage: React.FC = () => {
	return (
		<section className="bg-yellow-primary pt-5 px-5 flex flex-col flex-grow items-center">
			<div className="max-w-screen-xl flex flex-col items-center w-full">
				<div className="max-w-screen-xl w-full mb-5 text-center">
					<h2 className="text-3xl sm:text-3xl font-bold text-brown-primary mb-4">
						Course Maps
					</h2>
					<p className="text-lg sm:text-xl text-brown-primary">
						Click on a map to expand
					</p>
				</div>
				<div className=" flex justify-center mb-4">
					<CourseMapsSection />
				</div>
			</div>
		</section>
	);
};

export default GalleryPage;
