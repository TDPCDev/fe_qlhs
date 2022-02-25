import styled from "styled-components";
import InputStyled from "../InputStyled/InputStyled";
import ButtonStyled from "../ButtonStyled/ButtonStyled";
const Container = styled.div`
  background-image: linear-gradient(
    0deg,
    rgb(255, 222, 233) 0%,
    rgb(181, 255, 252) 100%
  );

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxshadow};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
  h1 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme.color.main};
    color: #595959;
  }
  img {
    height: 50px;
    width: 50px;
    margin-bottom: 10px;
  }
`;
const Footer = styled.p`
  font-size: 12px;
  opacity: 0.6;
`;

export const LoginStyled = {
  Container: ({ children }) => {
    return (
      <>
        <Container>{children}</Container>
      </>
    );
  },
  Content: ({ children }) => {
    return (
      <>
        <Content>{children}</Content>
      </>
    );
  },
  Header: ({ children }) => {
    return (
      <>
        <Header>{children}</Header>
      </>
    );
  },
  Input: ({ children, ...props }) => {
    return (
      <>
        <InputStyled {...props}>{children}</InputStyled>
      </>
    );
  },
  Button: ({ children, ...props }) => {
    return (
      <>
        <ButtonStyled {...props}>{children}</ButtonStyled>
      </>
    );
  },
  Footer: ({ children, ...props }) => {
    return (
      <>
        <Footer {...props}>{children}</Footer>
      </>
    );
  },
};
