import React from "react";
import PanelPage from "../components/hoc/panelPage";
import EditProfilComponent from "../components/edit-profile";
import { Outlet, Link } from "react-router-dom";
function EditProfile(props) {
  return (


        <EditProfilComponent title={"تکمیل اطلاعات"} />

  
  );
}

export default EditProfile;
