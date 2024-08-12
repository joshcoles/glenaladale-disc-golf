import { useState } from 'react';

const Review = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	const [showFullReview, setFullShowReview] = useState(false);

	let prompt = !showFullReview ? 'Show more' : 'Show less';

	return (
		<>
			<div className="bg-yellow-500 p-5 rounded-md shadow-md overflow-hidden">
				<h2 className="font-headline text-lg text-center pb-2">
					{title}
				</h2>
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
