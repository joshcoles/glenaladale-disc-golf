import React from 'react';
import { StarRatingProps } from '../../types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating: React.FC<StarRatingProps> = ({
	stars = 0,
	maxStars = 5,
	className = '',
}) => {
	const fullStars = Math.floor(stars);
	const halfStars = stars % 1 >= 0.5 ? 1 : 0;
	const emptyStars = maxStars - fullStars - halfStars;

	return (
		<div className={`flex ${className}`}>
			{Array.from({ length: fullStars }).map((_, index) => (
				<FaStar className="text-yellow-primary" key={`full-${index}`} />
			))}
			{halfStars === 1 && (
				<FaStarHalfAlt className="text-yellow-primary" key="half" />
			)}
			{Array.from({ length: emptyStars }).map((_, index) => (
				<FaRegStar
					className="text-yellow-primary"
					key={`empty-${index}`}
				/>
			))}
		</div>
	);
};

export default StarRating;
