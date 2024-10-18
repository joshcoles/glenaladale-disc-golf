import React, { useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { NavProps } from '../../types';

const NavBar: React.FC = () => {
	const [navItems] = useState<NavProps>({
		primary: [
			{ text: 'Home', path: '/', external: false },
			{ text: 'About', path: '/about', external: false },
			{ text: 'FAQ', path: '/faq', external: false },
			{ text: 'Gallery', path: '/gallery', external: false },
			{ text: 'Reviews', path: '/reviews', external: false },
			{
				text: 'UDisc',
				path: 'https://udisc.com/courses/glenaladale-disc-golf-course-gl5b',
				external: true,
			},
			{
				text: 'Our Facebook Community',
				path: 'https://www.facebook.com/groups/1189083618627541',
				external: true,
			},
			{ text: 'Contact', path: '/contact', external: false },
		],
		secondary: [],
	});

	return (
		<>
			<MobileNav primary={navItems.primary} />
			<DesktopNav primary={navItems.primary} />
		</>
	);
};

export default NavBar;
