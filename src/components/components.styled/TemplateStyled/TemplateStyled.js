import styled from "styled-components";

const Container = styled.div``;

const TemplateStyled = {
  Container: ({ children, ...props }) => {
    return (
      <>
        <Container {...props}>{children}</Container>
      </>
    );
  },
};
export default TemplateStyled;
