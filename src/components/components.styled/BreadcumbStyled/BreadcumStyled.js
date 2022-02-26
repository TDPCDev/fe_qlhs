import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const BreadcumbStyled = {
  Container: ({ children, ...props }) => {
    return (
      <>
        <Container {...props}>{children}</Container>
      </>
    );
  },
};
export default BreadcumbStyled;
