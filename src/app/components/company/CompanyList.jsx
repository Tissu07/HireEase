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
      logo: "data:image/jpeg;base64,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",
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
