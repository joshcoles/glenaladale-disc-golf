import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/nav/NavBar';

const MainLayout: React.FC = () => {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<div className="flex-grow flex flex-col">
					<NavBar />
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
