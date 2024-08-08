import React, { useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { NavProps } from '../../types';

const NavBar: React.FC = () => {
	const [navItems] = useState<NavProps>({
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
			<MobileNav primary={navItems.primary} />
			<DesktopNav primary={navItems.primary} />
		</>
	);
};

export default NavBar;
