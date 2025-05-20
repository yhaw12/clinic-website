import React from "react";
import { motion } from "framer-motion";
import EnquireForm from "../../xtras/EnquireForm";
import AnimatedF from "../../xtras/AnimatedF";
import paymentImage from "../../../assests/clinic payment.jpg";
import billingSupportImage from "../../../assests/front desk.jpg";

const dropInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MakingPayment = () => {
  return (
    <>
      <main className="flex-grow">
        {/* Section 1 - Payment Options */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          variants={dropInVariants}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch">
            <div className="bg-orange-900 text-white p-8 flex flex-col justify-between mt-8 relative">
              <h2 className="text-2xl font-semibold mb-4">Flexible Payment Options</h2>
              <p className="text-lg mb-4">
                We offers secure and convenient payment methods to suit your preferences:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Online payment via credit/debit card</li>
                <li>Mobile money or direct bank transfers</li>
                <li>On-site payment using card or cash</li>
                <li>Electronic invoices and receipts</li>
              </ul>
              <a href="#" className="inline-flex items-center text-sm mt-4">
                Learn more
                <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="hidden md:flex justify-center mt-8 relative w-full">
                <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-orange-900 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                  <div className="w-10 h-10 facebook-cutout">
                    <AnimatedF />
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-12 relative">
              <img src={paymentImage} alt="Payment Options" className="w-full h-full object-cover" />
              <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2 - Billing Support */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          variants={dropInVariants}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch">
            <div className="pb-12 order-2 md:order-1 relative">
              <img src={billingSupportImage} alt="Billing Support" className="w-full h-full object-cover" />
              <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-900 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>

            <div className="bg-orange-900 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-2">
              <h3 className="text-xl font-medium mb-4">Need Help with Payments?</h3>
              <p className="text-lg mb-4">
                Our billing department is here to assist you with any questions or issues related to your payment.
              </p>
              <p className="text-lg mb-4">
                We ensure transparency and support throughout the billing process.
              </p>
              <a href="#" className="inline-flex items-center text-sm">
                Contact Billing Support
                <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="hidden md:flex justify-center mt-8 relative w-full">
                <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-orange-900 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                  <div className="w-10 h-10 facebook-cutout">
                    <AnimatedF />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <EnquireForm />
    </>
  );
};

export default MakingPayment;