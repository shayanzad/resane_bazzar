import React from 'react';

import Tags from './tags/index'
import { StyledContainer } from "./style";
import BreadCrumb from '../../breadcrumb/index';
import { Progress } from 'antd';

function Selecdt(props) {
    
    return (
        
            <StyledContainer>
                <BreadCrumb title={"انتخاب حوزه فعالیت و دریافت پروژه"}>
                    <div className='progressBox'>
                        <p>تکمیل {40} درصد از اطلاعات</p>
                        <Progress strokeWidth={3} strokeLinecap={`square`} showInfo={false} strokeColor={`var(--primary)`} percent={40} size="small" style={{ direction: `ltr` }} />
                    </div>
                </BreadCrumb>
                <Tags/>
                
            </StyledContainer>
       
    );
}

export default Selecdt;