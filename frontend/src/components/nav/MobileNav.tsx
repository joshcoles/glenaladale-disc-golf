import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { NavProps } from '../../types';

const MobileNav: React.FC<NavProps> = ({ primary }) => {
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
				{primary.map((link, index) => (
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
