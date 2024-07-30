import React from 'react';

import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
	return (
		<>
			<div>
				<Hero />
				<Reviews />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
