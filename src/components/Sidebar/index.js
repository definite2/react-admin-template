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
        <Menu.Item as="a" onClick={handleClickMenu} className="flex flex-row justify-end">
         <Icon name="bars" className="self-end" />
        </Menu.Item>

        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </SUISidebar>
      {props.children}
    </Pushable>
  );
};

export default Sidebar;
