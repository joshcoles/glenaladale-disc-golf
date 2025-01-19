import React, { useState } from 'react';

type FormState =
	| 'in-progress'
	| 'processing'
	| 'submitted-success'
	| 'submitted-error';

const MembershipsPage: React.FC = () => {
	const sheetEndpointId = import.meta.env
		.VITE_GLENALADALE_GOOGLE_SHEET_ENDPOINT_ID;
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		waiver: false,
		notes: '',
	});
	const [formState, setFormState] = useState<FormState>('in-progress');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, type, value } = e.target as HTMLInputElement;
		const checked = (e.target as HTMLInputElement).checked;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};
	const handleSubmit = (e: React.FormEvent) => {
		setFormState('processing');
		e.preventDefault();

		const sheetEndpoint = `https://script.google.com/macros/s/${sheetEndpointId}/exec`;
		const data = {
			Notes: formData.notes,
			Email: formData.email,
			Name: formData.name,
		};

		const formDataToSubmit = new URLSearchParams(data).toString();

		fetch(sheetEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formDataToSubmit,
			mode: 'cors',
		})
			.then((response) => {
				if (response.ok) {
					console.log('Form submitted successfully');
					setFormState('submitted-success');
				} else {
					console.error(
						'Form submission failed:',
						response.statusText,
					);
				}
			})
			.catch((error) => {
				console.error('Error during form submission:', error);
			});
	};

	const formMarkup = (
		<form
			className="flex flex-col max-w-screen-xl mx-auto p-4 w-full items-stretch font-sans text-brown-950"
			onSubmit={handleSubmit}
		>
			<label htmlFor="name" className="text-xl 1mb-2">
				Name
			</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
				className="mb-4 p-2 border border-gray-300 rounded"
				required
			/>

			<label htmlFor="email" className="text-xl mb-2">
				Email
			</label>
			<input
				type="email"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				className="mb-4 p-2 border border-gray-300 rounded"
				required
			/>

			<label htmlFor="notes" className="text-xl mb-2">
				Notes (Optional)
			</label>
			<textarea
				id="notes"
				name="notes"
				value={formData.notes}
				onChange={handleChange}
				className="mb-4 p-2 border border-gray-300 rounded"
				placeholder="Add any additional information or notes here."
			/>

			<p className="text-xl mb-2">Waiver</p>

			<div className="text-sm">
				<p className="mb-2">
					I acknowledge and agree that I am voluntarily participating
					in the Glenaladale Disc Golf Course (the "Course") operated
					by Glenaladale Disc Golf (103026 P.E.I. Inc.). In
					consideration of being allowed to use the Course, I hereby
					agree to the following terms and conditions:
				</p>

				<p className="mb-2">
					<strong>Assumption of Risk:</strong> I acknowledge that disc
					golf can be a dangerous sport and involves the risk of
					serious injury or death. I understand and accept that there
					are risks associated with playing disc golf, including but
					not limited to, slipping, falling, or colliding with other
					players, equipment, or natural and man-made obstacles on the
					course. I voluntarily assume all risks associated with my
					use of the Course and any equipment provided by Glenaladale
					Disc Golf.
				</p>

				<p className="mb-2">
					<strong>Waiver and Release:</strong> I hereby waive and
					release Glenaladale Disc Golf (103026 P.E.I. Inc.), its
					owners, employees, and volunteers, from any and all
					liability, claims, demands, and causes of action whatsoever,
					arising out of or related to any theft, loss, damage, or
					injury, including death, that may be sustained by me or to
					any property belonging to me, while participating in the
					Course or using any equipment provided by Glenaladale Disc
					Golf.
				</p>

				<p className="mb-2">
					<strong>Indemnification:</strong> I agree to indemnify and
					hold Glenaladale Disc Golf, its owners, employees, and
					volunteers, harmless from any and all liability, claims,
					demands, and causes of action whatsoever, arising out of or
					related to any loss, damage, or injury, including death,
					that may be sustained by any third party while participating
					in the Course with me or as a result of my actions while
					using any equipment provided by Glenaladale Disc Golf.
				</p>

				<p className="mb-2">
					<strong>Insurance:</strong> I understand that Glenaladale
					Disc Golf does not provide insurance coverage for my use of
					the Course or any equipment provided by Glenaladale Disc
					Golf. I am solely responsible for obtaining any insurance
					coverage I deem necessary to protect myself and my property.
				</p>

				<p className="mb-2">
					<strong>Agreement:</strong> I have read and fully understand
					this Waiver and Release of Liability, and I am signing it
					voluntarily. I agree that no oral representations,
					statements, or inducements apart from the foregoing written
					agreement have been made. By accepting below, I acknowledge
					that I have read and understand the above Waiver and Release
					of Liability and that I voluntarily agree to its terms.
				</p>
			</div>
			<div className="flex justify-center items-center">
				<label htmlFor="waiver" className="mb-2 mr-2">
					I agree
				</label>
				<input
					type="checkbox"
					id="waiver"
					name="waiver"
					checked={formData.waiver}
					onChange={handleChange}
					className="mb-2"
				/>
			</div>
			<button
				type="submit"
				className="bg-green-primary hover:bg-green-700 p-4 text-white shadow-brown-offset "
			>
				Submit
			</button>
		</form>
	);

	return (
		<section className="bg-green-900 px-5 flex flex-col flex-grow items-center">
			<div className="max-w-screen-xl w-full my-10 text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-beige-primary mb-2">
					Membership Registration
				</h2>
				<p className="text-lg sm:text-xl text-yellow-primary">
					Please fill out the form below to register for a{' '}
					{new Date().getFullYear()} membership, and we will contact
					you to get you your membership tag.
				</p>
			</div>
			<div className="bg-yellow-primary max-w-screen-xl w-full flex flex-col sm:!flex-row shadow-brown-offset p-5 mb-10">
				<div className="flex justify-center mb-8">
					<img
						src="/overhead-2.jpg"
						alt="Primary"
						className="w-full h-auto max-h-[500px] object-cover rounded-lg"
					/>
				</div>
				{formState === 'in-progress' && formMarkup}
				{formState === 'submitted-success' && (
					<div className="flex flex-col max-w-screen-xl mx-auto p-4 w-full items-stretch font-sans text-brown-950 text-center">
						<span>Thank you for supporting the course.</span>
						<span>
							Please e-transfer your membership fee to
							info@glenaladalediscgolf.com.
						</span>
						Thank you for supporting the course.
						<span></span>
					</div>
				)}
			</div>
		</section>
	);
};

export default MembershipsPage;
