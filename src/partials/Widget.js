import React from "react";
import { Card, Image } from "semantic-ui-react";
export const Widget = () => {
  return (
    <Card className="w-full p-4 rounded-lg bg-white border border-gray-100 ">
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="/images/avatar/large/steve.jpg"
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};
