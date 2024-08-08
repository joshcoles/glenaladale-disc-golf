import { ReactNode } from 'react';
export interface Link {
	text: string;
	url: string;
}

export type Links = Link[];

export interface LightBoxProps {
	isOpen: boolean;
	onClose: () => void;
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
