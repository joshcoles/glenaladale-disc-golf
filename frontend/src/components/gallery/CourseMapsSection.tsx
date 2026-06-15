import React, { useEffect, useState, useCallback } from 'react';
import { storage, ref, getDownloadURL } from '../../lib/firebase';
import Lightbox from '../ui/Lightbox';
import LoadingSpinner from '../ui/LoadingSpinner';

const HOLE_COUNT = 18;

const CourseMapsSection: React.FC = () => {
  const [thumbnails, setThumbnails] = useState<(string | null)[]>(Array(HOLE_COUNT).fill(null));
  const [fullImages, setFullImages] = useState<(string | null)[]>(Array(HOLE_COUNT).fill(null));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxLoading, setLightboxLoading] = useState(false);
  const [meta, setMeta] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadMeta = async () => {
      try {
        const res = await fetch('/gallery-metadata.json');
        setMeta(((await res.json()).maps) ?? {});
      } catch {
        // metadata.json missing or unreadable — descriptions will be absent
      }
    };
    loadMeta();

    const loadThumbnails = async () => {
      for (let i = 1; i <= HOLE_COUNT; i++) {
        try {
          const url = await getDownloadURL(ref(storage, `course-maps/hole-${i}-thumbnail.webp`));
          setThumbnails((prev) => {
            const next = [...prev];
            next[i - 1] = url;
            return next;
          });
        } catch {
          // thumbnail not yet uploaded
        }
      }
    };
    loadThumbnails();
  }, []);

  const loadFullImage = useCallback(
    async (index: number) => {
      if (fullImages[index]) return;
      setLightboxLoading(true);
      try {
        const url = await getDownloadURL(ref(storage, `course-maps/hole-${index + 1}.webp`));
        setFullImages((prev) => {
          const next = [...prev];
          next[index] = url;
          return next;
        });
      } catch {
        // not uploaded yet
      } finally {
        setLightboxLoading(false);
      }
    },
    [fullImages],
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    loadFullImage(index);
  };

  const handlePrev = () => {
    const next = (currentIndex - 1 + HOLE_COUNT) % HOLE_COUNT;
    setCurrentIndex(next);
    loadFullImage(next);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % HOLE_COUNT;
    setCurrentIndex(next);
    loadFullImage(next);
  };

  return (
    <>
      <Lightbox
        isOpen={lightboxOpen}
        images={fullImages}
        currentIndex={currentIndex}
        loading={lightboxLoading}
        label={`Hole ${currentIndex + 1} Course Map${meta[String(currentIndex + 1)] ? `. ${meta[String(currentIndex + 1)]}` : ''}`}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {thumbnails.map((url, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-[3/4] bg-green-900 flex items-center justify-center overflow-hidden group hover:ring-2 hover:ring-yellow-primary transition-all"
            aria-label={`View Hole ${index + 1} course map`}
          >
            {url ? (
              <>
                <img
                  src={url}
                  alt={`Hole ${index + 1} course map`}
                  className="w-[calc(100%-16px)] h-[calc(100%-16px)] object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/20 transition-colors" />
              </>
            ) : (
              <LoadingSpinner light />
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default CourseMapsSection;
