import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PanelPage from "./components/hoc/panelPage";

import Dashboard from "./pages/dashboard";
// import Dashboard from "./pages/dashboard";
import Projects from "./pages/Projects";
import EditProfil from "./pages/EditProfile";
import CompleteProfile from "./pages/Profile-skills";
import CompleteResume from "./pages/Profile-jobs";
import EducationalRecords from "./pages/Profile-educational";
import UploadDocuments from "./pages/UploadDocuments";
import WorkReport from "./pages/WorkReport";
import MainPage from "./components/hoc/mainPage";


const Home = React.lazy(() => import("./pages/Home"));
const Blogs = React.lazy(() => import("./pages/News"));
const Profile = React.lazy(() => import("./pages/Profile"));

const CreateProject = React.lazy(() => import("./pages/CreateProject"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const RegisterSkills = React.lazy(() => import("./pages/RegisterSkills"));
const RegisterEducations = React.lazy(() =>
  import("./pages/Register-educational")
);
const RegisterJobs = React.lazy(() => import("./pages/Register-job"));
const RegisterUploadDocuments = React.lazy(() =>
  import("./pages/Register-upload")
);
const RegisterEditProfile = React.lazy(() =>
  import("./pages/Register-profile")
);
const Otp = React.lazy(() => import("./pages/Otp"));
const Verify = React.lazy(() => import("./pages/verify"));
const DashboardProjects = React.lazy(() => import("./pages/ProjectList"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const News = React.lazy(() => import("./pages/News"));
const NewsInfo = React.lazy(() => import("./components/news/info/index"));
const Messages = React.lazy(() => import("./components/messages"));

export default function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<PanelPage />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/dashboard/projects"
                element={<DashboardProjects />}
              />
              <Route path="/profile/edit" element={<EditProfil />} />
              <Route path="/profile/skills" element={<CompleteProfile />} />
              <Route
                path="/profile/upload-documents"
                element={<UploadDocuments />}
              />
              <Route path="/profile/jobs" element={<CompleteResume />} />
              <Route
                path="/profile/educations"
                element={<EducationalRecords />}
              />
              <Route
                path="/profile/projects/createProject"
                element={<CreateProject />}
              />
              <Route path="/profile/projects" element={<Projects />} />
              <Route
                path="/profile/projects/createProject/:selectPerson"
                element={<CreateProject />}
              />
              <Route
                path="/my-messages"
                element={<Messages />}
              />
              <Route
                path="/work-report"
                element={<WorkReport />}
              />
            </Route>
            <Route element={<MainPage />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/news" element={<Blogs />} />
              <Route path="/user-profile/:id" element={<Profile />} />
              <Route path="/aboutUs/:id" element={<AboutUs />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsInfo />} />
            </Route>
            <Route path="/register/skills" element={<RegisterSkills />} />
            <Route path="/register/jobs" element={<RegisterJobs />} />
            <Route path="/register/edit" element={<RegisterEditProfile />} />
            <Route
              path="/register/educations"
              element={<RegisterEducations />}
            />
            <Route
              path="/register/upload"
              element={<RegisterUploadDocuments />}
            />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/otp/:id" element={<Otp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
