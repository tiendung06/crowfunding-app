import { Button } from "components/button";
import React from "react";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img src="logo.svg" alt="bg" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button className="bg-secondary px-7">Start a campaign</Button>
        <img src="logo.svg" alt="bg" className="object-cover rounded-full" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
