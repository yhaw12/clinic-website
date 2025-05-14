import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';


const AnimatedF = () => {
    const bottomControls = useAnimation();
    const topControls = useAnimation();
  
    // Animation variants for paths
    const pathVariants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: custom => ({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut', delay: custom.delay || 0 }
      }),
    };
  
    // Variants for group visibility
    const groupVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    };
  
    useEffect(() => {
      (async () => {
        // Animate bottom-to-top stroke
        await bottomControls.start('visible');
        // After bottom animation completes, animate top-to-bottom reversed stroke
        await topControls.start('visible');
      })();
    }, [bottomControls, topControls]);
  
    // Path definitions
    const verticalPath = "M-10.605,34.515 C-10.605,34.515 -10.605,-9.424 -10.605,-9.424 C-10.605,-17.937 -10.224,-25.359 -5.529,-29.999 C-2.429,-33.063 2.192,-34.515 8.596,-34.441 C8.596,-34.441 10.605,-34.441 10.605,-34.441";
    const horizontalPath = "M-10.605,-7.869 C-10.605,-7.869 4.606,-7.869 4.606,-7.869";
  
    const reversedVerticalPath = "M10.605,-34.441 C10.605,-34.441 8.596,-34.441 8.596,-34.441 C2.192,-34.515 -2.429,-33.063 -5.529,-29.999 C-10.224,-25.359 -10.605,-17.937 -10.605,-9.424 C-10.605,-9.424 -10.605,34.515 -10.605,34.515";
    const reversedHorizontalPath = "M4.606,-7.869 C4.606,-7.869 -10.605,-7.869 -10.605,-7.869";
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 101 222"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Bottom-to-top group */}
        <motion.g
          transform="matrix(2.97,0,0,2.97,64,115)"
          stroke="white"
          strokeWidth="4"
          fill="none"
          variants={groupVariants}
          initial="hidden"
          animate={bottomControls}
          onAnimationComplete={() => bottomControls.set('visible')}
        >
          <motion.path
            d={verticalPath}
            variants={pathVariants}
            custom={{ delay: 0 }}
            initial="hidden"
            animate={bottomControls}
          />
          <motion.path
            d={horizontalPath}
            variants={pathVariants}
            custom={{ delay: 0.3 }}
            initial="hidden"
            animate={bottomControls}
          />
        </motion.g>
  
        {/* Top-to-bottom group */}
        <motion.g
          transform="matrix(2.97,0,0,2.97,64,115)"
          stroke="white"
          strokeWidth="4"
          fill="none"
          variants={groupVariants}
          initial="hidden"
          animate={topControls}
        >
          <motion.path
            d={reversedVerticalPath}
            variants={pathVariants}
            custom={{ delay: 0 }}
            initial="hidden"
            animate={topControls}
          />
          <motion.path
            d={reversedHorizontalPath}
            variants={pathVariants}
            custom={{ delay: 0.3 }}
            initial="hidden"
            animate={topControls}
          />
        </motion.g>
      </svg>
    );
  };


export default AnimatedF