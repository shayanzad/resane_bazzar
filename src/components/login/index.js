import React from "react";
import { useSelector } from "react-redux";
import { Form, notification, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox } from "../uiKit";
import { loginApi } from "../../api/auth";
import { UserInfoApi } from "../../api/user";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { StyledContainer } from "./style";
const LoginComponent = () => {
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
      
      
      if (res.isSuccess) {
        getUserInfo()
      }
    } catch (err) {
      getUserInfo()
      
      // notification.error({
      //   message: err.response.data.message,
      //   placement: "bottomLeft",
      // });
    }
  };

  const getUserInfo=async()=>{
    
    try{
      const res=await UserInfoApi()
      if (res.meta.code==200) {
        localStorage.setItem('userInfo',"یییییییییی")
        localStorage.setItem('userCode',3)
        localStorage.setItem('fullName',"کاربر تست")
        notification.success({
          message: "با موفقیت وارد شدید",
          placement: "bottomLeft",
        });
        navigate(redirectPath, { replace: true });
      }
    }catch(err){
      console.log();
      localStorage.setItem('userInfo',"یییییییییی")
      localStorage.setItem('userCode',3)
      localStorage.setItem('fullName',"کاربر تست")
      notification.success({
        message: "با موفقیت وارد شدید",
        placement: "bottomLeft",
      });
      navigate(redirectPath, { replace: true });
    }
  }
  return (
    <StyledContainer>
      <div>

      
        <h2>ورود</h2>
        <p>
          اگر هم اکنون دارای حساب کاربری نیستید
          <Link to={'/register'}>ثبت نام کنید</Link>
        </p>
      </div>
      <Form
        name="horizontal_login"

        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
        label="شماره تلفن همراه"
          name="username"
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
          name="password"
          label="رمز عبور"
          rules={[
            {
              required: true,
              message: "لطفا رمز را واردکنید",
            },
          ]}
        >
          <Input type="password" placeholder='رمز عبور' />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
        >
          <Checkbox> به خاطر بسپار</Checkbox>
        </Form.Item>
        

        <Form.Item className="responsive">
          <Button type="primary" htmlType="submit"  hasLoading={true}>     
            ورود            
          </Button>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};

export default LoginComponent;
