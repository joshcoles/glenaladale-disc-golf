import React from 'react';
import { questions } from '../../data/faq.json';

const FaqSection: React.FC = () => {
	const entries: {
		question: string;
		answer: string;
	}[] = questions;

	return (
		<>
			<div className="max-w-screen-xl bg-green-primary p-6 pb-0 mb-5 text-left mx-auto">
				{entries.map(({ question, answer }, index) => {
					return (
						<div
							key={index}
							className={`mb-5 p-6 shadow-md bg-yellow-primary`}
						>
							<h3
								className={`font-bold text-xl text-brown-primary mb-2`}
							>
								{question}
							</h3>
							<p className="text-brown-primary">{answer}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FaqSection;
