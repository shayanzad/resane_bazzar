import React, { useState, useEffect } from 'react';

import { StyledContainer } from "./style";
import { Input, DatePicker, PersianDatePicker, Tag } from "../../../../uiKit";
import ButtonUi from "../../../../uiKit/button";
import Tik from '../../../../../assets/images/dashboard/tik.svg'
import {
    HourglassOutlined
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";

import { Avatar, Rate, Checkbox } from "antd";

function EducationalForm(props) {
    useEffect(() => {
        // isPrice()

    }, [])
    const isPrice = () => {
        if(persons.find(item => item.price)){
            return true
        }else{
            return false
        }

    }
    const selectPerson = (id) => {
        // let opersonList = []
        setSelected([...selected,persons.find(item=>item.id==id)])
        console.log(selected);
       
        // setPersons(opersonList)
    }
    const [selected,setSelected]=useState([])
    const [tags, setTags] = useState([{ id: 1, title: "منتظر دریافت پیشنهادها می‌مانم", isSelect: true }, { id: 2, title: "از لیست انجام‌دهندگان انتخاب می‌کنم", isSelect: false }])

    const [persons, setPersons] = useState([{ id: 1, title: "علی صادقی", isSelect: true, rate: 3.5, image: '', price: 50000000 }, { id: 2, title: "محمد تیموری", isSelect: true, rate: 4.5, image: '' }])






    return (

        <StyledContainer>

            <div style={{ background: `#fff`, borderRadius: `11px` }} className="createProjectParent">

                <div className='optionsBody'>
                    <div>
                        <p>انتخاب انجام دهنده</p>
                        {isPrice() ? <span >پروژه شما در حال بررسی است و به زودی قیمت های پیشنهادی از سوی انجام دهندگان اعلام می شود.</span>
                            : <span>بررسی پروژه شما به اتمام رسیده و همه انجام دهندگان انتخابی اعلام قیمت نموده اند، از لیست زیر انجام دهنده نهایی پروژه را انتخاب کنید. </span>
                        }
                    </div>
                    <div className='options'>
                        {persons.map((item) => {
                            return (
                                <div>
                                    <div className="user">
                                        <div className='userBox'>
                                            <Checkbox disabled={item.price ? false : true} style={{ marginLeft: `10px` }} onChange={selectPerson.bind(this,item.id)}>

                                            </Checkbox>
                                            <Avatar size={48} src={item.image} style={{ marginLeft: '8px' }} />
                                            <div className="info">
                                                <p>{item.title}</p>
                                                <span className="sub" >
                                                    {/* {sample.subId} */}
                                                    <Rate disabled allowHalf defaultValue={item.rate} />
                                                </span>
                                            </div>
                                        </div>
                                        {item.price ? item.price.toLocaleString('fa-IR') + ' ' + `ریال` : <HourglassOutlined twoToneColor="#52c41a" spin />}
                                    </div>
                                </div>

                                // <Tag className={item.isSelect ? 'active tags' : 'tags'} fontWeight={700} key={item.id} onClick={selectOption.bind(this, item.id)}>{item.isSelect ? <img src={Tik} /> : ''}  {item.title}</Tag>
                            )
                        })}
                    </div>
                </div>
                <div className='nextBox'>
                  
                    <NavLink to='/profile/createProject/selectPerson'>
                        <ButtonUi disabled={isPrice()?false:true} type="primary" width={`100%`} fontSize='14px' >  ثبت نهایی پروژه</ButtonUi>
                    </NavLink>
                </div>
            </div>

        </StyledContainer>

    );
}

export default EducationalForm;