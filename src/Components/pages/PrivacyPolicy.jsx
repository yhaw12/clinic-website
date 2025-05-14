import React from "react";
import Navbar from "../Nav";
import Footer  from "../Footer";
import ContactCard from "../xtras/ContactCard";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#32274D] mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-8">
          At Divine Sanitas Medical Clinic, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600">
              We collect personal information such as your name, contact details,
              medical history, and insurance information when you book
              appointments or receive treatment. This data is collected directly
              from you or through referrals from other healthcare providers.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600">
              Your information is used to provide medical care, schedule
              appointments, process payments, and communicate with you about your
              health. We may also use anonymized data for internal quality
              improvement and research purposes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              Data Sharing
            </h2>
            <p className="text-gray-600">
              We do not share your personal information with third parties except
              as required by law, with your consent, or to facilitate your care
              (e.g., with insurance providers or referred specialists). All data
              sharing complies with applicable Ghanaian regulations.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              Data Security
            </h2>
            <p className="text-gray-600">
              We implement robust security measures to protect your data, including
              encrypted storage and restricted access to authorized personnel only.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, correct, or request deletion of your
              personal information. To exercise these rights or for any questions,
              contact us at{" "}
              <a href="tel:+233244760710" className="text-blue-500 hover:underline">
                0244 760 710
              </a>{" "}
              or visit our{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact
              </a>{" "}
              page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;