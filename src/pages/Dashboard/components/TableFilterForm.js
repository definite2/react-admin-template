import React from "react";
import { Form } from "semantic-ui-react";
const TableFilterForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Input label="Username" placeholder="" width={4} />
        <Form.Input label="Company" placeholder="X Company" width={4} />
        <Form.Input label="Email" placeholder="name@company.com" width={4} />
        <Form.Input label="Register Date" placeholder="10/31/2021" width={4} />
      </Form.Group>
    </Form>
  );
};

export default TableFilterForm;
