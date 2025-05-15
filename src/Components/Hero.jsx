import React from 'react';
import { motion } from 'framer-motion';
import teamDoctors from "../assests/health-team.jpg";
import servicesOverview from "../assests/medical-team.jpg";
import affordableHealthcare from "../assests/africa clinic.jpeg";
import BlogNews from './xtras/BlogNews';
import AnimatedF from './xtras/AnimatedF';

const dropInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};


const Hero = () => {
  return (
    <main className="flex-grow">
      {/* Section 1 — Expert Multispecialty Care */}
      <motion.div
        className="max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch"
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-1">
          <h3 className="text-xl font-medium mb-4">Expert Multispecialty Care</h3>
          <p className="text-base md:text-lg">We offer comprehensive healthcare services, from primary care to specialized treatment.</p>
          <p className="text-base md:text-lg">Our experts are equipped with advanced medical technology to provide accurate diagnosis and treatment.</p>
          <p className="text-base md:text-lg">We serve individuals and families with compassion, excellence, and integrity.</p>
          <a href="#" className="inline-flex items-center text-sm mt-4">
            Find out more
            <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <div className="relative w-full flex justify-center mt-8 hidden md:block">
            <a href="https://web.facebook.com/profile.php?id=100068554957013" target="_blank" rel="noopener noreferrer">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="pb-12 relative order-2 md:order-2">
          <img src={teamDoctors} alt="Healthcare professionals" className="w-full h-full object-cover" />
          <a href="https://web.facebook.com/profile.php?id=100068554957013" target="_blank" rel="noopener noreferrer">
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Section 2 — Our Services */}
      <motion.div
        className="max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch"
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="pb-12 order-2 md:order-1 relative">
          <img src={servicesOverview} alt="Medical services overview" className="w-full h-full object-cover" />
          <a href="https://web.facebook.com/profile.php?id=100068554957013" target="_blank" rel="noopener noreferrer">
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </a>
        </div>
        <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-2">
          <h3 className="text-xl font-medium mb-4">Our Services</h3>
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg">
            <li>Emergency care and outpatient services</li>
            <li>General medicine and family health</li>
            <li>Specialized care in cardiology, endocrinology, orthopaedics & more</li>
            <li>Imaging & diagnostics including ultrasound and lab tests</li>
          </ul>
          <a href="#" className="inline-flex items-center text-sm">
            Services & Treatments
            <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <div className="relative w-full flex justify-center mt-8 hidden md:block">
            <a href="https://web.facebook.com/profile.php?id=100068554957013" target="_blank" rel="noopener noreferrer">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Section 3 — Accessible Healthcare for Everyone */}
      <motion.div
        className="max-w-screen-xl mx-auto max-[650px]:mx-0 mx-4 md:mx-auto px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch"
        initial={{ y: -50, opacity: 0 }}
        variants={dropInVariants}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-1">
          <h3 className="text-xl font-medium mb-4">Accessible Healthcare for Everyone</h3>
          <p className="text-base md:text-lg">We provide affordable care options without compromising quality.</p>
          <p className="text-base md:text-lg">Choose between private, corporate, or insurance-based plans.</p>
          <p className="text-base md:text-lg">Our mission is to make quality healthcare accessible to all walks of life.</p>
          <a href="#" className="inline-flex items-center text-sm">
            Billing & Insurance
            <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <div className="relative w-full flex justify-center mt-8 hidden md:block">
            <a href="https://web.facebook.com/profile.php?id=100068554957013" target="_blank" rel="noopener noreferrer">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="pb-12 relative order-2 md:order-2">
          <img src={affordableHealthcare} alt="Affordable healthcare" className="w-full h-full object-cover" />
          <a href="https://web.facebook.com/profile.php?id=100068554957013" target="_blank" rel="noopener noreferrer">
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </a>
        </div>
      </motion.div>

      <BlogNews />
    </main>
  );
};

export default Hero;
