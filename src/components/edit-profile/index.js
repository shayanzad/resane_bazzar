import React from "react";
import BreadCrumb from "../hoc/panelPage/breadcrumb/index";
import { Form, Radio, notification, Skeleton } from "antd";
import { Input, Button, PersianDatePicker } from "../uiKit";
import { useSelector } from "react-redux";
import { StyledContainer } from "./style";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  putUserInformation,
  getUserInformation,
} from "../../api/userInformation";
import { useNavigate } from "react-router-dom";
function EditProfile(props) {
  const [gender, setGender] = useState();
  const [married, setMarried] = useState();
  const [userInformationdata, setUserInformationdata] = useState({});
  const [faDate, setFaDate] = useState("1401-09-07");
  const [form] = Form.useForm();
  const [showForm, setShowForm] = useState(false);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const navigate = useNavigate();
  const location = useLocation();

  const setDate = (date, dateString) => {
    debugger;
    setFaDate(dateString);
  };
  const onFinish = async (values) => {
    debugger;
    values.birthDayDate = faDate;
    try {
      const res = await putUserInformation(values);
      if (res.meta.code == 200) {
        notification.success({
          message: "اطلاعات با موفقیت ثبت شد",
          placement: "bottomLeft",
        });
        if (location.pathname.includes("register"))
          navigate("/register/upload");
      }
    } catch (err) {
      notification.error({
        message: "مشکل در ثبت اطلاعات",
        placement: "bottomLeft",
      });
    }
  };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };

  const getUserInfo = async () => {
    debugger;
    const res = await getUserInformation();
    if (res.meta.code == 200) {
      setUserInformationdata(res.data);
      setFaDate(res.data.birthDayDate);
      setShowForm(true);
    }
  };

  useEffect(() => {
    getUserInfo();
    setFaDate("1401-08-15")
  }, []);
  return (
    <StyledContainer>
      <BreadCrumb className="breadcrumb" title={"پروفایل / اطلاعات"} />
      <div className="content">
        {userInformationdata && showForm ? (
          <Form
            form={form}
            name="profile"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              firstName: userInformationdata.firstName,
              lastName: userInformationdata.lastName,
              address: userInformationdata.address,
              postalCode: userInformationdata.postalCode,
              instagramUrl: userInformationdata.instagramUrl,
              telegramUrl: userInformationdata.telegramUrl,
              sitUrl: userInformationdata.sitUrl,
              gender: userInformationdata.gender,
              marriageStatus: userInformationdata.marriageStatus,
              phoneNumber: userInformationdata.phoneNumber,
              companyTitle: userInformationdata.companyTitle,
              birthDayDate: userInformationdata.birthDayDate,
            }}
          >
            <div className="flex-container">
              <Form.Item
                name="firstName"
                label="نام"
                rules={[
                  {
                    required: true,
                    message: "لطفا نام خود را وارد کنید",
                  },
                ]}
              >
                <Input type="text" placeholder="نام" />
              </Form.Item>
              <Form.Item
                label="نام خانوادگی"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "لطفا نام خانوادگی خود را وارد کنید",
                  },
                ]}
              >
                <Input type="text" placeholder="نام خانوادگی" />
              </Form.Item>
            </div>

            <div className="flex-container"></div>
            <div className="flex-container">
              <Form.Item label="تاریخ تولد" name="birthDayDate">
                <PersianDatePicker setDate={setDate} faDate={faDate} />
              </Form.Item>

              <Form.Item
                label="نشانی"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "لطفا نشانی خود را وارد کنید",
                  },
                ]}
              >
                <Input type="text" placeholder="نشانی" />
              </Form.Item>
            </div>
            <div className="flex-container">
              <div className="flex-radio">
                <Form.Item
                  label="جنسیت"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "لطفا جنسیت خود را انتخاب کنید",
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio value={true}>زن</Radio>
                    <Radio value={false}>مرد</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="flex-radio">
                <Form.Item
                  label="وضعیت تاهل"
                  name="marriageStatus"
                  rules={[
                    {
                      required: true,
                      message: "لطفا وضعیت تاهل  خود را انتخاب کنید",
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio value={false}>مجرد</Radio>
                    <Radio value={true}>متاهل</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
            <div className="flex-container">
              <Form.Item
                label="تلفن ثابت"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "لطفا تلفن ثابت خود را وارد کنید",
                  },
                  {
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "فرمت وارد شده صحیح نیست",
                  },
                ]}
              >
                <Input type="text" placeholder="تلفن ثابت" maxLength={11} />
              </Form.Item>
              <Form.Item
                label="کد پستی"
                name="postalCode"
                rules={[
                  {
                    required: true,
                    message: "لطفا کد پستی خود را وارد کنید",
                  },
                  {},
                  {
                    min: 11,
                    message: "کد پستی 11 رقم است",
                  },
                ]}
              >
                <Input type="text" placeholder="کد پستی" maxLength={11} />
              </Form.Item>
            </div>
            <div className="flex-container">
              <Form.Item label="عنوان شرکت / موسسه" name="companyTitle">
                <Input type="text" placeholder="عنوان شرکت یا موسسه" />
              </Form.Item>
              <Form.Item label="وبسایت" name="sitUrl">
                <Input type="text" placeholder="دامنه سایت" />
              </Form.Item>
            </div>
            <div className="flex-container">
              <Form.Item label="اینستاگرام" name="instagramUrl">
                <Input type="text" placeholder="آیدی اینستاگرام" />
              </Form.Item>
              <div>
                <Form.Item label="تلگرام" name="telegramUrl">
                  <Input type="text" placeholder="آیدی تلگرام" />
                </Form.Item>
                <Form.Item className="responsive">
                  {location.pathname.includes("profile") ? (
                    <Button type="primary" htmlType="submit" hasLoading={true}>
                      ذخیره
                    </Button>
                  ) : (
                    <Button type="primary" htmlType="submit" hasLoading={true}>
                      ذخیره و گام بعدی
                    </Button>
                  )}
                </Form.Item>
              </div>
            </div>
          </Form>
        ) : (
          <Skeleton active />
        )}
      </div>
    </StyledContainer>
  );
}

export default EditProfile;
