import React, { useState, useEffect } from 'react';
import Review from './Review';

interface Review {
	title: string;
	body: string;
}

const Reviews: React.FC = () => {
	const [reviews, setReviews] = useState<Review[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const reviews = await fetch(
					'https://jsonplaceholder.typicode.com/posts',
				);
				const data: {
					title: string;
					body: string;
				}[] = await reviews.json();
				data.length = 6;
				setReviews(data);
			} catch (err) {
				console.error('Error', err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchReviews();
	}, []);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<>
			<section className="bg-beige-200 p-5 rounded-md shadow-md grid gap-4 grid-cols-3 grid-rows-custom-300 h-screen">
				{reviews.map((item, index) => (
					<Review
						key={index}
						title={item.title.substring(0, 40)}
						description={item.body}
					></Review>
				))}
			</section>
		</>
	);
};

export default Reviews;
