import React from 'react';
import { StyledContainer } from './style'
function Detail({ itemData }) {
    return (
        <StyledContainer color={itemData.color}>
            <div className='boxIcon' >
                <img src={itemData.icon} />
            </div>
            <div>
                <h2>
                    {itemData.title}
                </h2>
            </div>
        </StyledContainer>
    );
}

export default Detail;