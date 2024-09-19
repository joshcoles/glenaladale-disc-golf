import React, { useEffect, useCallback } from 'react';
import { LightBoxProps } from '../../types/index';
import { FaWindowClose, FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const LightBox: React.FC<LightBoxProps> = ({
	isOpen,
	onClose,
	onNavigate,
	content,
}) => {
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				onNavigate('back');
			} else if (e.key === 'ArrowRight') {
				onNavigate('forward');
			} else if (e.key === 'Escape') {
				onClose();
			}
		},
		[onNavigate, onClose],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', handleKeyDown);
		}
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, handleKeyDown]);

	if (!isOpen) {
		return null;
	}

	return (
		<div
			className="overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-start z-50"
			onClick={onClose}
		>
			<div
				className="flex justify-center items-center content p-5 rounded-xl relative h-[80vh] top-1/2 -translate-y-1/2 w-full sm:w-1/2"
				onClick={(e) => e.stopPropagation()}
			>
				{content}
				<button
					className={`absolute w-8 h-8 flex items-center justify-center p-0 top-5 right-4 sm:-right-5 text-2xl bold cursor-pointer`}
					onClick={onClose}
				>
					<FaWindowClose className="text-yellow-primary hover:text-yellow-500"></FaWindowClose>
				</button>
				<button
					onClick={() => onNavigate('back')}
					className={`absolute w-8 h-8 flex items-center justify-center p-0 top-full sm:top-1/2 left-4 sm:-left-5 text-2xl bold cursor-pointer`}
				>
					<FaAngleLeft className="text-yellow-primary hover:text-yellow-500 text-8xl"></FaAngleLeft>
				</button>
				<button
					data-direction="forward"
					onClick={() => onNavigate('forward')}
					className={`absolute w-8 h-8 flex items-center justify-center p-0 top-full sm:top-1/2 right-4 sm:-right-5 text-2xl bold cursor-pointer`}
				>
					<FaAngleRight className="text-yellow-primary hover:text-yellow-500 text-8xl"></FaAngleRight>
				</button>
			</div>
		</div>
	);
};

export default LightBox;
