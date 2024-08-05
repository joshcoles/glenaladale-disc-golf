import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
	return (
		<>
			<footer className="bg-yellow-primary">
				<div className="max-w-7xl mx-auto py-12 px-8 sm:px-12 lg:px-16">
					<span className="text-center text-2l text-brown-primary flex items-center justify-center">
						<FaCopyright className="mr-1" />
						{new Date().getFullYear()} Glenaladale Disc Golf, Inc.
						All rights reserved.
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
