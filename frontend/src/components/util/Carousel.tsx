import React, { useState, useEffect } from 'react';
import { storage, ref, getDownloadURL } from '../../helpers/firebase';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

interface CarouselProps {
	navigable?: boolean;
	autoPlay?: boolean;
	aspectW?: string;
	aspectH?: string;
}

const Carousel: React.FC<CarouselProps> = ({
	navigable = false,
	autoPlay = true,
	aspectW = 'aspect-w-16',
	aspectH = 'aspect-h-9',
}) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const [isFirstImageLoaded, setIsFirstImageLoaded] =
		useState<boolean>(false);

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
		try {
			// Serving first slide locally for faster initial load
			setImageUrls(['./carousel-1.webp']);

			const fetchedUrls: string[] = [];
			for (let i = 2; i <= 3; i++) {
				const mapRef = ref(storage, `hero-carousel/carousel-${i}.webp`);
				const url = await getDownloadURL(mapRef);
				fetchedUrls.push(url);
			}
			setImageUrls((prev) => [...prev, ...fetchedUrls]);
		} catch (error) {
			console.error(error);
		}
	};

	const handleFirstImageLoad = () => {
		setIsFirstImageLoaded(true);
	};

	useEffect(() => {
		getImageUrls();
	}, []);

	useEffect(() => {
		if (!autoPlay) {
			return;
		}

		const interval = setInterval(nextSlide, 5000);

		return () => clearInterval(interval);
	}, [autoPlay, currentIndex]);

	return (
		<div className="relative w-full h-full overflow-hidden bg-black">
			<div
				className="flex transition-transform duration-1000 h-full"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{imageUrls.map((src, index) => (
					<div
						key={index}
						className={`flex-shrink-0 w-full ${aspectW} ${aspectH} relative`}
					>
						<div
							className={`absolute inset-0 bg-black transition-opacity ${
								isFirstImageLoaded ? 'opacity-0' : 'opacity-100'
							}`}
						></div>
						<img
							src={src}
							alt={`Slide ${index + 1}`}
							className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
								isFirstImageLoaded || index !== 0
									? 'opacity-100'
									: 'opacity-0'
							}`}
							onLoad={
								index === 0 ? handleFirstImageLoad : undefined
							}
							loading={index === 0 ? 'eager' : 'lazy'}
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
						<FaAngleLeft className="text-8xl"></FaAngleLeft>
					</button>
					<button
						onClick={nextSlide}
						className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white rounded-full shadow-lg"
					>
						<FaAngleRight className="text-8xl"></FaAngleRight>
					</button>
				</>
			)}
		</div>
	);
};

export default Carousel;
