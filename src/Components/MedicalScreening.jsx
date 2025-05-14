import React from 'react';

function MedicalScreening() {
  return (
    <section className="py-16 bg-color-1">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Medical Screening Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Employee Screening</h3>
            <p>Promote a healthy workforce with our thorough screening programs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">School Screening</h3>
            <p>Ensure student well-being with regular health check-ups.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalScreening;