import React from 'react';

function Personnel() {
  const team = [
    { name: 'Professor', role: 'Chairman' },
    { name: 'Ebenezer Adu-Lartey', role: 'CEO' },
    { name: 'Dr. Romeo', role: 'Physician Specialist' },
    { name: 'Mary', role: 'Dermatologist' },
    { name: 'Baba Osman', role: 'MPH Clinic Leadership' },
    { name: 'Gershon Tsordzo', role: 'Finance Manager' },
    { name: 'Hilda Brakoh', role: 'MSc Midwifery' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-color-2 rounded-full mx-auto mb-4 transform transition-transform duration-300 hover:scale-105" />
              <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personnel;