import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";


const PatientsDropdown = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-[#32274D] text-white z-50 pt-4 pb-10 shadow-lg">
      {/* White notch under tab */}
      <div className="absolute top-0 left-[20%] w-4 h-4 bg-[#32274D] rotate-45 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 flex justify-between gap-10">
        {/* Left content */}
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">
            Quality care for every patient
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm max-w-lg">
            <Link
              to="/patients/payments"
              className="border-t border-white pt-3 block hover:underline"
            >
              Paying for yourself
            </Link>
            <Link
              to="/patients/becoming-a-patient"
              className="border-t border-white pt-3 block hover:underline"
            >
              Becoming a DSMC patient
            </Link>
            <Link
              to="/patients/services-and-treatments"
              className="border-t border-white pt-3 block hover:underline"
            >
              Services and treatments
            </Link>
            <Link
              to="/patients/making-a-payment"
              className="border-t border-white pt-3 block hover:underline"
            >
              Making a payment
            </Link>
          </div>
        </div>

        {/* Right contact card */}
        <ContactCard />
      </div>
    </div>
  );
};

export default PatientsDropdown;
