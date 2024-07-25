import React, { useState } from 'react';
import Review from './Review';
import ReviewData from '../data/reviews.json';

const Reviews: React.FC = () => {
	const [navItems] = useState(ReviewData);

	return (
		<>
			<div className="bg-beige-200 p-5 rounded-md shadow-md grid gap-2 grid-cols-3">
				{navItems.map((item, index) => (
					<Review
						key={index}
						title={item.title}
						description={item.description}
					></Review>
				))}
			</div>
		</>
	);
};

export default Reviews;
