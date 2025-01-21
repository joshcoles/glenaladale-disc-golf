import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface LoadingSpinnerProps {
	spinnerColor?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
	spinnerColor = 'text-yellow-primary',
}) => {
	return (
		<div className="flex flex-1 items-center justify-center">
			<FaSpinner className={`text-4xl ${spinnerColor} animate-spin`} />
		</div>
	);
};

export default LoadingSpinner;
