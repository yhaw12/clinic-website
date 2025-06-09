import React, { useState } from 'react';
import { Cookies } from 'react-cookie-consent';
import { motion } from 'framer-motion';

const CookieSettings = ({ onClose }) => {
  const [settings, setSettings] = useState(() => {
    const consent = Cookies.get('cookieConsent');
    return consent
      ? JSON.parse(consent)
      : { essential: true, analytics: false, marketing: false };
  });

  const handleSave = () => {
    Cookies.set('cookieConsent', JSON.stringify(settings), { path: '/' });
    onClose();
    window.location.reload();
  };

  return (
    <>
      {/* Semi-transparent overlay behind drawer */}
      <div
        className="fixed inset-0 bg-black bg-opacity-20 z-40"
        onClick={onClose}
      />

      {/* Bottom drawer container */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-lg p-6 mx-4 md:mx-16 max-w-2xl z-50"
        role="dialog"
        aria-labelledby="cookie-settings-title"
      >
        <h3
          id="cookie-settings-title"
          className="text-lg font-medium mb-2 text-gray-700"
        >
          Cookie Settings
        </h3>
        <p className="text-sm mb-4 text-gray-700">
          Manage your cookie preferences below. Essential cookies are required
          for the website to function properly. To find out more:
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <a href="/privacy-policy" className="flex items-center text-purple-900">
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
          <a href="/cookie-policy" className="flex items-center text-purple-900">
            Read cookie policy
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
        </div>
        <div className="mt-6 space-y-4">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" checked disabled />
            <span className="ml-2">Essential Cookies (Required)</span>
          </label>
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={settings.analytics}
              onChange={(e) =>
                setSettings({ ...settings, analytics: e.target.checked })
              }
            />
            <span className="ml-2">Analytics Cookies</span>
          </label>
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={settings.marketing}
              onChange={(e) =>
                setSettings({ ...settings, marketing: e.target.checked })
              }
            />
            <span className="ml-2">Marketing Cookies</span>
          </label>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            className="border border-gray-300 py-2 px-4 text-sm rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-purple-900 text-white py-2 px-4 text-sm rounded-lg"
            onClick={handleSave}
          >
            Save Settings
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default CookieSettings;