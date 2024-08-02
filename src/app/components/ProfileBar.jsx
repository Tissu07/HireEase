import React from "react";

const ProfileBar = ({ user }) => {
  return (
    <div className="hidden xl:block p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{user.name}</h3>
        <p className="text-gray-600 mb-4">{user.title}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileBar;
