import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-2 mt-4 pb-4">
      <button className="px-3 py-1 bg-gray-200 rounded">Prev</button>
      {/* Pagination numbers dynamically */}
      <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
    </div>
  );
};

export default Pagination;
