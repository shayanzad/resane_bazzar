import React from "react";
import { StyledContainer } from "./style";
import slide from "../../../assets/images/slider 1.png";
import slideMobile from "../../../assets/images/slider 1-mobile.png";
import { Button } from "../../uiKit";

function Slide(props) {
  return (
    <StyledContainer>
      <div>
        <h1>کار را به کاردان بسپارید!</h1>
        <p style={{ color: "var(--gray6)" }}>
          روش های قدیمی را فراموش کنید،برای بهتر انجام شدن پروژه ها همین جا و همین الان شروع کنید.
        </p>
        <p style={{ color: "var(--gray6)" }}>
          
          </p>
        <div className="btn">
          <Button type="primary">ایجاد پروژه</Button>
          <Button type="text" >
            انجام پروژه
          </Button>
        </div>
      </div>
      <div>
        <img src={slide} className="responsive" />

      </div>
    </StyledContainer>
  );
}

export default Slide;
