import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/dgiLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#32274D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src={logo}
              alt="Divine Sanitas Medical Clinic"
              className="h-16 mb-6"
            />
            <p className="text-sm text-center md:text-left">
              Divine Sanitas Medical Clinic is committed to providing exceptional
              healthcare services with patient-centered care and advanced
              technology.
            </p>
            <ul className="space-y-2 text-sm text-center md:text-left">
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="text-MD text-gray-300 space-y-2 text-center md:text-left">
            <p>
              Divine Sanitas Medical Clinic is dedicated to delivering
              high-quality medical care. Our consultants prioritize patient
              outcomes without influence from financial interests.
            </p>
            <p>
              Divine Sanitas Medical Clinic is a registered healthcare provider in
              Ghana, committed to excellence in medical services.
            </p>
            <p>
              Copyright © {new Date().getFullYear()} Divine Sanitas Medical Clinic.
            </p>
            <p>
              Website Maintained by{" "}
              <a href="mailto:yawoben21@gmail.com" className="hover:underline">
                Blankson Obeng
              </a>
            </p>
          </div>

          {/* Social Links & Enquiry Button */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex flex-wrap justify-center md:justify-start space-x-4">
              <a
                href="https://wa.me/+233244760710"
                className="bg-white rounded-full p-2"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#32274D]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.56 4.14 1.535 5.906L0 24l6.3-1.537A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.07a10.07 10.07 0 01-5.13-1.413l-.36-.213-3.733.913.927-3.663-.213-.36a10.07 10.07 0 01-1.414-5.13c0-5.566 4.504-10.07 10.07-10.07S22.07 6.434 22.07 12 17.566 22.07 12 22.07zm5.55-6.75l-.72.427a2.586 2.586 0 01-1.276.34c-.346 0-.69-.085-.996-.253-1.14-.627-2.073-1.666-2.753-2.946-.68-1.28-.96-2.707-.796-4.073.06-.503.22-.973.467-1.387.247-.413.573-.74.96-.96.387-.22.813-.33 1.26-.33.133 0 .267.013.4.04.133.027.26.067.38.12l.88.44c.267.133.48.333.64.6.16.267.24.573.24.92 0 .347-.087.68-.26.98l-.42.64c-.147.22-.28.447-.4.68.133.693.373 1.36.72 1.993.347.633.773 1.187 1.28 1.66z" />
                </svg>
              </a>
              <a
                href="tel:+233244760710"
                className="bg-white rounded-full p-2"
                aria-label="Phone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#32274D]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              {/* Replaced <a href="#"> with <button> for accessibility */}
              <button
                className="bg-white rounded-full p-2"
                onClick={() => alert("LinkedIn profile coming soon")}
                aria-label="LinkedIn (Placeholder)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#32274D]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.153 1.459-2.153 2.967v5.7h-3v-11h2.879v1.504h.04c.401-.757 1.381-1.557 2.84-1.557 3.04 0 3.6 2 3.6 4.604v6.449z" />
                </svg>
              </button>
              <button
                className="bg-white rounded-full p-2"
                onClick={() => alert("Twitter profile coming soon")}
                aria-label="Twitter (Placeholder)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#32274D]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.719-2.165-10.141-5.144-.424.722-.666 1.561-.666 2.457 0 1.695.863 3.188 2.175 4.065-.802-.026-1.556-.247-2.214-.616v.062c0 2.367 1.684 4.339 3.919 4.785-.41.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.621 1.94 2.422 3.355 4.558 3.394-1.669 1.309-3.775 2.09-6.066 2.09-.394 0-.787-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.015-.636.961-.695 1.795-1.562 2.457-2.548z" />
                </svg>
              </button>
              <button
                className="bg-white rounded-full p-2"
                onClick={() => alert("Instagram profile coming soon")}
                aria-label="Instagram (Placeholder)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#32274D]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.395.062-2.674.336-3.834 1.496-1.16 1.16-1.434 2.439-1.496 3.834-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.395.336 2.674 1.496 3.834 1.16 1.16 2.439 1.434 3.834 1.496 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.395-.062 2.674-.336 3.834-1.496 1.16-1.16 1.434-2.439 1.496-3.834.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.395-.336-2.674-1.496-3.834-1.16-1.16-2.439-1.434-3.834-1.496-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
                </svg>
              </button>
            </div>

                     </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;