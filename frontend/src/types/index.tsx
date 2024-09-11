import { ReactNode } from 'react';

export interface Link {
	text: string;
	url: string;
}

export type Links = Link[];

export interface LightBoxProps {
	isOpen: boolean;
	onClose: () => void;
	onNavigate: (e: MouseEvent) => void;
	content: ReactNode;
}

export interface NavItem {
	text: string;
	path: string;
}

export type NavItems = NavItem[];

export interface NavProps {
	primary: NavItems;
	secondary?: NavItems;
}

export interface FooterSectionProps {
	heading: string;
	children: ReactNode;
}

export interface Review {
	user: string;
	coursesPlayed: number;
	stars: number;
	description: string;
}

export type ReviewProps = Review;

export interface StarRating {
	stars: number;
	maxStars?: number;
}

export type StarRatingProps = StarRating & {
	className: string;
};

export type AboutPageSections = 'about' | 'courseMaps' | 'coursePhotos';
