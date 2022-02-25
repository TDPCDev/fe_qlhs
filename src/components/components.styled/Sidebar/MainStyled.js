import styled from "styled-components";
const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;
export const MainStyled = {
  Container({ children }) {
    return <Container>{children}</Container>;
  },
};
