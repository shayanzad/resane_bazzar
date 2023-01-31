import React, { useState, useEffect } from 'react';
import PanelPage from "../../../hoc/panelPage"
import BreadCrumb from '../../breadcrumb/index';
import { Progress } from 'antd';
import { StyledContainer } from "./style";

import EducationalForm from './forms';

function Selecdt(props) {
    const percent = 95
    
    return (
        
            <StyledContainer>
                <BreadCrumb title={"تکمیل رزومه"}>
                    <div className='progressBox'>
                        <p>تکمیل {percent} درصد از اطلاعات</p>
                        <Progress strokeWidth={3} strokeLinecap={`square`} showInfo={false} strokeColor={`var(--primary)`} percent={percent} size="small" style={{ direction: `ltr` }} />
                    </div>
                </BreadCrumb>
                <EducationalForm/>
            </StyledContainer>
       
    );
}

export default Selecdt;