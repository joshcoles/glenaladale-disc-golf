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
		<section className="bg-green-primary p-5 pt-0 flex flex-col items-center justify-center flex-wrap">
			<h4 className="text-2xl bold font-headline text-white mb-6">
				Useful Links
			</h4>
			<div className="flex flex-wrap items-center justify-center">
				{linkItems.map((linkItem, index) => {
					return (
						<a
							key={index}
							className={`bg-yellow-primary text-brown-primary shadow-button-primary p-4 my-1 mr-2 hover:bg-yellow-500 font-headline`}
							href={linkItem.url}
						>
							{linkItem.text}
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default LinkTree;
