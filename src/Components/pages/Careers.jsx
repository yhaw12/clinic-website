
import React from "react";
import { Phone, Mail, MapPin, ChevronRight, Users, Stethoscope, Heart, Star } from "lucide-react";
import ContactCard from "../xtras/ContactCard";

const Careers = () => {
  const benefits = [
    {
      title: "Collaborative Environment",
      description: "Work alongside dedicated professionals who support each other.",
      icon: <Users className="h-8 w-8 text-[#32274D]" />
    },
    {
      title: "Professional Growth",
      description: "Ongoing training and development opportunities.",
      icon: <Star className="h-8 w-8 text-[#32274D]" />
    },
    {
      title: "Patient-Centered Care",
      description: "Make a real difference in patients' lives every day.",
      icon: <Heart className="h-8 w-8 text-[#32274D]" />
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art equipment and comfortable work environment.",
      icon: <Stethoscope className="h-8 w-8 text-[#32274D]" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Banner */}
      <div className="bg-[#32274D] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light">
            Build a rewarding career at Divine Sanitas Medical Clinic where your passion for healthcare makes a difference.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
            <h2 className="text-3xl font-bold text-[#32274D] mb-6">
              Careers at Divine Sanitas Medical Clinic
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Divine Sanitas Medical Clinic is dedicated to providing exceptional healthcare to our
              community. We value compassionate, skilled professionals who share our commitment 
              to patient-centered care and medical excellence.
            </p>
            <p className="text-gray-700 text-lg">
              We foster a supportive environment where healthcare professionals can grow, innovate, 
              and make meaningful contributions to our patients' wellbeing.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#32274D] mb-8">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#32274D] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Opportunities Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#32274D]/10 px-8 py-6">
              <h2 className="text-2xl font-bold text-[#32274D]">
                Current Opportunities
              </h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6">
                While we are not currently hiring, we welcome expressions of interest from
                qualified healthcare professionals in the following roles:
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="h-5 w-5 text-[#32274D] mr-2" />
                  <span>General Practitioners</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="h-5 w-5 text-[#32274D] mr-2" />
                  <span>Registered Nurses</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="h-5 w-5 text-[#32274D] mr-2" />
                  <span>Pediatricians</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="h-5 w-5 text-[#32274D] mr-2" />
                  <span>Midwives</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#32274D] mb-3">Contact Us About Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  To inquire about future positions, please send your CV and cover letter or reach out directly:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#32274D] mr-3" />
                    <a href="tel:+233244760710" className="text-blue-600 hover:underline">
                      0244 760 710
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#32274D] mr-3" />
                    <a href="mailto:careers@divinesanitas.com" className="text-blue-600 hover:underline">
                      careers@divinesanitas.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Card Section */}
        <section className="flex justify-center">
          <ContactCard />
        </section>
      </main>
    </div>
  );
};

export default Careers;