import React from 'react';
import { Helmet } from 'react-helmet-async';
import CourseMapsSection from '../components/about/CourseMapsSection';

const GalleryPage: React.FC = () => {
	return (
		<section className="bg-green-900 px-5 flex flex-col flex-grow items-center">
			<Helmet>
				<title>Course Maps Gallery - Glenaladale Disc Golf</title>
				<meta
					name="description"
					content="View detailed course maps for all 18 holes at Glenaladale Disc Golf. Plan your round with our comprehensive hole-by-hole layout maps."
				/>
				<link
					rel="canonical"
					href="https://glenaladalediscgolf.com/gallery"
				/>
				<meta
					property="og:title"
					content="Course Maps Gallery - Glenaladale Disc Golf"
				/>
				<meta
					property="og:description"
					content="View detailed course maps for all 18 holes at Glenaladale Disc Golf."
				/>
				<meta
					property="og:url"
					content="https://glenaladalediscgolf.com/gallery"
				/>
			</Helmet>
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
