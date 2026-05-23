import React, { useState, useEffect } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../../lib/firebase';
import Lightbox from '../ui/Lightbox';
import LoadingSpinner from '../ui/LoadingSpinner';

const MiscPhotosSection: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [status, setStatus] = useState<'loading' | 'empty' | 'ready'>('loading');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await listAll(ref(storage, 'misc/'));
        const sorted = [...result.items].sort((a, b) => a.name.localeCompare(b.name));
        if (sorted.length === 0) {
          setStatus('empty');
          return;
        }
        const urls = await Promise.all(sorted.map((item) => getDownloadURL(item)));
        setPhotos(urls);
        setStatus('ready');
      } catch {
        setStatus('empty');
      }
    };
    load();
  }, []);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center py-24">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'empty') {
    return (
      <p className="font-sans font-light text-sm text-gray-400 tracking-wide py-12 text-center">
        No photos yet — check back soon.
      </p>
    );
  }

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          isOpen
          images={photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {photos.map((url, index) => (
          <button
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="relative aspect-square bg-green-900 overflow-hidden group hover:ring-2 hover:ring-yellow-primary transition-all"
            aria-label={`View photo ${index + 1}`}
          >
            <img
              src={url}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/20 transition-colors" />
          </button>
        ))}
      </div>
    </>
  );
};

export default MiscPhotosSection;
