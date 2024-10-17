import React from 'react';

const FlyThroughVideo: React.FC = () => {
	return (
		<section className="bg-green-primary py-16 px-6">
			<div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
				<div className="w-full md:min-w-[400px] max-w-[800px]">
					<div className="relative w-full overflow-hidden pt-[56.25%]">
						<iframe
							className="absolute top-0 left-0 w-full h-full border-none"
							src="https://www.youtube.com/embed/iAbkTrWU1lQ?si=NYjn9c695CCOvU7P"
							allowFullScreen
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						></iframe>
					</div>
				</div>
				<div>
					<h2 className="text-3xl font-bold text-beige-200 mb-4">
						Explore Our Course
					</h2>
					<p className="text-lg text-beige-primary">
						Take a fly-through of our course as it was in the autumn
						of 2023. At this point in time we had recently opened
						our red and blue layouts and had spent much of the year
						cleaning up from hurricane Fiona the year before. Don't
						be surprised if the course looks better when you arrive,
						as we are constantly making improvements!
					</p>
				</div>
			</div>
		</section>
	);
};

export default FlyThroughVideo;
