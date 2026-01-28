import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route"
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
        <h1 className="text-6xl font-black text-indigo-600 mb-4">404</h1>
        <p className="text-2xl font-bold text-gray-800 mb-4">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-all">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;