import React from "react";
import {
  Icon,
  Menu,
  Segment,
  Sidebar as SUISidebar,
} from "semantic-ui-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setSideBarOpen } from "../../store/ui/actions";
const Sidebar = (props) => {
  const dispatch = useDispatch();
  const { uistate } = useSelector(
    (state) => ({ uistate: state.ui }),
    shallowEqual
  );
  const {isSidebarOpen}=uistate;
  const handleHide = () => {
    dispatch(setSideBarOpen(false));
  };
  return (
    <SUISidebar.Pushable as={Segment}>
      <SUISidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={handleHide}
        vertical
        visible={isSidebarOpen}
        width="thin"
      >
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
    </SUISidebar.Pushable>
  );
};

export default Sidebar;
