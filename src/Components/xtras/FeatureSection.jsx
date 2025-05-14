import React from 'react';
import useScrollAnimation from './useScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureSection = ({ imageSrc, imageAlt, reverse = false, children, showFacebookInImage = false }) => {
  useScrollAnimation('.fade-up');

  const contentOrder = reverse ? 'md:order-2' : 'md:order-1';
  const imageOrder = reverse ? 'md:order-1' : 'md:order-2';

  return (
    <div className="
      max-w-screen-xl mx-auto
      max-[650px]:mx-0 mx-4 md:mx-auto
      px-4 md:px-16 mb-16 fade-up
    ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Text Content */}
        <div className={`order-1 ${contentOrder} bg-purple-700 text-white p-8 md:p-10 flex flex-col justify-between relative`}>
          {children}
        </div>

        {/* Image + Animated F */}
        <div className={`order-2 ${imageOrder} relative overflow-hidden`}>
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />

          {showFacebookInImage && (
            <AnimatePresence>
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-purple-700 flex items-center justify-center border-4 border-white shadow-sm"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 222"
                  width="70%"
                  height="70%"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <motion.g
                    transform="matrix(2.97,0,0,2.97,64,115)"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                  >
                    <motion.path
                      d="M-10.605,34.515 C-10.605,34.515 -10.605,-9.424 -10.605,-9.424 C-10.605,-17.937 -10.224,-25.359 -5.529,-29.999 C-2.429,-33.063 2.192,-34.515 8.596,-34.441 C8.596,-34.441 10.605,-34.441 10.605,-34.441"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                    <motion.path
                      d="M-10.605,-7.869 C-10.605,-7.869 4.606,-7.869 4.606,-7.869"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: 'easeInOut', delay: 0.8 }}
                    />
                  </motion.g>
                </svg>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;