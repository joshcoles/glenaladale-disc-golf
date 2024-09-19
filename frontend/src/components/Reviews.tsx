import React from 'react';
import Review from './Review';
import reviews from '../data/reviews.json';

interface ReviewsProps {
	numberToShow: number;
	showFullReviews: boolean;
}

const Reviews: React.FC<ReviewsProps> = ({ numberToShow, showFullReviews }) => {
	return (
		<>
			<section className="bg-yellow-primary flex flex-col flex-grow items-center">
				<div className="max-w-screen-xl py-14 px-5 sm:!px-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
					{reviews.slice(0, numberToShow).map((item, index) => (
						<Review
							key={index}
							user={item.user.substring(0, 40)}
							description={item.description}
							stars={item.stars}
							coursesPlayed={item.coursesPlayed}
							initialShowFullReview={showFullReviews}
						></Review>
					))}
				</div>
			</section>
		</>
	);
};

export default Reviews;
