import React from 'react';

import Hero from '../components/Hero';
import LinkTree from '../components/LinkTree';

const HomePage: React.FC = () => {
	return (
		<>
			<div>
				<Hero />
				<LinkTree />
			</div>
		</>
	);
};

export default HomePage;
