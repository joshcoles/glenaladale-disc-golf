import React, { useState } from 'react';

const MembershipsPage: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		waiver: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const googleFormEndpoint =
			'https://docs.google.com/forms/u/1/d/18dmpKDPCCT3aTZT3UVRnsUThNFvcsK3FEplfDWEIZvE/prefill';
		const formBody = new URLSearchParams();
		formBody.append('entry.25886538', formData.name);
		formBody.append('entry.1550261026', formData.email);
		formBody.append('entry.635707', formData.waiver);

		fetch(googleFormEndpoint, {
			method: 'POST',
			body: formBody,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})
			.then(() => {
				alert('Form submitted successfully!');
				setFormData({ name: '', email: '', waiver: false });
			})
			.catch(() => {
				alert('Form submission failed.');
			});
	};

	return (
		<section className="bg-green-900 px-5 flex flex-col flex-grow items-center">
			<div className="max-w-screen-xl w-full my-10 text-center">
				<h2 className="text-3xl sm:text-3xl font-bold text-beige-primary mb-2">
					Memberships
				</h2>
				<p className="text-lg sm:text-xl text-yellow-primary">
					Please fill out the form below to register for a{' '}
					{new Date().getFullYear()} membership.
				</p>
			</div>
			<div className="bg-yellow-primary max-w-screen-xl w-full flex flex-col sm:!flex-row shadow-brown-offset p-5 mb-10">
				<form
					className="flex flex-col max-w-screen-xl mx-auto p-4 w-full items-stretch font-sans text-brown-950"
					onSubmit={handleSubmit}
				>
					<label htmlFor="name" className="mb-2">
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

					<label htmlFor="email" className="mb-2">
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

					<div>
						I, __________________ [YOUR NAME], acknowledge and agree
						that I am voluntarily participating in the Glenaladale
						Disc Golf Course (the "Course") operated by Glenaladale
						Disc Golf (103026 P.E.I. Inc.). In consideration of
						being allowed to use the Course, I hereby agree to the
						following terms and conditions: Assumption of Risk: I
						acknowledge that disc golf can be a dangerous sport and
						involves the risk of serious injury or death. I
						understand and accept that there are risks associated
						with playing disc golf, including but not limited to,
						slipping, falling, or colliding with other players,
						equipment, or natural and man-made obstacles on the
						course. I voluntarily assume all risks associated with
						my use of the Course and any equipment provided by
						Glenaladale Disc Golf. Waiver and Release: I hereby
						waive and release Glenaladale Disc Golf (103026 P.E.I.
						Inc.), its owners, employees, and volunteers, from any
						and all liability, claims, demands, and causes of action
						whatsoever, arising out of or related to any theft,
						loss, damage, or injury, including death, that may be
						sustained by me or to any property belonging to me,
						while participating in the Course or using any equipment
						provided by Glenaladale Disc Golf. Indemnification: I
						agree to indemnify and hold Glenaladale Disc Golf, its
						owners, employees, and volunteers, harmless from any and
						all liability, claims, demands, and causes of action
						whatsoever, arising out of or related to any loss,
						damage, or injury, including death, that may be
						sustained by any third party while participating in the
						Course with me or as a result of my actions while using
						any equipment provided by Glenaladale Disc Golf.
						Insurance: I understand that Glenaladale Disc Golf does
						not provide insurance coverage for my use of the Course
						or any equipment provided by Glenaladale Disc Golf. I am
						solely responsible for obtaining any insurance coverage
						I deem necessary to protect myself and my property.
						Agreement: I have read and fully understand this Waiver
						and Release of Liability, and I am signing it
						voluntarily. I agree that no oral representations,
						statements, or inducements apart from the foregoing
						written agreement have been made. By accepting below, I
						acknowledge that I have read and understand the above
						Waiver and Release of Liability and that I voluntarily
						agree to its terms.
					</div>
					<label htmlFor="waiver" className="mb-2">
						I agree
					</label>
					<input
						type="checkbox"
						id="waiver"
						name="waiver"
						value={formData.waiver}
						onChange={handleChange}
					/>

					<button
						type="submit"
						className="bg-green-primary hover:bg-green-700 p-4 text-white shadow-brown-offset "
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default MembershipsPage;
