import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const IconWrapper = styled.div`
  ${tw`rounded-full p-3 text-white mr-4`}
`;
export const Widget = ({ icon, title, value,iconColor }) => {
  return (
    <div className="w-full p-4 rounded-lg border border-gray-100 bg-gray-100 shadow-lg">
      <div className="flex items-center justify-between">
        <IconWrapper className={iconColor}>{icon}</IconWrapper>
        <div className="flex flex-col">
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
