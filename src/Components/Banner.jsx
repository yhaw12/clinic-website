import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import bannerConfig from './xtras/bannerConfig';
import InfoCard from './xtras/InfoCard';
import banner1 from '../assests/dsmcKasoa.jpg';


const Banner = () => {
  const location = useLocation();
  const path = location.pathname;

  // Get banner data based on the current path, with a default fallback
  const bannerData = bannerConfig[path] || {
    image: banner1,
    altText: 'Default',
    titleSmall: 'Welcome',
    titleLarge: 'Default banner',
    link: '#',
    infoCardBg: 'bg-purple-900',
  };

  const bannersToShow = Array.isArray(bannerData) ? bannerData : [bannerData];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set up carousel only if there are multiple banners
  useEffect(() => {
    if (bannersToShow.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannersToShow.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [bannersToShow.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="relative w-full md:pb-36 border-b border-gray-300">
      <div className="relative h-[60vh] md:h-[90vh] overflow-hidden">
        {bannersToShow.map((banner, index) => (
          <div
            key={index}
            className={`${bannersToShow.length === 1 || currentSlide === index ? 'block' : 'hidden'} w-full h-full`}
          >
            <img
              src={banner.image}
              alt={banner.altText}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* InfoCard with dynamic content and background color */}
      <InfoCard
        titleSmall={bannersToShow[currentSlide].titleSmall}
        titleLarge={bannersToShow[currentSlide].titleLarge}
        link={bannersToShow[currentSlide].link}
        bgColor={bannersToShow[currentSlide].infoCardBg || 'bg-purple-900'}
      />

      {/* Slide indicators, shown only for carousel */}
      {bannersToShow.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center z-20">
          {bannersToShow.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-purple-900' : 'bg-[#5b5b5a] bg-opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Banner;