import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<FaSpinner className="text-4xl text-yellow-primary animate-spin" />
		</div>
	);
};

export default LoadingSpinner;
