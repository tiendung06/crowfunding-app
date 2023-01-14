import React from "react";
import ReactModal from "react-modal";
import Overlay from "components/common/Overlay";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import CampaignPerk from "modules/campaign/CampaignPerk";
import { Outlet } from "react-router-dom";
import { Button } from "components/button";

const LayoutDashboard = () => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <ReactModal
        isOpen
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="absolute z-10 flex items-center justify-center cursor-pointer w-11 h-11 right-10 top-2 text-text1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-10 text-2xl font-bold text-center">
          Back this project
        </h2>
        <p className="mb-3 text-sm font-medium text-text2">
          Enter the contribute amount
        </p>
        <input
          type="text"
          placeholder="$10"
          name="amount"
          className="w-full px-5 py-2 text-lg font-medium border rounded border-strock"
        />
        <p className="my-5 text-sm text-text3">
          Contribution are not associatied with perks
        </p>
        <Button kind="primary" className="px-11">
          Continue
        </Button>
        <div className="mt-[60px]"></div>
        <CampaignPerk showButton></CampaignPerk>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
