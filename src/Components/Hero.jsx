import React from 'react';
import mri from "../assests/mri.jpg";
import doctors from "../assests/professionals.jpg";
import BlogNews from './xtras/BlogNews';
import useScrollAnimation from './xtras/useScrollAnimation';
import AnimatedF from './xtras/AnimatedF';



const Hero = () => {
  useScrollAnimation('.fade-up');

  return (
    <main className="flex-grow">
      {/* Section 1 - Card Left, Image Right */}
      <div className="
        max-w-screen-xl 
        mx-auto 
        max-[650px]:mx-0
        mx-4 md:mx-auto
        px-16 
        mb-16 
        flex 
        flex-col 
        md:grid 
        md:grid-cols-2 
        items-stretch 
        fade-up
      ">
        {/* Card */}
        <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative">
          <div>
            <p className="mb-4">
              We have more than 200 specialists from surgeons to sports physicians, rheumatologists, pain management specialists and radiologists.
            </p>
            <p className="mb-4">
              We diagnose and treat thousands of patients every year, from elite and amateur athletes to injuries from accidents and other orthopaedic conditions.
            </p>
            <p className="mb-4">
              You'll receive the latest evidence-based treatment, safely and with outstanding care, to help you achieve your best outcome.
            </p>
          </div>
          <a href="#" className="inline-flex items-center text-sm mt-4">
            Find out more
            <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Facebook SVG for Desktop View */}
          <div className="relative w-full flex justify-center mt-8 hidden md:block">
            <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="pb-12 relative">
          <img src={doctors} alt="Doctors" className="w-full h-full object-cover" />
          {/* Facebook SVG for Mobile View */}
          <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
            <div className="w-10 h-10 facebook-cutout">
              <AnimatedF />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Image Left, Card Right */}
      <div className="
        max-w-screen-xl 
        mx-auto 
        max-[650px]:mx-0
        mx-4 md:mx-auto
        px-16 
        mb-16 
        flex 
        flex-col 
        md:grid 
        md:grid-cols-2 
        items-stretch 
        fade-up
      ">
        {/* Image (mobile bottom) */}
        <div className="pb-12 order-2 md:order-1 relative">
          <img src={mri} alt="MRI Scan" className="w-full h-full object-cover" />
          {/* Facebook SVG for Mobile View */}
          <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
            <div className="w-10 h-10 facebook-cutout">
              <AnimatedF />
            </div>
          </div>
        </div>
        {/* Card (mobile top) */}
        <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-2">
          <h3 className="text-xl font-medium mb-4">Our services</h3>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Fast access to diagnostic scanning - MRI, X-ray, ultrasound and CT</li>
            <li>Diagnosis and treatment for musculoskeletal and sports injuries</li>
            <li>World-class orthopaedic and spinal surgeons</li>
            <li>Robotic-arm assisted surgery for joint replacements</li>
          </ul>
          <a href="#" className="inline-flex items-center text-sm">
            Services & Treatments
            <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Facebook SVG for Desktop View */}
          <div className="relative w-full flex justify-center mt-8 hidden md:block">
            <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Card Left, Image Right */}
      <div className="
        max-w-screen-xl 
        mx-auto 
        max-[650px]:mx-0
        mx-4 md:mx-auto
        px-16 
        mb-16 
        flex 
        flex-col 
        md:grid 
        md:grid-cols-2 
        items-stretch 
        fade-up
      ">
        {/* Card */}
        <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative">
          <h3 className="text-xl font-medium mb-4">Accessible treatment</h3>
          <p className="mb-4">At Fortius Clinic you can choose to pay for treatment yourself or use your private health insurance.</p>
          <p className="mb-4">We offer transparent and competitive pricing along with rapid access to our leading consultants.</p>
          <p className="mb-4">Our flexible payment plans allow you to spread the cost of your surgery with monthly repayments.</p>
          <p className="mb-4">Our flexible payment plans allow you to spread the cost of your surgery with monthly repayments.</p>
          <a href="#" className="inline-flex items-center text-sm">
            Paying for yourself
            <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          {/* Facebook SVG for Desktop View */}
          <div className="relative w-full flex justify-center mt-8 hidden md:block">
            <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="pb-12 relative">
          <img src={doctors} alt="Doctors Smiling" className="w-full h-full object-cover" />
          {/* Facebook SVG for Mobile View */}
          <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
            <div className="w-10 h-10 facebook-cutout">
              <AnimatedF />
            </div>
          </div>
        </div>
      </div>

      <BlogNews />
    </main>
  );
};

export default Hero;