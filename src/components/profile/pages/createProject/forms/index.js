import React, { useState, useEffect } from 'react';

import { StyledContainer } from "./style";
import { Input, DatePicker, PersianDatePicker, Tag } from "../../../../uiKit";
import ButtonUi from "../../../../uiKit/button";

import CustomTextArea from "../../../../uiKit/text/index";
import { Form, Button, Modal, Upload } from "antd";
import PlusIcon from '../../../../svg/icons/plusIcon'
import Tags from '../tags/index'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteLanguage, getLanguage, postLanguage } from '../../../../../api/language/index';
import { deleteEducational, getEducational, getEducationalByid, postEducational, putEducational } from '../../../../../api/educational/index';
import { NavLink } from "react-router-dom";

function EducationalForm(props) {
    useEffect(() => {
        getAllLanguage()
        getAllEducational()

    }, [])
    const setSkills = (data) => {
        console.log(data);
        setOpen(false)
        setTagsItem([...data])
    }
    const [open, setOpen] = useState(false);
    const [openDetailProject, setOpenDetailProject] = useState(false);
    const [openfff, setopenfff] = useState([]);
    const [fromDate, setFromDate] = useState();
    const [tagsItem, setTagsItem] = useState([]);
    const [toDate, setToDate] = useState();
    const percent = 95
    const [languageForm] = Form.useForm()
    const [educationalEditMode, setEducationalEditMode] = useState()
    const [educationalForm] = Form.useForm()
    const [languageList, setLanguageList] = useState([])
    const [educationalList, setEducationalList] = useState([])

    const onFinishlanguageForm = async (values: any) => {
        try {
            const res = await postLanguage(values)
            languageForm.resetFields();
            getAllLanguage()
        } catch (error) { }

    };
    const setFromDateTime = (date, dateString) => {
        debugger;
        setFromDate(dateString);


    };
    const setToDateTime = (date, dateString) => {

        setToDate(dateString);
    };

    const getAllLanguage = async () => {
        const res = await getLanguage()
        setLanguageList([...res.data.data])
    }

    const getAllEducational = async () => {
        const res = await getEducational()
        setEducationalList([...res.data.data])
    }

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
                    fromDate: values.fromDate
                }
                const res = await putEducational(item)
                educationalForm.resetFields();
                getAllEducational()
                setEducationalEditMode(null)
            } catch (error) {

            }
        } else {
            try {
                const res = await postEducational(values)
                educationalForm.resetFields();
                getAllEducational()
            } catch (error) { }
        }




    };
    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        console.log(newFileList);
      };
    const removeEducationalItem = async (id) => {
        try {
            const res = await deleteEducational(id)
            getAllEducational()
        } catch (error) { }
    }


    const removeLanguage = async (id) => {
        try {
            const res = await deleteLanguage(id)
            getAllLanguage()
        } catch (error) { }

    }

    const editEducationalItem = async (id) => {
        try {
            const res = await getEducationalByid(id)
            setEducationalEditMode(id)
            educationalForm.setFieldsValue(
                {
                    fromDate: setFromDate(res.data.data.fromDate),
                    toDate: setToDate(res.data.data.toDate),
                    field: res.data.data.field,
                    universityTitle: res.data.data.universityTitle


                }
            )

        } catch (error) {

        }

    }
    const removeUoploaded=(file)=>{
        setopenfff(openfff.filter((e)=>{e=file}))
        // console.log(openfff.filter((e)=>{e=file}));
    }
    const propsddd = {
       
        listType:"picture",
        maxCount:3,
        onChange:onChange,
        multiple: true,
      };
    return (

        <StyledContainer>

            <div style={{ background: `#fff`, borderRadius: `11px` }} className="createProjectParent">
                <div >
                    <Form
                        name="horizontal_login"
                        layout="vertical"
                        form={educationalForm}

                        autoComplete="off"
                        onFinish={onFinishEducational}
                    >

                        <div>
                            <h2 className='title'>  جزییات پروژه </h2>

                        </div>
                        <div className='formBoxd'>


                            <div className='form'>
                                <Form.Item
                                    label="  نام پروژه "
                                    name="universityTitle"
                                    rules={[
                                        {
                                            required: true,
                                            message: "لطفا نام پروژه را وارد کنید",
                                        },
                                    ]}
                                    style={{margin:'0px'}}

                                >
                                    <Input type="text" />

                                </Form.Item>
                                    <p className='textDescription' style={{margin:'0px 0px 15px 0'}}>در کوتاه ترین جمله به صورت واضح توضیح دهید که چه می خواهید.</p>

                                <Form.Item className="responsive">
                                    {/* <Button htmlType="submit" icon={<PlusIcon />}>
                                        اضافه کردن سابقه 
                                    </Button> */}

                                    <Button icon={<PlusIcon />} onClick={() => setOpen(true)}>
                                        مهارت‌های مورد نیاز
                                    </Button>
                                </Form.Item>
                                <div style={{ marginBottom: '15px' }}>
                                    {tagsItem.map((e) => {
                                        return (
                                            <Tag color="magenta">{e.title}</Tag>
                                        )
                                    })}
                                </div>

                                <Form.Item
                                    label="  بودجه شما حداقل(ریال) "
                                    name="universityTitle"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //         message: "لطفا نام دانشگاه را وارد کنید",
                                    //     },
                                    // ]}

                                >
                                    <Input type="text" />
                                </Form.Item>
                                <Form.Item
                                    label="  بودجه شما حداکثر(ریال) "
                                    name="bodghet"
                                    // rules={[
                                    //     {
                                    //         required: true,
                                    //         message: "لطفا نام دانشگاه را وارد کنید",
                                    //     },
                                    // ]}

                                >
                                    <Input type="text" />
                                </Form.Item>
                            </div>

                            <div className='form'>
                                <Form.Item
                                    name="fromDate"
                                    label='  تاریخ تحویل'
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




                                <Form.Item className="responsive">


                                    <Upload
                                        //   data={(file) =>{setopenfff([...openfff,file])}}
                                        //   fileList={openfff}
                                        {...propsddd}
                                        
                                        // onRemove={(e)=>{removeUoploaded(e)}}
                                    >
                                        <Button  icon={<PlusIcon />}>
                                            آپلود مدارک و اسناد                                </Button>
                                    </Upload>

                                    <p className='textDescription'>فایل ها و تصاویری که به توضیحات شما در معرفی بهتر پروژه کمک میکند را اضافه کنید،
                                        حداکثر تعداد فایل: ۵، حداکثر حجم هر فایل: ۱۰MB</p>
                                </Form.Item>


                                <Form.Item className="responsive">

                                    <Button htmlType="submit" onClick={() => setOpenDetailProject(true)} > تعیین دقیق خصوصیات پروژه  </Button>

                                </Form.Item>
                            </div>
                        </div>
                        <div className='descriptionBox'>
                            <Form.Item
                                label=" توضیح پروژه"
                                name="descritption"

                            // rules={[
                            //     {
                            //         required: true,
                            //         message: "لطفا توضیح پروژه را وارد کنید",
                            //     },
                            // ]}

                            >
                                <CustomTextArea type="text" />
                                <p className='textDescription'>هر چه توضیحات بیشتر و واضح تر باشد به شما کمک میکند سریعتر به آنچه میخواهید برسید.</p>

                            </Form.Item>
                        </div>

                    </Form>




                </div>
                <div className='nextBox'>
                <NavLink to='/profile/projects/createProject/selectOptions'>
                    <ButtonUi type="primary" width={`100%`} fontSize='14px' >  ثبت پروژه</ButtonUi>
                    </NavLink>
                </div>
            </div>
            <Modal
                title="مهارت‌های مورد نیاز"
                onCancel={()=>{setOpen(false)}}
                open={open}
                footer={null}
                width={1000}
                style={{padding:'10px'}}
            >
                <Tags closeSkillModal={setSkills} />
            </Modal>

            <Modal
                title=" تعیین دقیق خصوصیات پروژه "
                onCancel={()=>{setOpenDetailProject(false)}}
                open={openDetailProject}
                footer={null}
                width={1000}
            >
                خصوصیات پروژه
            </Modal>
        </StyledContainer>

    );
}

export default EducationalForm;