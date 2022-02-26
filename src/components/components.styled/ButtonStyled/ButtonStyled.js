import styled from "styled-components";
import { Button } from "antd";

const ButtonStyled = styled(Button)`
  border-radius: 10px;
  span {
    margin-left: 10px;
  }
  &.ant-btn-circle {
    border-radius: 50%;
  }
  &.ant-btn-text i {
    color: rgb(99, 115, 129);
  }
  &.ant-btn-text:hover {
    background-color: rgba(99, 115, 129, 0.08);
  }
  &.ant-btn-text:active {
    background-color: #c9cdd2;
  }
`;
export default ButtonStyled;
