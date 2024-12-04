import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <p className="text-2xl font-bold mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ShoppyGlobe. All Rights Reserved.
          </p>
          
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300 text-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300 text-2xl"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300 text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300 text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        
        <div className="text-center text-sm text-gray-300">
          <p>Made with ❤️ by Ayush Namdeo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
