import React, { useState, useEffect } from 'react';
import { storage, ref, getDownloadURL } from '../../helpers/firebase';

interface CarouselProps {
	navigable: boolean;
	autoPlay: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
	navigable = false,
	autoPlay = true,
}) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [imageUrls, setImageUrls] = useState<string[]>([]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1,
		);
	};

	const getImageUrls = async () => {
		const urls = [...imageUrls];
		for (let i = 1; i <= 3; i++) {
			const mapRef = ref(storage, `hero-carousel/carousel-${i}.webp`);
			const url = await getDownloadURL(mapRef);
			urls[i - 1] = url;
			setImageUrls([...urls]);
		}
	};

	useEffect(() => {
		getImageUrls();

		if (!autoPlay) {
			return;
		}

		const interval = setInterval(nextSlide, 5000);

		return () => clearInterval(interval);
	}, [autoPlay, currentIndex]);

	return (
		<div className="relative w-full h-full overflow-hidden">
			<div
				className="flex transition-transform duration-1000 h-full"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{imageUrls.map((src, index) => (
					<div
						key={index}
						className="flex-shrink-0 w-full aspect-w-16 aspect-h-9"
					>
						<img
							src={src}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover object-center"
							loading="lazy"
						/>
					</div>
				))}
			</div>

			{navigable && (
				<>
					<button
						onClick={prevSlide}
						className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white rounded-full shadow-lg"
					>
						&#10094;
					</button>
					<button
						onClick={nextSlide}
						className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white rounded-full shadow-lg"
					>
						&#10095;
					</button>
				</>
			)}
		</div>
	);
};

export default Carousel;
