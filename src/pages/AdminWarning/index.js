import { Result, Typography } from "antd";
import ButtonStyled from "../../components/components.styled/ButtonStyled/ButtonStyled";
import React from "react";

const AdminWarning = () => {
  return (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <ButtonStyled
          type="primary"
          key="console"
          icon={<i className="fa-solid fa-house"></i>}
        >
          Quay lại trang chủ
        </ButtonStyled>,
        <ButtonStyled key="buy">Buy Again</ButtonStyled>,
      ]}
    >
      <div className="desc">
        <i className="fa-solid fa-circle-xmark"></i>
        <h1>Không được quyền truy cập</h1>
        <p>Chức năng này chỉ dành cho người dùng có vai trò Admin</p>
      </div>
    </Result>
  );
};

export default AdminWarning;
