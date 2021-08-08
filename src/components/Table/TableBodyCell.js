import styled from "styled-components";
import tw from "twin.macro";
import { Table } from "semantic-ui-react";
export const TableBodyCell = styled(Table.Cell)`
  ${tw`truncate max-w-xs text-left`}
`;
