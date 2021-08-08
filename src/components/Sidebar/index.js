import React from "react";
import { Icon, Menu, Segment, Sidebar as SUISidebar } from "semantic-ui-react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import styled from "styled-components";
import { setSideBarOpen } from "../../store/ui/actions";
const Pushable = styled(SUISidebar.Pushable)`
  margin-top: 0 !important;
  border: none !important;
`;

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const handleClickMenu = () => {
    dispatch(setSideBarOpen(!isSidebarOpen));
  };
  const { uistate } = useSelector(
    (state) => ({ uistate: state.ui }),
    shallowEqual
  );
  const { isSidebarOpen } = uistate;
  return (
    <Pushable as={Segment}>
      <SUISidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={true}
        width={isSidebarOpen ? "thin" : "very thin"}
      >
        <Menu.Item as="a" onClick={handleClickMenu}>
          <Icon name="bars" />
        </Menu.Item>

        <Menu.Item  as="a">
          <Icon name="home" className={`${isSidebarOpen ? "" : "mr-5"}`}  />
          <span className={`${isSidebarOpen ? "" : "hidden"}`}>Home</span>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" className={`${isSidebarOpen ? "" : "mr-5"}`}  />
          <span className={`${isSidebarOpen ? "" : "hidden"}`}>Game</span>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" className={`${isSidebarOpen ? "" : "mr-5"}`} />
          <span className={`${isSidebarOpen ? "" : "hidden"}`}>
            Channels
          </span>
        </Menu.Item>
      </SUISidebar>
      {props.children}
    </Pushable>
  );
};

export default Sidebar;
