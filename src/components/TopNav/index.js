import React, { useEffect, useState } from "react";
import TopNavStyled from "../components.styled/TopNavStyled/TopNavStyled";
import PropTypes from "prop-types";

const TopNav = ({ showSidebar }) => {
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
    </TopNavStyled.Container>
  );
};
TopNav.prototype = {
  showSidebar: PropTypes.func,
};
export default TopNav;
