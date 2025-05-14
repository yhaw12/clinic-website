import React from "react";
import ContactCard from "./ContactCard";

const TeamDropdown = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-[#32274D] text-white z-50 pt-4 pb-10 shadow-lg">
      {/* Notch under tab */}
      <div className="absolute top-0 left-[45%] w-4 h-4 bg-[#32274D] rotate-45 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 flex justify-between gap-10">
        {/* Left content */}
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">
            Meet our dedicated clinic team
          </h3>
          <p className="mb-6 text-sm leading-relaxed max-w-[720px]">
            At Divine Sanitas Medical Clinic, our compassionate and skilled team
            works together to provide exceptional care in family medicine, chronic
            disease management, preventative health, and more.
          </p>
          <ul className="grid grid-cols-2 gap-6 text-sm max-w-lg">
            <li>
              <a href="/team/management" className="border-b border-white pb-3 block hover:underline">
                Mangement
              </a>
            </li>
            <li>
              <a href="/team/health-team" className="border-b border-white pb-3 block hover:underline">
                Health Team
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

export default TeamDropdown;
