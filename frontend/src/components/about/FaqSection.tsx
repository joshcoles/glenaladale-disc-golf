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
		{
			question: 'Are there washrooms on available site?',
			answer: 'At this time we have no permanently-available washrooms, however disc golfers are welcome to use the Glenaladale Schoolhouse washrooms when they are open. These hours change seasonally and can be found on the Glenaladale House website.',
		},
		{
			question: 'Is the course beginner friendly?',
			answer: 'Yes and no. Brand new players might not score below par (or close to it) from the red layout, but they can still have fun and enjoy the beautiful walk through the woods. We plan on opening a "green" beginner layout in 2025.',
		},
	];
	return (
		<>
			<div className="max-w-screen-xl bg-green-primary p-5 text-left mx-auto">
				{entries.map(({ question, answer }, index) => {
					const isEven = (index + 1) % 2;
					const backgroundColor = isEven
						? 'bg-green-900'
						: 'bg-yellow-primary';
					const questionTextColor = isEven
						? 'text-yellow-primary'
						: 'text-brown-primary';
					const answerTextColor = isEven
						? 'text-beige-primary'
						: 'text-brown-primary';
					return (
						<div
							key={index}
							className={`mb-5 p-6 shadow-md ${backgroundColor}`}
						>
							<h3
								className={`font-bold text-xl ${questionTextColor} mb-2`}
							>
								{question}
							</h3>
							<p className={answerTextColor}>{answer}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FaqSection;
