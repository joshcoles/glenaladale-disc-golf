import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader: React.FC<Props> = ({ title, subtitle, image }) => {
  if (image) {
    return (
      <section className="relative pt-16 lg:pt-20">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-green-950/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="font-headline text-3xl sm:text-4xl text-white tracking-wide">{title}</h1>
            {subtitle && (
              <p className="mt-3 font-sans font-light text-green-100 text-sm sm:text-base max-w-xl tracking-wide">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16 lg:pt-20 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <h1 className="font-headline text-3xl sm:text-4xl text-white tracking-wide">{title}</h1>
        {subtitle && (
          <p className="mt-4 font-sans font-light text-green-200 text-sm sm:text-base max-w-2xl mx-auto tracking-wide leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-16 h-0.5 bg-yellow-primary mx-auto" />
      </div>
    </section>
  );
};

export default PageHeader;
