import React, { useState } from "react";
import { Form, Input, Row, Col, Switch, Button, Select } from "antd";
import ManagerUserStyled from "../../components/components.styled/ManagerUserStyled/ManagerUserStyled";
import axios from "axios";
const ManagerUser = () => {
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState(null);
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("file", avatar);
    formData.append("upload_preset", "gstmr2zk");
    axios
      .post("https://api.cloudinary.com/v1_1/dljmwzmun/image/upload", formData)
      .then((response) => {
        values.avatar = response.data.secure_url;
        console.log(values);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical" size="large">
      <Row gutter={[20, 20]}>
        <ManagerUserStyled.LeftContainer xs={24} md={12} xl={8} xxl={10}>
          <ManagerUserStyled.Block>
            <Form.Item
              name="avatar"
              style={{ textAlign: "center" }}
              rules={[{ required: true, message: "Vui lòng chọn avatar" }]}
            >
              <ManagerUserStyled.Upload>
                <label htmlFor="avatar-input">
                  {avatar ? <img src={avatar} alt="" /> : <></>}
                  <div
                    className={`upload__icongroup ${avatar ? "uploaded" : ""}`}
                  >
                    <i className="fa-solid fa-camera"></i>
                    <p>Tải lên hình ảnh</p>
                  </div>
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  id="avatar-input"
                  onChange={(e) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                      if (reader.readyState === 2) {
                        setAvatar(reader.result);
                      }
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }}
                />
              </ManagerUserStyled.Upload>
            </Form.Item>
            <Row>
              <Col xs={12} md={12} xl={12}>
                <Form.Item
                  label="Cấp quyền hoạt động"
                  valuePropName="checked"
                  name="isEnabled"
                  initialValue={true}
                >
                  <Switch />
                </Form.Item>
              </Col>
              <Col xs={12} md={12} xl={12}>
                <Form.Item label="Phân quyền" name="role" initialValue="canBo">
                  <ManagerUserStyled.Select>
                    <Select.Option value="admin">Quản trị viên</Select.Option>
                    <Select.Option value="canBo">Cán bộ</Select.Option>
                    <Select.Option value="lanhDao">Lãnh đạo</Select.Option>
                  </ManagerUserStyled.Select>
                </Form.Item>
              </Col>
            </Row>
          </ManagerUserStyled.Block>
        </ManagerUserStyled.LeftContainer>
        <ManagerUserStyled.RightContainer xs={24} md={12} xl={16} xxl={14}>
          <ManagerUserStyled.Block>
            <Row gutter={[20, 0]}>
              <Col xs={24} md={24} xl={12} xxl={12}>
                <Form.Item
                  label="Tài khoản"
                  name="username"
                  rules={[
                    { required: true, message: "Vui lòng nhập tài khoản!" },
                  ]}
                >
                  <ManagerUserStyled.Input placeholder="Tài khoản" />
                </Form.Item>
                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  type="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu!",
                    },
                  ]}
                >
                  <ManagerUserStyled.InputPass placeholder="Mật khẩu" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={12} xxl={12}>
                <Form.Item
                  label="Họ và tên đầy đủ"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên đầy đủ!",
                    },
                  ]}
                >
                  <ManagerUserStyled.Input
                    placeholder="Họ tên đầy đủ"
                    onChange={(e) => {
                      const arrString = e.target.value.split(" ");
                      const length = arrString.length;
                      if (length >= 2) {
                        form.setFieldsValue({
                          shortName: `${arrString[length - 2]} ${
                            arrString[length - 1]
                          }`,
                        });
                      }
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Tên viết tắt"
                  name="shortName"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên viết tắt!",
                    },
                  ]}
                >
                  <ManagerUserStyled.Input placeholder="Tên viết tắt" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} xl={24} xxl={24}>
                <Form.Item style={{ textAlign: "right" }}>
                  <ManagerUserStyled.Button
                    htmlType="submit"
                    icon={<i className="fa-solid fa-user-plus"></i>}
                    type="primary"
                  >
                    Thêm mới
                  </ManagerUserStyled.Button>
                </Form.Item>
              </Col>
            </Row>
          </ManagerUserStyled.Block>
        </ManagerUserStyled.RightContainer>
      </Row>
    </Form>
  );
};

export default ManagerUser;
