import React from "react";
import { Pagination as SUIPagination, Dropdown } from "semantic-ui-react";
export const Pagination = (props) => {
  const {
    activePage,
    pageSize,
    totalPages,
    onPageChange,
    onPageSizeChange,
    pageSizeOptioms = [
      {
        key: 10,
        text: "10",
        value: 10,
      },
      {
        key: 20,
        text: "20",
        value: 20,
      },
      {
        key: 50,
        text: "50",
        value: 50,
      },
    ],
  } = props;

  return (
    <div className="flex justify-end items-center">
      <div className="pl-2">
        <SUIPagination
          activePage={activePage}
          totalPages={totalPages}
          onPageChange={(_, { value }) => onPageChange(value)}
        />
      </div>
      <div>
        <Dropdown
          options={pageSizeOptioms}
          value={pageSize}
          pointing="top"
          simple
          onChange={onPageSizeChange}
        />
      </div>
    </div>
  );
};
