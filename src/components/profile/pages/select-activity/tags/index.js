import React, { useState, useEffect } from 'react';
// import PanelPage from "../../../../components/hoc/panelPage"
import { Progress, notification, Skeleton } from 'antd';
import { StyledContainer } from "./style";
import { Tag } from "../../../../uiKit";
import { getAllSkill, putSkill } from '../../../../../api/skill';
import { Button } from "../../../../uiKit";
import Tik from '../../../../../assets/images/dashboard/tik.svg'
import { Route, useNavigate, Routes } from "react-router-dom";


function Tags(props) {
    useEffect(() => {
        getSkill();
    }, []);
    const navigate = useNavigate();
    const PutSkillButton = async () => {
        let selectedItem = {
            skillIds: []
        }
        tags.filter(item => item.isSelect == true).forEach((e) => {
            selectedItem.skillIds.push(e.id)
        })

        try {
            const res = await putSkill(selectedItem);

            notification.success({
                message: "  تغییرات با موفقیت انجام شد ",
                placement: "bottomLeft",
            });
            //navigate('/profile/complete-profile/1');

        } catch (error) {


        }

    }

    const getSkill = async () => {
        try {
            const allSkill = await getAllSkill()

            setTags([...allSkill.data.data])
            
            setShowSkeleton(false)
        } catch (error) {
        }
    }

    const percent = 40
    const [tags, setTags] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(true)
    const addSkill = (id) => {
        setTags(tags => tags.map(obj => {
            if (obj.id === id) {
                return { ...obj, isSelect: tags.find(item => item.id === id).isSelect ? false : true };
            }
            return obj;
        }))
        
    }
    return (
        
            <StyledContainer>
                {/* <BreadCrumb title={"انتخاب حوزه فعالیت و دریافت پروژه"}>
                    <div className='progressBox'>
                        <p>تکمیل {percent} درصد از اطلاعات</p>
                        <Progress strokeWidth={3} strokeLinecap={`square`} showInfo={false} strokeColor={`var(--primary)`} percent={percent} size="small" style={{ direction: `ltr` }} />
                    </div>
                </BreadCrumb> */}
                <div className='tagsBox'>

                    {
                        showSkeleton ?
                            <div>
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Input active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Input active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Input active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Input active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Input active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Input active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                                <Skeleton.Button active={`active`} size={`large`} style={{ margin: `8px`, borderRadius: `10px` }} />
                            </div> : <div>

                                {tags.map((item) => {
                                    return (

                                        <Tag className={item.isSelect ? 'active tags' : 'tags'} fontWeight={700} key={item.id} onClick={addSkill.bind(this, item.id)}>{item.isSelect ? <img src={Tik} /> : ''}  {item.title}</Tag>)
                                })}
                            </div>
                    }
                    <div className='nextBox'>
                        <Button type="primary" width={`100%`} fontSize='14px' onClick={PutSkillButton} >ذخیره</Button>
                    </div>
                </div>
            </StyledContainer>
       
    );
}

export default Tags;