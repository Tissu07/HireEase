import React from "react";
import registration from "../../images/registration.png";
import Image from "next/image";
function page() {
  return (
    <div className="flex justify-center items-center bg-gray-100 px-4 py-2 mt-16">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-4xl flex mt-10 md:mt-2">
        <div className="w-1/2 p-6 hidden md:block">
          <Image
            src={registration}
            width={100}
            height={100}
            className="mx-auto"
          />
          <h2 className="text-2xl font-bold mb-4 mt-4">
            On registering, you can:
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Build your profile and let recruiters find you</li>
            <li>Get job postings delivered right to your email</li>
            <li>Find a job and grow your career</li>
          </ul>
        </div>
        <div className="md:w-1/2 p-6 ">
          <h2 className="text-2xl font-bold mb-4">Create your profile</h2>
          <p className="text-gray-500 mb-4">
            Search & apply to jobs from India’s No.1 Job Site
          </p>
          <form>
            <div className="mb-4">
              <label className="block mb-1">Full name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="What is your name?"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email ID</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="Tell us your Email ID"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded"
                placeholder="Minimum 6 characters"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Mobile number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded"
                placeholder="+91 Enter your mobile number"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Work status</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="work_status"
                    className="form-radio"
                  />
                  <span>I m experienced</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="work_status"
                    className="form-radio"
                  />
                  <span>I m a fresher</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  Send me important updates & promotions via SMS, email, and
                  WhatsApp
                </span>
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Register now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
