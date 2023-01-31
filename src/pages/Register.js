import React from "react";
import LoginPage from "../components/hoc/loginPage";
import RegisterComponent from "../components/register";

const Register = () => {
  return (
    <LoginPage>
      <RegisterComponent />
    </LoginPage>
  );
};

export default Register;
