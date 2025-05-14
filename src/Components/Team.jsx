import React from 'react';
// import chairman from '../assests/chairman.jpg';
// import ceo from '../assests/ceo.jpg';
// import physician from '../assests/physician.jpg';
// import dermatologist from '../assests/dermatologist.jpg';
// import leadership from '../assests/leadership.jpg';
// import finance from '../assests/finance.jpg';
// import midwifery from '../assests/midwifery.jpg';

const teamMembers = [
//   { name: 'Professor', role: 'Chairman', image: chairman },
//   { name: 'Ebenezer Adu-Lartey', role: 'CEO', image: ceo },
//   { name: 'Dr. Romeo', role: 'Physician Specialist', image: physician },
//   { name: 'Mary', role: 'Dermatologist', image: dermatologist },
//   { name: 'Baba Osman', role: 'Mph Clinic Leadership', image: leadership },
//   { name: 'Gershon Tsordzo', role: 'Finance Manager', image: finance },
//   { name: 'Hilda Brakoh', role: 'MSc Midwifery', image: midwifery },
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
          >
            {/* <img src={member.image} alt={member.name} className="w-full h-64 object-cover" /> */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
