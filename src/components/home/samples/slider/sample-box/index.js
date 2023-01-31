import React from "react";
import { StyledContainer } from "./style";
import { Avatar } from "antd";

import sample1 from "../../../../../assets/images/samples/sample1.png";
import sample2 from "../../../../../assets/images/samples/sample2.png";
import user from "../../../../../assets/images/samples/user.png";
function SampleBox({ sample }) {
  const imgCreator = () => {
    switch (sample.title) {
      case "1":
        return <img src={sample1} />;
      case "2":
        return <img src={sample2} />;

      case "3":
        return <img src={sample1} />;
    }
  };
  return (
    <StyledContainer>
      <div className="sample">{imgCreator()}</div>
      <div className="user">
        <Avatar size={48} src={user}/>
        <div className="info">
        <h5>{sample.name}</h5>
        <span className="sub" >
          {sample.subId}
        </span>
        </div>
      </div>
    </StyledContainer>
  );
}

export default SampleBox;
