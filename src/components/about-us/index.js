import React, { useState } from "react";
import Banner from "../../components/reuseable/banner/index";
import { StyledContainer } from "./style";
import Information from "../../components/reuseable/information/index";
import Samples from "./samples";
import { Button } from "../uiKit";
import Comments from "../../components/reuseable/comments/index";
import BannerImage from '../../assets/images/about-us/bannerAboutUs.png'
function Profile(props) {
  const [data, setData] = useState({
    id: 1,
    banner: BannerImage,

    userInfo: {
      firsName: "روابط عمومی",
      lastName: "شهرداری منطقه 2",
      country: "ایران",
      city: "تهران ",
      doneProjects: 120,
      rate: 4.3,
      subscribeDate: "11/07/1401",
    },
    aboutData: {
      text: "فعالیت رسانه ای در زمینه های متنوع از جمله برگزاری جشنواره موسیقی منطق برگزاری جشن های خیابانی برای مردم منطقه ۲ به صورت سالانه",
      tags: [{ title: "اینفوگرافی", color: 'magenta' }, { title: "انیمیشن", color: 'blue' }, { title: "پادکست", color: 'success' }]
    },
    comments: {
      title: "نظرات انجام دهندگان",
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
            date:'۱5 تیر ۱۳۹۵',
            rates:1.7
          }
        },
        {
          userbox: {
            name: ' محمد دانایی',
            userName: 'h1370sein'
          }
          ,
          projectBox:{
            title:"طراحی UI وبسایت آفرینش",
            price:"۵.۰۰۰.۰۰۰ ریال",
            text:'  همکاری با آقای تیموری باعث افتخار بود و خیلی حرفه ای، اخلاق مدار و صبو  هستند با اینکه صفحه اصلی سایتمان را طراحی کرده بودند و بنا به دلایلی از ادامه فعالیت منصرف شدیم اما با کمال تعجب در قبال زمان و زحمتی که بابت  صفحه اصلی پروژه صرف کرده بودند هیچ هزینه ای دریافت نکردند. '
          },
          rateData:{
            date:'۱۳ مرداد ۱۳۹9',
            rates:3
          }
        },
        {
          userbox: {
            name: ' علی جعفری',
            userName: 'h1370sein'
          }
          ,
          projectBox:{
            title:"طراحی موشن آموزشی",
            price:"۵.۰۰۰.۰۰۰ ریال",
            text:'  همکاری با آقای تیموری باعث افتخار بود و خیلی حرفه ای، اخلاق مدار و صبو  هستند با اینکه صفحه اصلی سایتمان را طراحی کرده بودند و بنا به دلایلی از ادامه فعالیت منصرف شدیم اما با کمال تعجب در قبال زمان و زحمتی که بابت  صفحه اصلی پروژه صرف کرده بودند هیچ هزینه ای دریافت نکردند. '
          },
          rateData:{
            date:'۱۳ مرداد ۱۳۹۵',
            rates:5
          }
        } 
      ],

    }

  })
  return (
    <StyledContainer>
      <Banner image={data.banner} />
      <Information userInfo={data.userInfo} aboutData={data.aboutData} >
        <Button type="primary"> ویرایش اطلاعات</Button>
      </Information>
      <Samples />
      <Comments commentsData={data.comments} />
    </StyledContainer>
  );
}

export default Profile;
