import React from "react";
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from "@ant-design/icons";
import { StyledContainer } from "./style";
function BreadCrumb({children, title ,hideBack}) {
  const navigate = useNavigate();
  return <StyledContainer>
    <div className="title">{title}</div>
    <div className="children">
      {children}
      {!hideBack?<LeftOutlined onClick={() => navigate(-1)} style={{marginRight:'20px'}} />:null}

      </div>
  </StyledContainer>;
}

export default BreadCrumb;
