import React, { useState } from 'react';
import { StyledContainer } from './style'
import Widgets from './widget-list/index';
import toDoCheckIcon from '../../assets/images/dashboard/todoCheckIcon.svg'
import postBoxIcon from '../../assets/images/dashboard/postBoxIcon.svg'
import onGoingPRojectIcon from '../../assets/images/dashboard/onGoingPRojectIcon.svg'
import mySkillprojectIcon from '../../assets/images/dashboard/mySkillprojectIcon.svg'
import RegisteredPortfolios from '../../assets/images/dashboard/RegisteredPortfolios.svg'
import SelectedIcon from '../../assets/images/dashboard/SelectedIcon.svg'
import Details from './detailList/index'
import BreadCrumb from '../hoc/panelPage/breadcrumb/index';
import { Button } from "../uiKit";
function DashboardComponent(props) {
    const [dashboardData, setDashboardData] = useState([
        { id: 0, count: 25, title: "پروژه‌های انجام شده", icon: toDoCheckIcon, btnText: "مشاهده همه" ,url:'/dashboard/projects' },
        { id: 1, count: 14, title: "پروژه‌های پیشنهاد داده‌شده", icon: postBoxIcon, btnText: "مشاهده پروژه ها",url:'/dashboard/projects' },
        { id: 2, count: 10, title: "پروژه‌های در دست اقدام", icon: onGoingPRojectIcon, btnText: "مشاهده همه",url:'/dashboard/projects' },
        { id: 2, count: 40, title: " پروژه‌های مناسب مهارت من", icon: mySkillprojectIcon, btnText: " مشاهده پروژه‌ها",url:'/dashboard/projects' },
        { id: 2, count: 6, title: "مهارت‌های انتخاب شده", icon: SelectedIcon, btnText: "ویرایش لیست مهارت‌ها",url:'/dashboard/projects' },
        { id: 2, count: 16, title: " نمونه‌کارهای ثبت شده", icon: RegisteredPortfolios, btnText: "  ویرایش نمونه‌کارها",url:'/dashboard/projects' },
    ])
    return (
        <StyledContainer>
            <div className='breadcrumb'>
            <BreadCrumb  title={"داشبورد انجام دهنده"}>
            <Button type="primary" className='buttonAddDesktop' fontSize='12px' style={{width:`auto`}}>انجام پروژه جدید </Button>
            </BreadCrumb>
            </div>
            <Details/>
            <Widgets listData={dashboardData} />
            <Button type="primary" fontSize='14px' className='buttonAddMobile'>انجام پروژه جدید </Button>
        </StyledContainer>
    );
}

export default DashboardComponent;