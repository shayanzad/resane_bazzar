import React from "react";
import { StyledContainer } from "./style";
function ProjectBox({ projectData }) {
  return (
    <StyledContainer>
      <p>
        {projectData.text}

      </p>
      <h2>
        {projectData.title}
      </h2>
      <span>
        {projectData.price}
      </span>
    </StyledContainer>
  );
}

export default ProjectBox;
