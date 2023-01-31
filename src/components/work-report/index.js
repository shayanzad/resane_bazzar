import React, { useState } from "react";
import { StyledContainer } from "./style";
import Button from "../uiKit/button";
import BreadCrumb from "../../../src/components/hoc/panelPage/breadcrumb/index";

function WorkReport(props) {

    return (
        <StyledContainer>
            <BreadCrumb className="breadcrumb" title={` امار کارکرد های من`} />

            <div className="dashboardMain">
                <div className="reportMain">
                    <div className="rightMAin">
                        <div className="buttonGroupBox">
                            <Button type="primary" htmlType="submit" hasLoading={true} size='small'>سه ماهه</Button>
                            <Button type="primary" htmlType="submit" hasLoading={true} size='small'>شیش ماهه</Button>
                            <Button type="primary" htmlType="submit" hasLoading={true} size='small'>یکساله</Button>
                            <Button type="primary" htmlType="submit" hasLoading={true} size='small'>تا به امروز</Button>
                        </div>
                        <div className="chartReportBox"></div>

                    </div>
                    <div className="widgetsReport">
                        <p>دریافت شده در سه ماه گذشته</p>
                        <div className="widgetsTop">
                            <div className="widget"> <p>50</p> <span>بازدید از پروفایل </span> </div>
                            <div className="widget"><p>50</p> <span>بازدید از نمونه کار </span> </div>
                            <div className="widget"><p>50</p> <span> نمونه کار پسندیده  </span> </div>

                        </div>
                             <div style={{margin:`0 5px`}}>
                        <div className="widgetsCenter">
                             <h2>
                                1700000
                             </h2>
                             <div style={{display:`flex`,justifyContent:`space-between`}}>
                                <span>درامد کسب شده</span>
                                <span>ریال</span>
                             </div>
                             </div>
                        </div>
                        <div className="widgetsBottom">

                            <div className="widget" > <p>50</p> <span>بازدید از پروژه های شما </span> </div>
                            <div className="widget"> <p>50</p> <span>بازدید از پروفایل </span> </div>

                        </div>
                    </div>


                </div>
            </div>

        </StyledContainer>
    );
}

export default WorkReport;
