import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Divider,
  Sidebar as SUISidebar,
  Grid,
  Icon,
  Image,
  List,
  Menu,
  Visibility,
} from "semantic-ui-react";
import _ from "lodash";
import { StickyHeader } from "../../components/Header";
import { Widget } from "../Widget";
import Sidebar from "../../components/Sidebar";

const overlayStyle = {
  float: "left",
  margin: "0em 3em 1em 0em",
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: "fixed",
  top: "80px",
  zIndex: 10,
};

const overlayMenuStyle = {
  position: "relative",
  left: 0,
  transition: "left 0.5s ease",
};
const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: "800px",
};

const Paragraph = () => (
  <p>
    {[
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ",
      "tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ",
      "semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ",
      "ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ",
      "fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ",
      "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ",
      "neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ",
      "accumsan porttitor, facilisis luctus, metus",
    ].join("")}
  </p>
);
const Layout = ({ children }) => {
  const [overlayFixed, setoverlayFixed] = useState(false);
  const [overlayRect, setoverlayRect] = useState();
  const restRef = useRef(null);

  const stickOverlay = () => setoverlayFixed(true);
  const unStickOverlay = () => setoverlayFixed(false);

  useEffect(() => {
    const handleOverlayRef = () => {
      setoverlayRect(
        _.pick(restRef.current.getBoundingClientRect(), "height", "width")
      );
    };
    window.addEventListener("scroll", handleOverlayRef);

    return () => {
      window.removeEventListener("scroll", handleOverlayRef);
    };
  }, []);

  return (
    <>
      <StickyHeader />
      <Sidebar>
        <SUISidebar.Pusher>
          {children}
          <Container
            className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4"
            text
          >
             {_.times(3, (i) => (
            <Paragraph key={i} />
          ))}
            <div className="w-full lg:w-1/4">
              <Widget />
            </div>
            <div className="w-full lg:w-1/4">
              <Widget />
            </div>
            <div className="w-full lg:w-1/4">
              <Widget />
            </div>

            <Visibility
              offset={80}
              once={false}
              onTopPassed={stickOverlay}
              onTopVisible={unStickOverlay}
              style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
            />

            <div
              ref={restRef}
              style={overlayFixed ? fixedOverlayStyle : overlayStyle}
            >
              <Menu
                icon="labeled"
                style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
                vertical
              >
                <Menu.Item>
                  <Icon name="twitter" />
                  Twitter
                </Menu.Item>

                <Menu.Item>
                  <Icon name="facebook" />
                  Share
                </Menu.Item>

                <Menu.Item>
                  <Icon name="mail" />
                  Email
                </Menu.Item>
              </Menu>
            </div>
          </Container>
          {/* begin:footer */}
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
        </SUISidebar.Pusher>
      </Sidebar>

      {/* end::footer */}
    </>
  );
};
export default Layout;
