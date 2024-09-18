import React from 'react';

const FlyThroughVideo: React.FC = () => {
	return (
		<section className="bg-green-primary p-5 flex flex-col items-center justify-center">
			<div className="w-full min-w-[400px] max-w-[800px]">
				<div className="relative w-full overflow-hidden pt-[56.25%]">
					<iframe
						className="absolute top-0 left-0 w-full h-full border-none"
						src="https://www.youtube.com/embed/iAbkTrWU1lQ?si=NYjn9c695CCOvU7P"
						allowFullScreen
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default FlyThroughVideo;
