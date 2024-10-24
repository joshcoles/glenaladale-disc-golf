import React from 'react';

import Hero from '../components/Hero';
import SubHero from '../components/SubHero';
import Reviews from '../components/Reviews';
import Overview from '../components/Overview';
import FlyThroughVideo from '../components/FlyThroughVideo';

const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<SubHero />
			<Overview />
			<FlyThroughVideo />
			<Reviews numberToShow={6} showFullReviews={false} />
		</>
	);
};

export default HomePage;
