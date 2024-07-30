import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
// import MobileNav from '../components/MobileNav';
// import DesktopNav from '../components/DesktopNav';
import NavBar from '../components/nav/NavBar';

const MainLayout: React.FC = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
