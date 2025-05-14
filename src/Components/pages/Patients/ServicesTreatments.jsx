import React from "react";
import EnquireForm from "../../xtras/EnquireForm";
import AnimatedF from "../../xtras/AnimatedF";
import doctors from "../../../assests/image1.jpeg";
import mri from "../../../assests/mri.jpg";

const ServicesTreatments = () => {
  return (
    <>
  

      <main className="flex-grow">
        {/* Section 1 - Sports Injury and Orthopaedic Surgery */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch">
          <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative">
            <h2 className="text-2xl font-semibold mb-4">Sports Injury & Orthopaedic Surgery</h2>
            <p className="mb-4">
              From fractures to ligament repairs, our expert surgeons are here to restore your mobility and performance.
            </p>
            <a href="#" className="inline-flex items-center text-sm mt-4">
              Learn more
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>
          </div>

          <div className="pb-12 relative">
            <img src={doctors} alt="Orthopaedic Surgery" className="w-full h-full object-cover" />
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Physical Rehabilitation and Therapy */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch">
          <div className="pb-12 order-2 md:order-1 relative">
            <img src={mri} alt="Physical Therapy" className="w-full h-full object-cover" />
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>

          <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative order-1 md:order-2">
            <h3 className="text-xl font-medium mb-4">Physical Rehabilitation & Therapy</h3>
            <p className="mb-4">
              Regain strength and flexibility with personalized rehabilitation programs guided by experienced therapists.
            </p>
            <a href="#" className="inline-flex items-center text-sm">
              Explore services
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Joint Replacement and Imaging */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-16 mb-16 flex flex-col md:grid md:grid-cols-2 items-stretch">
          <div className="bg-purple-700 text-white p-8 flex flex-col justify-between mt-8 relative">
            <h3 className="text-xl font-medium mb-4">Joint Replacement & Imaging</h3>
            <p className="mb-4">
              Advanced diagnostics and modern joint procedures provide lasting relief and accurate results.
            </p>
            <p className="mb-4">
              Whether it’s a knee, hip, or shoulder – we’ve got you covered.
            </p>
            <a href="#" className="inline-flex items-center text-sm">
              View full list
              <svg className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="hidden md:flex justify-center mt-8 relative w-full">
              <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
                <div className="w-10 h-10 facebook-cutout">
                  <AnimatedF />
                </div>
              </div>
            </div>
          </div>

          <div className="pb-12 relative">
            <img src={doctors} alt="Joint Replacement" className="w-full h-full object-cover" />
            <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center overflow-hidden shadow-sm border-4 border-white">
              <div className="w-10 h-10 facebook-cutout">
                <AnimatedF />
              </div>
            </div>
          </div>
        </div>
      </main>

      <EnquireForm />
    </>
  );
};

export default ServicesTreatments;
