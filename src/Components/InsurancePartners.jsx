import React from 'react';
import cosmopolitan from '../assests/insurance/ghic.png';
import acacia from '../assests/insurance/acacia.png';
import phoenix from '../assests/insurance/gab indur.png';
import ace from '../assests/insurance/apex.png';
// import millennium from '../assets/insurance/millennium.svg';
import nhis from '../assests/insurance/nhis.jpg';

const logos = [
  { src: cosmopolitan, alt: 'GHIC Health Insurance' },
  { src: acacia, alt: 'Acacia Health Insurance' },
  { src: phoenix, alt: 'Gab Health Insurance' },
  { src: ace, alt: 'Apex Medical Insurance' },
  // { src: millennium, alt: 'Millennium Insurance Company Limited' },
  { src: nhis, alt: 'National Health Insurance Scheme' },
];

const InsurancePartners = () => {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Our Insurance Partners
      </h2>
      <div className="carousels overflow-hidden">
        <div className="logos flex" style={{ animation: 'slideSide 20s linear infinite' }}>
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="w-32 mx-4" />
          ))}
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo.src} alt={logo.alt} className="w-32 mx-4" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;

