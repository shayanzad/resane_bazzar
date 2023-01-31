import React, { useState, useRef } from "react";
import BreadCrumb from "../hoc/panelPage/breadcrumb/index";
import { StyledContainer } from "./style";
import { Avatar, Badge, Popconfirm, Skeleton } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import {
  getUserDocument,
  postUserDocument,
  deleteUserDocument,
} from "../../api/userDocument";
import { postBlob } from "../../api/Blob";
import { Button } from "../uiKit";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Alert } from "antd";
function UploadDocuments() {
  const fileInput = useRef(null);
  const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
  const [userDocuments, setUserDocuments] = useState([]);
  const [documentId, setDocumentId] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoading = useSelector((state) => state.loading.isLoading);

  const onFileChanged = async (event) => {
    const res = await postBlob(event.target.files);
    let command = {
      documentId: documentId,
      filePath: res.data.path,
    };
    const resB = await postUserDocument(command);
    if (resB.meta.code == 200) getUserDocumentData();
  };

  const getUserDocumentData = async () => {
    try {
      const res = await getUserDocument();
      if (res.meta.code == 200) {
        setUserDocuments(res.data);
      }
    } catch (err) {}
  };

  const openFileUpload = (documentId) => {
    debugger;
    setDocumentId(documentId);
    fileInput.current.click();
  };
  const removeDocument = async (item) => {
    debugger;
    const res = await deleteUserDocument(item.userDocumentId);
    if (res.meta.code == 200) getUserDocumentData();
  };
  useEffect(() => {
    getUserDocumentData();
  }, []);
  return (
    <StyledContainer>
      <BreadCrumb className="breadcrumb" title={"پروفایل / بارگذاری مدارک"} />
      <div className="content">
        <div className="loading">
          {isLoading ? (
            <Spin indicator={antIcon} >

            </Spin>
          ) : (
            ""
          )}
        </div>

        {userDocuments ? (
          userDocuments.map((item) => (
            <div className="flex-container" key={item.documentId}>
              <h2>{item.documentTitle}</h2>
              <input
                ref={fileInput}
                style={{ display: "none" }}
                type="file"
                onChange={(e) => onFileChanged(e)}
              />
              <div>
                <Button
                  type="text"
                  id={item.documentId}
                  onClick={() => openFileUpload(item.documentId)}
                >
                  انتخاب فایل
                </Button>
                {item.userDocuments ? (
                  <div className="uploades">
                    {item.userDocuments.map((item) => (
                      <Popconfirm
                        key={item.userDocumentId}
                        title="آیا سند حذف شود؟ "
                        placement="topRight"
                        okText="بله"
                        cancelText="خیر"
                        onConfirm={() => removeDocument(item)}
                      >
                        <Badge
                          count={<CloseOutlined style={{ color: "#f5222d" }} />}
                        >
                          <Avatar
                            shape="square"
                            size={64}
                            src={`http://194.5.205.113:2014/${item.filePath}`}
                          />
                        </Badge>
                      </Popconfirm>
                    ))}
                  </div>
                ) : (
                  <Skeleton />
                )}
                <div></div>
              </div>
            </div>
          ))
        ) : (
          <Skeleton />
        )}
        {location.pathname.includes("register") ? (
          <Button
            type="primary"
            onClick={() => {
              navigate("/register/jobs");
            }}
            style={{ float: "left" }}
          >
            گام بعدی فرم ثبت نام
          </Button>
        ) : (
          ""
        )}
      </div>
    </StyledContainer>
  );
}

export default UploadDocuments;
