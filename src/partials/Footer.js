import React from "react";
import { Grid, Container, Divider, Image, List } from "semantic-ui-react";
const Footer = () => {
  return (
    <Grid className="w-full">
      <Container textAlign="center">
        <Divider section />
        <Image src="/logo.png" centered size="mini" />
        <List horizontal divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Grid>
  );
};

export default Footer;
