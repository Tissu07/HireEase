import React from "react";
import Navbar from "../../components/Navbar";
import Filters from "../../components/Filter";
import JobList from "../../components/JobList";
import Pagination from "../../components/Pagination";
import ProfileBar from "../../components/ProfileBar";
import JobSearch from "@/app/components/JobSearch";

const jobsData = [
  {
    image:
      "https://th.bing.com/th/id/R.ac7b25a9c30aa2988d09d356331bea1a?rik=EQx18Q%2bOxTtM2A&riu=http%3a%2f%2ffocusbankers.com%2fwp-content%2fuploads%2f2015%2f04%2fvirtusa-logo.jpg&ehk=QkFD7YlBxG3vrR4QFK3wMEQgXkDy0%2fiAtLLsZpMSoMU%3d&risl=&pid=ImgRaw&r=0",
    title: "Full Stack Java Developer",
    company: "Virtusa Consulting Services",
    location: "Bengaluru/Bangalore",
    salary: "Not disclosed",
    workMode: "Work from Office",
    type: "Full Time",
    experience: "Min. 1 year",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.sczkYeWBr2wT9XrUQWbVXgHaEo?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Frontend Developer",
    company: "Infosys Limited",
    location: "Hyderabad",
    salary: "Not disclosed",
    workMode: "Work from Home",
    type: "Contract",
    experience: "Min. 2 years",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.EdXCT6X7wq5_offt4nXEmgHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Backend Developer",
    company: "Wipro Technologies",
    location: "Chennai",
    salary: "₹ 6,00,000 - ₹ 12,00,000 P.A.",
    workMode: "Hybrid",
    type: "Full Time",
    experience: "Min. 3 years",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.B27XajWwojY93P3VmeYAwwHaD4?w=325&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "DevOps Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    salary: "Not disclosed",
    workMode: "Work from Office",
    type: "Full Time",
    experience: "Min. 2 years",
  },
  {
    image:
      "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Symbol.png",
    title: "Cloud Solutions Architect",
    company: "Accenture",
    location: "Pune",
    salary: "₹ 15,00,000 - ₹ 20,00,000 P.A.",
    workMode: "Work from Office",
    type: "Full Time",
    experience: "Min. 5 years",
  },
];

const user = {
  profilePicture: "https://via.placeholder.com/150",
  name: "Abhishek Pal",
  title: "Full-stack Developer at Hnfiari Tech",
};

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <Navbar />

      <div className="w-1/3 xl:w-1/4 hidden md:block  fixed top-24 left-10">
        <Filters />
      </div>
      <div className="w-full flex justify-end xl:block">
        <div className=" mx-auto w-full md:mx-0 xl:mx-auto md:w-3/5 xl:w-2/5">
          <JobSearch />
          <JobList jobs={jobsData} />
          <Pagination />
        </div>
      </div>
      <div className="w-1/4 fixed right-10 top-24">
        <ProfileBar user={user} />
      </div>
    </div>
  );
};

export default App;
