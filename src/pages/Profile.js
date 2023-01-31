import React from 'react';
import MainPage from "../components/hoc/mainPage";
import ProfileComponent from "../components/profile"
function Profile(props) {
    return (
        <MainPage>
            <ProfileComponent />
        </MainPage>
    );
}

export default Profile;