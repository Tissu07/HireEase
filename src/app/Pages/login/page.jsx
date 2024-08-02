import React from "react";
import registration from "../../images/register.png";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="flex flex-col mt-12 md:mt-0 md:flex-row justify-center items-center min-h-screen ">
        <div className="bg-white shadow-md rounded p-6 w-full max-w-md ">
          <h2 className="text-2xl font-bold mb-4">New to HireEase?</h2>
          <ul className="mb-4 list-disc pl-5 space-y-2">
            <li>One click apply using HireEase profile.</li>
            <li>Get relevant job recommendations.</li>
            <li>Showcase profile to top companies and consultants.</li>
            <li>Know application status on applied jobs.</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Register for Free
          </button>
          <div className=" hidden md:block w-full relative h-[10rem]">
            <Image
              src={registration}
              width={200}
              height={200}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded px-16 py-8 w-full  md:h-[35rem]  max-w-[30rem]">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block mb-1">Email ID / Username</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
          <div className="flex justify-between items-center mt-4">
            <a href="#" className="text-sm text-blue-600">
              Forgot Password?
            </a>
            <a href="#" className="text-sm text-blue-600">
              Use OTP to Login
            </a>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="text-gray-500">Or</div>
          </div>
          <button className="w-full bg-white border py-2 rounded flex items-center justify-center mt-4">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
