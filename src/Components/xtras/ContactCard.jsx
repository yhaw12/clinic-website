import React from 'react';
import { Link } from 'react-router-dom';

function ContactCard() {
  const actions = [
    { label: 'Online payment', href: '#' },
    { label: 'Refer a patient', href: '#' },
    { label: 'Contact Information', to: '/get-in-touch' },
  ];

  return (
    <div className="w-80 bg-white rounded-md p-6 text-[#4E4E4E]">
      <h4 className="font-semibold text-lg mb-4">Ways to get in touch…</h4>
      <ul className="space-y-4 text-md">
        <li>
          <span className="block">Call our friendly team today on</span>
          <a href="tel:+233244760710" className="font-medium hover:underline">
            0244760710
          </a>
        </li>

        {actions.map((action) => (
          <li key={action.label} className="pt-2 border-t border-[#E1E1E1]">
            {action.to ? (
              <Link
                to={action.to}
                className="flex justify-between items-center hover:underline"
              >
                <span>{action.label}</span>
                <svg
                  className="w-4 h-4"
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
              </Link>
            ) : (
              <a
                href={action.href}
                className="flex justify-between items-center hover:underline"
              >
                <span>{action.label}</span>
                <svg
                  className="w-4 h-4"
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
            )}
          </li>
        ))}
      </ul>
    </div>
);

}

export default ContactCard;
