import React from "react";
import { useLocation } from "react-router-dom";
import searchIndex from "../searchIndex";
import Navbar from "../Nav";
import Footer from "../Footer";

function getLevenshteinDistance(a, b) {
  const dp = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));
  for (let i = 0; i <= a.length; i++) dp[0][i] = i;
  for (let j = 0; j <= b.length; j++) dp[j][0] = j;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      dp[j][i] = b[j - 1] === a[i - 1]
        ? dp[j - 1][i - 1]
        : 1 + Math.min(dp[j - 1][i], dp[j][i - 1], dp[j - 1][i - 1]);
    }
  }
  return dp[b.length][a.length];
}

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  const results = searchIndex
    .map((item) => ({ item, dist: getLevenshteinDistance(item.title.toLowerCase(), query) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 3)
    .map(({ item }) => item);

  return (
    <>
      <Navbar />
      <main className="font-sans">
        <div className="bg-gradient-to-r from-[#32274D] to-[#4a3a6e] text-white py-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            Search Results for: "{query}"
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore the most relevant results for your query below.
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6">
          {results.length > 0 ? (
            <div className="space-y-6">
              {results.map((item) => (
                <div
                  key={item.path}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#32274D] animate-slide-up"
                >
                  <h2 className="text-xl font-semibold text-[#32274D] mb-2">
                    <a href={item.path} className="hover:underline">
                      {item.title}
                    </a>
                  </h2>
                  <p className="text-gray-600">
                    Visit this page for more information related to your search.
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <p className="text-2xl text-gray-600 mb-6">
                No results found for "{query}".
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Try a different search term or{" "}
                <a href="/contact" className="text-blue-500 hover:underline">
                  contact us
                </a>{" "}
                for assistance.
              </p>
              <a
                href="/"
                className="inline-block bg-[#32274D] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#4a3a6e] transition-transform duration-300 transform hover:scale-105"
              >
                Return Home
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default SearchResults;