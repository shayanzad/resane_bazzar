import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {StyledContainer} from './style'
function UserBox({userBoxData}) {
    return (
        <StyledContainer>
            <Avatar size="48" className='avatar' icon={<UserOutlined />} />
            <div className='userinfo'>
                <h2>
                {userBoxData.name}
                </h2>
                <p>
                {userBoxData.userName}
                
                </p>
            </div>
        </StyledContainer>
    );
}

export default UserBox;