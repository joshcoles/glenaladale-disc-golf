import React from 'react';
import Carousel from './util/Carousel';

const Hero: React.FC = () => {
	return (
		<div className="relative h-[400px] sm:h-[500px]">
			<Carousel navigable={false} autoPlay={true} />
			<main className="absolute inset-0 flex flex-col justify-center items-center md:!items-start px-5 md:px-12 h-full text-center top-0 bottom-0 left-0 right-0">
				<div className="absolute inset-0 mask-fade-right bg-brown-primary mix-blend-multiply"></div>
				<div className="max-w-[60%] flex flex-col justify-center text-center items-center">
					<h1 className="font-headline capitalize z-10 text-5xl font-extrabold text-yellow-primary sm:text-7xl md:text-7xl text-shadow-brown leading-none">
						GLENALADALE
						<br />
						DISC GOLF
					</h1>
					<h2 className="bg-yellow-primary shadow-button-primary text-brown-primary z-10 p-2 max-w-[60%] my-4 text-sm md:text-lg">
						A premium wooded disc golf course 20 minutes north of
						Charlottetown, Prince Edward Island.
					</h2>
				</div>
			</main>
		</div>
	);
};

export default Hero;
