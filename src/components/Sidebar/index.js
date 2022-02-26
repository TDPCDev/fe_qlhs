import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SideBarStyled } from "../components.styled/SidebarStyled/SidebarStyled";
import { Link, useLocation } from "react-router-dom";
import listMenu from "../../configs/listMenuSidebar.json";
import { useSelector } from "react-redux";

const Sidebar = ({ show, hiddenSidebar }) => {
  const location = useLocation();
  const { user } = useSelector((rootReducer) => rootReducer.AuthReducer);
  const [path, setPath] = useState("");

  useEffect(() => {
    const curPath = location.pathname;
    setPath(curPath);
  }, [location]);

  const renderListMenu = () => {
    return listMenu.map((menu, index) => {
      if (user?.role !== "admin" && menu.admin === true) {
        return null;
      }
      return (
        <SideBarStyled.MenuItem key={`menu_${index + 1}`}>
          <p className="menu__header">{menu.title}</p>
          <div>
            {menu.submenu.map((submenu) => {
              return (
                <Link
                  to={submenu.src}
                  key={submenu.id}
                  className={`menu__link ${
                    path === submenu.src ? "active" : ""
                  }`}
                  onClick={hiddenSidebar}
                >
                  <i className={submenu.icon}></i>
                  <p>{submenu.title}</p>
                </Link>
              );
            })}
          </div>
        </SideBarStyled.MenuItem>
      );
    });
  };

  return (
    <SideBarStyled.Container className={`${show ? "show" : ""}`}>
      <SideBarStyled.Button
        type="text"
        size="large"
        shape="circle"
        icon={<i className="fa-solid fa-xmark"></i>}
        className="sidebar__closebtn"
        onClick={hiddenSidebar}
      />

      <SideBarStyled.Logo>
        <Link to="/">
          <img src="/assets/img/logo.png" alt="Ger Inter Manager Project" />
        </Link>
        <h1>Quản lý hồ sơ</h1>
      </SideBarStyled.Logo>
      <SideBarStyled.Menu>{renderListMenu()}</SideBarStyled.Menu>
    </SideBarStyled.Container>
  );
};

Sidebar.prototype = {
  show: PropTypes.bool.isRequired,
  hiddenSidebar: PropTypes.func,
};
Sidebar.defaultProps = {
  show: false,
};
export default Sidebar;
