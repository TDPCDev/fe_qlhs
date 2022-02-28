import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;
const Content = styled.div`
  min-height: 100vh;
  padding-left: ${(props) => props.theme.sidebar.width};
  transition: 0.3s ease;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
const BackgroundOverlay = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    z-index: 0;
    transition: 0.5s linear;
    &.show {
      z-index: 20;
      opacity: 1;
      visibility: visible;
    }
  }
`;
const Outlet = styled.div`
  padding: 90px 40px 20px 40px;
  background-color: white;
  min-height: 120vh;
  @media screen and (max-width: 1024px) {
    padding: 90px 20px 20px 20px;
  }
`;

const MainLayoutStyled = {
  Container: ({ children, ...props }) => {
    return (
      <>
        <Container {...props}>{children}</Container>
      </>
    );
  },
  Content: ({ children, ...props }) => {
    return (
      <>
        <Content {...props}>{children}</Content>
      </>
    );
  },
  BackgroundOverlay: ({ children, ...props }) => {
    return (
      <>
        <BackgroundOverlay {...props}>{children}</BackgroundOverlay>
      </>
    );
  },
  Outlet: ({ children, ...props }) => {
    return (
      <>
        <Outlet {...props}>{children}</Outlet>
      </>
    );
  },
};
export default MainLayoutStyled;
