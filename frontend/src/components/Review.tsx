import { useState, useEffect } from 'react';
import { ReviewProps } from '../types';
import StarRating from './util/StarRating';

const Review: React.FC<ReviewProps> = ({
	user,
	coursesPlayed,
	stars,
	description,
	initialShowFullReview = false,
}) => {
	const [showFullReview, setFullShowReview] = useState(initialShowFullReview);

	useEffect(() => {
		if (description.length < 90) {
			setFullShowReview(true);
		}
	}, []);

	let prompt = !showFullReview ? 'Show more' : 'Show less';

	return (
		<>
			<div className="bg-green-primary p-5 shadow-button-primary text-beige-200">
				<div className="flex justify-between mb-1 sm:flex-col lg:flex-row">
					<div className="flex">
						<img
							className="rounded-full w-10 h-10 mr-1"
							src={`/${user}.jpg`}
						/>
						<div className="flex flex-col items-start">
							<h2 className="font-headline text-lg text-center leading-none mb-1">
								@{user}
							</h2>
							<span className="italic text-xs text-brown-primary font-medium">
								{' '}
								{coursesPlayed} courses played
							</span>
						</div>
					</div>
					<StarRating className="sm:mt-1 lg:mt-0" stars={stars} />
				</div>
				<p className="font-sans italic text-beige-primary">
					{showFullReview
						? description
						: `${description.substring(0, 90)}...`}
				</p>
				{description.length > 90 && (
					<button
						className="underline text-brown-primary font-medium"
						onClick={() =>
							setFullShowReview((prevState) => !prevState)
						}
					>
						{prompt}
					</button>
				)}
			</div>
		</>
	);
};

export default Review;
