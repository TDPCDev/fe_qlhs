import styled from "styled-components";
import { Input } from "antd";

const InputStyled = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  .ant-input-prefix {
    margin-right: 10px;
    color: #9ba7b3;
    transition: all 0.3s linear;
  }
  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-focused {
    .ant-input-prefix {
      color: #595959;
    }
  }
  ::placeholder {
    color: #9ba7b3;
  }
`;

export default InputStyled;
