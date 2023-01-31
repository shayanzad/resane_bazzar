import React, { useState, useEffect } from "react";
import BreadCrumb from "../../breadcrumb/index";
import { Progress } from "antd";
import { StyledContainer } from "./style";
import Jobs from "./forms/index"


function Selecdt(props) {
   
    const percent = 80;
   
    return (
            <StyledContainer>
                <BreadCrumb title={"سوابق شغلی"}>
                    <div className="progressBox">
                        <p>تکمیل {percent} درصد از اطلاعات</p>
                        <Progress
                            strokeWidth={3}
                            strokeLinecap={`square`}
                            showInfo={false}
                            strokeColor={`var(--primary)`}
                            percent={percent}
                            size="small"
                            style={{ direction: `ltr` }}
                        />
                    </div>
                </BreadCrumb>
                <Jobs />
            </StyledContainer>
    );
}

export default Selecdt;
