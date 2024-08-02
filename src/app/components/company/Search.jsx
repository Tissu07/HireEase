import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded flex w-full max-w-2xl">
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-800 focus:outline-none rounded-l"
          placeholder="Job title, keywords, or company"
        />
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-800 focus:outline-none border-l"
          placeholder="bhubaneshwar, orissa"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Find jobs
        </button>
      </div>
    </div>
  );
};

export default Search;
