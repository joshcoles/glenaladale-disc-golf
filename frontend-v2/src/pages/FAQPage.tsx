import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import faq from '../data/faq';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-beige-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-sans text-base text-green-950 tracking-wide">{question}</span>
        <span
          className={`flex-shrink-0 w-5 h-5 text-yellow-primary transition-transform duration-200 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="font-serif text-brown-primary text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => (
  <>
    <PageHeader
      title="Frequently Asked Questions"
      subtitle="Can't find the answer you're looking for? Feel free to reach out."
    />

    <section className="bg-beige-50 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {faq.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>

    <section className="bg-green-950 py-12">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="font-sans font-light text-green-300 text-sm tracking-wide mb-5">
          Still have a question?
        </p>
        <Link
          to="/contact"
          className="inline-block font-headline text-xs tracking-widest uppercase px-8 py-3 bg-yellow-primary text-green-950 hover:bg-yellow-400 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  </>
);

export default FAQPage;
