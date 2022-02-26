import { Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import BreadcumbStyled from "../../components/components.styled/BreadcumbStyled/BreadcumStyled";
import listMenu from "../../configs/listMenuSidebar.json";
import { useSelector } from "react-redux";

const ContentLayout = ({ header = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((rootReducer) => rootReducer.AuthReducer);
  const [title, setTitle] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const { pathname } = location;
    if (user?.role !== "admin" && pathname.split("/")[1] === "admin") {
      navigate("/admin/notallow", { replace: true });
    }
    listMenu.map((menu) => {
      const subMenu = menu.submenu.find((submenu) => submenu.src === pathname);
      if (subMenu) {
        setTitle(subMenu.title);
      }
      return null;
    });
  }, [location, user, navigate]);

  return (
    <div>
      <BreadcumbStyled.Container>
        <h2>{title}</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <i className="fa-solid fa-house"></i>
            <span> Trang chủ</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>{header}</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </BreadcumbStyled.Container>
      <Outlet />
    </div>
  );
};
ContentLayout.prototype = {
  header: PropTypes.string,
};
export default ContentLayout;
