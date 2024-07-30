import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const NavBar: React.FC = () => {
	return (
		<>
			<MobileNav />
			<DesktopNav />
		</>
	);
};

export default NavBar;
