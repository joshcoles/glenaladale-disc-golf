import React from 'react';

import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import LinkTree from '../components/LinkTree';

const HomePage: React.FC = () => {
	return (
		<>
			<div>
				<Hero />
				<LinkTree />
				<Reviews />
			</div>
		</>
	);
};

export default HomePage;
