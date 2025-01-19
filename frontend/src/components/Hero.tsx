import React from 'react';
import Carousel from './util/Carousel';

const Hero: React.FC = () => {
	return (
		<div className="relative h-[400px] sm:h-[500px]">
			<Carousel navigable={false} autoPlay={true} />
			<main className="absolute inset-0 flex flex-col justify-center items-center px-5 md:px-12 h-full text-center top-0 bottom-0 left-0 right-0">
				<div className="absolute inset-0 mask-fade-right bg-brown-primary mix-blend-multiply"></div>
				<div className="max-w-screen-xl w-full flex flex-col justify-center text-center items-start">
					<div className="relative flex flex-col justify-start max-w-[600px]">
						<h1 className="z-10 font-headline font-extrabold capitalize  text-yellow-primary text-4xl sm:text-7xl text-shadow-brown leading-none">
							GLENALADALE
							<br />
							DISC GOLF
						</h1>
						<h2 className="z-10 font-serif bg-yellow-primary shadow-brown-offset text-brown-primary p-2 my-4 text-sm md:text-lg">
							A wooded disc golf course 20 minutes north of
							Charlottetown, Prince Edward Island.
						</h2>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Hero;
