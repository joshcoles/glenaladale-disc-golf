import React from 'react';
import type { Review } from '../../types';
import StarRating from '../ui/StarRating';

interface Props {
  review: Review;
  expanded?: boolean;
}

const ReviewCard: React.FC<Props> = ({ review, expanded = false }) => {
  const date = new Date(review.date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <article className="bg-white border border-gray-100 p-6 flex flex-col gap-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-headline text-green-950 tracking-wide text-sm">@{review.user}</p>
          <p className="font-sans font-light text-green-500 text-xs tracking-wider mt-0.5">
            {review.coursesPlayed} courses played
          </p>
        </div>
        <p className="font-sans font-light text-gray-400 text-xs tracking-wide flex-shrink-0">{date}</p>
      </div>

      <StarRating stars={review.stars} />

      <p
        className={`font-serif text-brown-primary text-sm leading-relaxed ${
          !expanded ? 'line-clamp-4' : ''
        }`}
      >
        {review.description}
      </p>
    </article>
  );
};

export default ReviewCard;
