import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavProps } from '../../types';

const DesktopNav: React.FC<NavProps> = ({ primary }) => {
	return (
		<>
			<header className="hidden sm:flex py-5 px-0 bg-green-primary">
				<div className="flex justify-between items-center w-11/12 my-0 mx-auto">
					<NavLink to="/">
						<img
							className="h-20 w-auto"
							src="./glenaladale-icon.png"
						/>
					</NavLink>
					<nav className="nav flex flex-grow font-headline text-white">
						<ul className="group-primary flex my-0 mx-auto">
							{primary.map((item) => (
								<li key={item.path} className="mx-3">
									<NavLink
										className={({ isActive }) =>
											`p-4 ${isActive ? `bg-yellow-primary text-brown-primary shadow-button-primary hover:bg-yellow-500` : 'hover:bg-green-700'}`
										}
										to={item.path}
									>
										{item.text}
									</NavLink>
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

export default DesktopNav;
