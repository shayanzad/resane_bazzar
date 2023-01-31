import React from "react";
import EditProfile from "../components/edit-profile";

import LoginPage from "../components/hoc/loginPage";
const RegisterEditProfile = () => {
  return (
    <LoginPage>
      <EditProfile />
    </LoginPage>

  );
};

export default RegisterEditProfile;
