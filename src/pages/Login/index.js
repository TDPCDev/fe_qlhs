import React, { useEffect } from "react";
import { LoginStyled } from "../../components/components.styled/LoginStyled/LoginStyled";
import { Form, message as Message } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, user, loading, error } = useSelector(
    (rootReducer) => rootReducer.AuthReducer
  );

  useEffect(() => {
    if (error) {
      errorMessage(message);
    }
  }, [message, error]);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  const onFinish = (values = null) => {
    if (values) {
      dispatch(loginAction(values));
    }
  };
  const errorMessage = (message) => {
    Message.error(message);
  };
  return (
    <LoginStyled.Container>
      <LoginStyled.Content>
        <LoginStyled.Header>
          <img src="./assets/img/logo.png" alt="Ger Inter Manager Project" />
          <h1>Đăng nhập</h1>
        </LoginStyled.Header>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Tài khoản không để trống!" }]}
          >
            <LoginStyled.Input
              placeholder="Tài khoản"
              size="large"
              allowClear
              prefix={<i className="fa-solid fa-user"></i>}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Mật khẩu không để trống!" }]}
          >
            <LoginStyled.Input
              type="password"
              placeholder="Mật khẩu"
              size="large"
              prefix={<i className="fa-solid fa-lock"></i>}
            />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <LoginStyled.Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={loading}
              icon={<i className="fa-solid fa-right-to-bracket"></i>}
            >
              Đăng nhập
            </LoginStyled.Button>
          </Form.Item>
        </Form>
        <LoginStyled.Footer>
          Development by germany.dev.91@gmail.com
        </LoginStyled.Footer>
      </LoginStyled.Content>
    </LoginStyled.Container>
  );
};

export default Login;
