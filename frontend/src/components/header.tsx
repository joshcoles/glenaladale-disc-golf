import React from 'react';

const Header: React.FC = () => {
	return (
		<header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
			<nav className="container mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">Golf Course</div>
				<div>
					<a href="#home" className="mx-4 hover:text-gray-400">
						Home
					</a>
					<a href="#about" className="mx-4 hover:text-gray-400">
						About
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
