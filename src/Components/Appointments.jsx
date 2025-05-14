import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const appointments = [
  { title: "Eye Specialist", description: "Expert eye care services for your vision health." },
  { title: "Obesity Specialist", description: "Customized solutions for weight management and wellness." },
  { title: "Gynaecologist", description: "Comprehensive care for women’s health." },
];

const Appointment = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const handleBookNow = (title) => {
    setSelectedSpecialist(title);
    setShowForm(true);
  };

  return (
    <section className="py-16 bg-white bg-opacity-60 backdrop-blur-sm text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Book an Appointment</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {appointments.map((appt) => (
          <div
            key={appt.title}
            className="bg-white bg-opacity-30 backdrop-blur-sm text-gray-800 p-6 rounded-lg shadow-lg w-72 transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2">{appt.title}</h3>
            <p className="text-sm mb-4">{appt.description}</p>
            <button
              onClick={() => handleBookNow(appt.title)}
              className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      {showForm && (
        <AppointmentForm
          specialist={selectedSpecialist}
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
};

export default Appointment;
