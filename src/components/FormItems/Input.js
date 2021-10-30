import React from "react";
const Input = (props) => {
  return (
    <input
      type="text"
      className="appearance-none w-full border-gray-300  text-white bg-purple-400 py-4 px-2 rounded-md leading-tight focus:outline-none focus:ring-gray-400 focus:border-gray-400 shadow-sm"
      {...props}
    />
  );
};

export default Input;
