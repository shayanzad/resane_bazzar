import React, { useState, useEffect } from 'react';
import { StyledContainer } from "./style"; 
import ButtonUi from "../../../../uiKit/button";
import BreadCrumb from '../../../breadcrumb/index'; 
import { NavLink } from "react-router-dom";
import { Form, Button, Modal, Table, Rate } from "antd";
import ShowIcon from '../../../../svg/icons/show'

function ProjectsList(props) {
    // useEffect(() => {
    //     getAllLanguage()
    //     getAllEducational()

    // }, [])
    const showProject = (id) => {
        alert(`ایدی پروژه برای مشاهده` + +id)
    } 
    const columns = [
        {
            key: 'title',
            title: 'عنوان',
            dataIndex: 'title',
        },
        {
            key: 'deliveryDate',
            responsive: ['sm'],

            title: 'تاریخ تحویل',
            dataIndex: 'deliveryDate',
        },
        {
            key: 'Maximumbudget',
            responsive: ['md'],

            title: ' حداکثر بودجه',
            dataIndex: 'Maximumbudget',
            render: (text) => <div>{text.toLocaleString('fa-IR')} ریال </div>,
        },

        {
            title: 'مشاهده',
            key: 'operation',
            fixed: 'right',
            width: 60,
            render: (item) => <div style={{ textAlign: 'center' }}><ShowIcon onClick={showProject.bind(this, item.id)} /></div>,
        },
    ];


    const data = [{
        id: 1,
        title: `  رسانه سیما`,
        Maximumbudget: 400000,
        deliveryDate: ` ۱۱ خرداد ۱۴۰۱`,
        point: `4.2`,
        active: ``,
    }

    ];







    return (

        <StyledContainer>

            <BreadCrumb title={"   فهرست پروژه ها "} hideBack>
                <NavLink to='/profile/projects/createProject'>
                    <ButtonUi type="primary" fontSize='14px' >  افزودن  </ButtonUi>
                </NavLink>
            </BreadCrumb>

            <div style={{ background: `#fff`, borderRadius: `11px` }} className="createProjectParent">
                <div className='optionsBody'>
                    <div>
                        <p>مشاهده همه پروژه ها</p>
                    </div>
                    <Table pagination={{
                        position: ['bottomCenter'],
                    }} columns={columns} dataSource={data} align={'center'} />
                </div>
            </div>

        </StyledContainer>

    );
}

export default ProjectsList;