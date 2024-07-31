import React from 'react';

const Hero: React.FC = () => {
	return (
		<>
			<main className="relative bg-[url('../landing-background.jpg')] bg-cover bg-center flex-grow flex flex-col justify-center items-center h-96 text-center md:h-[600px]">
				<div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
				<h1 className="z-10 text-6xl font-extrabold text-yellow-primary sm:text-8xl text-shadow-green leading-none">
					Glenaladale Disc Golf
				</h1>
				<h2 className="bg-yellow-primary text-brown-primary z-10 px-2 my-4">
					Prince Edward Island
				</h2>
			</main>
		</>
	);
};

export default Hero;
