import React from 'react';

import Hero from '../components/Hero';
import LinkTree from '../components/LinkTree';
import Reviews from '../components/Reviews';

const HomePage: React.FC = () => {
	return (
		<>
			<div className="flex flex-col h-screen">
				<Hero />
				<LinkTree />
				<Reviews />
			</div>
		</>
	);
};

export default HomePage;
