import React, { useState } from 'react';
import { StyledContainer } from './style'
import Widget from '../widget/index';
function WidgetList({ listData }) {

    return (
        <StyledContainer>
            
              <div className='widgetItem'>
              {listData.map((item) => {
                    return (
                        <div className='dd'>
                        <Widget  itemData={item} />
                        </div>
                    )
                })}
              </div>
            
        </StyledContainer>
    );
}

export default WidgetList;