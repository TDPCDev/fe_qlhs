import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopNavStyled from "../components.styled/TopNavStyled/TopNavStyled";
import { Dropdown, Menu } from "antd";
import PropTypes from "prop-types";
import { logoutAction } from "../../redux/actions/authActions";

const TopNav = ({ showSidebar }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((rootReducer) => rootReducer.AuthReducer);
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const handleScoll = () => {
      setShrink((prev) => {
        if (
          !prev &&
          (document.body.scrollTop > 60 ||
            document.documentElement.scrollTop > 60)
        ) {
          return true;
        }

        if (
          prev &&
          document.body.scrollTop < 30 &&
          document.documentElement.scrollTop < 30
        ) {
          return false;
        }
        return prev;
      });
    };
    document.addEventListener("scroll", handleScoll);
    return () => {
      document.removeEventListener("scroll", handleScoll);
    };
  }, []);
  const menu = (
    <TopNavStyled.DropdownMenu>
      <Menu.Item
        danger
        key="menu_logout"
        icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>}
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        Đăng xuất
      </Menu.Item>
    </TopNavStyled.DropdownMenu>
  );
  return (
    <TopNavStyled.Container className={`${shrink ? "shrink" : ""}`}>
      <TopNavStyled.Button
        type="text"
        shape="circle"
        size="large"
        icon={<i className="fa-solid fa-bars"></i>}
        onClick={showSidebar}
        className="topnav__menubtn"
      ></TopNavStyled.Button>
      <Dropdown overlay={menu} trigger="click" arrow placement="bottomRight">
        <div>
          <TopNavStyled.ButtonImg
            type="text"
            icon={
              <img
                src={user ? user.avatar : "/assets/img/logo.png"}
                alt="Minh Duc"
              />
            }
          >
            {user ? user.shortName : ""}
          </TopNavStyled.ButtonImg>
        </div>
      </Dropdown>
    </TopNavStyled.Container>
  );
};
TopNav.prototype = {
  showSidebar: PropTypes.func,
};
export default TopNav;
