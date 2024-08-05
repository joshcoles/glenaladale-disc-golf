import React from 'react';
import { LightBoxProps } from '../types/index';

const LightBox: React.FC<LightBoxProps> = ({ isOpen, onClose, content }) => {
	if (!isOpen) {
		return;
	}

	return (
		<div
			className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center align-middle z-50"
			onClick={onClose}
		>
			<div
				className="content bg-white p-5 rounded-xl relative h-[80vh] top-1/2 -translate-y-1/2 w-1/2"
				onClick={(e) => e.stopPropagation()}
			>
				{content}
				<button
					className="absolute top-3 right-3 bg-none border-none text-2xl cursor-pointer"
					onClick={onClose}
				>
					×
				</button>
			</div>
		</div>
	);
};

export default LightBox;
