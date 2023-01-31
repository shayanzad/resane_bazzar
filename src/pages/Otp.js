import React from 'react';
import LoginPage from "../components/hoc/loginPage";
import OtpComponent from "../components/otp";

function Otp(props) {
    return (
        <LoginPage>
            <OtpComponent />
        </LoginPage>
    );
}

export default Otp;