import React from 'react';
import placeholder1 from '../../../assests/ben.jpg';
import placeholder2 from '../../../assests/kaba.jpg';
import placeholder3 from '../../../assests/osman.jpg';
import placeholder4 from '../../../assests/dgi.jpg';

const managementProfiles = [
    {image: placeholder1, name: 'Professor', role: 'Chairman', bio: 'Leads the strategic direction of the clinic with over 20 years of experience in healthcare management.' },
    {image: placeholder2, name: 'Ebenezer Adu‑Lartey', role: 'CEO', bio: 'Oversees daily operations and ensures the highest standards of patient care.' },
    {image: placeholder3, name: 'Baba Osman', role: 'MPH, Clinic Leadership', bio: 'Brings expertise in public health and clinic management to enhance service delivery.' },
    {image: placeholder4, name: 'Gershon Tsordzo', role: 'Finance Manager', bio: 'Manages financial operations to support the clinic\'s growth and sustainability.' },
];

const Management = () => (
    <>

        <main className="max-w-5xl mx-auto p-8 space-y-8 bg-gray-50">
            {/* Intro Section */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Clinic Management Team
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Our leadership team at Divine Sanitas Medical Clinic combines decades of
                    healthcare expertise with a passion for compassionate patient care.
                    Guided by a commitment to excellence, they steer our clinic towards
                    innovation, integrity, and outstanding clinical outcomes.
                </p>
            </div>

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementProfiles.map(({ image, name, role, bio }) => (
                <article
                    key={name}
                    className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center"
                >
                    <img
                    src={image}
                    alt={`${name} profile`}
                    className="w-32 h-32 rounded-full object-cover mb-4 transform hover:scale-105 transition-transform duration-300 border-2 border-gray-300"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
                    <p className="text-gray-500 text-sm">{role}</p>
                    <p className="text-gray-600 text-sm mt-2 text-center">{bio}</p>
                </article>
                ))}

            </div>
        </main>
    </>
);

export default Management;