import React, { useEffect, useState } from 'react';
import { storage, ref, getDownloadURL } from '../helpers/firebase';
import LightBox from '../components/LightBox';

const CourseMaps: React.FC = () => {
	const [courseMapUrls, setCourseMapUrls] = useState<(string | null)[]>(
		Array(18).fill(null),
	);
	const [isLightboxOpen, setLightboxOpen] = useState(false);
	const [largeImageUrl, setLargeImageUrl] = useState<string | undefined>(
		undefined,
	);
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
	}, []);

	const fetchLargeImage = async (index: number) => {
		try {
			setLargeImageLoading(true);

			const mapRef = ref(storage, `course-maps/hole-${index + 1}.webp`);
			const url = await getDownloadURL(mapRef);
			setLargeImageUrl(url);
		} catch (err) {
			console.error(err);
		} finally {
			setLargeImageLoading(false);
		}
	};

	return (
		<div className="mb-5">
			<LightBox
				isOpen={isLightboxOpen}
				onClose={() => setLightboxOpen((prev) => !prev)}
				content={
					largeImageLoading ? (
						<div>Loading large image...</div>
					) : (
						largeImageUrl && (
							<img src={largeImageUrl} alt="Large course map" />
						)
					)
				}
			/>
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
