import React, { useState, useEffect } from 'react';
import {
	FaStar,
	FaCommentsDollar,
	FaAddressCard,
	FaCarSide,
} from 'react-icons/fa';

type IconType = 'car' | 'membership' | 'money' | 'star';
type Item = {
	icon: IconType;
	title: string | JSX.Element;
	description: string;
};

const iconMap: Record<IconType, JSX.Element> = {
	car: <FaCarSide />,
	membership: <FaAddressCard />,
	money: <FaCommentsDollar />,
	star: <FaStar />,
};

const SubHero: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = () => {
			try {
				setIsLoading(false);
			} catch (err) {
				console.error('Error', err);
			}
		};

		fetchPosts();
	}, []);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	const items: Item[] = [
		{
			icon: 'star' as IconType,
			title: (
				<>
					4.6 Rating on{' '}
					<a
						href="https://udisc.com/courses/glenaladale-disc-golf-course-gl5b"
						className="underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						UDisc
					</a>
				</>
			),
			description:
				'In 2024, UDisc users ranked us the 3rd best course on PEI!',
		},
		{
			icon: 'money' as IconType,
			title: '$10 Per Day',
			description: 'Play all day for $10. Free for kids (16 and under).',
		},
		{
			icon: 'membership' as IconType,
			title: 'Memberships Available',
			description:
				"Play all year for $150. Easy to get your money's worth!",
		},
		{
			icon: 'car' as IconType,
			title: 'Convenienty Located',
			description:
				"We're only 20 mins from Charlottetown on the highway.",
		},
	];

	return (
		<section className="bg-green-primary p-5 sm:!p-10 pt-0 flex flex-col items-center justify-center flex-wrap">
			<div className="flex flex-wrap items-center justify-center">
				<div className="max-w-screen-xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{items.map((item, index) => {
							const isEven = (index + 1) % 2;
							const backgroundColor = isEven
								? 'bg-green-900'
								: 'bg-yellow-primary';
							const textColor = isEven
								? 'text-yellow-primary'
								: 'text-brown-primary';
							const boxShadow = isEven
								? 'shadow-yellow-offset'
								: 'shadow-brown-offset';
							return (
								<div
									className={`${backgroundColor} p-6 ${boxShadow} text-center`}
									key={
										typeof item.title === 'string'
											? item.title
											: String(item.title)
									}
								>
									<div className="flex justify-center mb-4">
										<span
											className={`text-4xl ${textColor}`}
										>
											{iconMap[item.icon]}
										</span>
									</div>
									<h3
										className={`text-xl font-sans ${textColor}`}
									>
										{item.title}
									</h3>
									<p
										className={`mt-4 font-serif ${textColor}`}
									>
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SubHero;
