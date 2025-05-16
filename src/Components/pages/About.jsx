import React, { useState } from "react";
import { FaHandsHelping, FaUserMd, FaGlobeAfrica } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      icon: <FaHandsHelping className="text-4xl text-blue-800 mb-4" />,
      title: "Our Mission",
      content:
        "Established in 2010, Divine Sanitas Medical Clinic is committed to providing exceptional healthcare services with a focus on patient-centered care, advanced medical technology, and highly skilled professionals. Our goal is to be the trusted healthcare provider in our community.",
    },
    team: {
      icon: <FaUserMd className="text-4xl text-blue-800 mb-4" />,
      title: "Our Team",
      content:
        "Our dedicated team includes experienced General Practitioners, Nurses, Pediatricians, and Women’s Health Specialists, all working together to ensure personalized care for every patient.",
    },
    vision: {
      icon: <FaGlobeAfrica className="text-4xl text-blue-800 mb-4" />,
      title: "Our Vision",
      content:
        "We aim to deliver world-class medical care, making quality healthcare accessible to all in Ghana and beyond.",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x600')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">About Divine Sanitas</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Delivering compassionate and innovative healthcare since 2010
          </p>
        </div>
      </div>

      {/* Tabbed Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="md:w-1/4 flex md:flex-col gap-4">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? `bg-blue-800 text-white shadow-lg`
                    : `bg-white text-blue-800 hover:bg-gray-100`
                }`}
              >
                {tabs[tab].icon}
                {tabs[tab].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="md:w-3/4 bg-white p-8 rounded-lg shadow-lg animate-slide-up">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              {tabs[activeTab].title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {tabs[activeTab].content}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Ready to Connect?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you have questions or need care, we’re here for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
          </a>
        </div>
      </main>

    

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
