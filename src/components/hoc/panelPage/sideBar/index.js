import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledContainer } from "./style";
import DashboardSVG from "../../../svg/icons/dashboard";
import CreateSVG from "../../../svg/icons/create";
import EditSVG from "../../../svg/icons/edit";
import ReportSVG from "../../../svg/icons/report";
import MessageSVG from "../../../svg/icons/message";
import GuideSVG from "../../../svg/icons/guide";
import {
  ApartmentOutlined,
  CloudUploadOutlined,
  BookFilled,
  SnippetsFilled,
  StarFilled,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function SideBar(props) {
  const [activePanel, setActivePanel] = useState(1);
  const location = useLocation();
  const setKey = (key) => {
    debugger;
    if (key == 1) {
      setActivePanel(1);
    } else if (key != 1) {
      setActivePanel(2);
    }
  };
  const userRol = localStorage.getItem("userCode");
  useEffect(() => {
    if (location.pathname.includes("edit")) setActivePanel(1);
    else if (location.pathname.includes("skills")) setActivePanel(1);
  }, []);
  return (
    <StyledContainer>
      <ul id="list">
        <li>
          <NavLink
            to="/dashboard"
            onClick={() => setKey(3)}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <DashboardSVG />
            داشبورد
          </NavLink>
        </li>
        {userRol == 2 ? (
          <li>
            <NavLink
              to="/profile/projects"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <CreateSVG />
              پروژه ها
            </NavLink>
          </li>
        ) : userRol == 3 ? (
          <li>
            <NavLink
              disabled
              to="/doProject"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <CreateSVG />
              انجام پروژه
            </NavLink>
          </li>
        ) : userRol == 1 ? (
          <>
            <li>
              <NavLink
                disabled
                to="/doProject"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <CreateSVG />
                انجام پروژه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile/projects"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <CreateSVG />
                پروژه ها
              </NavLink>
            </li>
          </>
        ) : (
          ""("")
        )}

        {/* <li>
        <Collapse defaultActiveKey={['1']} >
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>

    </Collapse>
        </li> */}
        {/* 
        <li onClick={() => setKey(1)}>
          <NavLink
            to="/profile/edit"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <EditSVG />
            ویرایش پروفایل
          </NavLink>
        </li>
        <li onClick={() => setKey(1)}>
          <NavLink
            to="/profile/skills"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <ApartmentOutlined className="icon-color" />
            مهارت‌ها
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/jobs">
            <SnippetsFilled className="icon-color" />
            سوابق شغلی
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/educations">
            <BookFilled className="icon-color" />
            سوابق تحصیلی
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/upload-documents">
            <CloudUploadOutlined className="icon-color" />
            بارگذاری مدارک
          </NavLink>
        </li> */}

        <li>
          <Collapse accordion>
            <Panel header="ویرایش پروفایل">
              <li>
                <NavLink to="/profile/edit">
                  <EditSVG />
                  ویرایش پروفایل
                </NavLink>
              </li>
              {userRol == 3 ? (
                <>
                  <li>
                    <NavLink to="/profile/skills">
                      <ApartmentOutlined className="icon-color" />
                      مهارت‌ها
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile/jobs">
                      <SnippetsFilled className="icon-color" />
                      سوابق شغلی
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile/educations">
                      <BookFilled className="icon-color" />
                      سوابق تحصیلی
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}

              <li>
                <NavLink to="/profile/upload-documents">
                  <CloudUploadOutlined className="icon-color" />
                  بارگذاری مدارک
                </NavLink>
              </li>
            </Panel>
          </Collapse>
        </li>
        {userRol == 3 ? (
          <li>
            <NavLink to="/work-report">
              <ReportSVG />
              آمار کارکرد من
            </NavLink>
          </li>
        ) : (
          ""
        )}

        <li>
          <NavLink to="/my-messages">
            <MessageSVG />
            پیام‌های من
          </NavLink>
        </li>
        <li>
          <NavLink to="/info">
            <GuideSVG />
            راهنما
          </NavLink>
        </li>
      </ul>
      <div>
        <hr />
        <div className="rate">
          <span>
            <StarFilled style={{ color: "var(--Sunglow)" }} />
            امتیاز من
          </span>
          <span>
            <span className="bold">4.3</span>
            <span>/5</span>
          </span>
        </div>
      </div>
    </StyledContainer>
  );
}

export default SideBar;
