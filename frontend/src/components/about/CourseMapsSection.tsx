import React, { useEffect, useState, useCallback } from 'react';
import { storage, ref, getDownloadURL } from '../../helpers/firebase';
import LightBox from '../../components/util/LightBox';
import LoadingSpinner from '../util/LoadingSpinner';

const CourseMapsSection: React.FC = () => {
	const [courseMapUrls, setCourseMapUrls] = useState<(string | null)[]>(
		Array(18).fill(null),
	);
	const [largeImageUrls, setLargeImageUrls] = useState<
		(string | undefined)[]
	>(Array(18).fill(undefined));
	const [isLightboxOpen, setLightboxOpen] = useState(false);
	const [largeImageUrl, setLargeImageUrl] = useState<string | undefined>(
		undefined,
	);
	const [currentLargeImageIndex, setCurrentLargeImageIndex] = useState<
		number | undefined
	>(undefined);
	const [largeImageLoading, setLargeImageLoading] = useState<boolean>(false);

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

	useEffect(() => {
		fetchMapUrl();
	}, []);

	const fetchLargeImage = useCallback(
		async (index: number) => {
			try {
				setLargeImageLoading(true);

				if (largeImageUrls[index]) {
					setLargeImageUrl(largeImageUrls[index]);
					setCurrentLargeImageIndex(index);
					prefetchAdjacentImages(index);
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
				prefetchAdjacentImages(index);
			} catch (err) {
				console.error(err);
			} finally {
				setLargeImageLoading(false);
			}
		},
		[largeImageUrls],
	);

	const prefetchAdjacentImages = useCallback(
		(index: number) => {
			const adjacentIndices = [index - 1, index + 1].filter(
				(i) => i >= 0 && i < courseMapUrls.length,
			);

			adjacentIndices.forEach(async (i) => {
				if (!largeImageUrls[i]) {
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
		(direction: string) => {
			if (currentLargeImageIndex === undefined) {
				return;
			}

			let newIndex;

			if (direction === 'back') {
				newIndex =
					currentLargeImageIndex === 0
						? courseMapUrls.length - 1
						: currentLargeImageIndex - 1;
			} else if (direction === 'forward') {
				newIndex =
					currentLargeImageIndex === courseMapUrls.length - 1
						? 0
						: currentLargeImageIndex + 1;
			} else {
				return;
			}
			fetchLargeImage(newIndex);
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
						<LoadingSpinner />
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
			<span className="text-brown-primary mb-5 text-center text-2xl block">
				Click on a map to expand
			</span>
			<ul className="grid gap-4 p-4 grid-cols-2 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{courseMapUrls.map((url, index) => (
					<li
						onClick={() => {
							setLightboxOpen(true);
							fetchLargeImage(index);
						}}
						className="bg-green-primary flex justify-center items-center p-2 cursor-pointer "
						key={index}
					>
						{url ? (
							<img
								className="w-full h-auto"
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

export default CourseMapsSection;
