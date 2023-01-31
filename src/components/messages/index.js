import React, { useState } from "react";

// import AllNews from "./all-news/index";
// import Baner from "./baner/index";
import { StyledContainer } from "./style";
import BreadCrumb from "../../../src/components/hoc/panelPage/breadcrumb/index";
import ListChat from "./list-chat";
import ListMessage from "./chat";
function Messages(props) {
    const [news, setnews] = useState([
        {
            id: 1,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: `۱۱ قانون طلایی طراحان حرفه ای لوگو`,
            tags: ["مقاله"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
        {
            id: 2,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: `قلب تپنده هر سازمانی "روابط عمومی" است`,
            tags: ["طراحی لوگو"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
        {
            id: 4,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: `متاورس" فرصتی برای رسیدن به زندگی آینده`,
            tags: ["روابط عمومی"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
        {
            id: 4,
            text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
            title: `رسانه‌ها چگونه مخاطب را اقناع می‌کنند؟`,
            tags: ["رسانه های دیجیتال"],
            minute: 6,
            date: "۰۸ دی ۱۴۰۰",
        },
    ]);
    return (
        <StyledContainer>
            <BreadCrumb className="breadcrumb" title={`پیام‌های من` + ' ' + 5} />

            <div className="messages">
                <div className="dashboardMain messageItem">
                    <ListChat />
                </div>
                <div className="dashboardMain messageItem">
                    <ListMessage />
                </div>
            </div>

        </StyledContainer>
    );
}

export default Messages;
