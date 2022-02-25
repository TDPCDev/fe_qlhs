import React from "react";
import { SideBarStyled } from "../components.styled/Sidebar/SidebarStyled";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <SideBarStyled.Container>
      <SideBarStyled.Logo>
        <Link to="/">
          <img src="./assets/img/logo.png" alt="Ger Inter Manager Project" />
        </Link>
        <h1>Quản lý hồ sơ</h1>
      </SideBarStyled.Logo>
    </SideBarStyled.Container>
  );
};

export default Sidebar;
