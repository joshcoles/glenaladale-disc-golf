import React, { useState, useEffect } from 'react';
import { Links } from '../types';
import LinksData from '../data/links.json';

const LinkTree: React.FC = () => {
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

	return (
		<section
			className={`bg-green-primary p-5 flex items-center justify-center flex-wrap`}
		>
			{linkItems.map((linkItem, index) => {
				return (
					<a
						key={index}
						className={`bg-yellow-primary text-brown-primary shadow-button-primary p-4 my-1 mr-2 hover:bg-yellow-500`}
						href={linkItem.url}
					>
						{linkItem.text}
					</a>
				);
			})}
		</section>
	);
};

export default LinkTree;
