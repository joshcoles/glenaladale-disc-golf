import React, { useState, useEffect } from 'react';
import { Links } from '../types';
import LinksData from '../data/links.json';

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

	return (
		<section className="bg-green-primary p-5 pt-0 flex flex-col items-center justify-center flex-wrap">
			<div className="flex flex-wrap items-center justify-center">
				{/* {linkItems.map((linkItem, index) => {
					return (
						<a
							key={index}
							className={`bg-yellow-primary text-brown-primary shadow-button-primary p-4 my-1 mr-2 hover:bg-yellow-500 font-headline`}
							href={linkItem.url}
						>
							{linkItem.text}
						</a>
					);
				})} */}
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
						{/* Feature 1 */}
						<div className="bg-green-900 p-6 rounded-lg shadow-lg text-center">
							<div className="flex justify-center mb-4">
								{/* Icon for Feature 1 (replace with an actual icon) */}
								<span className="text-4xl text-yellow-primary">
									⭐
								</span>
							</div>
							<h3 className="text-xl font-semibold text-yellow-primary">
								Feature One
							</h3>
							<p className="mt-4 text-yellow-primary">
								Brief description of the first feature. Explain
								its key benefit or functionality here.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="bg-brown-950 p-6 rounded-lg shadow-lg text-center">
							<div className="flex justify-center mb-4">
								{/* Icon for Feature 2 (replace with an actual icon) */}
								<span className="text-4xl text-indigo-600">
									🔥
								</span>
							</div>
							<h3 className="text-xl font-semibold text-yellow-primary">
								Feature Two
							</h3>
							<p className="mt-4 text-yellow-primary">
								Brief description of the second feature. Explain
								its key benefit or functionality here.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="bg-green-900 p-6 rounded-lg shadow-lg text-center">
							<div className="flex justify-center mb-4">
								{/* Icon for Feature 3 (replace with an actual icon) */}
								<span className="text-4xl text-indigo-600">
									🚀
								</span>
							</div>
							<h3 className="text-xl font-semibold text-yellow-primary">
								Feature Three
							</h3>
							<p className="mt-4 text-yellow-primary">
								Brief description of the third feature. Explain
								its key benefit or functionality here.
							</p>
						</div>

						{/* Feature 4 */}
						<div className="bg-brown-950 p-6 rounded-lg shadow-lg text-center">
							<div className="flex justify-center mb-4">
								{/* Icon for Feature 4 (replace with an actual icon) */}
								<span className="text-4xl text-indigo-600">
									💡
								</span>
							</div>
							<h3 className="text-xl font-semibold text-yellow-primary">
								Feature Four
							</h3>
							<p className="mt-4 text-yellow-primary">
								Brief description of the fourth feature. Explain
								its key benefit or functionality here.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SubHero;
