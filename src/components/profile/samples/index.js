import React from "react";
import { Tag } from "../../uiKit";
import { StyledContainer } from "./style";
import sample1 from "../../../assets/images/samples/sample1.png";

function Samples(props) {
  return (
    <StyledContainer>
      <div className="title">
        <h2>نمونه‌کارها</h2>
        <Tag style={{marginRight:"16px",}} color="purple">45</Tag>
      </div>
      <div className="container">
        <div className="card">
          <img src={sample1} />
        </div>
        <div className="card">
          <img src={sample1} />
        </div>
        <div className="card">
          <img src={sample1} />
        </div>
        <div className="card">
          <img src={sample1} />
        </div>
        <div className="card">
          <img src={sample1} />
        </div>
      </div>
    </StyledContainer>
  );
}

export default Samples;
