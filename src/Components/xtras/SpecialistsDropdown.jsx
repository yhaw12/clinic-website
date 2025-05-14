import React from "react";
import bodyGraphic from "../../assests/body.png";
import ContactCard from "./ContactCard";

const ConditionsDropdown = () => (
  <div className="relative">
    {/* Main panel */}
    <div className="bg-[#3D2C57] text-white w-full max-w-[1440px] mx-auto px-[4.5rem] py-10">
      <div className="flex gap-x-12">
        {/* Left: body graphic with clickable hotspots */}
        <div className="relative flex-shrink-0">
          <img src={bodyGraphic} alt="Body diagram" className="block w-72 h-auto" />
          {[
            { top: "8%", left: "50%" },   // head (headaches)
            { top: "18%", left: "70%" },  // shoulder (shoulder pain)
            { top: "30%", left: "40%" },  // elbow (joint pain)
            { top: "40%", left: "60%" },  // hip (hip pain)
            { top: "55%", left: "30%" },  // hand/wrist (wrist pain)
            { top: "65%", left: "50%" },  // knee (knee pain)
            { top: "85%", left: "50%" },  // ankle (ankle pain)
          ].map(({ top, left }, i) => (
            <button
              key={i}
              className="absolute w-6 h-6 rounded-full border-2 border-white bg-[#00C9D9]
                         transform -translate-x-1/2 -translate-y-1/2
                         hover:ring-2 hover:ring-white focus:outline-none"
              style={{ top, left }}
              aria-label={`Condition ${i + 1}`}
            />
          ))}
        </div>

        {/* Middle: intro text */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-light">Find care for your condition</h3>
          <div className="space-y-4 text-base leading-relaxed max-w-xl">
            <p>
              Start your journey to better health with us.
            </p>
            <p>
              Whether you’re experiencing pain, infections, or other health issues,
              our team at Divine Sanitas Medical Clinic is here to provide expert care.
            </p>
            <p>
              We treat common conditions like headaches, joint pain, back pain,
              respiratory infections, and pediatric or women’s health concerns.
            </p>
          </div>
        </div>

        <ContactCard />
      </div>

      {/* Bottom bar: A–Z link + search */}
      <div className="mt-10 flex justify-between items-center border-t border-[#816FA3] pt-6">
        <a
          href="#"
          className="text-white text-sm font-medium flex items-center hover:underline"
        >
          A–Z of conditions and treatments
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>

        <div className="relative">
          <input
            type="text"
            placeholder="Search conditions"
            className="bg-transparent border-b border-white text-white placeholder-white
                       focus:outline-none focus:border-[#00C9D9] w-64 pl-0 pr-8 py-1"
          />
          <svg
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default ConditionsDropdown;