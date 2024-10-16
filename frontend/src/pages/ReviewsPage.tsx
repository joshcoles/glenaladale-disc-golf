import React from 'react';
import Reviews from '../components/Reviews';

const ReviewsPage: React.FC = () => {
	return (
		<div className="bg-yellow-primary flex flex-col flex-grow items-center pt-5">
			<div className="max-w-screen-xl w-full text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-brown-primary mb-4">
					Player reviews pulled from UDisc
				</h2>
				<p className="text-lg sm:text-xl text-brown-primary">
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
