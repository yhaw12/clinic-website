import { useEffect } from 'react';

/**
 * TawkTo Chat Widget
 *
 * Injects the Tawk.to script snippet into the page
 * and shows a sticky chat bubble.
 */
const TawkTo = () => {
  useEffect(() => {
    // Prevent multiple injections
    if (window.Tawk_API) return;

    // Initialize global vars
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6818f69647002d190debf856/1iqgo6fqq';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Insert before first script tag
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  }, []);

  return null;
};

export default TawkTo;
