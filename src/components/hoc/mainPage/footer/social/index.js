import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "./style";
import LinkedInn from "../../../../svg/social-icons/linkedIn";
import Instagram from "../../../../svg/social-icons/instagram";
import Telegram from "../../../../svg/social-icons/telegram";
function Social(props) {
  return (
    <StyledContainer>
      <span>
        <Link>
          <LinkedInn />
        </Link>
      </span>
      <span>
        <Link>
          <Telegram />
        </Link>
      </span>
      <span>
        <Link>
          <Instagram />
        </Link>
      </span>
    </StyledContainer>
  );
}

export default Social;
