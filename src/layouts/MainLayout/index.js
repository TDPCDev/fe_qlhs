import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import MainLayoutStyled from "../../components/components.styled/MainLayoutStyled/MainLayoutStyled";
import Sidebar from "../../components/Sidebar";
import TopNav from "../../components/TopNav";
const MainLayout = () => {
  const navigate = useNavigate();
  const { user } = useSelector((rootReducer) => rootReducer.AuthReducer);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);

  return (
    <MainLayoutStyled.Container>
      <MainLayoutStyled.BackgroundOverlay
        className={`${show ? "show" : ""}`}
        onClick={() => setShow(false)}
      />
      <Sidebar show={show} hiddenSidebar={() => setShow(false)} />
      <MainLayoutStyled.Content>
        <TopNav showSidebar={() => setShow(true)} />
        <MainLayoutStyled.Outlet>
          <Outlet />
        </MainLayoutStyled.Outlet>
      </MainLayoutStyled.Content>
    </MainLayoutStyled.Container>
  );
};

export default MainLayout;
