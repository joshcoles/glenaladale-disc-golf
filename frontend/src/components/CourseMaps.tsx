import React, { useEffect, useState, useCallback } from 'react';
import { storage, ref, getDownloadURL } from '../helpers/firebase';
import LightBox from '../components/LightBox';

const CourseMaps: React.FC = () => {
	const [courseMapUrls, setCourseMapUrls] = useState<(string | null)[]>(
		Array(18).fill(null),
	);
	const [largeImageUrls, setLargeImageUrls] = useState<
		(string | undefined)[]
	>(Array(18).fill(undefined)); // Store URLs of preloaded large images
	const [isLightboxOpen, setLightboxOpen] = useState(false);
	const [largeImageUrl, setLargeImageUrl] = useState<string | undefined>(
		undefined,
	);
	const [currentLargeImageIndex, setCurrentLargeImageIndex] = useState<
		number | undefined
	>(undefined);
	const [largeImageLoading, setLargeImageLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchMapUrl = async () => {
			try {
				const urls = [...courseMapUrls];
				for (let i = 1; i <= 18; i++) {
					const mapRef = ref(
						storage,
						`course-maps/hole-${i}-thumbnail.webp`,
					);
					const url = await getDownloadURL(mapRef);
					urls[i - 1] = url;
					setCourseMapUrls([...urls]);
				}
			} catch (err) {
				console.error(err);
			}
		};

		fetchMapUrl();
	}, []); // Fetch map URLs only once on mount

	const fetchLargeImage = useCallback(
		async (index: number) => {
			try {
				setLargeImageLoading(true);

				if (largeImageUrls[index]) {
					// If already loaded, use the cached URL
					setLargeImageUrl(largeImageUrls[index]);
					setCurrentLargeImageIndex(index);
					prefetchAdjacentImages(index); // Prefetch adjacent images
					return;
				}

				const mapRef = ref(
					storage,
					`course-maps/hole-${index + 1}.webp`,
				);
				const url = await getDownloadURL(mapRef);

				setLargeImageUrls((prevUrls) => {
					const updatedUrls = [...prevUrls];
					updatedUrls[index] = url;
					return updatedUrls;
				});

				setLargeImageUrl(url);
				setCurrentLargeImageIndex(index);
				prefetchAdjacentImages(index); // Prefetch adjacent images
			} catch (err) {
				console.error(err);
			} finally {
				setLargeImageLoading(false);
			}
		},
		[largeImageUrls], // Recalculate only when largeImageUrls change
	);

	const prefetchAdjacentImages = useCallback(
		(index: number) => {
			const adjacentIndices = [index - 1, index + 1].filter(
				(i) => i >= 0 && i < courseMapUrls.length,
			);

			adjacentIndices.forEach(async (i) => {
				if (!largeImageUrls[i]) {
					// Only fetch if not already loaded
					const mapRef = ref(
						storage,
						`course-maps/hole-${i + 1}.webp`,
					);
					try {
						const url = await getDownloadURL(mapRef);
						setLargeImageUrls((prevUrls) => {
							const updatedUrls = [...prevUrls];
							updatedUrls[i] = url;
							return updatedUrls;
						});
					} catch (err) {
						console.error(err);
					}
				}
			});
		},
		[largeImageUrls, courseMapUrls.length],
	);

	const handleLightboxNavigation = useCallback(
		(e: React.MouseEvent) => {
			if (currentLargeImageIndex === undefined) {
				return;
			}

			const direction = e.currentTarget.getAttribute('data-direction');
			const newIndex =
				direction === 'back'
					? currentLargeImageIndex - 1
					: currentLargeImageIndex + 1;

			if (newIndex >= 0 && newIndex < courseMapUrls.length) {
				fetchLargeImage(newIndex);
			}
		},
		[currentLargeImageIndex, fetchLargeImage, courseMapUrls.length],
	);

	return (
		<div className="mb-5">
			<LightBox
				isOpen={isLightboxOpen}
				onClose={() => setLightboxOpen((prev) => !prev)}
				onNavigate={handleLightboxNavigation}
				content={
					largeImageLoading ? (
						<div>Loading large image...</div>
					) : (
						largeImageUrl && (
							<img
								className="max-h-full"
								src={largeImageUrl}
								alt="Large course map"
							/>
						)
					)
				}
			/>
			<h2 className="text-brown-primary mb-5 text-center text-4xl">
				Course Maps
			</h2>
			<ul className="grid gap-1 grid-cols-2 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{courseMapUrls.map((url, index) => (
					<li
						onClick={() => {
							setLightboxOpen(true);
							fetchLargeImage(index);
						}}
						className="bg-green-primary p-2 m-2 cursor-pointer min-h-50 min-w-48"
						key={index}
					>
						{url ? (
							<img
								className="sm:h-50 sm:min-h-50 md:h-60 md:min-h-60"
								src={url}
								alt={`Course Map ${index + 1}`}
							/>
						) : (
							<div className="h-60 min-h-60 flex items-center justify-center">
								<div className="spinner"></div>
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseMaps;
