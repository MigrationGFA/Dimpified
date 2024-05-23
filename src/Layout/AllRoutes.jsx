// ** Import from react dom
import { Route, Routes, Navigate } from "react-router-dom";

// ** Import core SCSS styles
import "../assets/scss/theme.scss";

// ** Import Admin Dahbaord Menu Pages
import Overview from "../Admin/overview/Overview";
import Analytics from "../Admin/analytics/Analytics";

// ** Import Admin Courses Pages
import AllJobs from "../Admin/courses/all-courses/AllJobs";
import JobCategory from "../Admin/courses/JobCategory";
import CategorySingle from "../Admin/courses/CategorySingle";

// Import Admin Out-source
import OutSource from "../Admin/Outsource/OutSource";
import OutsourceJobSingle from "../Admin/Outsource/OutsourceJobSingle";

// ** Import Admin Users Pages
import JobProvider from "../Admin/user/JobProvider";
import JobSeeker from "../Admin/user/JobSeeker";
import AdminDashboardIndex from "../Admin/AdminDashboardIndex";

// Import Notification
import Notification from "../Creator/authentication/Notifications";
import NotificationSingle from "../Creator/Notification/NotificationSingle";

// ** Import Admin Payment components
import AllPayment from "../Admin/Payment/AllPayment";
import PendingPayment from "../Admin/Payment/PendingPayment";
import ReceivedPayment from "../Admin/Payment/ReceivedPayment";
import WithdrawPayment from "../Admin/Payment/WithdrawRequest";

// ** Import Admin Authentication components
import UserSignIn from "../Admin/authentication/UserSignIn";
import UserSignUp from "../Admin/authentication/UserSignUp";
import UserForgetPassword from "../Admin/authentication/UserForgetPassword";

// ** Import Admin Support components
import Support from "../Admin/Support/Support";
import Resolution from "../Admin/Support/Resolution";

// Import Onboard
import Onboard from "../Pages/creator/Onboard";
import OnboardTwo from "Pages/creator/OnboardTwo";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Auth Pages */}
      {/* <Route element={<AuthLayout />}> */}
      <Route path="/" element={<UserSignIn />} />
      <Route path="/user/signup" element={<UserSignUp />} />
      <Route path="/user/forget-password" element={<UserForgetPassword />} />
      <Route path="/creator/Onboard" element={<Onboard />} />
      <Route path="/creator/OnboardTwo" element={<OnboardTwo />} />

      {/* Routes (ADMIN DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<AdminDashboardIndex />}>
        <Route path="/creator/dashboard/overview" element={<Overview />} />
        <Route path="/creator/dashboard/analytics" element={<Analytics />} />
        <Route path="/creator/notifications" element={<Notification />} />
        <Route
          path="user/notification-single"
          element={<NotificationSingle />}
        />

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
