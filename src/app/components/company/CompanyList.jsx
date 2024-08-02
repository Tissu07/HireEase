import React from "react";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
  const companies = [
    {
      logo: "https://th.bing.com/th/id/OIP.B27XajWwojY93P3VmeYAwwHaD4?w=325&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Tata Consultancy Services",
      rating: "3.7",
      location: "40 office locations",
      size: "10000+ Employees",
      industry: "Software Development",
    },
    {
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Symbol.png",
      name: "Accenture",
      rating: "3.9",
      location: "37 office locations",
      size: "10000+ Employees",
      industry: "Business Consulting",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.sczkYeWBr2wT9XrUQWbVXgHaEo?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Infosys",
      rating: "4.0",
      location: "50 office locations",
      size: "25000+ Employees",
      industry: "Information Technology",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.Bs2PlI-wmfFiYzgWNRO0pgHaDO?w=348&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "IBM",
      rating: "3.8",
      location: "100+ office locations",
      size: "35000+ Employees",
      industry: "Technology and Consulting",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.DA8FBCaBvcANLGxl2R_dJwAAAA?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Capgemini",
      rating: "4.1",
      location: "40 office locations",
      size: "27000+ Employees",
      industry: "Consulting",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.t04z7YCrwJYFQVt9VdlyKAHaCO?w=301&h=105&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Cognizant",
      rating: "3.9",
      location: "30 office locations",
      size: "30000+ Employees",
      industry: "IT Services",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.WzdKBeSaMugMpnbLJL7KWwHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "HCL Technologies",
      rating: "4.0",
      location: "40 office locations",
      size: "20000+ Employees",
      industry: "Information Technology",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.rSQ9DtGcrL8O5zE3Q_wicAHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Oracle",
      rating: "3.8",
      location: "75 office locations",
      size: "130000+ Employees",
      industry: "Software and Hardware",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.0JTV8yOtKYOVWkBKpBqPVwHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "SAP",
      rating: "4.2",
      location: "30 office locations",
      size: "100000+ Employees",
      industry: "Enterprise Software",
    },
    {
      logo: "https://th.bing.com/th/id/OIP.Wan48DmTomFcXEWcrAPKuwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&",
      name: "Amazon Web Services",
      rating: "4.1",
      location: "70 office locations",
      size: "100000+ Employees",
      industry: "Cloud Computing",
    },
  ];

  return (
    <div className="w-full lg:w-3/4 p-4 pt-10">
      {companies.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
