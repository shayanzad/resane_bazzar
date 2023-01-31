import React from "react";
import { StyledContainer } from "./style";
import { Rate } from "antd";
function RateBox({rateData}) {
  return (
    <StyledContainer>
      <span>{rateData.date}</span>
      <Rate allowHalf disabled  defaultValue={rateData.rates} />
    </StyledContainer>
  );
}

export default RateBox;
