import React from "react";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4 flex">
      <div className="flex-shrink-0 mr-6">
        <img
          src={company.logo}
          alt={company.name}
          className="h-16 w-36 object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{company.name}</h3>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">{company.rating}</span>
          <span className="text-green-500">★</span>
        </div>
        <div className="text-gray-600 mt-2">
          <span className="font-semibold">Location:</span> {company.location}
        </div>
        <div className="text-gray-600 mt-2">
          <span className="font-semibold">Global company size:</span>{" "}
          {company.size}
        </div>
        <div className="text-gray-600 mt-2">
          <span className="font-semibold">Industry:</span> {company.industry}
        </div>
      </div>
      <div className="ml-auto text-right">
        <div className="text-blue-500">{company.reviews} Reviews</div>
        <div className="text-blue-500">{company.salaries} Salaries</div>
        <div className="text-blue-500">{company.jobs} Jobs</div>
      </div>
    </div>
  );
};

export default CompanyCard;
