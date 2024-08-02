import React from "react";
import Search from "../../components/company/Search";
import Filter from "../../components/company/Filter";
import CompanyList from "../../components/company/CompanyList";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="container mx-auto p-4">
        <Search />
        <div className="flex flex-col lg:flex-row mt-4">
          <Filter />
          <CompanyList />
        </div>
      </div>
    </div>
  );
};

export default App;
