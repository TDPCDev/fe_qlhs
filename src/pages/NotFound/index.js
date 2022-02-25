import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import ButtonStyled from "../../components/components.styled/ButtonStyled/ButtonStyled";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Đường dẫn trang web không tồn tại!"
      extra={
        <ButtonStyled
          type="primary"
          size="large"
          onClick={() => {
            navigate("/", { replace: true });
          }}
          icon={<i className="fa-solid fa-house"></i>}
        >
          Quay lại trang chủ
        </ButtonStyled>
      }
    />
  );
};

export default NotFound;
