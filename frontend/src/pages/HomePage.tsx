import React from 'react';

import Hero from '../components/Hero';
import LinkTree from '../components/LinkTree';
import Reviews from '../components/Reviews';
import FlyThroughVideo from '../components/FlyThroughVideo';

const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<LinkTree />
			<Reviews />
			<FlyThroughVideo />
		</>
	);
};

export default HomePage;
