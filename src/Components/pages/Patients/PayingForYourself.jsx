import React from 'react';
import { motion} from 'framer-motion';
import EnquireForm from '../../xtras/EnquireForm';
import AnimatedF from '../../xtras/AnimatedF';
import transparentFees from '../../../assests/flexible payment.jpeg';
import pricingDetails from '../../../assests/clinic money.webp';
import paymentMethods from '../../../assests/momo.webp';

const dropInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const PayingForYourself = () => (
  <>
    <main className="flex-grow">
      {/* Section 1 - Transparent Fees */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="
          max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto
          px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch fade-up
        ">
          {/* Card Left */}
          <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Transparent Fees</h2>
              <p className="mb-4">
                All our consultation and diagnostic fees are listed transparently on 
                <a href="https://dgigh.org" className="underline">Divine Sanitas</a>,
                ensuring you know exactly what to expect before you visit.
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-md mt-4">
              Find out more
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Desktop Icon */}
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2
                w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full
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
            <img src={transparentFees} alt="Transparent Fees" className="w-full h-full object-cover" />
            {/* Mobile Icon */}
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2
              w-16 h-16 bg-purple-700 rounded-full
              flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
            ">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2 - Clear Treatment Pricing */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
       V
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="
          max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto
          px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch fade-up
        ">
          {/* Image Left */}
          <div className="pb-12 order-2 md:order-1 relative">
            <img src={pricingDetails} alt="Treatment Pricing" className="w-full h-full object-cover" />
            {/* Mobile Icon */}
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2
              w-16 h-16 bg-purple-700 rounded-full
              flex items-center justify-center overflow-hidden shadow-sm border-4 border-white
            ">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
          {/* Card Right */}
          <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-2">
            <h3 className="text-xl font-medium mb-4">Clear Treatment Pricing</h3>
            <p className="mb-4">
              Detailed breakdowns of each procedure are available on 
              <a href="https://dgigh.org" className="underline">Divine Sanitas</a>.
              Plan your care with confidence, knowing there are no hidden costs.
            </p>
            <a href="#" className="inline-flex items-center text-md">
              View pricing details
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Desktop Icon */}
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2
                w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full
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

      {/* Section 3 - Flexible Payment Methods */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="
          max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto
          px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch fade-up
        ">
          {/* Card Left */}
          <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative">
            <h3 className="text-xl font-medium mb-4">Flexible Payment Methods</h3>
            <p className="mb-4">
              We accept card, bank transfer, and mobile money. Choose the option that suits you best.
            </p>
            <p className="mb-4">
              For special cases, inquire about our financial assistance plans at 
              <a href="https://dgigh.org" className="underline">Divine Sanitas</a>.
            </p>
            <a href="#" className="inline-flex items-center text-md">
              Learn more
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Desktop Icon */}
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2
                w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full
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
            <img src={paymentMethods} alt="Payment Options" className="w-full h-full object-cover" />
            {/* Mobile Icon */}
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2
              w-16 h-16 bg-purple-700 rounded-full
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

export default PayingForYourself;