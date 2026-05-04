import React from 'react';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import CourseOverview from '../components/home/CourseOverview';
import FlyThroughVideo from '../components/home/FlyThroughVideo';
import ReviewsTeaser from '../components/home/ReviewsTeaser';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Highlights />
    <CourseOverview />
    <FlyThroughVideo />
    <ReviewsTeaser />
  </>
);

export default HomePage;
