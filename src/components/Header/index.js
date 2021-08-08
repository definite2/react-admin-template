import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dropdown, Menu, Visibility } from "semantic-ui-react";
import { logout } from "../../store/auth/actions";
import styled from "styled-components";

const Navbar = styled(Menu)`
  background-color: #aaf255 !important;
`;
export const StickyHeader = () => {
  const dispatch = useDispatch();
  const [menuFixed, setmenuFixed] = useState(false);
  const stickTopMenu = () => setmenuFixed(true);
  const unStickTopMenu = () => setmenuFixed(false);

  return (
    <>
      <Visibility
        onBottomPassed={stickTopMenu}
        onBottomVisible={unStickTopMenu}
        once={false}
      >
        <Navbar
          borderless
          fixed={menuFixed ? "top" : undefined}
          className={menuFixed ? "fixed-menu" : "default-menu"}
        >
          <Menu.Item active name="Dashboard" />

          <Menu.Menu position="right" className="mr-4">
            <Dropdown icon="user" text="Hi bob!" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(logout())}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Navbar>
      </Visibility>
    </>
  );
};
