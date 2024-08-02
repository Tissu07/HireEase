import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white shadow-md w-full lg:w-64 py-4 px-4">
      <div className="mb-8">
        <button className="bg-green-500 text-white w-full py-2 rounded-lg">
          Post
        </button>
      </div>
      <nav>
        <h2 className="font-bold mb-4">My Bowls</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-600">
              Career Advice for Students in India
            </a>
          </li>
        </ul>
        
      </nav>
    </aside>
  );
};

export default Sidebar;
