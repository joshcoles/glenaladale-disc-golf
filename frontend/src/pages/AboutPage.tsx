import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/about/AboutSection';

const AboutPage: React.FC = () => {
	return (
		<section className="bg-green-900 px-5 flex flex-col flex-grow items-center">
			<Helmet>
				<title>About the Course - Glenaladale Disc Golf</title>
				<meta
					name="description"
					content="Learn about Glenaladale Disc Golf's origin story, the historic land, design team, and the course that has become a favorite destination for disc golfers in PEI."
				/>
				<link
					rel="canonical"
					href="https://glenaladalediscgolf.com/about"
				/>
				<meta
					property="og:title"
					content="About the Course - Glenaladale Disc Golf"
				/>
				<meta
					property="og:description"
					content="Learn about Glenaladale Disc Golf's origin story and the historic Glenaladale Estate."
				/>
				<meta
					property="og:url"
					content="https://glenaladalediscgolf.com/about"
				/>
			</Helmet>
			<div className="max-w-screen-xl w-full my-10 text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-beige-primary mb-2">
					About The Course
				</h2>
				<p className="text-lg sm:text-xl text-yellow-primary">
					Read on to learn more about the origin story of the course,
					the land on which it stands, the design team and more.
				</p>
			</div>
			<AboutSection />
		</section>
	);
};

export default AboutPage;
