import React, { useState } from 'react';
import { StyledContainer } from './style'
import Detail from './detile-item/index';
import { Link } from "react-router-dom";
import ChartIcon from '../../../assets/images/dashboard/chart.svg'
import userIcon from '../../../assets/images/dashboard/user-circle.svg'
import messageMeIcon from '../../../assets/images/dashboard/message-text-alt.svg'
import infoIcon from '../../../assets/images/dashboard/info-circle.svg'
import blogIcon from '../../../assets/images/dashboard/fa6-solid_blog.svg'

function WidgetList(props) {
    const [detailItem, setdetailItem] = useState([
        { id: 0, count: 25, title: " آمار کارکرد من", icon: ChartIcon, color: '#E5DFFB' },
        { id: 1, count: 14, title: "پروفایل من", icon: userIcon, color: '#D2FBE8' },
        { id: 2, count: 10, title: "پیام‌های من", icon: messageMeIcon, color: '#DBF6FF' },
        { id: 3, count: 40, title: " وبلاگ", icon: blogIcon, color: ' #FFF5DB' },
        { id: 4, count: 6, title: "  راهنما", icon: infoIcon, color: '#FFDFE4' },
    ])
    return (
        <StyledContainer>

            <div className='widgetItem'>
                {detailItem.map((item) => {
                    return (
                        <div className='detailLink'>
                            <Link >
                                <Detail itemData={item} />
                            </Link>
                        </div>
                    )
                })}
            </div>

        </StyledContainer>
    );
}

export default WidgetList;