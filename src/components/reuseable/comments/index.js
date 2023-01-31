import React from "react";
import { Tag } from "../../uiKit";
import { StyledContainer } from "./style";
import UserBox from "./user-box";
import ProjectBox from "./project-box";
import RateBox from "./rate-box";
function Comments({ commentsData }) {
  return (
    <StyledContainer>
      <div className="title">
        <h2>{commentsData.title}</h2>
        <Tag style={{ marginRight: "16px" }} color="purple">
          {commentsData.counter}

        </Tag>
      </div>
      <div className="comments">
        {commentsData.commentList.map((item) => {
          return (
            <div className="comment">
              <UserBox userBoxData={item.userbox} />

              <div className="info">
                <ProjectBox projectData={item.projectBox} />
              </div>

              <RateBox rateData={item.rateData}/>
            </div>
          )
        })}
      </div>
    </StyledContainer>
  );
}

export default Comments;
