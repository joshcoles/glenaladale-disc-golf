import React, { useState } from 'react';
import Review from './Review';
import reviews from '../data/reviews.json';

const Reviews: React.FC = () => {
	return (
		<>
			<section className="bg-beige-200 p-5 rounded-md shadow-md grid gap-4 grid-cols-3 grid-rows-custom-300 h-screen">
				{reviews.map((item, index) => (
					<Review
						key={index}
						user={item.user.substring(0, 40)}
						description={item.description}
						date={item.date}
						stars={item.stars}
						coursesPlayed={item.coursesPlayed}
					></Review>
				))}
			</section>
		</>
	);
};

export default Reviews;
