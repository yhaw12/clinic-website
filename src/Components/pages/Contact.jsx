// src/components/Contact.jsx
import React from 'react';

import doctors from "../../assests/professionals.jpg";
import EnquireForm from '../xtras/EnquireForm';

const Contact = () => {
  return (
    <div className="space-y-2">
      
      {/* --- Section 1: Get in touch today --- */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Google Map */}
        <div className="image">
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

        {/* Right: Contact Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Get in touch today</h2>
          <a href="#" className="inline-block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Book an appointment
          </a>
          <p className="text-gray-700">
            divinegroupinternational@gmail.com<br />
            Open 9 am–5 pm, Monday to Friday
          </p>

          {/* Locations list */}
          <div className="space-y-4">
            {[
              {
                name: 'Divine Sanitas Medical Center - Kasoa',
                details: '+233 244 760 710 • Mon–Fri 9 am–5 pm',
                email: 'divinegroupinternational@gmail.com'
              },
              {
                name: 'Divine Sanitas Medical Center - Sowutuom',
                details: '+233 244 760 710 • Mon–Fri 9 am–5 pm',
                email: 'divinegroupinternational@gmail.com'
              }
            ].map((loc) => (
              <div key={loc.name} className="space-y-1">
                <p className="font-medium text-gray-800">{loc.name}</p>
                <p className="text-gray-600">{loc.details}</p>
                <a href={`mailto:${loc.email}`} className="text-blue-600 hover:underline">
                  {loc.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: Copies of scans --- */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-blue-600">Do you need a copy of your scans?</h2>
          <p className="text-gray-700">
            Please use the applicable download form to complete a scan request:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>If you are a patient requesting your own imaging data, please fill out the form below.</li>
            <li>If you are requesting scans on behalf of a patient, please complete the clinician request form.</li>
          </ul>
          <div className="space-x-4">
            <a href="#" className="text-blue-600 hover:underline">
              Download Form – New patient
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Download Form – Clinician
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <img src={doctors} alt="Viewing scan images" className="w-full h-auto object-cover rounded-md shadow" />
      </section>

      {/* --- Section 3: Enquire Today form --- */}
      <EnquireForm />
    </div>
  );
};

export default Contact;
