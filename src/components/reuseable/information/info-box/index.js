import React, { useState } from "react";
import { StyledContainer } from "./style";
import DoneProjectSvg from "../../../svg/profile/donprojectsnumber";
import RateSvg from "../../../svg/profile/rate";
function InfoBox({userInfo}) {
  
  return (
    <StyledContainer>
      <div>
        <h2 className="info">
          {userInfo.firsName} {userInfo.lastName}
        </h2>
        <div className="info">
          <span>{userInfo.country}</span>
          <span>|</span>
          <span>{userInfo.city}</span>
          <span style={{marginRight:'30px'}}>
            عضویت: 
          </span>
          <span>{userInfo.subscribeDate}</span>
        </div>
      </div>
      <div className="rating">
        <p className="hasSvg">
          <DoneProjectSvg />
          <div className="inner">
            <h2>{userInfo.doneProjects}</h2>
            <span>پروژه انجام شده</span>
          </div>
        </p>
        <p className="hasSvg">
          <RateSvg />
          <div className="inner">
            <h2>{userInfo.rate}/5</h2>
            <span>امتیاز</span>
          </div>
        </p>
      </div>
    </StyledContainer>
  );
}

export default InfoBox;
