import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${(props) => props.theme.sidebar.width};
  z-index: 99;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.background.main};
  color: ${(props) => props.theme.color.main};
  box-shadow: ${(props) => props.theme.boxshadow};
  transition: 0.5s ease-in;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
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
};
