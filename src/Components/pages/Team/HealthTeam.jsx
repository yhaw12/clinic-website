import React from 'react';
import placeholder from '../../../assests/dgi.jpg'; 

const healthProfiles = [
  {
    name: 'Dr. Romeo',
    role: 'Physician Specialist',
    bio: 'Dr. Romeo has over 15 years of experience in internal medicine, specializing in chronic disease management.'
  },
  {
    name: 'Mary',
    role: 'Dermatologist',
    bio: 'Mary is a board-certified dermatologist with a focus on skin cancer prevention and cosmetic dermatology.'
  },
  {
    name: 'Hilda Brakoh',
    role: 'MSc Midwifery',
    bio: 'Hilda is an experienced midwife dedicated to providing compassionate care to expectant mothers.'
  },
];

const HealthTeam = () => (
  <>
    <main className="max-w-5xl mx-auto p-8 bg-gray-50 space-y-8">
      {/* Intro Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Clinical Health Team</h1>
        <p className="text-gray-600">Meet our dedicated team of healthcare professionals committed to providing exceptional care.</p>
      </div>
      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthProfiles.map(({ name, role, bio }) => (
          <article
            key={name}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
          >
            <img
              src={placeholder}
              alt={`${name} profile`}
              className="w-24 h-24 rounded-full mb-4 transform hover:scale-105 transition-transform duration-300 border-2 border-gray-300"
            />
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">{role}</p>
            <p className="text-gray-500 mt-2 text-center">{bio}</p>
          </article>
        ))}
      </div>
    </main>
  </>
);

export default HealthTeam;