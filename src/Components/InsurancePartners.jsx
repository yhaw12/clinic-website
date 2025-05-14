import React from 'react';
// import partner1 from '../assets/partner1.png';
// import partner2 from '../assets/partner2.png';
// import partner3 from '../assets/partner3.png';

const InsurancePartners = () => {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Our Insurance Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* <img src={partner1} alt="Partner 1" className="w-32 object-contain filter grayscale" />
        <img src={partner2} alt="Partner 2" className="w-32 object-contain filter grayscale" />
        <img src={partner3} alt="Partner 3" className="w-32 object-contain filter grayscale" /> */}
      </div>
    </section>
  );
};

export default InsurancePartners;
