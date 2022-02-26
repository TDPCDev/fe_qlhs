import styled from "styled-components";
import ButtonStyled from "../ButtonStyled/ButtonStyled";

const Container = styled.div`
  padding: 15px;
  box-shadow: ${(props) => props.theme.boxshadow};
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.5s ease;
  &.shrink {
    padding: 8px 15px;
  }
`;
const Button = styled(ButtonStyled)`
  &.topnav__menubtn {
    visibility: hidden;
    @media screen and (max-width: 768px) {
      visibility: visible;
    }
  }
`;
const TopNavStyled = {
  Container: ({ children, ...props }) => {
    return (
      <>
        <Container {...props}>{children}</Container>
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
export default TopNavStyled;
