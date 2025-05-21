import React from 'react';

const InfoCard = ({ titleSmall, titleLarge, link, bgColor = 'bg-purple-900' }) => {
  const isHex = bgColor.startsWith('#');
  const tailwindClass = !isHex ? bgColor : '';
  const inlineStyle = isHex ? { backgroundColor: bgColor } : {};

  return (
    <div
      className={`w-full md:w-[40%] ${tailwindClass} text-white
        px-6 md:px-10 py-16 md:py-20 shadow-xl
        md:absolute md:right-40 md:-bottom-24 md:z-1
        max-[770px]:mb-20 mb-48
        max-[570px]:mx-auto max-[570px]:w-[85%] max-[570px]:px-3
        z-10 overflow-x-hidden`}
      style={inlineStyle}
    >
      <h2 className="text-lg md:text-xl font-light mb-6">{titleSmall}</h2>
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-8">
        {titleLarge}
      </h1>
      <a href={link} className="inline-flex items-center text-base md:text-lg font-medium hover:underline mt-6">
        Find out more
        <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default InfoCard;
