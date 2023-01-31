import React from "react";
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from "@ant-design/icons";

import { StyledContainer } from "./style";
function BreadCrumb({ children, title }) {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <div>{title}</div>
      <div className="children">
        {children}

        <LeftOutlined onClick={() => navigate(-1)} style={{marginRight:'20px'}} />
      </div>
    </StyledContainer>
  );
}

export default BreadCrumb;
