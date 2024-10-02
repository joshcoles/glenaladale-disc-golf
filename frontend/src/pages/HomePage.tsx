import React from 'react';

import Hero from '../components/Hero';
import SubHero from '../components/SubHero';
import Reviews from '../components/Reviews';
import FlyThroughVideo from '../components/FlyThroughVideo';

const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<SubHero />
			<Reviews numberToShow={3} showFullReviews={false} />
			<FlyThroughVideo />
		</>
	);
};

export default HomePage;
