import React from "react";
import { StyledContainer } from "./style";
import LogoSvg from "../../../../svg/logo/white";
import LogoMSvg from "../../../../svg/logo/white-m";
import LogoTSvg from "../../../../svg/logo/white-t";
function Logo(props) {
  return (
    <StyledContainer>
      <LogoSvg className="desktop" />
      <LogoTSvg className=" tablet" />

      <LogoMSvg className="mobile" />
    </StyledContainer>
  );
}

export default Logo;
