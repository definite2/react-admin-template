import React from "react";

const Section = ({ title, description, right = null, children }) => {
  return (
    <div className="w-full h-full p-12 rounded-lg bg-white border-gray-100 shadow-xl">
      <div className="mb-6 sm:flex items-center justify-between">
        <div className="mb-4 sm:mb-0 flex flex-col">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <div className="text-sm text-gray-400">{description}</div>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
};

export default Section;
