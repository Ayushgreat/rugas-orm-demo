import React from "react";

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="mb-6 flex items-center text-xl font-semibold text-green-500 hover:text-green-700 hover:underline transition duration-300 transform hover:scale-105 ease-in-out"
    >
      <span className="mr-2">&larr;</span>
      <span>Back to Home</span>
    </button>
  );
};

export default BackButton;
