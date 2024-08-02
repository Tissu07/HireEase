import React from "react";
import Sidebar from "../../components/community/Sidebar";
import Content from "../../components/community/Content";
import BowlsForYou from "../../components/community/BowlForYou";

function Page() {
  return (
    <div>
      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 md:mt-20">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Content />
        </div>
        <BowlsForYou />
      </div>
    </div>
  );
}

export default Page;
