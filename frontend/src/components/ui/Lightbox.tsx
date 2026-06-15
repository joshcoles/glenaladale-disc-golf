import React, { useEffect, useCallback } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface Props {
  isOpen: boolean;
  images: (string | null)[];
  currentIndex: number;
  loading?: boolean;
  label?: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<Props> = ({
  isOpen,
  images,
  currentIndex,
  loading = false,
  label,
  onClose,
  onPrev,
  onNext,
}) => {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const src = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-yellow-primary transition-colors z-10 p-2"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-primary transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-primary transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div
        className="max-w-5xl max-h-[90vh] w-full mx-8 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {loading ? (
          <LoadingSpinner size="lg" light />
        ) : src ? (
          <img
            src={src}
            alt={label ?? `Image ${currentIndex + 1}`}
            className="max-h-[85vh] max-w-full object-contain"
          />
        ) : null}

        {label && (
          <p className="mt-3 font-sans text-sm text-white/70 tracking-wider">{label}</p>
        )}

        {images.length > 1 && (
          <p className="mt-2 font-sans text-xs text-white/50">
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
