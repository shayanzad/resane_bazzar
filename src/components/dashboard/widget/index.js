import React from 'react';
import { StyledContainer } from './style'
import { Link } from "react-router-dom";

import leftIcon from '../../../assets/images/dashboard/left.svg'
function Widget({ itemData }) {
    return (
        <StyledContainer>

            <div className='boxIcon'>
                <span className='widgetCounter'>
                    {itemData.count}
                </span>
                <img src={itemData.icon} />
            </div>
            <div className='textBox'>
                <h2>
                    {itemData.title}

                </h2>
                <span className='oooo'>
                    <Link to={itemData.url} >
                        {itemData.btnText} <img src={leftIcon} />
                    </Link>
                </span>
            </div>



        </StyledContainer>
    );
}

export default Widget;