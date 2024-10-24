import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavProps } from '../../types';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const DesktopNav: React.FC<NavProps> = ({ primary }) => {
	return (
		<>
			<header className="hidden md:!flex py-5 px-0 bg-green-primary">
				<div className="flex justify-between items-center w-11/12 my-0 mx-auto">
					<NavLink to="/">
						<img
							className="h-10 w-10 min-w-10 lg:!h-20 lg:w-20 lg:min-w-20"
							src="./glenaladale-icon.png"
						/>
					</NavLink>
					<nav className="nav flex flex-grow font-headline text-white">
						<ul className="group-primary flex my-0 mx-auto">
							{primary.map((item) => (
								<li
									key={item.path}
									className="mx-1 lg:mx-2 flex items-center"
								>
									<NavLink
										className={({ isActive }) =>
											`p-1 lg:p-4 ${isActive ? `bg-yellow-primary text-brown-primary shadow-button-primary hover:bg-yellow-500` : 'hover:bg-green-700'} flex items-center text-nowrap`
										}
										to={item.path}
									>
										{item.text}{' '}
										{item.external ? (
											<FaArrowUpRightFromSquare className="ml-1 text-xs mb-2" />
										) : (
											''
										)}
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
