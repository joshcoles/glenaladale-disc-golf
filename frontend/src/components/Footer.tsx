import React, { ReactNode } from 'react';
import { FaCopyright } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FooterSectionProps } from '../types';

const ContentSection: React.FC<FooterSectionProps> = ({
	heading,
	children,
}) => {
	return (
		<div className="flex flex-col mb-3 text-sm">
			<h6 className="font-subheadline font-bold">{heading}</h6>
			<div className="flex flex-col">{children}</div>
		</div>
	);
};

const Footer: React.FC = () => {
	return (
		<>
			<footer className="flex flex-col text-center">
				<div className="bg-brown-primary w-full flex justify-center">
					<div className="py-4 px-4 sm:px-12 lg:px-16 text-beige-primary sm:flex sm:justify-around w-full max-w-[800px]">
						<ContentSection heading="Contact Us">
							<span id="email">info@glenaladalediscgolf.com</span>
							<span id="phone">(902) 330-7666</span>
						</ContentSection>
						<ContentSection heading="Address">
							<span>
								257 Blooming Point Rd <br /> Mount Stewart, PE
								C0A 1T0
							</span>
						</ContentSection>
						<ContentSection heading="Socials">
							<div className="flex justify-center">
								<a className="mr-1" href="">
									<FaFacebook />
								</a>
								<a href="">
									<FaInstagram />
								</a>
							</div>
						</ContentSection>
					</div>
				</div>
				<div className="bg-beige-primary">
					<span className="text-center text-sm py-2 text-brown-primary flex items-center justify-center">
						<FaCopyright className="mr-1" />
						{new Date().getFullYear()} Glenaladale Disc Golf <br />
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
