import React from "react";

const SectionTitle = ({ title, subtitle, right=null }) => {
  return (
    <div className="w-full mb-6 pt-3">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <div className="text-xs uppercase font-light text-gray-500">
            {title}
          </div>
          <div className="text-xl font-bold">{subtitle}</div>
        </div>
        {right}
      </div>
    </div>
  );
};

export default SectionTitle;
