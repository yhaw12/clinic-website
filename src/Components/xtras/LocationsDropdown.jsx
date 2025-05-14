import React from "react";
import ContactCard from "./ContactCard";

const LocationsDropdown = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-[#32274D] text-white z-50 pt-4 pb-10 shadow-lg">
      {/* Notch under tab */}
      <div className="absolute top-0 left-[45%] w-4 h-4 bg-[#32274D] rotate-45 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 flex justify-between gap-10">
        {/* Left content */}
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">
            Our Centres of Excellence
          </h3>
          <p className="mb-6 text-sm leading-relaxed max-w-[720px]">
            Explore our conveniently located medical clinics, offering personalized
            and comprehensive healthcare services in welcoming and accessible environments.
          </p>
          <ul className="grid grid-cols-2 gap-6 text-sm max-w-lg">
            <li>
              <a href="#" className="border-b border-white pb-3 block ">
                Divine Sanitas Medical Clinic Main
              </a>
            </li>
            <li>
              <a href="#" className="border-b border-white pb-3 block ">
                Divine Sanitas Medical Clinic Annex
              </a>
            </li>
          </ul>
        </div>

        {/* Right side contact card */}
        <ContactCard />
      </div>
    </div>
  );
};

export default LocationsDropdown;
