import React from 'react';
import { StarRatingProps } from '../types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating: React.FC<StarRatingProps> = ({ stars = 0, maxStars = 5 }) => {
	const fullStars = Math.floor(stars);
	const halfStars = stars % 1 >= 0.5 ? 1 : 0;
	const emptyStars = maxStars - fullStars - halfStars;

	console.log(fullStars, halfStars, emptyStars);
	return (
		<div className="flex">
			{Array(fullStars)
				.fill(0)
				.map((_, index) => (
					<FaStar key={`full-${index}`} />
				))}
			{/* Render half stars */}
			{halfStars === 1 && <FaStarHalfAlt key="half" />}
			{/* Render empty stars */}
			{Array(emptyStars)
				.fill(0)
				.map((_, index) => (
					<FaRegStar key={`empty-${index}`} />
				))}
		</div>
	);
};

export default StarRating;
