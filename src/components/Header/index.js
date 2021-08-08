import React, { useState } from "react";
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
} from "semantic-ui-react";
import { setSideBarOpen } from "../../store/ui/actions";
const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};

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

export const StickyHeader = () => {
  const dispatch = useDispatch();
  const { uistate } = useSelector(
    (state) => ({ uistate: state.ui }),
    shallowEqual
  );
  const {isSidebarOpen}=uistate;
  const [menuFixed, setmenuFixed] = useState(false);
  const stickTopMenu = () => setmenuFixed(true);
  const unStickTopMenu = () => setmenuFixed(false);
  const handleClickMenu = () => {
    dispatch(setSideBarOpen(!isSidebarOpen));
  };
  return (
    <>
      <Visibility
        onBottomPassed={stickTopMenu}
        onBottomVisible={unStickTopMenu}
        once={false}
      >
        <Menu
          borderless
          fixed={menuFixed ? "top" : undefined}
          className={menuFixed ? "fixed-menu" : "menu"}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container text>
            <Menu.Item>
              <Image size="mini" src="/logo.png" onClick={handleClickMenu} />
            </Menu.Item>
            <Menu.Item header>Dashboard</Menu.Item>

            <Menu.Menu position="right">
              <Dropdown
                icon="user"
                text="Hi bob!"
                pointing
                className="link item"
              >
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
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    </>
  );
};
