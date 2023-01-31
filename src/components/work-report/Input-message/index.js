// import { Input } from "antd";
import React, { useState } from "react"; 
import { StyledContainer } from "./style";
import Input from "../../../components/uiKit/input";
import { SendOutlined} from '@ant-design/icons';
function InpotMessage(props) {
  
  return (
    <StyledContainer>

      
        
        <div className=" inputmessageCom">
            <Input placeholder="نوشتن پیام"/>
            <div className="sendIcon "><SendOutlined twoToneColor="#eb2f96"/></div>
        </div>
    
    </StyledContainer>
  );
}

export default InpotMessage;
