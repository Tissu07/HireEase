import React from "react";

const Filter = () => {
  return (
    <div className=" p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Sort By</label>
        <select className="w-full p-2 border rounded">
          <option>Relevant</option>
          <option>Salary - High to low</option>
          <option>Date posted - New to Old</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Experience</label>
        <input type="range" min="0" max="20" className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Salary</label>
        <input type="range" min="0" max="150000" className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Date posted</label>
        <div className="flex flex-col">
          <label className="flex items-center space-x-2">
            <input type="radio" name="date_posted" className="form-radio" />
            <span>Last 24 hours</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="date_posted" className="form-radio" />
            <span>Last 3 days</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="date_posted" className="form-radio" />
            <span>Last 7 days</span>
          </label>
        </div>
      </div>
      {/* Additional filter sections */}
    </div>
  );
};

export default Filter;
