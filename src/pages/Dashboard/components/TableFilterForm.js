import React from "react";
import { Grid,Segment } from "semantic-ui-react";
const TableFilterForm = () => {
  return (
    <form>
      <Grid columns={4}>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </form>
  );
};

export default TableFilterForm;
