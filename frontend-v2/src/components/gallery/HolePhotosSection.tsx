import React, { useState, useEffect } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../../lib/firebase';
import { holes } from '../../data/holes';
import Lightbox from '../ui/Lightbox';
import LoadingSpinner from '../ui/LoadingSpinner';

interface HoleState {
  status: 'loading' | 'empty' | 'ready';
  photos: string[];
}

const HolePhotosSection: React.FC = () => {
  const [holeStates, setHoleStates] = useState<Record<number, HoleState>>({});
  const [lightbox, setLightbox] = useState<{ hole: number; index: number } | null>(null);
  const [meta, setMeta] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadMeta = async () => {
      try {
        const res = await fetch('/gallery-metadata.json');
        setMeta(((await res.json()).holes) ?? {});
      } catch {
        // metadata.json missing or unreadable — descriptions will be absent
      }
    };

    const loadHole = async (holeNumber: number) => {
      setHoleStates((prev) => ({ ...prev, [holeNumber]: { status: 'loading', photos: [] } }));
      try {
        const folderRef = ref(storage, `holes/hole-${String(holeNumber).padStart(2, '0')}/`);
        const result = await listAll(folderRef);
        const sortedItems = [...result.items]
          .filter((item) => item.name.toLowerCase().endsWith('.jpg'))
          .sort((a, b) => a.name.localeCompare(b.name));

        if (sortedItems.length === 0) {
          setHoleStates((prev) => ({ ...prev, [holeNumber]: { status: 'empty', photos: [] } }));
          return;
        }

        const urls = await Promise.all(sortedItems.map((item) => getDownloadURL(item)));
        setHoleStates((prev) => ({ ...prev, [holeNumber]: { status: 'ready', photos: urls } }));
      } catch {
        setHoleStates((prev) => ({ ...prev, [holeNumber]: { status: 'empty', photos: [] } }));
      }
    };

    loadMeta();
    holes.forEach((holeNumber) => loadHole(holeNumber));
  }, []);

  const activeLightboxState = lightbox ? holeStates[lightbox.hole] : null;

  const handlePrev = () => {
    if (!lightbox || !activeLightboxState) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + activeLightboxState.photos.length) % activeLightboxState.photos.length,
    });
  };

  const handleNext = () => {
    if (!lightbox || !activeLightboxState) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % activeLightboxState.photos.length,
    });
  };

  return (
    <>
      {lightbox && activeLightboxState?.status === 'ready' && (
        <Lightbox
          isOpen
          images={activeLightboxState.photos}
          currentIndex={lightbox.index}
          label={`Hole ${lightbox.hole}${meta[String(lightbox.hole)] ? `. ${meta[String(lightbox.hole)]}` : ''}`}
          onClose={() => setLightbox(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {holes.map((holeNumber) => {
          const state = holeStates[holeNumber];
          const isLoading = !state || state.status === 'loading';
          const isEmpty = state?.status === 'empty';
          const isReady = state?.status === 'ready';

          return (
            <button
              key={holeNumber}
              onClick={() => isReady && setLightbox({ hole: holeNumber, index: 0 })}
              className={`relative aspect-square flex flex-col items-center justify-center overflow-hidden group transition-all ${
                isEmpty
                  ? 'bg-green-900/40 cursor-default'
                  : isReady
                  ? 'bg-green-900 hover:ring-2 hover:ring-yellow-primary cursor-pointer'
                  : 'bg-green-900 cursor-default'
              }`}
              aria-label={`View photos for Hole ${holeNumber}`}
            >
              {isReady && state.photos[0] && (
                <>
                  <img
                    src={state.photos[0]}
                    alt={`Hole ${holeNumber}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-950/30 group-hover:bg-green-950/10 transition-colors" />
                  {state.photos.length > 1 && (
                    <span className="absolute top-1.5 right-1.5 bg-green-950/70 text-white font-sans text-xs px-1.5 py-0.5 rounded">
                      {state.photos.length}
                    </span>
                  )}
                </>
              )}

              {isLoading ? (
                <LoadingSpinner light />
              ) : isEmpty ? (
                <div className="flex flex-col items-center gap-1 px-2 text-center">
                  <p className="font-headline text-white/40 text-sm tracking-wide">
                    Hole {holeNumber}
                  </p>
                  <p className="font-sans font-light text-white/25 text-xs tracking-wider">
                    Coming soon
                  </p>
                </div>
              ) : isReady && (
                <span className="absolute bottom-1.5 left-2 font-headline text-white text-xs tracking-wide drop-shadow">
                  Hole {holeNumber}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default HolePhotosSection;
