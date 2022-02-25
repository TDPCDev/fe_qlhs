import styled from "styled-components";

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
  padding: 20px;
  background-color: ${(props) => props.theme.background.main};
  color: ${(props) => props.theme.color.main};
  box-shadow: ${(props) => props.theme.boxshadow};
  font-size: 16px;
  transition: 0.5s ease-in;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 18px;
    margin-left: 20px;
    color: ${(props) => props.theme.color.main};
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
const MenuItem = styled.div`
  width: 100%;

  .menu__header {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
  .menu__link {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    margin: 5px 0;
    color: ${(props) => props.theme.color.main};
    border-radius: 10px;
    transition: 0.3s ease;
    &.active,
    :hover {
      color: ${(props) => props.theme.color.red};
      background-color: ${(props) => props.theme.background.redLight};
      font-weight: 600;
    }
    i {
      margin-right: 10px;
    }
  }
`;
export const SideBarStyled = {
  Container: ({ children }) => {
    return (
      <>
        <Container>{children}</Container>
      </>
    );
  },
  Logo: ({ children }) => {
    return (
      <>
        <Logo>{children}</Logo>
      </>
    );
  },
  Menu: ({ children }) => {
    return (
      <>
        <Menu>{children}</Menu>
      </>
    );
  },
  MenuItem: ({ children }) => {
    return (
      <>
        <MenuItem>{children}</MenuItem>
      </>
    );
  },
};
