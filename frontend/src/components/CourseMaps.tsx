import React, { useEffect, useState } from 'react';
import { storage, ref, getDownloadURL } from '../helpers/firebase';
import LightBox from '../components/LightBox';

const CourseMaps: React.FC = () => {
	const [courseMapUrls, setCourseMapUrls] = useState<string[]>([]);
	const [isLightboxOpen, setLightboxOpen] = useState(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [largeImageUrl, setLargeImageUrl] = useState<string | undefined>(
		undefined,
	);
	const [largeImageLoading, setLargeImageLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchMapUrl = async () => {
			try {
				const urls = [];
				for (let i = 1; i <= 18; i++) {
					const mapRef = ref(
						storage,
						`course-maps/hole-${i}-thumbnail.webp`,
					);
					const url = await getDownloadURL(mapRef);
					urls.push(url);
				}

				setCourseMapUrls(urls);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
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

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
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
			<ul className="flex flex-wrap">
				{courseMapUrls.map((url, index) => (
					<li
						onClick={() => {
							setLightboxOpen(true);
							fetchLargeImage(index);
						}}
						className="bg-green-primary p-2 m-2 cursor-pointer"
						key={index}
					>
						<img className="h-60 min-h-60" src={url} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseMaps;
