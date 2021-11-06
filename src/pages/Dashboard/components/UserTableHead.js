import React from "react";
import { TableHead } from "components/Table";
export const UsersTableHead = (props) => {
  const headerCells = [
    {
      id: "username",
      label: "User Name",
      align: "left",
      sort: false,
    },
    {
      id: "company",
      label: "Company",
      align: "left",
      sort: false,
    },
    {
      id: "email",
      label: "Email",
      align: "left",
      sort: false,
    },
    {
      id: "registerDate",
      label: "Register Date",
      align: "left",
      sort: true,
    },
    {
      id: "actions",
      label: "Actions",
      align: "left",
      sort: false,
    },
  ];
  const { onRequestSort, sortDirection, sortBy } = props;

  return (
    <TableHead
      headCells={headerCells}
      onRequestSort={onRequestSort}
      sortBy={sortBy}
      sortDirection={sortDirection}
    />
  );
};
