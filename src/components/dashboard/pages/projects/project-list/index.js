import React, { useState } from 'react';
import { StyledContainer } from './style'
// import Widget from '../../widget/index';
import ProjectItem from '../../../../reuseable/projectListItem/index'
function WidgetList({ listData }) {

    return (
        <StyledContainer>
            
              <div className='widgetItem'>
              {listData.map((item) => {
                    return (
                        <div className='dd'>
                        <ProjectItem projectData={item}/>
                        </div>
                    )
                })}
              </div>
            
        </StyledContainer>
    );
}

export default WidgetList;