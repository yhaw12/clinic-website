// Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import Navbar from './Nav';
import Banner from './Banner';
import Footer from './Footer';
import InsurancePartners from './InsurancePartners';
import TawkTo from './xtras/TawkTo';
import CookieSettings from './xtras/CookieSettings';

export default function Layout() {
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const raw = Cookies.get('cookieConsent');
    const consent =
      raw === 'true' || (raw && JSON.parse(raw).marketing === true);
    if (consent && !window.Tawk_API) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://embed.tawk.to/6818f69647002d190debf856/1iqgo6fqq';
      s.charset = 'UTF-8';
      s.setAttribute('crossorigin', '*');
      document.head.appendChild(s);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <main className="pt-24 md:pt-20 flex-1">
        <Outlet />
      </main>
      <InsurancePartners />
      <Footer />

      {/* Only load TawkTo if marketing consent is true */}
      {(Cookies.get('cookieConsent') === 'true' ||
        (Cookies.get('cookieConsent') &&
          JSON.parse(Cookies.get('cookieConsent')).marketing)) && (
        <TawkTo />
      )}

      {showSettings && <CookieSettings onClose={() => setShowSettings(false)} />}

      <CookieConsent
        location="bottom"
        disableStyles
        cookieName="cookieConsent"
        overlay
        overlayClasses="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-40"
        containerClasses="
          fixed bottom-0 left-0 right-0
          bg-white
          shadow-xl
          z-50
          w-full max-w-full
          rounded-t-sm
          p-6 pt-8
          min-h-[400px]
          flex flex-col justify-between
          animate-slideUp
        "
        contentClasses="flex-1 flex flex-col justify-between"
        buttonWrapperClasses=""
        buttonClasses=""
        declineButtonClasses=""
        buttonText=""
        declineButtonText=""
        enableDeclineButton={false}
        extraCookieOptions={{ ariaLabel: 'Cookie consent banner' }}
        onAccept={() => {
          Cookies.set('cookieConsent', 'true', { path: '/' });
          window.location.reload();
        }}
        onDecline={() => {
          Cookies.set(
            'cookieConsent',
            JSON.stringify({ essential: true, analytics: false, marketing: false }),
            { path: '/' }
          );
          if (window.Tawk_API) window.Tawk_API.hideWidget();
          window.location.reload();
        }}
      >
        {/* ===== TOP SECTION: Title / Body / Links ===== */}
        <div className="flex flex-col">
          <h3 className=" text-md lg:text-3xl font-semibold text-gray-900 mb-2">
            Your privacy
          </h3>
          <p className="lg:text-2xl text-gray-700 leading-relaxed w-full lg:max-w-4xl mb-6">
            This website uses cookies and similar technologies to better understand
            your needs and improve your experience on our website. To find out more:
          </p>

          <div className="flex flex-wrap gap-8">
            <a
              href="/privacy-policy"
              className="flex items-center text-purple-700 hover:purple-700 text-lg font-medium"
            >
              Read privacy policy
              <svg
                className="h-5 w-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <button
              onClick={() => setShowSettings(true)}
              className="flex items-center text-purple-700 hover:text-purple-700 text-lg font-medium"
            >
              Manage your cookie settings
              <svg
                className="h-5 w-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== MIDDLE: Divider Line ===== */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* ===== BOTTOM SECTION: Accordions (left) & Buttons (right) ===== */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Two “accordion” rows, takes 2/3 of width on md+ */}
          <div className="flex flex-col divide-y divide-gray-200 md:w-2/3">
            {['Information that may be used', 'Purposes'].map((title) => (
              <button
                key={title}
                className="
                  h-14
                  flex items-center justify-between
                  px-2
                  text-lg text-gray-800 font-medium
                  hover:bg-gray-50
                  focus:bg-gray-50
                "
              >
                <span>{title}</span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right: Reject / Accept buttons, takes 1/3 of width on md+ */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            {/* Reject All */}
            <button
              onClick={() => {
                Cookies.set(
                  'cookieConsent',
                  JSON.stringify({ essential: true, analytics: false, marketing: false }),
                  { path: '/' }
                );
                if (window.Tawk_API) window.Tawk_API.hideWidget();
                window.location.reload();
              }}
              className="
                w-full
                border border-purple-700
                text-purple-700
                hover:bg-[#F1EAF9]
                py-3
                px-6
                rounded-lg
                text-base font-medium
                transition
              "
            >
              Reject all
            </button>

            {/* Accept All */}
            <button
              onClick={() => {
                Cookies.set('cookieConsent', 'true', { path: '/' });
                window.location.reload();
              }}
              className="
                w-full
                bg-purple-700
                hover:bg-purple-700
                text-white
                py-3
                px-6
                rounded-lg
                text-lg font-medium
                transition
              "
            >
              Accept all
            </button>
          </div>
        </div>
      </CookieConsent>
    </>
  );
}
