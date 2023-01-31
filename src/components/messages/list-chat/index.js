import React, { useState,useCallback } from "react";
import { StyledContainer } from "./style";
// import {Input} from "antd";
import { AudioOutlined } from '@ant-design/icons';
import { Avatar, List, Input } from 'antd';
function ListChat(props) {
    const { Search } = Input;
    const [searchInput,setSearchInput]=useState(null) 

    const searchMembeddddr = useCallback((e)=>{ 
        const filterd =news.filter(item=>item.title.search(e.target.value)==0)
        setnews(filterd) 
    },[searchInput])

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const [news, setnews] = useState([
        {
            id: 1,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: "کاظم سبزبان",
            tags: ["مقاله"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
        {
            id: 2,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: "شایان ازادبخت",

            tags: ["طراحی لوگو"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
        {
            id: 4,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: `روابط عمومی شهرداری منطقه ۲`,

            tags: ["روابط عمومی"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
        {
            id: 4,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: `روابط عمومی شهرداری منطقه 7`,

            tags: ["رسانه های دیجیتال"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
    ]);
    return (
        <StyledContainer>

            <div className="listChat">
                <div>

                    {/* <Input placeholder="جستجو"/> */}
                    <Search
                        allowClear
                        placeholder="جستجو" 
                        onChange={searchMembeddddr}
                        style={{
                            width: `100%`,
                        }}
                        size='large'
                    />
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={news}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={
                                    item.text.length > 40 ? (
                                        <>
                                            {item.text.slice(0, 40)}...
                                        </>
                                    ) : (
                                        <>{item.text}</>
                                    )
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>
        </StyledContainer>
    );
}

export default ListChat;
