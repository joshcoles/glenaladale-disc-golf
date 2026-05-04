import React from 'react';
import { Link } from 'react-router-dom';
import reviews from '../../data/reviews';
import ReviewCard from '../reviews/ReviewCard';

const ReviewsTeaser: React.FC = () => (
  <section className="bg-green-50 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="font-sans font-light text-green-primary text-xs tracking-[0.3em] uppercase mb-4">
          UDisc
        </p>
        <h2 className="font-headline text-3xl sm:text-4xl text-green-950 tracking-wide">
          What Players Are Saying
        </h2>
        <div className="mt-4 w-12 h-0.5 bg-yellow-primary mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.user} review={review} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/reviews"
          className="inline-block font-sans text-sm tracking-widest uppercase text-green-primary border border-green-primary px-8 py-3 hover:bg-green-primary hover:text-white transition-colors"
        >
          Read All Reviews
        </Link>
      </div>
    </div>
  </section>
);

export default ReviewsTeaser;
