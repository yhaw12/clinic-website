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
      raw === 'true' ||
      (raw && JSON.parse(raw).marketing === true);
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
      {(Cookies.get('cookieConsent') === 'true' ||
        (Cookies.get('cookieConsent') &&
          JSON.parse(Cookies.get('cookieConsent')).marketing)) && (
        <TawkTo />
      )}
      {showSettings && (
        <CookieSettings onClose={() => setShowSettings(false)} />
      )}
      <CookieConsent
        overlay
        overlayClasses="
          fixed inset-0
          bg-black bg-opacity-20
          flex items-center justify-center
          z-50
        "
        disableStyles
        containerClasses="
          bg-white
          rounded-lg
          shadow-lg
          p-6 mx-4 md:mx-16
          max-w-2xl
          relative z-10
        "
        contentClasses="text-gray-700"
        buttonWrapperClasses="mt-6 flex flex-col md:flex-row gap-4"
        buttonClasses="
          bg-purple-900
          text-white
          py-2 px-4 text-sm
          rounded-lg
        "
        declineButtonClasses="
          border border-gray-300
          py-2 px-4 text-sm
          rounded-lg
        "
        buttonText="Accept all"
        declineButtonText="Reject all"
        enableDeclineButton
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
        extraCookieOptions={{ ariaLabel: 'Cookie consent banner' }}
      >
        <h3 id="cookie-title" className="text-lg font-medium mb-2">
          Your privacy
        </h3>
        <p className="text-sm mb-4">
          This website uses cookies and similar technologies to better understand
          your needs and improve your experience on our website. To find out
          more:
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <a
            href="/privacy-policy"
            className="flex items-center text-purple-900"
          >
            Read privacy policy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <button
            className="flex items-center text-purple-900"
            onClick={() => setShowSettings(true)}
          >
            Manage your cookie settings
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {['Information that may be used', 'Purposes'].map((title) => (
            <div
              key={title}
              className="flex justify-between items-center text-sm text-gray-600 border-b pb-2"
            >
              <span>{title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}
        </div>
      </CookieConsent>
    </>
  );
}