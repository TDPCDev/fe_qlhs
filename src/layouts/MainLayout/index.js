import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TopNav from "../../components/Top";
const MainLayout = () => {
  const navigate = useNavigate();
  const { user } = useSelector((rootReducer) => rootReducer.AuthReducer);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);

  return (
    <>
      <Sidebar />
      <div>
        <TopNav />
      </div>
    </>
  );
};

export default MainLayout;
