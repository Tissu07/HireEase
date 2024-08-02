import React from "react";

const BowlCard = ({
  image,
  title,
  subtitle,
  description,
  viewLink,
  followLink,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={title}
          className="h-12 w-12 object-cover rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{subtitle}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-end ">
        <div className="flex justify-between mt-4 ">
          <a
            href={viewLink}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mx-10"
          >
            View
          </a>
          <a
            href={followLink}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default BowlCard;
