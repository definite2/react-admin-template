import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dropdown, Menu, Visibility } from "semantic-ui-react";
import { logout } from "../../store/auth/actions";

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
        <Menu
          borderless
          fixed={menuFixed ? "top" : undefined}
          className={`bg-gray-800 h-16 rounded-none border-none ${
            menuFixed ? "fixed-menu" : "default-menu"
          }`}
        >
          <Menu.Menu position="right" className="mr-4">
            <Dropdown icon="user" text="Hi bob!" pointing className="link item text-white">
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => dispatch(logout())}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Visibility>
    </>
  );
};
