import React, { useState, useEffect } from 'react';

import { StyledContainer } from "./style";
import { Input, DatePicker, PersianDatePicker, Tag } from "../../../../uiKit";
import ButtonUi from "../../../../uiKit/button";
import Tik from '../../../../../assets/images/dashboard/tik.svg'
import { NavLink } from "react-router-dom";
import CustomTextArea from "../../../../uiKit/text/index";
import { Form, Button, Modal, Table, Rate } from "antd";
import ShowIcon from '../../../../svg/icons/show'
import Tags from '../tags/index'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteLanguage, getLanguage, postLanguage } from '../../../../../api/language/index';
import { deleteEducational, getEducational, getEducationalByid, postEducational, putEducational } from '../../../../../api/educational/index';


function EducationalForm(props) {
    // useEffect(() => {
    //     getAllLanguage()
    //     getAllEducational()

    // }, [])
    const iiiiiii=(id)=>{
        alert(`ایدی کاربر برای مشاهده`+ +id)
    }
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const columns = [
        {
            key: 'name',
            title: 'نام',
            dataIndex: 'name',
        },
        {
            key: 'city',
            responsive: ['sm'],

            title: 'شهر',
            dataIndex: 'city',
        },
        {
            key: 'createDate',
            responsive: ['md'],

            title: 'تاریخ عضویت',
            dataIndex: 'createDate',
        },
        {
            title: 'امتیاز ',
            responsive: ['lg'],
            dataIndex: 'point',
            render: (text) => <Rate disabled allowHalf defaultValue={text} />,
        },
        {
            title: 'مشاهده',
            key: 'operation',
            fixed: 'right',
            width: 60,
            render: (item) => <div style={{textAlign:'center'}}><ShowIcon onClick={iiiiiii.bind(this, item.id)}  /></div>,
        },
    ];
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const data = [{
        id:1,
        name: `Edward ddddd 54`,
        city: "تهران | ایران",
        createDate: ` ۱۱ خرداد ۱۴۰۱`,
        point: `4.2`,
        active: ``,
    },
    {
        id:2,
        name: `محمد تیموری`,
        city: "شیراز | ایران",
        createDate: ` ۱۱ خرداد ۱۴۰۱`,
        point: `3.5`,
        active: ``,
    }
    ];

    // const selectOption = (id) => {
    //     let optionList = []
    //     tags.forEach(element => {
    //         element.id == id ? element.isSelect = true : element.isSelect = false
    //         optionList.push(element)
    //     });
    //     setTags(optionList)
    // }
    const [tags, setTags] = useState([{ id: 1, title: "منتظر دریافت پیشنهادها می‌مانم", isSelect: true }, { id: 2, title: "از لیست انجام‌دهندگان انتخاب می‌کنم", isSelect: false }])






    return (

        <StyledContainer>

            <div style={{ background: `#fff`, borderRadius: `11px` }} className="createProjectParent">

                <div className='optionsBody'>
                    <div>
                        <p>  انتخاب انجام‌دهنده</p>
                    </div>

                    <Table pagination={{
                        position: ['bottomCenter'],
                    }} rowSelection={rowSelection} columns={columns} dataSource={data} align={'center'}  />

                </div>
                <div className='nextBox'>
                <NavLink to='/profile/projects/createProject/select-finaly-person'>
                    <ButtonUi type="primary" width={`100%`} fontSize='14px' >  ثبت نهایی پروژه</ButtonUi>
                    </NavLink>
                </div>
            </div>

        </StyledContainer>

    );
}

export default EducationalForm;