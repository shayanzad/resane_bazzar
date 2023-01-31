import React, { useState } from "react";
import Banner from "../../components/reuseable/banner/index";
import { StyledContainer } from "./style";
import Information from "../../components/reuseable/information/index";
import Samples from "./samples";
import UserInformation from "./userInformation";
import Comments from "../../components/reuseable/comments/index";
import BannerImage from '../../assets/images/profile/banner.png'
function Profile(props) {
  const [data, setData] = useState({
    id: 1,
    banner: BannerImage,

    userInfo: {
      firsName: "علی",
      lastName: "تیموری",
      country: "ایران",
      city: "یزد",
      doneProjects: 120,
      rate: 4.3,
      subscribeDate: "11/07/1401",
    },
    aboutData: {
      text: "بیشتر از ۱۱ سال تجربه در توسعه نرم افزارهای همراه و تحت وب با بهترین کیفیت آماده اجرا و پیاده سازی ایده های خلاقانه شما",
      tags: [{ title: "اینفوگرافی", color: 'magenta' }, { title: "انیمیشن", color: 'blue' }, { title: "پادکست", color: 'success' }]
    },
    comments: {
      title: "نظرات کارفرمایان",
      counter: 27,
      commentList: [
        {
          userbox: {
            name: 'حسین کاظمی',
            userName: 'h1370sein'
          }
          ,
          projectBox:{
            title:"طراحی UI وبسایت آفرینش",
            price:"۵.۰۰۰.۰۰۰ ریال",
            text:'  همکاری با آقای تیموری باعث افتخار بود و خیلی حرفه ای، اخلاق مدار و صبو  هستند با اینکه صفحه اصلی سایتمان را طراحی کرده بودند و بنا به دلایلی از ادامه فعالیت منصرف شدیم اما با کمال تعجب در قبال زمان و زحمتی که بابت  صفحه اصلی پروژه صرف کرده بودند هیچ هزینه ای دریافت نکردند. '
          },
          rateData:{
            date:'۱۳ مرداد ۱۳۹۵',
            rates:3.5
          }
        }
      ],

    }

  })
  return (
    <StyledContainer>
      <Banner image={data.banner} />
      <Information userInfo={data.userInfo} aboutData={data.aboutData} />
      <Samples />
      <UserInformation />
      <Comments commentsData={data.comments} />
    </StyledContainer>
  );
}

export default Profile;
