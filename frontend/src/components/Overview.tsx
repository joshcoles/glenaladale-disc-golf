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
						Nestled in the woods of the historic Glenaladale Estate,
						our disc golf course offers visitors a unique blend of
						nature, history, and challenging wooded disc golf.
					</p>
					<p className="font-serif text-lg text-gray-700 mb-6">
						Established in 2022, the course has quickly become a
						favorite destination for disc golfers on PEI. With holes
						ranging from technical, short par 3s to long, "bomber"
						par 5s, the course has developed a reputation as a
						"bomber" course with the ability to throw drivers along
						wooded fairways.
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
