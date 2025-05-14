import React from "react";
import { FaStethoscope, FaChild, FaFemale, FaMicroscope } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "General Medicine",
    description:
      "Comprehensive care for all ages, including routine check-ups, vaccinations, and management of chronic conditions like diabetes and hypertension.",
    icon: FaStethoscope,
  },
  {
    id: 2,
    name: "Pediatrics",
    description:
      "Specialized care for children, from newborn check-ups to adolescent health, ensuring healthy development.",
    icon: FaChild,
  },
  {
    id: 3,
    name: "Women’s Health",
    description:
      "Gynecological care, prenatal and postnatal services, and women’s wellness programs tailored to your needs.",
    icon: FaFemale,
  },
  {
    id: 4,
    name: "Diagnostics",
    description:
      "Advanced diagnostic services, including X-rays, ultrasounds, and laboratory tests, for accurate and timely diagnosis.",
    icon: FaMicroscope,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#32274D] to-[#4a3a6e] text-white py-20 text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Discover the comprehensive healthcare services offered at Divine Sanitas Medical Clinic, designed to meet your unique needs.
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
          Our dedicated team provides high-quality, compassionate care in a welcoming environment, ensuring your health and well-being are our top priorities.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 service-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <service.icon className="text-4xl text-[#32274D] mr-4" />
                <h2 className="text-2xl font-semibold text-[#32274D]">
                  {service.name}
                </h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-[#32274D] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#4a3a6e] transition-transform duration-300 transform hover:scale-105"
          >
            Book an Appointment
          </a>
        </div>
      </main>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        .service-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Services;