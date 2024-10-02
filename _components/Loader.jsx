import React from "react";

const Loader = () => {
  return (
    <div className="animate-pulse p-4 space-y-4 rounded-xl border border-gray-200">
      <div className="h-36 bg-gray-200 rounded-lg"></div>
      <div className="h-6 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  );
};

export default Loader;
