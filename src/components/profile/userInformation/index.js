import React from "react";
import { StyledContainer } from "./style";
function UserInformation(props) {
  return (
    <StyledContainer>
      <div className="box">
        <div className="box">
          <h2>عنوان و سمت</h2>
          <h3>طراح رابط کاربری، برنامه نویس، گرافیست</h3>
          <p>بیشتر از ۱۱ سال تجربه در توسعه نرم افزارهای همراه و تحت وب</p>
        </div>
        <div className="box">
          <h2>سوابق کاری</h2>
          <div>
            <h3>برنامه نویس موبایل</h3>
            <p>تیم نرم افزاری ویتامین ج</p>
            <span>مهر ۱۳۸۸ - اردیبهشت ۱۴۰۱ (۱۲ سال)</span>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box">
          <h2>سایر اطلاعات</h2>
          <div>
            <h3>تاریخ تولد</h3>
            <p>21 مهر 1365</p>
          </div>
        </div>
        <div className="box">
          <h2>سوابق تحصیلی</h2>
          <div>
            <h3>کارشناسی ارشد مهندسی نرم افزار</h3>
            <p>دانشگاه بین المللی امام رضا (ع)</p>
            <span>مهر ۱۳۹۶ - شهریور ۹۸ (۱ سال)</span>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default UserInformation;
