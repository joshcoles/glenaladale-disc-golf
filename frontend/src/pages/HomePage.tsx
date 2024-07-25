import React from 'react';

import Landing from '../components/Landing';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
	return (
		<>
			<div>
				<Landing />
				<Reviews />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
