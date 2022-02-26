import { Result } from "antd";
import ButtonStyled from "../../components/components.styled/ButtonStyled/ButtonStyled";
import React from "react";
import { useNavigate } from "react-router-dom";
const AdminWarning = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="error"
      title="Không được quyền truy cập"
      subTitle="Chức năng này chỉ dành cho người dùng có vai trò Admin."
      extra={[
        <ButtonStyled
          type="primary"
          key="console"
          size="large"
          icon={<i className="fa-solid fa-house"></i>}
        >
          Quay lại trang chủ
        </ButtonStyled>,
        <ButtonStyled
          key="buy"
          size="large"
          icon={<i className="fa-solid fa-rotate-left"></i>}
          onClick={() => navigate(-1)}
        >
          Quay lại trang trước đó
        </ButtonStyled>,
      ]}
    ></Result>
  );
};

export default AdminWarning;
