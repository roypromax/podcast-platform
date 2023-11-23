import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-gray-500 border-t-gray-500"></div>
    </div>
  );
};

export default Spinner;
