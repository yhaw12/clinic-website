import React from 'react';
import { motion } from 'framer-motion';
import EnquireForm from '../../xtras/EnquireForm';
import AnimatedF from '../../xtras/AnimatedF';
import primarycare from '../../../assests/primary care.jpg';
import diagnostic from '../../../assests/blog/diagnostic.jpg';
import screening from '../../../assests/blog/health-fair.jpg';

const dropInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const BecomingPatient = () => (
  <>
    <main className="flex-grow">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Section 1 - Register at Our Facility */}
        <div className="
          max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto
          px-6 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch fade-up
        ">
          {/* Card Left */}
          <div className="bg-teal-900 text-white p-8 flex flex-col justify-between mt-8 relative">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Register at Our Facility</h2>
              <p className="text-3xl mb-4">
                Visit our clinic front desk to complete the registration process.
                Our friendly staff will guide you and answer any questions you have.
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-sm mt-4">
              Learn more
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Desktop Icon */}
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2
                w-16 h-16 lg:w-20 lg:h-20 bg-teal-900 rounded-full
                flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
              ">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>
          </div>
          {/* Image Right */}
          <div className="pb-12 relative">
            <img src={primarycare} alt="Register at Facility" className="w-full h-full object-cover" />
            {/* Mobile Icon */}
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2
              w-16 h-16 bg-teal-900 rounded-full
              flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
            ">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2 - Bring Your Documents */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="
          max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto
          px-6 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch fade-up
        ">
          {/* Image Left */}
          <div className="pb-12 order-2 md:order-1 relative">
            <img src={diagnostic} alt="Bring Documents" className="w-full h-full object-cover" />
            {/* Mobile Icon */}
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2
              w-16 h-16 bg-teal-900 rounded-full
              flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
            ">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
          {/* Card Right */}
          <div className="bg-teal-900 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-2">
            <h3 className="text-xl font-medium mb-4">Bring Your Documents</h3>
            <p className="text-3xl mb-4">
              Please bring your health insurance card and any relevant medical records. 
              This helps us quickly understand your history and provide tailored care.
            </p>
            <a href="#" className="inline-flex items-center text-sm">
              Preparation tips
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Desktop Icon */}
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2
                w-16 h-16 lg:w-20 lg:h-20 bg-teal-900 rounded-full
                flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
              ">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 3 - Schedule & Receive Care */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="
          max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto
          px-6 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch fade-up
        ">
          {/* Card Left */}
          <div className="bg-teal-900 text-white p-8 flex flex-col justify-between mt-8 relative">
            <h3 className="text-xl font-medium mb-4">Schedule & Receive Care</h3>
            <p className="text-3xl mb-4">
              Once registered, schedule your first consultation with our specialists. 
              Receive ongoing support and personalized treatment plans to achieve your best outcome.
            </p>
            <a href="#" className="inline-flex items-center text-sm">
              Book appointment
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Desktop Icon */}
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2
                w-16 h-16 lg:w-20 lg:h-20 bg-teal-900 rounded-full
                flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
              ">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>
          </div>
          {/* Image Right */}
          <div className="pb-12 relative">
            <img src={screening} alt="Schedule Care" className="w-full h-full object-cover" />
            {/* Mobile Icon */}
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2
              w-16 h-16 bg-teal-900 rounded-full
              flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
            ">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>

    <EnquireForm />
  </>
);

export default BecomingPatient;