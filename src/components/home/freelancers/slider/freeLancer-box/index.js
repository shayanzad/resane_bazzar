import React from "react";
import { StyledContainer } from "./style";
import user from "../../../../../assets/images/samples/user.png";
import { Tag } from "../../../../uiKit";
import { Rate, Avatar } from "antd";
import { Link } from "react-router-dom";
function FreelancerBox({ free }) {
  return (
    <StyledContainer>
      <Link to="user-profile/1">
        <Avatar size={80} src={user} />
        <div className="info">
          <h5>{free.name}</h5>
          <span className="sub">{free.subId}</span>
          <Rate disabled allowHalf defaultValue={free.rate} />
        </div>
        <div>
          <Tag color="magenta">اینفوگرافی</Tag>
          <Tag color="success">پادکست</Tag>
          <Tag color="purple">انیمیشن</Tag>
          <Tag color="gold">انیمیشن</Tag>
          <Tag color="blue">انیمیشن</Tag>
        </div>
      </Link>
    </StyledContainer>
  );
}

export default FreelancerBox;
