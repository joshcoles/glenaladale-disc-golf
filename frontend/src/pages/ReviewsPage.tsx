import React from 'react';
import { Helmet } from 'react-helmet-async';
import Reviews from '../components/Reviews';

const ReviewsPage: React.FC = () => {
	return (
		<div className="bg-green-900 flex flex-col flex-grow items-center pt-5">
			<Helmet>
				<title>Player Reviews - Glenaladale Disc Golf</title>
				<meta
					name="description"
					content="Read player reviews from UDisc about Glenaladale Disc Golf course. See what disc golfers are saying about this premier PEI course."
				/>
				<link
					rel="canonical"
					href="https://glenaladalediscgolf.com/reviews"
				/>
				<meta
					property="og:title"
					content="Player Reviews - Glenaladale Disc Golf"
				/>
				<meta
					property="og:description"
					content="Read player reviews from UDisc about Glenaladale Disc Golf course."
				/>
				<meta
					property="og:url"
					content="https://glenaladalediscgolf.com/reviews"
				/>
			</Helmet>
			<div className="max-w-screen-xl w-full my-10 text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-beige-primary mb-2">
					Player reviews pulled from UDisc
				</h2>
				<p className="text-lg sm:text-xl text-yellow-primary">
					We love receiving feedback about the course and have
					collected recent reviews from UDisc, a leading app for disc
					golfers to discover and rate courses. While these are all
					positive, we also pay close attention to less positive
					reviews, using them as a guide for what needs to be improved
					around the course. If you'd like to read more reviews or
					leave your own, check out our{' '}
					<a
						target="_blank"
						href="https://udisc.com/courses/glenaladale-disc-golf-course-gl5b"
					>
						UDisc Page
					</a>{' '}
					for the full list.
				</p>
			</div>
			<Reviews numberToShow={6} showFullReviews={true} />
		</div>
	);
};

export default ReviewsPage;
