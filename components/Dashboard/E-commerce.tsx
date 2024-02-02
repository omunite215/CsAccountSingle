"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import TablesPage from "@/app/tables/page";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
      <h1 className=" text-2xl font-bold font-satoshi mb-2">Project Status</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Start" total="3000" rate="0.43%" levelUp>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-power-circle animate-pulse text-danger"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 12V6" />
            <path d="M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5" />
          </svg>
        </CardDataStats>
        <CardDataStats title="In-Processing" total="2000" rate="4.35%" levelUp>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-loader text-warning animate-spin-3 delay-700"
          >
            <line x1="12" x2="12" y1="2" y2="6" />
            <line x1="12" x2="12" y1="18" y2="22" />
            <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
            <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
            <line x1="2" x2="6" y1="12" y2="12" />
            <line x1="18" x2="22" y1="12" y2="12" />
            <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
            <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
          </svg>
        </CardDataStats>
        <CardDataStats title="Completed" total="1000" rate="2.59%" levelUp>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide text-success animate-pulse lucide-check-circle-2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </CardDataStats>
      </div>
      <div>
        <TablesPage/>
      </div>
    </>
  );
};

export default ECommerce;
