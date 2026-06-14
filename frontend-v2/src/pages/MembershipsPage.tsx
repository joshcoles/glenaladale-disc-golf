import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import LoadingSpinner from '../components/ui/LoadingSpinner';

type FormState = 'default' | 'processing' | 'success' | 'error';

const inputClass =
  'w-full font-sans font-light text-brown-primary text-sm bg-transparent border-b border-gray-300 focus:border-green-primary focus:outline-none py-2.5 tracking-wide transition-colors placeholder:text-gray-300';

const labelClass = 'block font-sans text-xs tracking-widest uppercase text-gray-500 mb-1.5 mt-6 first:mt-0';

const waiverText = [
  {
    heading: 'Assumption of Risk',
    body: 'I acknowledge that disc golf can be a dangerous sport and involves the risk of serious injury or death. I understand and accept that there are risks associated with playing disc golf, including but not limited to, slipping, falling, or colliding with other players, equipment, or natural and man-made obstacles on the course. I voluntarily assume all risks associated with my use of the Course and any equipment provided by Glenaladale Disc Golf.',
  },
  {
    heading: 'Waiver and Release',
    body: 'I hereby waive and release Glenaladale Disc Golf (103026 P.E.I. Inc.), its owners, employees, and volunteers, from any and all liability, claims, demands, and causes of action whatsoever, arising out of or related to any theft, loss, damage, or injury, including death, that may be sustained by me or to any property belonging to me, while participating in the Course or using any equipment provided by Glenaladale Disc Golf.',
  },
  {
    heading: 'Indemnification',
    body: 'I agree to indemnify and hold Glenaladale Disc Golf, its owners, employees, and volunteers, harmless from any and all liability, claims, demands, and causes of action whatsoever, arising out of or related to any loss, damage, or injury, including death, that may be sustained by any third party while participating in the Course with me or as a result of my actions while using any equipment provided by Glenaladale Disc Golf.',
  },
  {
    heading: 'Insurance',
    body: 'I understand that Glenaladale Disc Golf does not provide insurance coverage for my use of the Course or any equipment provided by Glenaladale Disc Golf. I am solely responsible for obtaining any insurance coverage I deem necessary to protect myself and my property.',
  },
  {
    heading: 'Agreement',
    body: 'I have read and fully understand this Waiver and Release of Liability, and I am signing it voluntarily. I agree that no oral representations, statements, or inducements apart from the foregoing written agreement have been made. By accepting below, I acknowledge that I have read and understand the above Waiver and Release of Liability and that I voluntarily agree to its terms.',
  },
];

const MembershipsPage: React.FC = () => {
  const sheetEndpointId = import.meta.env.VITE_GLENALADALE_GOOGLE_SHEET_ENDPOINT_ID;
  const [formData, setFormData] = useState({ name: '', email: '', notes: '', waiver: false });
  const [formState, setFormState] = useState<FormState>('default');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const isValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.waiver;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('processing');

    if (!sheetEndpointId) {
      setFormState('error');
      return;
    }

    const body = new URLSearchParams({
      Name: formData.name,
      Email: formData.email,
      Notes: formData.notes,
    }).toString();

    fetch(`https://script.google.com/macros/s/${sheetEndpointId}/exec`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then((res) => {
        if (res.ok) {
          setFormState('success');
          setFormData({ name: '', email: '', notes: '', waiver: false });
        } else {
          setFormState('error');
        }
      })
      .catch(() => setFormState('error'));
  };

  return (
    <>
      <PageHeader
        title="Memberships"
        subtitle={`Register for a ${new Date().getFullYear()} membership and we'll be in touch shortly.`}
      />

      <div className="bg-beige-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <img
                src="/overhead-2.jpg"
                alt="Aerial view of Glenaladale Disc Golf Course"
                className="w-full h-64 sm:h-80 object-cover mb-8"
              />
              <h2 className="font-headline text-xl text-green-950 tracking-wide mb-5">
                Why Join?
              </h2>
              <div className="w-10 h-0.5 bg-yellow-primary mb-6" />
              <ul className="space-y-4">
                {[
                  ['$150 / year', 'Play all day, every day — the card pays for itself in 15 rounds.'],
                  ['All-season access', 'The course is open year-round, including winter.'],
                  ['Support the course', 'All membership fees go directly back into course development.'],
                  ['Community', "Join a growing community of disc golfers on PEI's best course."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-primary" />
                    <div>
                      <p className="font-sans text-sm text-green-950 tracking-wide">{title}</p>
                      <p className="font-serif text-brown-primary text-sm leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {formState === 'success' ? (
                <div className="bg-green-50 p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                  <svg className="w-12 h-12 text-green-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-headline text-xl text-green-950 tracking-wide">Registration Received</h3>
                  <p className="font-sans font-light text-sm text-brown-primary tracking-wide leading-relaxed max-w-xs">
                    Thank you for supporting the course! Please e-transfer your membership fee to{' '}
                    <a href="mailto:info@glenaladalediscgolf.com" className="text-green-primary">
                      info@glenaladalediscgolf.com
                    </a>{' '}
                    and we will be in touch shortly.
                  </p>
                </div>
              ) : formState === 'error' ? (
                <div className="bg-red-50 p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                  <h3 className="font-headline text-xl text-red-primary tracking-wide">Something Went Wrong</h3>
                  <p className="font-sans font-light text-sm text-brown-primary tracking-wide leading-relaxed max-w-xs">
                    Please reach out directly at{' '}
                    <a href="mailto:info@glenaladalediscgolf.com" className="text-green-primary">
                      info@glenaladalediscgolf.com
                    </a>{' '}
                    to complete your registration.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className={labelClass}>Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional information..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="mt-8">
                    <p className="font-sans text-xs tracking-widest uppercase text-gray-500 mb-3">Waiver *</p>
                    <p className="font-serif text-xs text-gray-500 leading-relaxed mb-4">
                      I acknowledge and agree that I am voluntarily participating in the Glenaladale
                      Disc Golf Course (the "Course") operated by Glenaladale Disc Golf (103026 P.E.I.
                      Inc.). In consideration of being allowed to use the Course, I agree to the
                      following terms and conditions:
                    </p>
                    <div className="bg-gray-50 border border-gray-100 p-4 max-h-48 overflow-y-auto space-y-3 mb-5">
                      {waiverText.map(({ heading, body }) => (
                        <div key={heading}>
                          <p className="font-sans text-xs font-medium text-brown-primary tracking-wide">{heading}</p>
                          <p className="font-serif text-xs text-gray-500 leading-relaxed mt-1">{body}</p>
                        </div>
                      ))}
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="waiver"
                        checked={formData.waiver}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 accent-green-primary"
                      />
                      <span className="font-sans text-sm text-brown-primary tracking-wide">
                        I have read and agree to the above waiver
                      </span>
                    </label>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={!isValid || formState === 'processing'}
                      className={`w-full font-sans text-sm tracking-widest uppercase py-4 transition-colors flex items-center justify-center gap-3 ${
                        isValid && formState !== 'processing'
                          ? 'bg-green-primary text-white hover:bg-green-700 cursor-pointer'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {formState === 'processing' ? (
                        <>
                          <LoadingSpinner size="sm" light />
                          Submitting...
                        </>
                      ) : (
                        'Submit Registration'
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

export default MembershipsPage;
