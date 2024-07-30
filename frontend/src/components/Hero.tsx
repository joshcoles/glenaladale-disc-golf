import React, { useState } from 'react';

const Hero: React.FC = () => {
	return (
		<>
			<main className="relative bg-[url('../landing-background.jpg')] bg-cover bg-center h-screen flex-grow mx-auto px-8 sm:px-12 lg:px-16 text-center flex items-center">
				<div className="absolute inset-0 bg-black bg-opacity-40"></div>
				<h2 className="z-10 text-6xl leading-tight font-extrabold text-green-500 sm:text-8xl text-shadow-white">
					Welcome to Glenaladale Disc Golf
				</h2>
			</main>
		</>
	);
};

export default Hero;
