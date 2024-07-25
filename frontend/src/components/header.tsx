import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const [navItems] = useState({
		primary: [
			{ text: 'Home', path: '/' },
			{ text: 'About', path: '/about' },
			{ text: 'Reviews', path: '/reviews' },
			{ text: 'Contact', path: '/contact' },
		],
		secondary: [
			{ text: 'Login', path: '/login' },
			{ text: 'Settings', path: '/settings' },
		],
	});

	return (
		<>
			<header className="header py-5 px-0 bg-green-600">
				<div className="nav-container flex justify-between items-center w-11/12 my-0 mx-auto">
					<img className="h-20 w-auto" src="./glenaladale-icon.png" />
					<nav className="nav flex flex-grow font-accent text-white">
						<ul className="group-primary flex my-0 mx-auto">
							{navItems.primary.map((item) => (
								<li key={item.path} className="nav-link mx-3">
									<Link to={item.path}>{item.text}</Link>
								</li>
							))}
						</ul>
					</nav>
					<span className="hamburger-menu hidden">menu</span>
				</div>
			</header>
		</>
	);
};

export default Header;
