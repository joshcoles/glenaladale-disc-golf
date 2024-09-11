import React from 'react';
import { LightBoxProps } from '../types/index';
import { FaWindowClose, FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const LightBox: React.FC<LightBoxProps> = ({
	isOpen,
	onClose,
	onNavigate,
	content,
}) => {
	if (!isOpen) {
		return;
	}

	return (
		<div
			className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center align-middle z-50"
			onClick={onClose}
		>
			<div
				className="flex justify-center items-center content p-5 rounded-xl relative h-[80vh] top-1/2 -translate-y-1/2 w-1/2"
				onClick={(e) => e.stopPropagation()}
			>
				{content}
				<button
					className={`absolute w-8 h-8 flex items-center justify-center p-0 top-5 -right-5 text-2xl bold cursor-pointer`}
					onClick={onClose}
				>
					<FaWindowClose className="text-yellow-primary hover:text-yellow-500"></FaWindowClose>
				</button>
				<button
					data-direction="back"
					onClick={onNavigate}
					className={`absolute w-8 h-8 flex items-center justify-center p-0 top-50% -left-5 text-2xl bold cursor-pointer`}
				>
					<FaAngleLeft className="text-yellow-primary hover:text-yellow-500 text-8xl"></FaAngleLeft>
				</button>
				<button
					data-direction="forward"
					onClick={onNavigate}
					className={`absolute w-8 h-8 flex items-center justify-center p-0 top-50% -right-5 text-2xl bold cursor-pointer`}
				>
					<FaAngleRight className="text-yellow-primary hover:text-yellow-500 text-8xl"></FaAngleRight>
				</button>
			</div>
		</div>
	);
};

export default LightBox;
