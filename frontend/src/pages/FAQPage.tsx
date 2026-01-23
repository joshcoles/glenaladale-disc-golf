import React from 'react';
import { Helmet } from 'react-helmet-async';
import FaqSection from '../components/about/FaqSection';
import { NavLink } from 'react-router-dom';

const FAQPage: React.FC = () => {
	return (
		<div className="bg-green-900 px-5 flex flex-col flex-grow items-center">
			<Helmet>
				<title>
					FAQ - Frequently Asked Questions | Glenaladale Disc Golf
				</title>
				<meta
					name="description"
					content="Find answers to frequently asked questions about Glenaladale Disc Golf course, including hours, rates, rules, facilities, and course information."
				/>
				<link
					rel="canonical"
					href="https://glenaladalediscgolf.com/faq"
				/>
				<meta
					property="og:title"
					content="FAQ - Glenaladale Disc Golf"
				/>
				<meta
					property="og:description"
					content="Frequently asked questions about Glenaladale Disc Golf course."
				/>
				<meta
					property="og:url"
					content="https://glenaladalediscgolf.com/faq"
				/>
			</Helmet>
			<div className="max-w-screen-xl w-full my-10 text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-beige-primary mb-2">
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
