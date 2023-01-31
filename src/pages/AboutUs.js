import React from 'react';
import MainPage from "../components/hoc/mainPage";
import AboutUsComponent from "../components/about-us"
function AboutUs(props) {
    return (
        <MainPage>
            <AboutUsComponent />
        </MainPage>
    );
}

export default AboutUs;