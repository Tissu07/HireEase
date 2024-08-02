import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex fixed top-0 w-[100%] justify-between items-center p-4 bg-white shadow-md">
      <Link href="/">
        <div className="text-2xl font-bold">HireEase</div>
      </Link>
      <div className="hidden md:flex space-x-4  ">
        <a href="/Pages/Jobs" className="text-gray-600 hover:text-gray-800">
          Jobs
        </a>
        <a href="/Pages/Company" className="text-gray-600 hover:text-gray-800">
          Companies
        </a>
        <a
          href="/Pages/Community"
          className="text-gray-600 hover:text-gray-800"
        >
          Community
        </a>
      </div>
      <div className="space-x-4">
        <Link href="/Pages/login">
          <button className="text-blue-600">Login</button>
        </Link>
        <Link href="/Pages/registration">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
