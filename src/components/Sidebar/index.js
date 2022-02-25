import React, { useEffect, useState } from "react";
import { SideBarStyled } from "../components.styled/SidebarStyled/SidebarStyled";
import { Link, useLocation } from "react-router-dom";
import listMenu from "../../configs/listMenuSidebar.json";

const Sidebar = () => {
  const location = useLocation();

  const [path, setPath] = useState("");

  useEffect(() => {
    const curPath = location.pathname;
    setPath(curPath);
  }, [location]);

  const renderListMenu = () => {
    return listMenu.map((menu, index) => {
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
    <SideBarStyled.Container>
      <SideBarStyled.Logo>
        <Link to="/">
          <img src="./assets/img/logo.png" alt="Ger Inter Manager Project" />
        </Link>
        <h1>Quản lý hồ sơ</h1>
      </SideBarStyled.Logo>
      <SideBarStyled.Menu>{renderListMenu()}</SideBarStyled.Menu>
    </SideBarStyled.Container>
  );
};

export default Sidebar;
