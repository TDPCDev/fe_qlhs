import styled from "styled-components";
import ButtonStyled from "../ButtonStyled/ButtonStyled";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: ${(props) => props.theme.sidebar.width};
  background-color: ${(props) => props.theme.background.main};
  color: ${(props) => props.theme.color.main};
  box-shadow: ${(props) => props.theme.boxshadow};
  font-size: 16px;
  transform: translateX(0);
  overflow: hidden;
  transition: 0.5s ease-in;
  @media screen and (max-width: 768px) {
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 20px;
  img {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 18px;
    margin-left: 20px;
    color: ${(props) => props.theme.color.main};
  }
  @media screen and (max-width: 768px) {
    h1 {
      margin-left: 10px;
    }
    justify-content: flex-start;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  overflow-y: auto;
  padding: 20px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b4bcc3;
    border-radius: 10px;
  }
`;
const Button = styled(ButtonStyled)`
  &.sidebar__closebtn {
    position: absolute;
    top: 10px;
    right: 10px;
    visibility: hidden;
    @media screen and (max-width: 768px) {
      visibility: visible;
    }
  }
`;
const MenuItem = styled.div`
  width: 100%;
  .menu__header {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    margin: 10px;
  }
  .menu__link {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    margin: 5px 0;
    color: ${(props) => props.theme.sidebar.color};
    border-radius: 10px;
    transition: 0.3s ease;
    &.active {
      color: ${(props) => props.theme.color.red};
      background-color: ${(props) => props.theme.background.redLight};
      font-weight: 500;
      :hover {
        background-color: ${(props) => props.theme.background.redLight};
      }
    }
    :hover {
      background-color: ${(props) => props.theme.sidebar.hover.background};
    }
    :active {
      background-color: ${(props) => props.theme.sidebar.active.background};
    }
    i {
      margin-right: 10px;
    }
  }
`;
export const SideBarStyled = {
  Container: ({ children, ...props }) => {
    return (
      <>
        <Container {...props}>{children}</Container>
      </>
    );
  },
  Logo: ({ children, ...props }) => {
    return (
      <>
        <Logo {...props}>{children}</Logo>
      </>
    );
  },
  Menu: ({ children, ...props }) => {
    return (
      <>
        <Menu {...props}>{children}</Menu>
      </>
    );
  },
  MenuItem: ({ children, ...props }) => {
    return (
      <>
        <MenuItem {...props}>{children}</MenuItem>
      </>
    );
  },
  Button: ({ children, ...props }) => {
    return (
      <>
        <Button {...props}>{children}</Button>
      </>
    );
  },
};
