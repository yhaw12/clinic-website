import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assests/dgiLogo.png";
import PatientsDropdown from "./xtras/PatientsDropdown";
import SpecialistsDropdown from "./xtras/SpecialistsDropdown";
import ConditionsDropdown from "./xtras/ConditionsDropdown";
import TeamDropdown from "./xtras/TeamDropdown";
import LocationsDropdown from "./xtras/LocationsDropdown";
import searchIndex from "./searchIndex";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [arrowLeft, setArrowLeft] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const itemRefs = useRef({});

  const getItemRef = (key) => {
    if (!itemRefs.current[key]) itemRefs.current[key] = React.createRef();
    return itemRefs.current[key];
  };

  useEffect(() => {
    if (active && getItemRef(active).current) {
      const { left, width } = getItemRef(active).current.getBoundingClientRect();
      setArrowLeft(left + width / 2);
    }
  }, [active]);

  useEffect(() => {
    if (mobileOpen || active || searchOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [mobileOpen, active, searchOpen]);

  const menuItems = [
    { key: "patients", label: "Patients", submenu: [
        { label: "Paying for yourself", link: "/patients/payments" },
        { label: "Becoming a patient", link: "/patients/becoming-a-patient" },
        { label: "Services and treatments", link: "/patients/services-and-treatments" },
        { label: "Making a payment", link: "/patients/making-a-payment" },
      ]
    },
    { key: "specialists", label: "Specialists", submenu: [
        { label: "Skin specialists", link: "/specialists/skin" },
        { label: "Medicine specialists", link: "/specialists/" },
      ]
    },
    { key: "conditions", label: "Conditions", submenu: [
        { label: "Medical conditions", link: "/conditions/medical" },
      ]
    },
    { key: "team", label: "Team", submenu: [
        { label: "Management", link: "/team/management" },
        { label: "Health Team", link: "/team/health-team" },
      ]
    },
    { key: "locations", label: "Locations", submenu: [
        { label: "Main Clinic", link: "/locations/main" },
        { label: "Annex Clinic", link: "/locations/annex" },
      ]
    },
  ];

  const dropdownComponents = {
    patients: PatientsDropdown,
    specialists: SpecialistsDropdown,
    conditions: ConditionsDropdown,
    team: TeamDropdown,
    locations: LocationsDropdown,
  };

  const handleMouseLeave = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActive(null);
      setIsClosing(false);
    }, 300);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;
    const exactMatch = searchIndex.find(item =>
      item.title.toLowerCase() === q
    );
    if (exactMatch) {
      navigate(exactMatch.path);
    } else {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header className="fixed w-full top-0 bg-white shadow-sm z-50 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-center lg:justify-between relative">
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="DGI Ghana Hospital Logo" className="h-20 cursor-pointer" />
          </a>
          {/* Desktop Nav + Search Icon */}
          <div className="hidden lg:flex items-center space-x-20">
            <nav className="flex space-x-20 text-gray-700 font-medium text-xl">
              {menuItems.map(({ key, label }) => (
                <div
                  key={key}
                  ref={getItemRef(key)}
                  onMouseEnter={() => { setIsClosing(false); setActive(key); }}
                  className="cursor-pointer hover:text-purple-900"
                >
                  {label}
                </div>
              ))}
            </nav>
            <button
              className="text-gray-600"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-gray-700 absolute right-6 top-4 z-50" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Dropdowns */}
        {(active || isClosing) && (
          <div key={active} className={`absolute top-full left-0 right-0 z-50 bg-purple-900 text-white shadow-lg rounded-b-lg ${isClosing ? "dropdown-slide-up" : "dropdown-slide-down"}`} onMouseLeave={handleMouseLeave}>
            <span className="absolute -top-2 arrow" style={{ left: `${arrowLeft}px`, transform: "translateX(-50%)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.34 10.67" className="w-16 h-4"><polygon points="0 0 10.67 10.67 21.34 0" fill="white"/></svg>
            </span>
            <div className="max-w-screen-xl mx-auto px-6 py-6">
              {!isClosing && React.createElement(dropdownComponents[active])}
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <button className="float-right text-gray-500" onClick={() => setSearchOpen(false)}>✕</button>
            <form onSubmit={handleSearchSubmit} className="mt-4 flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search site..."
                className="flex-1 border border-gray-300 rounded-l-md p-2"
              />
              <button type="submit" className="bg-gray-300 p-2 rounded-r-md">🔍</button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div className="pt-24 md:pt-20">
        {mobileOpen && (
          <div className="fixed inset-0 bg-[#3c2e58] text-white z-[100] overflow-y-auto">
            <div className="flex flex-col">
              <div className="flex justify-end p-4">
                <button onClick={() => { setMobileOpen(false); setExpandedMenu(null); }} className="text-2xl">✕</button>
              </div>
              <ul className="divide-y divide-gray-400 text-xl px-6">
                {/* Mobile “Search” button */}
                <li className="flex items-center justify-between py-2 border-b border-gray-600">
                  <span>Search</span>
                  <button
                    onClick={() => {
                      setSearchOpen(true);
                      setMobileOpen(false);
                    }}
                    className="flex items-center space-x-2"
                    aria-label="Open search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </li>

                {/* Normal entries */}
                <li className="py-2 border-b border-gray-600">
                  <Link to="/about" className="block">About</Link>
                </li>

                {menuItems.map(({ key, label, submenu }) => (
                  <li key={key} className="border-b border-gray-600">
                    <div className="py-2 flex justify-between items-center text-xl">
                      <span>{label}</span>
                      <button
                        onClick={() =>
                          setExpandedMenu(expandedMenu === key ? null : key)
                        }
                        className="text-2xl leading-none"
                      >
                        {expandedMenu === key ? '−' : '+'}
                      </button>
                    </div>
                    <ul className={`submenu ${expandedMenu === key ? 'expanded' : ''}`}>
                      {submenu.map(({ label, link }) => (
                        <li key={label} className="py-2 pl-6 text-base border-t border-gray-600">
                          <Link to={link}
                                className="block"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setExpandedMenu(null);
                                }}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div className="bg-[#e6e0f1] text-[#3c2e58] px-6 pt-8 pb-36 space-y-2 text-2xl leading-relaxed">
                <p><span className="px-2 rounded">Ways</span> to get in touch...</p>
                <p>Call our friendly team today on <strong><a href="tel:+233244760710">0244 760 710</a></strong></p>
                <p className="flex justify-between items-center"><a href="#">Online payment</a> <span>›</span></p>
                <p className="flex justify-between items-center"><a href="#">Refer a patient</a> <span>›</span></p>
                <p className="flex justify-between items-center"><a href="#">Contact Information</a> <span>›</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;