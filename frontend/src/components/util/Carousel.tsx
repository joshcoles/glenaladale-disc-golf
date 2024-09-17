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

		const interval = setInterval(nextSlide, 7000);

		return () => clearInterval(interval);
	}, [autoPlay, currentIndex]);

	return (
		<div className="relative w-full mx-auto overflow-hidden shrink-0 min-h-[500px]">
			<div
				className="flex transition-transform duration-1000"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{imageUrls.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`Slide ${index + 1}`}
						className="w-full flex-shrink-0"
						loading="lazy"
					/>
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
