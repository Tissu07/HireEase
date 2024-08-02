import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200">
      <div className="flex items-center mb-2">
        <img
          src={job.image}
          alt="company logo"
          className="w-20 h-10 mr-2 object-contain"
        />
        <h3 className="text-lg font-semibold">{job.title}</h3>
      </div>
      <p className="text-gray-600 mb-1">{job.company}</p>
      <p className="text-gray-500 flex items-center mb-1">
        <span className="material-icons mr-1">
          <i class="fa-solid fa-location-dot"></i>
        </span>{" "}
        {job.location}
      </p>
      <p className="text-gray-500 flex items-center mb-2">
        <span className="material-icons mr-1">attach_money</span> {job.salary}
      </p>
      <div className="flex space-x-2">
        <span className="px-2 py-1 bg-gray-100 rounded-smm text-sm flex items-center">
          <span className="material-icons mr-1">home_work</span> {job.workMode}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded-smm text-sm flex items-center">
          <span className="material-icons mr-1">schedule</span> {job.type}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded-smm text-sm flex items-center">
          <span className="material-icons mr-1">work</span> {job.experience}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
