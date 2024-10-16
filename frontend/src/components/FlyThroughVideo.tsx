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
					<h2 className="text-3xl font-bold text-white mb-4">
						Our Course Video
					</h2>
					<p className="text-lg text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam scelerisque nulla nec nisi semper, vitae varius
						est lacinia. Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenean ut interdum libero.
					</p>
				</div>
			</div>
		</section>
	);
};

export default FlyThroughVideo;
