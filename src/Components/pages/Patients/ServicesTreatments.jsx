import React from "react";
import { motion } from "framer-motion";
import EnquireForm from "../../xtras/EnquireForm";
import AnimatedF from "../../xtras/AnimatedF";
import primaryCare from "../../../assests/primary care.jpg";
import screenings from "../../../assests/blog/health-fair.jpg";
import chronicCare from "../../../assests/banners/divine clinic.jpg";

const dropInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ServiceSection = ({ title, description, subText, linkText, image, reverse }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-6 md:px-16 mb-16 
      flex flex-col md:grid md:grid-cols-2 items-stretch
    `}>
      {/* Image */}
      <div className={`relative pb-12 ${reverse ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-lime-800 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
          <div className="w-10 h-10 facebook-cutout">
            <AnimatedF />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className={`
        bg-lime-800 text-white p-8 flex flex-col justify-between mt-8 relative
        ${reverse ? 'order-1 md:order-2' : 'order-2 md:order-1'}
      `}>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-4 text-2xl">{description}</p>
        {subText && <p className="mb-4 text-2xl">{subText}</p>}
        <a href="#" className="inline-flex items-center text-sm underline">
          {linkText}
          <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 기본적으로는-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>

        {/* Desktop Icon */}
        <div className="hidden md:flex justify-center mt-8 relative w-full">
          <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-lime-800 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
            <div className="w-10 h-10 facebook-cutout">
              <AnimatedF />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesTreatments = () => {
  return (
    <>
      <main className="flex-grow">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          variants={dropInVariants}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ServiceSection
            title="Primary Care Services"
            description="Comprehensive care for all ages, including routine check-ups, vaccinations, and management of acute and chronic conditions."
            linkText="Learn more"
            image={primaryCare}
          />
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          variants={dropInVariants}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ServiceSection
            title="Preventive Health Screenings"
            description="Early detection through blood tests, imaging, and wellness exams to keep you healthy and catch issues early."
            linkText="Explore services"
            image={screenings}
            reverse
          />
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          variants={dropInVariants}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ServiceSection
            title="Chronic Disease Management"
            description="Personalized plans to manage conditions like diabetes, hypertension, and asthma, improving your quality of life."
            subText="Our team supports you with education and ongoing care."
            linkText="View programs"
            image={chronicCare}
          />
        </motion.div>
      </main>

      <EnquireForm />
    </>
  );
};

export default ServicesTreatments;