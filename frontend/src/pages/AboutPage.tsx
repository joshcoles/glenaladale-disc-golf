import React from 'react';
import CourseMaps from '../components/CourseMaps';

const AboutPage: React.FC = () => {
	return (
		<div className="bg-yellow-primary px-5">
			<h2 className="font-headline text-center py-5">About Us</h2>
			<div className="flex flex-col">
				<div className="">
					<img
						src="https://via.placeholder.com/600x400"
						className=""
					/>
				</div>
				<p className="">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
					vel urna a augue malesuada convallis. Fusce lacinia lectus
					eget sapien varius, nec aliquam massa bibendum. Donec ac sem
					sit amet tortor convallis venenatis. Aliquam erat volutpat.
					Etiam ut bibendum eros. Nulla facilisi. Duis euismod nisi
					nec nisl vehicula, a tempus arcu commodo.
				</p>
			</div>

			<div className="">
				<p className="text-lg text-gray-700 leading-relaxed">
					Pellentesque habitant morbi tristique senectus et netus et
					malesuada fames ac turpis egestas. Curabitur nec vestibulum
					lorem, in pharetra erat. Aenean sodales magna sit amet quam
					feugiat, in interdum massa gravida. Sed fringilla dapibus
					eros, sit amet luctus velit blandit id. Morbi tincidunt urna
					in orci suscipit, sed convallis risus aliquam. In a faucibus
					sapien. Vivamus vitae massa purus. convallis id.
				</p>
				<div className="">
					<img
						src="https://via.placeholder.com/600x400"
						alt="Secondary Image 1"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row items-center">
				<div className="">
					<p className="text-lg text-gray-700 leading-relaxed">
						Sed malesuada ex a velit tincidunt, vel efficitur ex
						suscipit. Nulla id sapien a sapien ultrices sollicitudin
						non sit amet enim. Nullam a lacinia sem, sit amet
						lacinia libero. Duis convallis nisi non tellus vehicula,
						vel placerat justo condimentum. Praesent at urna at
						velit tristique lacinia.
					</p>
				</div>
				<div className="">
					<img
						src="https://via.placeholder.com/600x400"
						alt="Secondary Image 2"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>
			<h2>The Course</h2>
			<CourseMaps />
		</div>
	);
};

export default AboutPage;
