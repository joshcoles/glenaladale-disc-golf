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
