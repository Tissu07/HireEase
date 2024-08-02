import React from "react";

const Filter = () => {
  return (
    <div className="w-full lg:w-1/4 ">
      <h2 className="text-lg font-bold mb-4">Filter companies</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Select a Location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Industries</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="E.g. Health Care, Internet, Education"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Job title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Select a Job Title"
          />
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Job functions</h3>
          {/* Add job function filters here */}
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Company ratings by category</h3>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>3.5 stars and up</label>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Global company size</h3>
          <div className="flex flex-col">
            <label className="inline-flex items-center mt-2">
              <input
                type="radio"
                className="form-radio"
                name="size"
                value="1-50"
              />
              <span className="ml-2">1 - 50</span>
            </label>
            <label className="inline-flex items-center mt-2">
              <input
                type="radio"
                className="form-radio"
                name="size"
                value="51-200"
              />
              <span className="ml-2">51 - 200</span>
            </label>
            {/* Add more size options here */}
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
