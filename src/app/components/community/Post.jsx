import React from "react";

const Post = ({ profileImage, university, time, content }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6 max-w-xl mx-auto hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div className="flex items-center mb-4">
        <img
          src={profileImage}
          alt={university}
          className="h-12 w-12 object-cover rounded-full mr-4"
        />
        <div>
          <span className="text-gray-600 font-semibold">{university}</span>
          <span className="block text-gray-500 text-sm">{time}</span>
        </div>
      </div>
      <p className="text-gray-700 text-base mb-4">{content}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200">
          <span className="material-icons">thumb_up</span>
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200">
          <span className="material-icons">comment</span>
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200">
          <span className="material-icons">share</span>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
