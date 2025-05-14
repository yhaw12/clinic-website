import React from "react";
import Navbar from "../Nav";

const NotFound = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="text-center animate-fade-in">
          <h1 className="text-9xl font-extrabold text-purple-800 mb-4 drop-shadow-lg">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! The page you’re looking for doesn’t exist.</p>
          <a
            href="/"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105"
          >
            Return Home
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default NotFound;