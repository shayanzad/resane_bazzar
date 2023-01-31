import React from "react";
import LoginPage from "../components/hoc/loginPage";
import VerifyComponent from "../components/verify";

const Verify = () => {
  return (
    <LoginPage>
      <VerifyComponent />
    </LoginPage>
  );
};

export default Verify;
