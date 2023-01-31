import React, { useState, useEffect } from 'react';

import { StyledContainer } from "./style";
import { Input, DatePicker, PersianDatePicker, Tag } from "../../../../uiKit";
import ButtonUi from "../../../../uiKit/button";
import Tik from '../../../../../assets/images/dashboard/tik.svg'
import CustomTextArea from "../../../../uiKit/text/index";
import { Form, Button, Modal, Upload } from "antd";
import PlusIcon from '../../../../svg/icons/plusIcon'
import Tags from '../tags/index'
import { NavLink } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteLanguage, getLanguage, postLanguage } from '../../../../../api/language/index';
import { deleteEducational, getEducational, getEducationalByid, postEducational, putEducational } from '../../../../../api/educational/index';


function EducationalForm(props) {
    // useEffect(() => {
    //     getAllLanguage()
    //     getAllEducational()

    // }, [])

    const selectOption = (id) => {
        let optionList=[]
        tags.forEach(element => {
            element.id==id?element.isSelect=true:element.isSelect=false
            optionList.push(element)
        });
        setTags(optionList)
    }
    const [tags, setTags] = useState([{ id: 1, title: "منتظر دریافت پیشنهادها می‌مانم", isSelect: true }, { id: 2, title: "از لیست انجام‌دهندگان انتخاب می‌کنم", isSelect: false }])






    return (

        <StyledContainer>

            <div style={{ background: `#fff`, borderRadius: `11px` }} className="createProjectParent">

                <div className='optionsBody'>
                    <div>
                        <p>روش انتخاب انجام دهنده در زمینه</p>
                    </div>
                    <div className='options'>
                        {tags.map((item) => {
                            return (

                                <Tag className={item.isSelect ? 'active tags' : 'tags'} fontWeight={700} key={item.id} onClick={selectOption.bind(this, item.id)}>{item.isSelect ? <img src={Tik} /> : ''}  {item.title}</Tag>)
                        })}
                    </div>
                </div>
                <div className='nextBox'>
                    <NavLink to='/profile/projects/createProject/selectPerson'>
                    <ButtonUi type="primary" width={`100%`} fontSize='14px' >  ثبت نهایی پروژه</ButtonUi>
                    </NavLink>
                </div>
            </div>

        </StyledContainer>

    );
}

export default EducationalForm;