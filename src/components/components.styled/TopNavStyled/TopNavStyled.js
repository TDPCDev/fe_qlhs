import styled from "styled-components";
import ButtonStyled from "../ButtonStyled/ButtonStyled";
import { DropdownMenuStyled } from "../DropdownStyled/DropdownStyled";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const ButtonImg = styled(ButtonStyled)`
  border-radius: 30px;
  border: 1px solid #eee;
  height: 38px;
  padding: 0 15px 0 40px;
  position: relative;
  img {
    height: 50px;
    width: 50px;
    padding: 2px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    background-color: white;
    position: absolute;
    left: -10%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const DropdownMenu = styled(DropdownMenuStyled)``;

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
  ButtonImg: ({ children, ...props }) => {
    return (
      <>
        <ButtonImg {...props}>{children}</ButtonImg>
      </>
    );
  },
  DropdownMenu: ({ children, ...props }) => {
    return (
      <>
        <DropdownMenu {...props}>{children}</DropdownMenu>
      </>
    );
  },
};
export default TopNavStyled;
