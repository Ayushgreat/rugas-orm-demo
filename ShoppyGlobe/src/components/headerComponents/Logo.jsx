import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/home"} className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300">
      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:scale-110 transition-transform duration-300">
        ShoppyGlobe
      </span>
    </Link>
  );
};

export default Logo;
