import React from "react";
import { Outlet } from "react-router-dom";
import { StyledContainer } from "./style";
import Footer from "./footer";
import Navbar from "./navbar";
import SideBar from "./sideBar";
// import BreadCrumb from "./breadcrumb";
function PanelPage({ children, title }) {
  
  return (
    <StyledContainer>
      <div className="main">
        <Navbar />
        <>
          <div className="panel">
            <div className="desktop">
              <SideBar />
            </div>
            <div className="tablet">{/* <SideBar /> */}</div>

            <div className="main-page">
              {/* <BreadCrumb title={title} /> */}

              <div className="children">
              <Outlet />
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </StyledContainer>
  );
}

export default PanelPage;
