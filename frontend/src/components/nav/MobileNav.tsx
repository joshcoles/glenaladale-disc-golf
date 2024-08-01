import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MobileNav: React.FC = () => {
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

	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	return (
		<>
			<nav className="sm:hidden relative flex justify-center py-3 bg-green-600">
				<NavLink to="/">
					<img className="h-10" src="./glenaladale-icon.png" />
				</NavLink>
				<button
					className="absolute right-5 top-1 bottom-1"
					id="menu-toggle"
					onClick={() => setMobileMenuOpen((prevState) => !prevState)}
				>
					<FaBars className="hamburger text-yellow-primary text-lg" />
				</button>
			</nav>
			<div
				id="mobile-menu"
				className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}
			>
				{navItems.primary.map((link, index) => (
					<NavLink
						className="bg-yellow-primary p-4 flex justify-center hover:bg-yellow-500 font-accent"
						key={index}
						to={link.path}
						onClick={() =>
							setMobileMenuOpen((prevState) => !prevState)
						}
					>
						{link.text}
					</NavLink>
				))}
			</div>
		</>
	);
};

export default MobileNav;
