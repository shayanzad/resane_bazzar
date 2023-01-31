import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, notification, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox } from "../uiKit";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { StyledContainer } from "./style";
import { postRegister } from "../../api/register";
const RegisterComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color: "white",
      }}
      spin
    />
  );
  const isLoading = useSelector((state) => state.loading.isLoading);

  const redirectPath = location.state?.path || "/";
  const onFinish = async (values) => {
    localStorage.setItem('nationalCode',values.nationalCode);

    try {
      const res = await postRegister({
        mobile: values.phoneNumber,
        nationalCode: values.nationalCode,
      });

      if (res.meta.code == 200) {
        navigate(`/otp/${res.data.userId}`);
      }
    } catch (err) {
      notification.error({
        message: "ثبت نام با مشکل مواجه شد",
        placement: "bottomLeft",
      });
    }
  };

  return (
    <StyledContainer>
      <div>
        <h2>ثبت نام</h2>
        <p>
          اگر هم اکنون دارای حساب کاربری هستید
          <Link to={"/login"}>از اینجا وارد شوید</Link>
        </p>
      </div>

      <Form
        layout="vertical"
        name="horizontal_login"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="شماره تلفن همراه"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "لطفا تلفن ثابت خود را وارد کنید",
            },
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "فرمت وارد شده صحیح نیست",
            },
          ]}
        >
          <Input placeholder="شماره تلفن همراه" />
        </Form.Item>
        <Form.Item
          label="کد ملی"
          name="nationalCode"
          rules={[
            {
              required: true,
              message: "لطفا کد ملی خود را وارد کنید",
            },
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "فرمت وارد شده صحیح نیست",
            },

          ]}
        >
          <Input placeholder="کد ملی" maxLength='10'/>
        </Form.Item>

        <Form.Item className="responsive">
          <Button type="primary" htmlType="submit"  hasLoading={true}>
            ارسال پیامک
          </Button>
          <p className="code-text">
            ما یک کد تایید برای شما ارسال می‌کنیم
          </p>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};

export default RegisterComponent;
