import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
	const [formData, setFormData] = useState({
		from_name: '',
		from_email: '',
		from_phone: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const emailData = {
			from_name: formData.from_name,
			from_email: formData.from_email,
			from_phone: formData.from_phone,
			message: formData.message,
			to_name: 'Glenaladale Disc Golf',
		};

		emailjs
			.send(
				import.meta.env.VITE_GLENALADALE_CONTACT_FORM_SERVICE_ID,
				import.meta.env.VITE_GLENALADALE_CONTACT_FORM_TEMPLATE_ID,
				emailData,
				import.meta.env.VITE_GLENALADALE_CONTACT_FORM_PUBLIC_KEY,
			)
			.then(
				(result) => {
					console.log('Email sent successfully!', result.text);
					alert('Message sent successfully!');
				},
				(error) => {
					console.error(
						'There was an error sending the email:',
						error.text,
					);
					alert(
						'Failed to send the message. Please try again later.',
					);
				},
			);

		setFormData({
			from_name: '',
			from_email: '',
			from_phone: '',
			message: '',
		});
	};

	return (
		<section className="bg-yellow-primary flex flex-grow justify-center">
			<div className="flex flex-col items-center max-w-screen-xl w-full  md:w-[500px]">
				<p className="text-center mt-6">
					If you have any questions about the course, feel free to
					reach out to us via the contact form below. You are also
					welcome to send us an email directly via
					info@glenaladalediscgolf.com.
				</p>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col max-w-screen-xl mx-auto p-4 w-full items-stretch font-headline text-brown-950"
				>
					<label htmlFor="from_name" className="mb-2">
						Name
					</label>
					<input
						type="text"
						id="from_name"
						name="from_name"
						value={formData.from_name}
						onChange={handleChange}
						className="mb-4 p-2 border border-gray-300 rounded"
						required
					/>

					<label htmlFor="from_email" className="mb-2">
						Email
					</label>
					<input
						type="email"
						id="from_email"
						name="from_email"
						value={formData.from_email}
						onChange={handleChange}
						className="mb-4 p-2 border border-gray-300 rounded"
						required
					/>

					<label htmlFor="from_phone" className="mb-2">
						Phone Number
					</label>
					<input
						type="tel"
						id="from_phone"
						name="from_phone"
						value={formData.from_phone}
						onChange={handleChange}
						className="mb-4 p-2 border border-gray-300 rounded"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						placeholder="123-456-7890"
					/>

					<label htmlFor="message" className="mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="mb-4 p-2 border border-gray-300 rounded"
						rows={4}
						required
					></textarea>

					<button
						type="submit"
						className="bg-green-primary hover:bg-green-700 p-4 text-white shadow-button-primary "
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactPage;
