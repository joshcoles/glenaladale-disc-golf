import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/ui/PageHeader';
import LoadingSpinner from '../components/ui/LoadingSpinner';

type FormState = 'default' | 'processing' | 'success' | 'error';

const inputClass =
  'w-full font-sans font-light text-brown-primary text-sm bg-transparent border-b border-gray-300 focus:border-green-primary focus:outline-none py-2.5 tracking-wide transition-colors placeholder:text-gray-300';

const labelClass = 'block font-sans text-xs tracking-widest uppercase text-gray-500 mb-1.5 mt-6 first:mt-0';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('default');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('processing');

    emailjs
      .send(
        import.meta.env.VITE_GLENALADALE_CONTACT_FORM_SERVICE_ID,
        import.meta.env.VITE_GLENALADALE_CONTACT_FORM_TEMPLATE_ID,
        { ...formData, to_name: 'Glenaladale Disc Golf' },
        import.meta.env.VITE_GLENALADALE_CONTACT_FORM_PUBLIC_KEY,
      )
      .then(() => {
        setFormState('success');
        setFormData({ from_name: '', from_email: '', from_phone: '', message: '' });
      })
      .catch(() => setFormState('error'));
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Questions about the course? We're happy to help."
      />

      <div className="bg-beige-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <img
                src="/team.jpg"
                alt="Glenaladale Disc Golf team"
                className="w-full h-64 sm:h-72 object-cover mb-10"
              />

              <div className="space-y-8">
                <div>
                  <h3 className="font-headline text-sm tracking-widest uppercase text-yellow-primary mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:info@glenaladalediscgolf.com"
                    className="font-sans font-light text-sm text-brown-primary hover:text-green-primary transition-colors tracking-wide"
                  >
                    info@glenaladalediscgolf.com
                  </a>
                </div>

                <div>
                  <h3 className="font-headline text-sm tracking-widest uppercase text-yellow-primary mb-3">
                    Phone
                  </h3>
                  <a
                    href="tel:+19023307666"
                    className="font-sans font-light text-sm text-brown-primary hover:text-green-primary transition-colors tracking-wide"
                  >
                    (902) 330-7666
                  </a>
                </div>

                <div>
                  <h3 className="font-headline text-sm tracking-widest uppercase text-yellow-primary mb-3">
                    Address
                  </h3>
                  <p className="font-sans font-light text-sm text-brown-primary tracking-wide leading-relaxed">
                    257 Blooming Point Rd<br />
                    Mount Stewart, PE C0A 1T0
                  </p>
                </div>

                <div>
                  <h3 className="font-headline text-sm tracking-widest uppercase text-yellow-primary mb-3">
                    Socials
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/glenaladalediscgolf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-light text-sm text-brown-primary hover:text-green-primary transition-colors tracking-wide"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/glenaladalediscgolf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-light text-sm text-brown-primary hover:text-green-primary transition-colors tracking-wide"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {formState === 'success' ? (
                <div className="bg-green-50 p-10 text-center flex flex-col items-center gap-4 h-full justify-center">
                  <svg className="w-12 h-12 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-headline text-xl text-green-950 tracking-wide">Message Sent</h3>
                  <p className="font-sans font-light text-sm text-brown-primary tracking-wide leading-relaxed max-w-xs">
                    Thanks for reaching out. We'll get back to you as soon as we can.
                  </p>
                </div>
              ) : formState === 'error' ? (
                <div className="bg-red-50 p-10 text-center flex flex-col items-center gap-4">
                  <h3 className="font-headline text-xl text-red-primary tracking-wide">Something Went Wrong</h3>
                  <p className="font-sans font-light text-sm text-brown-primary tracking-wide leading-relaxed max-w-xs">
                    Please email us directly at{' '}
                    <a href="mailto:info@glenaladalediscgolf.com" className="text-green-primary">
                      info@glenaladalediscgolf.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="from_name" className={labelClass}>Name *</label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="from_email" className={labelClass}>Email *</label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="from_phone" className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      id="from_phone"
                      name="from_phone"
                      value={formData.from_phone}
                      onChange={handleChange}
                      placeholder="Optional"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="mt-10">
                    <button
                      type="submit"
                      disabled={formState === 'processing'}
                      className="w-full font-sans text-sm tracking-widest uppercase py-4 bg-green-primary text-white hover:bg-green-700 transition-colors flex items-center justify-center gap-3 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      {formState === 'processing' ? (
                        <>
                          <LoadingSpinner size="sm" light />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
