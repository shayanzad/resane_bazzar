import React from "react";
import { StyledContainer } from "./style";
import Logo from "./logo";
import Lists from "./lists";
import Social from "./social";
import CopyRight from "./copyright";
function Footer(props) {
  return (
    <StyledContainer>
      <div className="container">
        <Logo />
        <Lists />
        <Social />
      </div>
      <CopyRight/>
    </StyledContainer>
  );
}

export default Footer;
