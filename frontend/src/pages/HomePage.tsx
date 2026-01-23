import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/Hero';
import SubHero from '../components/SubHero';
import Reviews from '../components/Reviews';
import Overview from '../components/Overview';
import FlyThroughVideo from '../components/FlyThroughVideo';

const HomePage: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>
					Glenaladale Disc Golf - Premier Disc Golf Course in PEI
				</title>
				<meta
					name="description"
					content="Experience premier wooded disc golf on Prince Edward Island. Located 20 minutes north of Charlottetown on the historic Glenaladale Estate. 18-hole championship course established in 2022."
				/>
				<meta
					name="keywords"
					content="disc golf, PEI, Prince Edward Island, Charlottetown, disc golf course, Glenaladale, outdoor recreation, wooded course, disc golf PEI"
				/>
				<link rel="canonical" href="https://glenaladalediscgolf.com/" />
				<meta
					property="og:title"
					content="Glenaladale Disc Golf - Premier Disc Golf Course in PEI"
				/>
				<meta
					property="og:description"
					content="Experience premier wooded disc golf on Prince Edward Island. 18-hole championship course on the historic Glenaladale Estate."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://glenaladalediscgolf.com/"
				/>
			</Helmet>
			<Hero />
			<SubHero />
			<Overview />
			<FlyThroughVideo />
			<Reviews numberToShow={6} showFullReviews={false} />
		</>
	);
};

export default HomePage;
