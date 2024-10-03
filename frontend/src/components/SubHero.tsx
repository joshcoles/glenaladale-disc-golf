import React, { useState, useEffect } from 'react';
import { Links } from '../types';
import LinksData from '../data/links.json';
import {
	FaStar,
	FaCommentsDollar,
	FaAddressCard,
	FaCarSide,
} from 'react-icons/fa';

type IconType = 'car' | 'membership' | 'money' | 'star';

const iconMap: Record<IconType, JSX.Element> = {
	car: <FaCarSide />,
	membership: <FaAddressCard />,
	money: <FaCommentsDollar />,
	star: <FaStar />,
};

const SubHero: React.FC = () => {
	const [linkItems, setLinkItems] = useState<Links>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = () => {
			try {
				setLinkItems(LinksData);
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

	const items = [
		{
			icon: 'star' as IconType,
			title: '4.6 Rating on UDisc',
			description:
				'UDisc users have ranked us the 3rd best course on PEI!',
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
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{items.map((item, index) => {
							const isEven = (index + 1) % 2;
							const backgroundColor = isEven
								? 'bg-green-900'
								: 'bg-yellow-primary';
							const textColor = isEven
								? 'text-yellow-primary'
								: 'text-brown-primary';
							return (
								<div
									className={`${backgroundColor} p-6 shadow-lg text-center`}
									key={item.title}
								>
									<div className="flex justify-center mb-4">
										<span
											className={`text-4xl ${textColor}`}
										>
											{iconMap[item.icon]}
										</span>
									</div>
									<h3
										className={`text-xl font-semibold ${textColor}`}
									>
										{item.title}
									</h3>
									<p className={`mt-4 ${textColor}`}>
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
