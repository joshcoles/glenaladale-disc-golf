import React from 'react';
import FaqSection from '../components/about/FaqSection';
import { NavLink } from 'react-router-dom';

const FAQPage: React.FC = () => {
	return (
		<div className="bg-green-900 flex flex-col flex-grow items-center pt-5">
			<div className="max-w-screen-xl w-full mb-5 text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-yellow-primary mb-4">
					Frequently Asked Questions
				</h2>
				<p className="text-lg sm:text-xl text-yellow-primary">
					If you can't find the answer to your question below please{' '}
					<NavLink to="/contact">reach out</NavLink> and we will be
					sure to help you out!
				</p>
			</div>
			<FaqSection />
		</div>
	);
};

export default FAQPage;
