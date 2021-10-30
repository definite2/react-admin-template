import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { TableBodyCell, Pagination } from "../../../components/Table";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { UsersTableHead } from "./UserTableHead";
import { mockgetReviews } from "../../../store/reviews/actions";
import TableFilterForm from "./TableFilterForm";
export const CustomersReviewsTable = () => {
  const dispatch = useDispatch();
  const { currentState } = useSelector(
    (state) => ({ currentState: state.reviews }),
    shallowEqual
  );
  const { data, totalPages, filters, sortBy, sortDirection } = currentState;
  useEffect(() => {
    dispatch(mockgetReviews(filters));
  }, [dispatch, filters]);
  const handleSort = (_, property) => {
    const isAscending = sortBy === property && sortDirection === "ascending";
    dispatch();
  };
  return (
    <div
      className="bg-white w-full flex flex-col pb-5"
      style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.04)" }}
    >
      <TableFilterForm />
      <Table selectable className="reviews-table">
        <UsersTableHead />
        <Table.Body>
          {data.map((row, idx) => {
            return (
              <Table.Row key={idx}>
                <TableBodyCell align="left">{row.username}</TableBodyCell>
                <TableBodyCell align="left">{row.company}</TableBodyCell>
                <TableBodyCell align="left">{row.email}</TableBodyCell>
                <TableBodyCell align="left">{row.registerDate}</TableBodyCell>
                <TableBodyCell>
                  <button>edit</button>
                  <button>delete</button>
                </TableBodyCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
