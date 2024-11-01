import React from 'react';

const Overview: React.FC = () => {
	return (
		<section className="bg-yellow-primary py-16 px-6">
			<div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
				<div>
					<h2 className="text-3xl font-sans text-gray-800 mb-4">
						Welcome to Glenaladale
					</h2>
					<p className="font-serif text-lg text-gray-700 mb-6">
						Nestled in the historic Glenaladale Estate, our disc
						golf course offers players a unique blend of nature,
						history, and challenging gameplay. Established in 2022,
						the course has quickly become a favorite destination for
						disc golfers of all skill levels. Surrounded by scenic
						woodlands and featuring a variety of hole layouts,
						Glenaladale Disc Golf provides an unforgettable
						experience in the heart of Prince Edward Island. Whether
						you're a local or a visitor, join us for a round and
						enjoy the beauty of PEI while improving your game.
					</p>
				</div>
				<div>
					<img
						src="/4-overhead.webp"
						alt="Glenaladale Disc Golf Course"
						className="w-full h-auto rounded-lg shadow-md"
					/>
				</div>
			</div>
		</section>
	);
};

export default Overview;
