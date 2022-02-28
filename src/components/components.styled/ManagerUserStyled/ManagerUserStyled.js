import { Col } from "antd";
import styled from "styled-components";
import InputStyled from "../InputStyled/InputStyled";
import InputPassStyled from "../InputStyled/InputPassStyled";
import ButtonStyled from "../ButtonStyled/ButtonStyled";
import SelectStyled from "../SelectStyled/SelectStyled";

const LeftContainer = styled(Col)``;
const RightContainer = styled(Col)``;
const Block = styled.div`
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxshadow};
  border-radius: 10px;
  height: 100%;
`;

const Upload = styled.div`
  height: 140px;
  width: 140px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 50%;
  border: 1px solid #eee;
  padding: 10px;
  cursor: pointer;
  input.ant-input {
    display: none;
  }
  label {
    display: block;
    background-color: #f4f6f8;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      background-color: white;
      cursor: pointer;
      position: relative;
      z-index: 3;
    }
    .upload__icongroup {
      color: rgb(99, 115, 129);
      text-align: center;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: translate(-50%, -50%);
      transition: 0.5s ease-in-out;
      cursor: pointer;
      i {
        font-size: 20px;
        margin-bottom: 5px;
      }
      p {
        font-size: 12px;
      }
    }
    :hover {
      opacity: 0.7;
      .upload__icongroup {
        z-index: 4;
        &.uploaded {
          color: white;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;

const ManagerUserStyled = {
  Upload: ({ children, ...props }) => {
    return (
      <>
        <Upload {...props}>{children}</Upload>
      </>
    );
  },
  Block: ({ children, ...props }) => {
    return (
      <>
        <Block {...props}>{children}</Block>
      </>
    );
  },
  LeftContainer: ({ children, ...props }) => {
    return (
      <>
        <LeftContainer {...props}>{children}</LeftContainer>
      </>
    );
  },
  RightContainer: ({ children, ...props }) => {
    return (
      <>
        <RightContainer {...props}>{children}</RightContainer>
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
  InputPass: ({ children, ...props }) => {
    return (
      <>
        <InputPassStyled {...props}>{children}</InputPassStyled>
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
  Select: ({ children, ...props }) => {
    return (
      <>
        <SelectStyled {...props}>{children}</SelectStyled>
      </>
    );
  },
};
export default ManagerUserStyled;
