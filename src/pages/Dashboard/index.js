import React from "react";
import { Table, Header, Rating, Icon } from "semantic-ui-react";
import { Widget } from "../../partials/Widget";
import { FiActivity } from "react-icons/fi";
import { CustomersReviewsTable } from "./components/UserTable";
const Dashboard = () => {
  return (
    <div className="flex flex-col w-full bg-white p-5 ">
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
    </div>
  );
};
export default Dashboard;
