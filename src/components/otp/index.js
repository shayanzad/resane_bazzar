import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, notification, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox } from "../uiKit";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { StyledContainer } from "./style";
import { postRegisterOtp } from "../../api/register";
import { UserInfoApi } from "../../api/user";
import { loginApi } from "../../api/auth";

const OtpComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(120);
  const [personPassword, setPersonPassword] = useState("");

  let { id } = useParams();
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
    try {
      const res = await postRegisterOtp({
        userId: id,
        otp: values.confirmCode,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      if (res.meta.code == 200) {
        login();
      }
    } catch (err) {
      notification.error({
        message: "ثبت نام با مشکل مواجه شد",
        placement: "bottomLeft",
      });
    }
  };
  const login = async () => {
    let nationalCode = localStorage.getItem("nationalCode");
    try {
      const res = await loginApi({
        username: nationalCode,
        password: personPassword,
        clientId: 100,
      });
      if (res.isSuccess) {
        getUserInfo();
      }
    } catch (err) {
      notification.error({
        message: err.response.data.message,
        placement: "bottomLeft",
      });
    }
  };
  const getUserInfo = async () => {
    debugger;
    try {
      const res = await UserInfoApi();
      if (res.meta.code == 200) {
        localStorage.setItem("userInfo", res.data.unitRoles[0].name);
        localStorage.setItem("userCode", res.data.unitRoles[0].code);
        localStorage.setItem("fullName", res.data.fullName);
        notification.success({
          message: "ثبت نام با موفقیت انحام شد",
          placement: "bottomLeft",
        });
        navigate("/register/edit");
      }
    } catch (err) {}
  };
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

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
          label="کد تایید"
          name="confirmCode"
          rules={[
            {
              required: true,
              message: "لطفا کد تایید را وارد کنید",
            },
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "فرمت وارد شده صحیح نیست",
            },
          ]}
        >
          <Input placeholder="کد تایید" maxLength="6" />
        </Form.Item>
        {timeLeft > 0 ? (
          <p>
            <span>مدت اعتبار</span>
            <span>{timeLeft}</span>
            <span>ثانیه</span>
          </p>
        ) : (
          <div className="resend">
            <p>مدت اعتبار کد تمام شده است</p>
            <Button type="text" width="120px">
              ارسال مجدد کد
            </Button>
          </div>
        )}

        <Form.Item
          label="رمز عبور "
          name="password"
          rules={[
            {
              required: true,
              message: "لطفا رمز عبور  خود را وارد کنید",
            },
          ]}
        >
          <Input
            placeholder="رمز عبور "
            onChange={(e) => setPersonPassword(e.target.value)}
            type="password"
          />
        </Form.Item>
        <Form.Item
          label="تایید رمز عبور "
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "لطفا تایید عبور  خود را وارد کنید",
            },
          ]}
        >
          <Input placeholder="تایید رمز عبور " type="password" />
        </Form.Item>

        <Form.Item className="responsive">
          <Button type="primary" htmlType="submit" hasLoading={true}>
            ثبت نام
          </Button>
          <p className="change-number">
            شماره تلفن همراه اشتباه است؟
            <Link to={"/register"}>تغییر شماره تلفن همراه</Link>
          </p>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};

export default OtpComponent;
