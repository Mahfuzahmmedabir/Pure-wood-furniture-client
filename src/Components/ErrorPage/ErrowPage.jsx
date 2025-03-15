import Aos from 'aos';
import React from 'react';
 import { Link } from 'react-router-dom';
 import { useEffect } from 'react';
 import AOS from 'aos';
 import 'aos/dist/aos.css';


const ErrowPage = () => {
 useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);



  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
        <h1
          className="text-9xl font-bold text-gray-800 mb-4"
          data-aos="fade-down"
        >
          404
        </h1>
        <h2
          className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
          data-aos="fade-up"
        >
          Oops! Page Not Found
        </h2>
        <p
          className="text-gray-500 mb-6 max-w-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The page you are looking for does not exist. It might have been moved
          or deleted.
        </p>
        <Link to="/" data-aos="zoom-in" data-aos-delay="400">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrowPage;