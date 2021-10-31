import React from "react";
import { Widget } from "../../partials/Widget";
import { FiActivity } from "react-icons/fi";
import { CustomersReviewsTable } from "./components/UserTable";
import SectionTitle from "../../partials/SectionTitle";
const Dashboard = () => {
  return (
    <>
      <SectionTitle title="Overview" subtitle="Dashboard" />

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 lg:space-y-0 mb-2 lg:mb-4">
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-yellow-400"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-yellow-400"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-yellow-400"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-yellow-400"
          />
        </div>
      </div>
      <div className="container flex mx-8">
        <CustomersReviewsTable />
      </div>
    </>
  );
};
export default Dashboard;
