import React from 'react';
import Carousel from './util/Carousel';

const Hero: React.FC = () => {
	return (
		<div className="relative h-[400px] sm:h-[500px]">
			<Carousel navigable={false} autoPlay={true} />
			<main className="absolute inset-0 flex flex-col justify-center items-center px-5 h-full text-center sm:px-5 top-0 bottom-0 left-0 right-0">
				<div className="absolute inset-0 bg-gray-800 !bg-opacity-50 mix-blend-multiply"></div>
				<h1 className="font-headline capitalize z-10 text-5xl font-extrabold text-yellow-primary sm:text-7xl md:text-8xl text-shadow-brown leading-none">
					GLENALADALE
					<br />
					DISC GOLF
				</h1>
				<h2 className="bg-yellow-primary text-brown-primary z-10 px-2 my-4">
					Prince Edward Island
				</h2>
			</main>
		</div>
	);
};

export default Hero;
