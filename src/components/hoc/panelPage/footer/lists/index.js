import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "./style";
function Lists(props) {
  return (
    <StyledContainer>
      <span>
        <Link>درباره‌ ما</Link>
      </span>
      <span>
        <Link>نمونه کارها</Link>
      </span>
      <span>
        <Link>پروژه‌ها</Link>
      </span>
      <span>
        <Link>فریلنسرها</Link>
      </span>
    </StyledContainer>
  );
}

export default Lists;
