import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import HolePhotosSection from '../components/gallery/HolePhotosSection';
import CourseMapsSection from '../components/gallery/CourseMapsSection';
import MiscPhotosSection from '../components/gallery/MiscPhotosSection';

type Tab = 'photos' | 'maps' | 'misc';

const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('photos');

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Explore hole photos and detailed course maps for all 18 holes."
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex border-b border-gray-200 mb-10">
            {([['photos', 'Hole Photos'], ['maps', 'Course Maps'], ['misc', 'Other Photos']] as [Tab, string][]).map(
              ([tab, label]) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-sans text-sm tracking-widest uppercase px-6 py-3 border-b-2 transition-colors -mb-px ${
                    activeTab === tab
                      ? 'border-yellow-primary text-green-950'
                      : 'border-transparent text-gray-400 hover:text-green-950'
                  }`}
                >
                  {label}
                </button>
              ),
            )}
          </div>

          {activeTab === 'photos' && (
            <div>
              <p className="font-sans font-light text-sm text-gray-400 tracking-wide mb-6">
                Tap a hole to view photos. Photos are added as they become available.
              </p>
              <HolePhotosSection />
            </div>
          )}

          {activeTab === 'maps' && (
            <div>
              <p className="font-sans font-light text-sm text-gray-400 tracking-wide mb-6">
                Click any map to view it full size. Use the arrows to navigate between holes.
              </p>
              <CourseMapsSection />
            </div>
          )}

          {activeTab === 'misc' && (
            <div>
              <p className="font-sans font-light text-sm text-gray-400 tracking-wide mb-6">
                A collection of photos from around the course.
              </p>
              <MiscPhotosSection />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
