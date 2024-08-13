import { useState } from 'react';
import { ReviewProps } from '../types';
import StarRating from './StarRating';

const Review: React.FC<ReviewProps> = ({
	user,
	coursesPlayed,
	date,
	stars,
	description,
}) => {
	const [showFullReview, setFullShowReview] = useState(false);

	let prompt = !showFullReview ? 'Show more' : 'Show less';

	return (
		<>
			<div className="bg-yellow-500 p-5 rounded-md shadow-md overflow-hidden">
				<div className="flex justify-between mb-1">
					<div className="flex">
						<img
							className="rounded-full w-10 h-10 mr-1"
							src={`/${user}.jpg`}
						/>
						<div className="flex flex-col items-start">
							<h2 className="font-headline text-lg text-center leading-none mb-1">
								@{user}
							</h2>
							<span className="italic text-xs">
								{' '}
								{coursesPlayed} courses played
							</span>
						</div>
					</div>
					<StarRating stars={stars} />
				</div>
				<p className="font-sans italic">
					{showFullReview
						? description
						: `${description.substring(0, 90)}...`}
				</p>
				<button
					onClick={() => setFullShowReview((prevState) => !prevState)}
				>
					{prompt}
				</button>
			</div>
		</>
	);
};

export default Review;
