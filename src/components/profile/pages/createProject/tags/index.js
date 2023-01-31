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
    const PutSkillButton =  () => {

        // let selectedItem = {
        //     skillIds: []
        // }
        // tags.filter(item => item.isSelect == true).forEach((e) => {
        //     selectedItem.skillIds.push(e)
        // })
        props.closeSkillModal(tags.filter(item => item.isSelect == true))

        // console.log(selectedItem.skillIds);
        // try {
        //     const res = await putSkill(selectedItem);

        //     notification.success({
        //         message: "  تغییرات با موفقیت انجام شد ",
        //         placement: "bottomLeft",
        //     });
        //     //navigate('/profile/complete-profile/1');

        // } catch (error) {


        // }

    }

    const getSkill = async () => {
        try {
            const allSkill = await getAllSkill()
            console.log(allSkill.data.data);
            allSkill.data.data.forEach((e)=>{
                e.isSelect=false
            })

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
                        <Button type="primary"  fontSize='14px' onClick={PutSkillButton} >تایید</Button>
                    </div>
                </div>
            </StyledContainer>
       
    );
}

export default Tags;