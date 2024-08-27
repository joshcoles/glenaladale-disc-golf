import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/nav/NavBar';

const MainLayout: React.FC = () => {
	return (
		<>
			<NavBar />
			<div className="min-h-screen flex flex-col">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
