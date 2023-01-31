import React, { useState, useEffect } from "react";

import { StyledContainer } from "./style";

import {
  Input,
  Checkbox,
  DatePicker,
  PersianDatePicker,
} from "../../../../uiKit";
import {
  getPosition,
  postPosition,
  deletePosition,
  putPosition,
  getPositionById,
} from "../../../../../api/position/index";
import {
  getWorkRecord,
  postWorkRecord,
  deleteWorkRecord,
  getWorkRecordByid,
  putWorkRecord,
} from "../../../../../api/workRecord/index";
import ButtonUi from "../../../../uiKit/button";
// import Button from 'antd';
import { useLocation, useNavigate } from "react-router-dom";

import { Form, Button, notification, Popconfirm, Skeleton, List } from "antd";
import PlusIcon from "../../../../svg/icons/plusIcon";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Jobs(props) {
  useEffect(() => {
    getAllPosition();
    getAllWorkRecord();
  }, []);
  const percent = 80;
  const navigate = useNavigate();
  const [roleForm] = Form.useForm();
  const [resomeForm] = Form.useForm();
  const [roleList, setRoleList] = useState([]);
  const [resomeEditMode, setResomeEditMode] = useState();
  const [roleEditMode, setRoleEditMode] = useState();
  const [resomeList, setResomeList] = useState([]);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [form] = Form.useForm();
  const location = useLocation();

  const setFromDateTime = (date, dateString) => {
    debugger;
    setFromDate(dateString);
    console.log(form);
  };
  const setToDateTime = (date, dateString) => {
    debugger;
    setToDate(dateString);
  };
  const getAllPosition = async () => {
    const res = await getPosition();
    setRoleList([...res.data.data]);
  };
  const getAllWorkRecord = async () => {
    const res = await getWorkRecord();
    setResomeList([...res.data.data]);
  };
  const onFinishRole = async (values: any) => {
    if (roleEditMode) {
      try {
        let item = {
          id: roleEditMode,
          title: values.title,
          description: values.description,
        };
        const res = await putPosition(item);
        roleForm.resetFields();
        getAllPosition();
        setRoleEditMode(null);
      } catch (error) {}
    } else {
      try {
        const res = await postPosition(values);
        roleForm.resetFields();
        getAllPosition();
      } catch (error) {}
    }
  };
  const onFinishRsome = async (values: any) => {
    values.toDate = toDate;
    values.fromDate = fromDate;
    if (resomeEditMode) {
      try {
        let item = {
          id: resomeEditMode,
          title: values.title,
          companyTitle: values.companyTitle,
          toDate: values.toDate,
          fromDate: values.fromDate,
        };
        const res = await putWorkRecord(item);
        resomeForm.resetFields();
        getAllWorkRecord();
        setResomeEditMode(null);
      } catch (error) {}
    } else {
      try {
        const res = await postWorkRecord(values);
        resomeForm.resetFields();
        getAllWorkRecord();
      } catch (error) {}
    }
  };
  const removeResomeList = async (id) => {
    try {
      const res = await deleteWorkRecord(id);
      let list = resomeList.filter((item) => item.id != id);

      setResomeList([...list]);
    } catch (error) {}
  };
  const editResomeItem = async (id) => {
    try {
      const res = await getWorkRecordByid(id);
      setResomeEditMode(id);
      resomeForm.setFieldsValue({
        fromDate: setFromDate(res.data.data.fromDate),
        toDate: setToDate(res.data.data.toDate),
        title: res.data.data.title,
        companyTitle: res.data.data.companyTitle,
      });
    } catch (error) {}
  };

  const editRoleItem = async (id) => {
    try {
      const res = await getPositionById(id);
      setRoleEditMode(id);
      roleForm.setFieldsValue({
        title: res.data.data.title,
        description: res.data.data.description,
      });
    } catch (error) {}
  };

  const removeRoleList = async (id) => {
    try {
      const res = await deletePosition(id);
      let list = roleList.filter((item) => item.id != id);
      setRoleList([...list]);
    } catch (error) {}
  };
  return (
    <StyledContainer>
      <div style={{ background: `#fff`, borderRadius: `11px` }}>
        <div className="formBox">
          <div className="form">
            <div>
              <h2 className="title">عنوان و سمت</h2>
            </div>
            <Form
              name="horizontal_login"
              form={roleForm}
              layout="vertical"
              autoComplete="off"
              onFinish={onFinishRole}
            >
              <Form.Item
                name="title"
                label="عنوان و سمت"
                rules={[
                  {
                    required: true,
                    message: "لطفا یک سمت را وارد کنید",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="description" label=" توضیحات ">
                <Input
                  type="text"
                  placeholder="توضیح بیشتر در مورد عنوان و سمت "
                />
              </Form.Item>

              <Form.Item className="">
                {roleEditMode ? (
                  <div style={{ display: `flex` }}>
                    <Button htmlType="submit" style={{ margin: `0px 5px` }}>
                      ویرایش
                    </Button>
                    <Button
                      onClick={() => {
                        roleForm.resetFields();
                        setRoleEditMode();
                      }}
                    >
                      انصراف
                    </Button>
                  </div>
                ) : (
                  <Form.Item className="responsive">
                    <Button htmlType="submit" icon={<PlusIcon />}>
                      اضافه کردن سابقه کاری
                    </Button>
                  </Form.Item>
                )}
              </Form.Item>
            </Form>
            <div>
              <List
                className="demo-loadmore-list"
                locale={{ emptyText: "سمتی وارد نشده" }}
                itemLayout="horizontal"
                dataSource={roleList}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <EditOutlined
                        style={{ color: `var(--primary)` }}
                        onClick={editRoleItem.bind(this, item.id)}
                      />,
                      <DeleteOutlined
                        style={{ color: `var(--pink10)` }}
                        onClick={removeRoleList.bind(this, item.id)}
                      />,
                    ]}
                  >
                    {item.title}
                  </List.Item>
                )}
              />
            </div>
          </div>
          <div className="form">
            <div>
              <h2 className="title"> سوابق کاری</h2>
            </div>
            <Form
              form={resomeForm}
              name="horizontal_login"
              layout="vertical"
              autoComplete="off"
              onFinish={onFinishRsome}
            >
              <Form.Item
                name="title"
                label=" عنوان "
                rules={[
                  {
                    required: true,
                    message: "لطفا یک عنوان را وارد کنید",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label=" نام شرکت "
                name="companyTitle"
                rules={[
                  {
                    required: true,
                    message: "لطفا نام شرکت را وارد کنید",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>

              <Form.Item name="fromDate" label="  تاریخ شروع">
                <PersianDatePicker
                  setDate={setFromDateTime}
                  faDate={fromDate}
                />
              </Form.Item>
              <Form.Item name="toDate" label="  تاریخ پایان">
                <PersianDatePicker setDate={setToDateTime} faDate={toDate} />
              </Form.Item>

              {resomeEditMode ? (
                <div style={{ display: `flex` }}>
                  <Button htmlType="submit" style={{ margin: `0px 5px` }}>
                    ویرایش
                  </Button>
                  <Button
                    onClick={() => {
                      resomeForm.resetFields();
                      setResomeEditMode();
                    }}
                  >
                    انصراف
                  </Button>
                </div>
              ) : (
                <Form.Item className="responsive">
                  <Button htmlType="submit" icon={<PlusIcon />}>
                    اضافه کردن سابقه کاری
                  </Button>
                </Form.Item>
              )}
            </Form>
            <div>
              <List
                className="demo-loadmore-list"
                locale={{ emptyText: "سابقه ای وارد نشده" }}
                itemLayout="horizontal"
                dataSource={resomeList}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <EditOutlined
                        style={{ color: `var(--primary)` }}
                        onClick={editResomeItem.bind(this, item.id)}
                      />,

                      <Popconfirm
                        key={item.userDocumentId}
                        title="آیا سابقه حذف شود؟ "
                        placement="topRight"
                        okText="بله"
                        cancelText="خیر"
                        onConfirm={removeResomeList.bind(this, item.id)}
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
              width={`100%`}
              fontSize="14px"
              onClick={() => {
                navigate("/register/educations");
              }}
            >
              گام بعدی فرم ثبت نام
            </ButtonUi>
          ) : (
            ""
          )}
        </div>
      </div>
    </StyledContainer>
  );
}

export default Jobs;
