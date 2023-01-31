import React from "react";
import { useSelector } from "react-redux";
import { Form, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Input, Button } from "../uiKit";
import { loginApi } from "../../api/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { StyledContainer } from "./style";
const RegisterComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color:'white'
      }}
      spin
    />
  );
  const isLoading = useSelector((state) => state.loading.isLoading);
  
  const redirectPath = location.state?.path || "/";
  const onFinish = async (values) => {
    
    try {
      const res = await loginApi({
        username: values.username,
        password: values.password,
        clientId: 100,
      });
      debugger
      if (res.data.isSuccess) {
        notification.success({
          message: "با موفقیت وارد شدید",
          placement: "bottomLeft",
        });
        navigate(redirectPath, { replace: true });
      }
    } catch (err) {
      notification.error({
        message: "ورود با مشکل مواجه شد",
        placement: "bottomLeft",
      });
    }
  };

  return (
    <StyledContainer>

      <div>
        <h2>ثبت نام</h2>
        <p>
          شماره تلفن اشتباه است؟
          <Link to={'/register'}>
          ویرایش شماره
          </Link>
        </p>
      </div>
   
      <Form
        name="horizontal_login"
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >


        <Form.Item
          name="verifyCode"
          rules={[
            {
              required: true,
              message: "لطفا کد فعال سازی را وارد کنید",
            },
          ]}
        >
          <Input type="verifyCode" placeholder='کد فعال سازی' />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "لطفا رمز را وارد کنید",
            },
          ]}
        >
          <Input type="password" placeholder='رمز عبور' />
        </Form.Item>

        

        <Form.Item className="responsive">
          <Button type="primary" htmlType="submit">     
            ثبت نام            
          </Button>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};

export default RegisterComponent;
