import React from "react";
import { Table } from "semantic-ui-react";
import styled from "styled-components";
import tw from "twin.macro";
const StyledTableHead = styled(Table.Header)`
  ${tw`lg:h-16 w-full text-sm leading-none`}
`;
export const TableHead = (props) => {
  const { headCells, sortBy, sortDirection, onRequestSort } = props;
  const sortHandler = (item) => (event) => {
    onRequestSort(event, item);
  };
  const direction = sortDirection === "descending" ? "descending" : "ascending";
  return (
    <StyledTableHead>
      <Table.Row className="lg:h-16 lg:w-full text-sm leading-none">
        {headCells.map((cell, idx) => (
          <Table.HeaderCell
            key={idx}
            className={`${cell.sortable ? "sortable" : ""} ${
              sortBy === cell.id ? "sorted-" + direction : ""
            } px-3 py-2 border-b text-xs bg-gray-50 leading-4 font-semibold uppercase tracking-wider`}
            align={cell.align}
            onClick={sortHandler(cell.id)}
          >
            {cell.label}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </StyledTableHead>
  );
};
