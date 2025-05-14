import React, { useState } from 'react';

function EnquireForm() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    telephone: '',
    email: '',
    preferredTime: 'Morning',
    enquiry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simple front-end validation
    const { name, dob, telephone, email, enquiry } = formData;
    if (!name || !dob || !telephone || !email || !enquiry) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setSuccess(true);
      setFormData({ name: '', dob: '', telephone: '', email: '', preferredTime: 'Morning', enquiry: '' });
    } catch (err) {
      console.error(err);
      setError('Submission failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <section className="bg-green-50 py-12">
        <div className="max-w-screen-md mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold text-green-800">Thank you!</h2>
          <p className="text-green-700 mt-2">Your enquiry has been submitted. We will be in touch soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-screen-md mx-auto px-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Enquire Today</h2>
        <p className="text-gray-600">
          To make an enquiry about booking an appointment, please fill in your details below. We’ll get back to you as soon as we can.
        </p>
        {error && <p className="text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-1">Name *</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Date of Birth *</label>
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Telephone *</label>
            <input
              name="telephone"
              type="tel"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email *</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Please select your preferred time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-1">Your enquiry *</label>
            <textarea
              name="enquiry"
              rows="4"
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit >'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnquireForm;
