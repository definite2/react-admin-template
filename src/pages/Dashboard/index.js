import React from "react";
import { Widget } from "../../partials/Widget";
import { FiActivity } from "react-icons/fi";
import { CustomersReviewsTable } from "./components/UserTable";
import SectionTitle from "../../partials/SectionTitle";
const Dashboard = () => {
  return (
    <div className="container flex flex-col mx-8">
      <SectionTitle title="Overview" subtitle="Dashboard" />

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 lg:space-y-0 mb-2 lg:mb-4">
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-yellow-300"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-blue-300"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-purple-300"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <Widget
            icon={<FiActivity size={24} />}
            title="deneme"
            value={300}
            iconColor="bg-green-300"
          />
        </div>
      </div>
      <div className="container flex">
        <CustomersReviewsTable />
      </div>
    </div>
  );
};
export default Dashboard;
