import React, { useState, useEffect } from 'react';
import PanelPage from "../../../hoc/panelPage"
import BreadCrumb from '../../breadcrumb/index';
import { useParams } from "react-router-dom";
import { Progress } from 'antd';
import { StyledContainer } from "./style";
import CreateProjectForm from './forms';
import SelectOption from './select-options';
import SelectPerson from './select-person';
import SelectFinaly from './select-finaly-person';

function Selecdt(props) {
    let { selectPerson } = useParams();
    const percent = 40
    
    return (
        
            <StyledContainer>
                <BreadCrumb title={" ایجاد پروژه جدید"}>
                </BreadCrumb>
                
                
                { selectPerson && selectPerson==`selectOptions`?
                <SelectOption />:selectPerson==`selectPerson`?<SelectPerson/>:selectPerson==`select-finaly-person`?<SelectFinaly/>  :<CreateProjectForm/>  
            }
            </StyledContainer>
       
    );
}

export default Selecdt;