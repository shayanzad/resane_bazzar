import React, { useState } from 'react';
import { StyledContainer } from './style'
import Widgets from './project-list/index';
import toDoCheckIcon from '../../../../assets/images/dashboard/todoCheckIcon.svg'
import postBoxIcon from '../../../../assets/images/dashboard/postBoxIcon.svg'
import onGoingPRojectIcon from '../../../../assets/images/dashboard/onGoingPRojectIcon.svg'
import mySkillprojectIcon from '../../../../assets/images/dashboard/mySkillprojectIcon.svg'
import RegisteredPortfolios from '../../../../assets/images/dashboard/RegisteredPortfolios.svg'
import SelectedIcon from '../../../../assets/images/dashboard/SelectedIcon.svg'
import Tik from '../../../../assets/images/dashboard/tik.svg'

import BreadCrumb from '../../../hoc/panelPage/breadcrumb/index';
import { Button } from "../../../uiKit";
function DashboardComponent(props) {
    const [dashboardData, setDashboardData] = useState([
        { id: 0, count: 25, title: "پروژه‌های انجام شده", icon: toDoCheckIcon,createDate:"۱ روز قبل", proposal: "12 پیشنهاد",tags:[{title:'موشن گرافیک',color:'#E5DFFB'},{title:' گرافیک',color:'#E5DFFB'}],text:"ساخت کلیه اسم فرزندشان" },
        { id: 1, count: 25, title: "تولید انیمیشن بچه های محله", icon: RegisteredPortfolios,createDate:"2 روز قبل", proposal: "۵  پیشنهاد",tags:[{title:'موشن گرافیک',color:'#E5DFFB'},{title:' گرافیک',color:'#E5DFFB'}],text:"ساخت کلیپ در مورد شهدای هر کدام از کوچه و خیابان‌های شهر تهران ، در این پروژه از خانواده های شهدا درخواست می‌شود در کوچه ای که به اسم فرزندشان" },
        { id: 2, count: 25, title: "تولید پادکست تهرانگردی", icon: onGoingPRojectIcon,createDate:"18 روز قبل", proposal: "۵  پیشنهاد",tags:[{title:'موشن گرافیک',color:'#E5DFFB'},{title:' گرافیک',color:'#E5DFFB'}],text:"ساخت کلیپ در مورد شهدای هر کدام از کوچه و خیابان‌های شهر تهران ، در این پروژه از خانواده های شهدا درخواست می‌شود در کوچه ای که به اسم فرزندشان" },
        
    ])
    return (
        <StyledContainer>
            <div className='breadcrumb'>
            <BreadCrumb  title={"فهرست پروژه ها  "}>
            <Button type="primary" className='buttonAddDesktop' fontSize='12px' ><img src={Tik}/> مطابق مهارتهای من  </Button>
            <Button type="primary" className='buttonAddDesktop' fontSize='12px'>  همه </Button>
            </BreadCrumb>
            </div>
            <Widgets listData={dashboardData} />
            {/* <Button type="primary" fontSize='14px' className='buttonAddMobile'>انجام پروژه جدید </Button> */}
        </StyledContainer>
    );
}

export default DashboardComponent;