import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import doctors from '../../assests/professionals.jpg';
import EnquireForm from '../xtras/EnquireForm';

const branches = [
  {
    label: 'Kasoa',
    address: '123 Main Street, Kasoa, Ghana',
    phone: '+233 244 760 710',
    hours: 'Mon–Fri 9am–5pm',
  },
  {
    label: 'Sowutuom',
    address: '45 Accra Road, Sowutuom, Ghana',
    phone: '+233 244 760 710',
    hours: 'Mon–Fri 9am–5pm',
  },
];

export default function Contact() {
  return (
    <div className="font-inter text-gray-800">

      {/* Split Hero */}
      <header className="flex flex-col lg:flex-row h-screen">
        {/* Left Text */}
        <div className="lg:w-1/2 flex items-center justify-center bg-blue-800 text-white px-8">
          <div className="max-w-md space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">Get in Touch</h1>
            <p className="text-lg leading-relaxed">
              We’re here to answer your questions and schedule your care. Choose a branch below or send us an enquiry.
            </p>
            <a
              href="/patients/becoming-a-patient"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-full shadow-lg transition"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Right Map */}
        <div className="lg:w-1/2 relative">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3971.2188047162053!2d-0.4194325!3d5.53453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbb8537e77723%3A0x1be28a7ea6896355!2s....!5e0!3m2!1sen!2sgh!4v1679437896880!5m2!1sen!2sgh"
            width="500"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DGIGH Location"
          ></iframe>
        </div>
      </header>

      {/* Branch Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {branches.map((b) => (
          <div
            key={b.label}
            className="bg-white border-l-4 border-blue-600 rounded-lg shadow-md p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{b.label} Branch</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-3" /> {b.address}
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-600 mr-3" />
                <a href={`tel:${b.phone}`} className="hover:underline">
                  {b.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-3" />
                <a href="mailto:divinegroupinternational@gmail.com" className="hover:underline">
                  divinegroupinternational@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="text-blue-600 mr-3" /> {b.hours}
              </li>
            </ul>
          </div>
        ))}
      </section>

      {/* Scan Request */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src={doctors}
            alt="Scan Request"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Request Your Scans</h2>
            <p className="text-gray-700 leading-relaxed">
              Fill out the appropriate form to receive copies of your imaging data securely and promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Patient Form
              </a>
              <a
                href="#"
                className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Clinician Form
              </a>
            </div>
          </div>
        </div>
      </section>

            <EnquireForm />
    </div>
  );
}


