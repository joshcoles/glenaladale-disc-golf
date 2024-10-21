import React from 'react';
import CourseMapsSection from '../components/about/CourseMapsSection';

const GalleryPage: React.FC = () => {
	return (
		<section className="bg-green-900 px-5 flex flex-col flex-grow items-center">
			<div className="max-w-screen-xl w-full my-10 text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-beige-primary mb-2">
					Course Maps
				</h2>
				<p className="text-lg sm:text-xl text-yellow-primary">
					Click on a map to expand.
				</p>
			</div>
			<div className="flex w-full justify-center mb-4">
				<CourseMapsSection />
			</div>
		</section>
	);
};

export default GalleryPage;
