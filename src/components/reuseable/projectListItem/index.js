import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from "../../uiKit";

import { StyledContainer } from './style'
import leftIcon from '../../../assets/images/dashboard/left.svg'

function ProjectItem({ projectData }) {
    return (
        <StyledContainer>
            <div className='rightBox'>
                <div className='imageBox'>
                    <img src={projectData.icon} />
                </div>
                <div className='textBox'>

                    <div className='headerbox' >
                        <div className='imageBox2'>
                            <img src={projectData.icon} />
                        </div>
                        <h2>
                            {projectData.title}
                        </h2>
                    </div>
                    <p>
                        {projectData.text.slice(0, 140)}{projectData.text.length > 140 ? '...' : ''} <Link>توضیحات بیشتر <img src={leftIcon} /></Link>
                    </p>
                    <div>
                        {projectData.tags.map((item) => {
                            return (

                                <Tag className="tags" color="purple">{item.title}</Tag>)
                        })}
                    </div>
                </div>
            </div>
            <div className='detailBox'>
                <p>
                    {projectData.proposal}
                </p>
                <span>{projectData.createDate}</span>
            </div>


        </StyledContainer>
    );
}

export default ProjectItem;