import React, { useEffect, useState } from 'react';
import { storage, ref, getDownloadURL } from '../helpers/firebase';
import LightBox from '../components/LightBox';

const CourseMaps: React.FC = () => {
	const [courseMapUrls, setCourseMapUrls] = useState<string[]>([]);
	const [isLightboxOpen, setLightboxOpen] = useState(false);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchMapUrl = async () => {
			try {
				const urls = [];
				for (let i = 1; i <= 13; i++) {
					const mapRef = ref(storage, `course-maps/hole-${i}.webp`);
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

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<button onClick={() => setLightboxOpen((prev) => !prev)}>
				Open Lightbox
			</button>
			<LightBox
				isOpen={isLightboxOpen}
				onClose={() => setLightboxOpen((prev) => !prev)}
				content={<h1>Lightbox</h1>}
			/>
			<ul className="flex flex-wrap">
				{courseMapUrls.map((url, index) => (
					<li key={index}>
						<img className="h-60 mr-1 mb-1" src={url} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseMaps;
