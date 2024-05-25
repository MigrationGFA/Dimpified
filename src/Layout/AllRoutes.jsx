// ** Import from react dom
import { Route, Routes, Navigate } from "react-router-dom";

// ** Import core SCSS styles
import "../assets/scss/theme.scss";

// ** Import Dahbaord Menu Pages
import Overview from "../Creator/overview/Overview";
import Analytics from "../Creator/analytics/Analytics";

// ** Import Courses Pages
import AllJobs from "../Creator/courses/all-courses/AllJobs";
import JobCategory from "../Creator/courses/JobCategory";
import CategorySingle from "../Creator/courses/CategorySingle";

// ** Import Users Pages
import JobProvider from "../Creator/user/JobProvider";
import JobSeeker from "../Creator/user/JobSeeker";
import AdminDashboardIndex from "../Creator/UserDashboardIndex";

// Import Notification
import Notification from "../Creator/authentication/Notifications";
import NotificationSingle from "../Creator/Notification/NotificationSingle";

// ** Import Payment components
import AllPayment from "../Creator/Payment/AllPayment";
import PendingPayment from "../Creator/Payment/PendingPayment";
import ReceivedPayment from "../Creator/Payment/ReceivedPayment";
import WithdrawPayment from "../Creator/Payment/WithdrawRequest";

// ** Import Authentication components
import UserSignIn from "../Creator/authentication/UserSignIn";
import UserSignUp from "../Creator/authentication/UserSignUp";
import UserForgetPassword from "../Creator/authentication/UserForgetPassword";
import UserEmailVerification from "../Creator/authentication/UserEmailVerification";
import VerifyEmail from "../Creator/authentication/VerifyEmail";

// ** Import Support components
import Support from "../Creator/Support/Support";
import Resolution from "../Creator/Support/Resolution";

// Import Onboard
import Onboard from "../Pages/creator/Onboard";
import OnboardTwo from "../Pages/creator/OnboardTwo";
import Ecosystem from "../Creator/ecosystem/Ecosystem";
import NewEcosystem from "../Creator/ecosystem/Newecosystem/NewEcosystem";
import EditTemplate from "../Creator/ecosystem/Newecosystem/EditTemplate";
import CreateForm from "../Creator/ecosystem/Newecosystem/CreateForm";
import PreviewAndSend from "../Creator/ecosystem/Newecosystem/PreviewAndSend";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Auth Pages */}
      {/* <Route element={<AuthLayout />}> */}
      <Route path="/" element={<UserSignIn />} />
      <Route path="/creator/signup" element={<UserSignUp />} />
      <Route path="/creator/forget-password" element={<UserForgetPassword />} />
      <Route path="/creator/Onboard" element={<Onboard />} />

      <Route path="/user/verify-email" element={<UserEmailVerification />} />
      <Route path="/creator/Verify-email" element={<VerifyEmail />} />

      <Route path="/creator/OnboardTwo" element={<OnboardTwo />} />
      <Route path="/creator/dashboard/New-Ecosystem" element={<NewEcosystem/>} />
      <Route path="/creator/dashboard/Edit-Template" element={<EditTemplate/>} />
      <Route path="/creator/dashboard/Create-Form" element={<CreateForm/>} />
      <Route path="/creator/dashboard/Preview-and-Send" element={<PreviewAndSend/>} />


      {/* Routes (ADMIN DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<AdminDashboardIndex />}>
        <Route path="/creator/dashboard/overview" element={<Overview />} />
        <Route path="/creator/dashboard/analytics" element={<Analytics />} />
        <Route path="/creator/notifications" element={<Notification />} />
        <Route

          path="/creator/notification-single"


          element={<NotificationSingle />}
        />
        <Route path="/creator/dashboard/All-Ecosystem" element={<Ecosystem/>} />
        

        <Route path="/creator/jobs/all-jobs" element={<AllJobs />} />
        <Route path="/creator/jobs/job-category" element={<JobCategory />} />
        <Route
          path="/creator/jobs/category-single"
          element={<CategorySingle />}
        />
        <Route path="/admin/jobProvider" element={<JobProvider />} />
        <Route path="/admin/jobSeeker" element={<JobSeeker />} />
        <Route path="/admin/all-payment" element={<AllPayment />} />
        <Route path="/admin/pending-payment" element={<PendingPayment />} />
        <Route path="/creator/received-payment" element={<ReceivedPayment />} />
        <Route path="/creator/withdraw-request" element={<WithdrawPayment />} />
        <Route path="/creator/support" element={<Support />} />
        <Route path="/creator/resolution" element={<Resolution />} />
        <Route
          path="creator/dashboard/layouts/layout-vertical"
          element={<Overview />}
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
