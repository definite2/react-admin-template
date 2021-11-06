import React from "react";
import { Icon, Menu, Sidebar as SUISidebar } from "semantic-ui-react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { setSideBarOpen } from "store/ui/actions";
import Input from "../FormItems/Input";
import { NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();
  return (
    <SUISidebar.Pushable>
      <SUISidebar
        as={Menu}
        animation="uncover"
        icon="labeled"
        inverted
        vertical
        visible
        width={isSidebarOpen ? "thin" : "very thin"}
      >
        <div
          className="flex justify-end items-center text-white cursor-pointer h-12"
          onClick={handleClickMenu}
        >
          <span className={`${isSidebarOpen ? "mr-2 font-semibold text-primary-400" : "hidden"}`}>React Admin</span>
          <Icon name="bars" size="large" />
        </div>
        <hr />
        <Menu.Item as="a">
          <Icon name="table" className={`${isSidebarOpen ? "" : "mr-5"}`} />
          <span className={`${isSidebarOpen ? "" : "hidden"}`}>Tables</span>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="chart bar" className={`${isSidebarOpen ? "" : "mr-5"}`} />
          <span className={`${isSidebarOpen ? "" : "hidden"}`}>Charts</span>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="wpforms" className={`${isSidebarOpen ? "" : "mr-5"}`} />
          <span className={`${isSidebarOpen ? "" : "hidden"}`}>Forms</span>
        </Menu.Item>
      </SUISidebar>
      <SUISidebar.Pusher>{props.children}</SUISidebar.Pusher>
    </SUISidebar.Pushable>
  );
};

export default Sidebar;
