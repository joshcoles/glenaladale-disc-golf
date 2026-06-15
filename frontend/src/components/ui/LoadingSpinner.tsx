import React from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  light?: boolean;
}

const sizes = { sm: 'h-5 w-5', md: 'h-8 w-8', lg: 'h-12 w-12' };

const LoadingSpinner: React.FC<Props> = ({ size = 'md', light = false }) => (
  <div
    className={`${sizes[size]} animate-spin rounded-full border-2 border-transparent ${
      light ? 'border-t-white border-r-white' : 'border-t-green-primary border-r-green-primary'
    }`}
    role="status"
    aria-label="Loading"
  />
);

export default LoadingSpinner;
