import React from "react";
import { StyledContainer } from "./style";
import createProjects from "../../../assets/images/createProjects.png";

import { Button } from "../../uiKit";
function CreateProjects(props) {
  return (
    <StyledContainer>
      <div>
        <h1 style={{ color: "var(--gray10)" }}>
        به راحتی یک پروژه ایجاد کنید!
        </h1>
        <p style={{ color: "var(--gray8)" }}>
        خلاصه‌ای از پروژه مورد نیاز خود را ثبت کنید و بهترین انجام‌دهنده از بین فریلنسرها را انتخاب کنید.
        </p>
        
        <div className="btn">
          <Button type="primary">ایجاد پروژه</Button>
          <Button type="text">فریلنسرها </Button>
        </div>
      </div>
      <div>
        <img className="responsive" src={createProjects} />
      </div>
    </StyledContainer>
  );
}

export default CreateProjects;
