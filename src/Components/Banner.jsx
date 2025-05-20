import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import bannerConfig from './xtras/bannerConfig';
import InfoCard from './xtras/InfoCard';
import banner1 from '../assests/dsmcKasoa.jpg';

const Banner = () => {
  const { pathname: path } = useLocation();

  // Get raw config or default placeholder
  const rawConfig = bannerConfig[path] || {};
  const normalize = (item) => ({
    image: item.image || banner1,
    altText: item.altText || 'Default',
    titleSmall: item.titleSmall || 'Welcome',
    titleLarge: item.titleLarge || 'Default banner',
    link: item.link || '#',
    infoCardBg: item.infoCardBg || 'bg-purple-900',
  });
  const bannersToShow = Array.isArray(rawConfig)
    ? rawConfig.map(normalize)
    : [normalize(rawConfig)];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset currentSlide when path changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [path]);

  // Slide interval for multiple banners
  useEffect(() => {
    if (bannersToShow.length > 1) {
      const id = setInterval(
        () => setCurrentSlide((prev) => (prev + 1) % bannersToShow.length),
        5000
      );
      return () => clearInterval(id);
    }
  }, [bannersToShow.length]);

  const goToSlide = (idx) => setCurrentSlide(idx);

  return (
    <section className="relative w-full md:pb-36 border-b border-gray-300">
      <div className="relative h-[60vh] md:h-[90vh] overflow-hidden">
        {bannersToShow.map((banner, idx) => (
          <div
            key={idx}
            className={`${bannersToShow.length === 1 || currentSlide === idx ? 'block' : 'hidden'} w-full h-full`}
          >
            <img
              src={banner.image}
              alt={banner.altText}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <InfoCard
        titleSmall={bannersToShow[currentSlide].titleSmall}
        titleLarge={bannersToShow[currentSlide].titleLarge}
        link={bannersToShow[currentSlide].link}
        bgColor={bannersToShow[currentSlide].infoCardBg}
      />

      {bannersToShow.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center z-20">
          {bannersToShow.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`mx-1 w-3 h-3 rounded-full ${
                currentSlide === idx ? 'bg-purple-900' : 'bg-[#5b5b5a] bg-opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Banner;