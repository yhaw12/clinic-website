import React from "react";
import Navbar from "../Nav";
import Footer from "../Footer";

const CookiePolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* Main content can remain here if needed */}
        </main>
        <Footer />
      </div>
      <div
        className="
          fixed bottom-0 left-0 right-0
          bg-white
          rounded-t-lg
          shadow-lg
          p-6 mx-4 md:mx-16
          max-w-7xl
          z-50
          CookieConsent
        "
      >
        <h1 className="text-4xl font-bold text-[#32274D] mb-8">
          Cookie Policy
        </h1>
        <p className="text-gray-700 mb-8">
          Divine Sanitas Medical Clinic uses cookies to enhance your experience on
          our website. This Cookie Policy explains what cookies are, how we use
          them, and your choices regarding their use.
        </p>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-600">
              Cookies are small text files stored on your device when you visit a
              website. They help us improve site functionality and understand how
              visitors use our website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              How We Use Cookies
            </h2>
            <p className="text-gray-600">
              We use essential cookies to ensure our website functions properly,
              such as maintaining navigation and session data. We do not use
              cookies for advertising or tracking across other websites.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              Types of Cookies
            </h2>
            <p className="text-gray-600">
              - <strong>Essential Cookies</strong>: Required for basic website
              functionality, such as page navigation.
              <br />
              - <strong>Analytics Cookies</strong>: Used to collect anonymized data
              on site usage to improve our services (optional, with your consent).
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#32274D] mb-4">
              Managing Cookies
            </h2>
            <p className="text-gray-600">
              You can control cookies through your browser settings to accept,
              block, or delete them. Note that disabling essential cookies may
              affect website functionality. For more information, contact us at{" "}
              <a href="tel:+233244760710" className="text-blue-500 hover:underline">
                0244 760 710
              </a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;