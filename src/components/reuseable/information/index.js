import React from "react";
import { StyledContainer } from "./style";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import InfoBox from "./info-box";
import About from "./about"
function Information({userInfo,aboutData,children}) {
  return (
    <StyledContainer>
      <Avatar size={120} icon={<UserOutlined />} />
      <div className="userInfo">
        <InfoBox userInfo={userInfo}/>
        <hr />
        <About aboutData={aboutData} >
          {children}
        </About>
      </div>
    </StyledContainer>
  );
}

export default Information;
