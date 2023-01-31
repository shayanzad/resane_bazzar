import React, { useState, useEffect } from "react";

import { StyledContainer } from "./style";
import { Input, DatePicker, PersianDatePicker } from "../../../../uiKit";
import ButtonUi from "../../../../uiKit/button";
import { Form, Button, List, Popconfirm } from "antd";
import PlusIcon from "../../../../svg/icons/plusIcon";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  deleteLanguage,
  getLanguage,
  postLanguage,
} from "../../../../../api/language/index";
import {
  deleteEducational,
  getEducational,
  getEducationalByid,
  postEducational,
  putEducational,
} from "../../../../../api/educational/index";
import { useLocation, useNavigate } from "react-router-dom";

function EducationalForm(props) {
  useEffect(() => {
    getAllLanguage();
    getAllEducational();
  }, []);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const percent = 95;
  const [languageForm] = Form.useForm();
  const [educationalEditMode, setEducationalEditMode] = useState();
  const [educationalForm] = Form.useForm();
  const [languageList, setLanguageList] = useState([]);
  const [educationalList, setEducationalList] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();

  const onFinishlanguageForm = async (values: any) => {
    try {
      const res = await postLanguage(values);
      languageForm.resetFields();
      getAllLanguage();
    } catch (error) {}
  };
  const setFromDateTime = (date, dateString) => {
    debugger;
    setFromDate(dateString);
  };
  const setToDateTime = (date, dateString) => {
    setToDate(dateString);
  };

  const getAllLanguage = async () => {
    const res = await getLanguage();
    setLanguageList([...res.data.data]);
  };

  const getAllEducational = async () => {
    const res = await getEducational();
    setEducationalList([...res.data.data]);
  };

  const onFinishEducational = async (values: any) => {
    values.toDate = toDate;
    values.fromDate = fromDate;
    if (educationalEditMode) {
      try {
        let item = {
          id: educationalEditMode,
          field: values.field,
          universityTitle: values.universityTitle,
          toDate: values.toDate,
          fromDate: values.fromDate,
        };
        const res = await putEducational(item);
        educationalForm.resetFields();
        getAllEducational();
        setEducationalEditMode(null);
      } catch (error) {}
    } else {
      try {
        const res = await postEducational(values);
        educationalForm.resetFields();
        getAllEducational();
      } catch (error) {}
    }
  };

  const removeEducationalItem = async (id) => {
    try {
      const res = await deleteEducational(id);
      getAllEducational();
    } catch (error) {}
  };

  const removeLanguage = async (id) => {
    try {
      const res = await deleteLanguage(id);
      getAllLanguage();
    } catch (error) {}
  };

  const editEducationalItem = async (id) => {
    try {
      const res = await getEducationalByid(id);
      setEducationalEditMode(id);
      educationalForm.setFieldsValue({
        fromDate: setFromDate(res.data.data.fromDate),
        toDate: setToDate(res.data.data.toDate),
        field: res.data.data.field,
        universityTitle: res.data.data.universityTitle,
      });
    } catch (error) {}
  };
  return (
    <StyledContainer>
      <div style={{ background: `#fff`, borderRadius: `11px` }}>
        <div className="formBox">
          <div className="form">
            <div>
              <h2 className="title"> سوابق تحصیلی</h2>
            </div>
            <Form
              name="horizontal_login"
              layout="vertical"
              form={educationalForm}
              autoComplete="off"
              onFinish={onFinishEducational}
            >
              <Form.Item
                name="field"
                label=" مقطع و رشته "
                rules={[
                  {
                    required: true,
                    message: "لطفا مقطع و رشته را وارد کنید",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="  دانشگاه "
                name="universityTitle"
                rules={[
                  {
                    required: true,
                    message: "لطفا نام دانشگاه را وارد کنید",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>

              <Form.Item
                name="fromDate"
                label="  تاریخ شروع"
                // rules={[
                //     {
                //         required: true,
                //         message: "لطفا تاریخ شروع را وارد کنید",
                //     },
                // ]}
              >
                <PersianDatePicker
                  setDate={setFromDateTime}
                  faDate={fromDate}
                />
              </Form.Item>

              <Form.Item name="toDate" label="  تاریخ پایان">
                <PersianDatePicker setDate={setToDateTime} faDate={toDate} />
              </Form.Item>

              <Form.Item className="responsive">
                {/* <Button htmlType="submit" icon={<PlusIcon />}>
                                        اضافه کردن سابقه 
                                    </Button> */}

                {educationalEditMode ? (
                  <div style={{ display: `flex` }}>
                    <Button htmlType="submit" style={{ margin: `0px 5px` }}>
                      ویرایش
                    </Button>
                    <Button
                      onClick={() => {
                        educationalForm.resetFields();
                        setEducationalEditMode();
                      }}
                    >
                      انصراف
                    </Button>
                  </div>
                ) : (
                  <Form.Item className="responsive">
                    <Button htmlType="submit" icon={<PlusIcon />}>
                      اضافه کردن سابقه تحصیلی
                    </Button>
                  </Form.Item>
                )}
              </Form.Item>
            </Form>
            <div>
              <List
                className="demo-loadmore-list"
                locale={{ emptyText: "سابقه ای وارد نشده" }}
                itemLayout="horizontal"
                dataSource={educationalList}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <EditOutlined
                        style={{ color: `var(--primary)` }}
                        onClick={editEducationalItem.bind(this, item.id)}
                      />,
                      <Popconfirm
                        key={item.userDocumentId}
                        title="آیا سابقه حذف شود؟ "
                        placement="topRight"
                        okText="بله"
                        cancelText="خیر"
                        onConfirm={removeEducationalItem.bind(this, item.id)}
                      >
                        <DeleteOutlined style={{ color: `var(--pink10)` }} />
                      </Popconfirm>,
                    ]}
                  >
                    {item.field}
                  </List.Item>
                )}
              />
            </div>
          </div>
          <div className="form">
            <div>
              <h2 className="title"> زبان </h2>
            </div>
            <Form
              name="horizontal_login"
              form={languageForm}
              layout="vertical"
              autoComplete="off"
              onFinish={onFinishlanguageForm}
            >
              <Form.Item
                name="title"
                label="زبان های مسلط"
                rules={[
                  {
                    required: true,
                    message: "لطفا یک زبان را وارد کنید",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item className="">
                <Button htmlType="submit" icon={<PlusIcon />}>
                  اضافه کردن زبان
                </Button>
              </Form.Item>
            </Form>
            <div>
              <List
                className="demo-loadmore-list"
                locale={{ emptyText: "زبانی وارد نشده" }}
                itemLayout="horizontal"
                dataSource={languageList}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <Popconfirm
                        key={item.userDocumentId}
                        title="آیا زبان حذف شود؟ "
                        placement="topRight"
                        okText="بله"
                        cancelText="خیر"
                        onConfirm={removeLanguage.bind(this, item.id)}
                      >
                        <DeleteOutlined style={{ color: `var(--pink10)` }} />
                      </Popconfirm>,
                    ]}
                  >
                    {item.title}
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
        <div className="nextBox">
          {location.pathname.includes("register") ? (
            <ButtonUi
              type="primary"
              onClick={() => {
                navigate("/");
              }}
              width={`100%`}
              fontSize="14px"
            >
              {" "}
              پایان ثبت نام
            </ButtonUi>
          ) : (
            ""
          )}
        </div>
      </div>
    </StyledContainer>
  );
}

export default EducationalForm;
