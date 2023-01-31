import React from "react";
import { StyledContainer } from "./style";
import findProjectPic from "../../../assets/images/find-project.png";

import { Button } from "../../uiKit";
function FindProjects(props) {
  return (
    <StyledContainer>
      <div>
        <h1  style={{ color: "var(--pure-white)" }}>
          پروژه‌های خوب را پیدا کنید!
        </h1>
        <p style={{ color: "var(--pure-white)" }}>
        در لیست پروژه‌ها جستجو کنید  و بهترین و مناسب‌ترین پروژه در زمینه مهارتتان را پیدا کنید.  

        </p>

        <div className="btn">
          
          <Button type="text" >
             لیست پروژه‌ها
          </Button>
        </div>
      </div>
      <div>
        <img src={findProjectPic} className="responsive"  />
        {/* <img src={slide} className="tablet" />
        <img src={slideMobile} className="mobile" /> */}
      </div>
    </StyledContainer>
  );
}

export default FindProjects;
