import React from 'react';
import {StyledContainer} from "./style"
// import banner from "../../../assets/images/profile/banner.png"
function Banner({image}) {
    return (
        <StyledContainer>
            <img src={image} alt="banner" />
        </StyledContainer>
    );
}

export default Banner;