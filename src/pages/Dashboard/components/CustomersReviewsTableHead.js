import React from "react";
import { TableHead } from "../../../components/Table";
export const CustomersReviewsTableHead = (props) => {
  const { onRequestSort, sortDirection, sortBy } = props;

  return (
    <TableHead
      onRequestSort={onRequestSort}
      sortBy={sortBy}
      sortDirection={sortDirection}
    />
  );
};
