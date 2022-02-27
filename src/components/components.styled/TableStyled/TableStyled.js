import styled from "styled-components";

const Container = styled.div``;

const TableStyled = {
  Container: ({ children, ...props }) => {
    return (
      <>
        <Container {...props}>{children}</Container>
      </>
    );
  },
};
export default TableStyled;
