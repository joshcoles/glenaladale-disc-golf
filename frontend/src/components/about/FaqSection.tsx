import React from 'react';

const FaqSection: React.FC = () => {
	const entries: {
		question: string;
		answer: string;
	}[] = [
		{
			question: 'How much does it cost to play?',
			answer: 'It costs $10 per person per day to play. Children 16 and younger are free. We also offer annual memberships at $150 per person.',
		},
		{
			question: 'How do I pay?',
			answer: 'You can pay via e-transfer to info@glenaladalediscgolf.com, or with cash via the payment box near the parking lot.',
		},
		{
			question: 'Do I need to book a tee time?',
			answer: 'No, you are welcome to just show up and play.',
		},
		{
			question: 'When is the course open?',
			answer: 'The course is always open, with the rare exception of when we are hosting a tournament. We stay open throughout the winter, and while we try to stay on top of shoveling tee pads, we can\t guarantee that they will be free of snow.',
		},
		{
			question: 'Do you rent discs?',
			answer: 'Yes, we do. During the summer months you can rent discs from the Glenaladale Schoolhouse during their regular open hours. Off-season and outside of regular hours, please reach out and we can arrange for you to pick up rental discs in Charlottetown.',
		},
		{
			question: 'Where do I park?',
			answer: 'You can park at the yellow schoolhouse on the west side of the road. Please do not park on Blooming Point Road.',
		},
		{
			question: 'How do I keep score?',
			answer: 'We recommend using an app called UDisc, which is very popular in the disc golf community. It lets you create digital scorecards, helps you navigate the course with detailed maps, and lets you find and review courses.',
		},
		{
			question:
				'Do you sell discs, hats, or any other Glenaladale Disc Golf merch?',
			answer: 'We often have merchandise available. Please get in touch with us to find out what we have in stock currently.',
		},
		{
			question: "What do you do with the course's green fees?",
			answer: "It's surprisingly expensive to run and maintain a large disc golf course. All of the money we get from green fees goes back into developing the course. We use it to buy things like lawnmowers, landscaping materials, baskets, turf, signage, etc. Rest assured that we are not making any money off of this project.",
		},
	];
	return (
		<>
			<h2 className=" mb-5 text-center text-4xl">FAQ</h2>
			<div className="text-left">
				{entries.map(({ question, answer }, index) => (
					<div key={index} className="mb-5">
						<h3 className="bold text-3xl mb-1">{question}</h3>
						<p>{answer}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default FaqSection;
