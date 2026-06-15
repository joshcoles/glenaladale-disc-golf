import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ReviewCard from '../components/reviews/ReviewCard';
import reviews from '../data/reviews';

const ReviewsPage: React.FC = () => (
  <>
    <PageHeader
      title="Player Reviews"
      subtitle="Reviews from UDisc, where disc golfers discover and rate courses around the world."
    />

    <div className="bg-green-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-serif text-brown-primary text-base leading-relaxed max-w-2xl mb-10">
          We love receiving feedback about the course. While these are all positive reviews, we also
          pay close attention to less positive ones, using them as a guide for what needs to be
          improved. If you'd like to read more or leave your own review, visit our{' '}
          <a
            href="https://udisc.com/courses/glenaladale-disc-golf-course-gl5b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-primary underline hover:text-green-700 transition-colors"
          >
            UDisc page
          </a>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.user} review={review} expanded />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default ReviewsPage;
