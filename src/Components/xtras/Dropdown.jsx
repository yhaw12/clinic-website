 import React from "react";

const Dropdown = ({ label, isActive, onMouseEnter, onMouseLeave, children }) => {
  return (
    <div
      className="relative py-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href="#"
        className={`hover:text-purple-900 ${isActive ? "text-purple-900" : ""}`}
      >
        {label}
      </a>
      {isActive && (
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21.34 10.67"
            className="w-8 h-4"
          >
            <polygon
              points="0 0 10.67 10.67 21.34 0 0 0"
              className="fill-white"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default Dropdown;

