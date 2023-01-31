import React from "react";
import { StyledContainer } from "./style";
import { Tag } from "../../../uiKit";
function About({children,aboutData}) {
  return (
    <StyledContainer>
      <div className="children">
      <p>
        {aboutData.text}
      </p>
      <div>
        {children}
      </div>
      </div>
      <div>
        {aboutData.tags.map((item)=>{
          return(
            <Tag color={item.color}>{item.title}</Tag>
          )
        })}
      </div>
    </StyledContainer>
  );
}

export default About;
