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
import UserSignUp from "../Creator/authentication/UserSignUp"
import UserForgetPassword from "../Creator/authentication/UserForgetPassword";

// ** Import Support components
import Support from "../Creator/Support/Support";
import Resolution from "../Creator/Support/Resolution";

// Import Onboard
import Onboard from "../Pages/creator/Onboard";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Auth Pages */}
      {/* <Route element={<AuthLayout />}> */}
      <Route path="/" element={<UserSignIn />} />
      <Route path="/user/signup" element={<UserSignUp />} />
      <Route path="/user/forget-password" element={<UserForgetPassword />} />
      <Route path="/creator/Onboard" element={<Onboard />} />

      {/* Routes (ADMIN DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<AdminDashboardIndex />}>
        <Route path="/user/dashboard/overview" element={<Overview />} />
        <Route path="/user/dashboard/analytics" element={<Analytics />} />
        <Route path="/user/notifications" element={<Notification />} />
        <Route path="user/notification-single" element={<NotificationSingle />} />

        <Route path="/user/jobs/all-jobs" element={<AllJobs />} />
        <Route path="/user/jobs/job-category" element={<JobCategory />} />
        <Route
          path="/user/jobs/category-single"
          element={<CategorySingle />}
        />
        <Route path="/user/jobProvider" element={<JobProvider />} />
        <Route path="/user/jobSeeker" element={<JobSeeker />} />
        <Route path="/user/all-payment" element={<AllPayment />} />
        <Route path="/user/pending-payment" element={<PendingPayment />} />
        <Route path="/user/received-payment" element={<ReceivedPayment />} />
        <Route path="/user/withdraw-request" element={<WithdrawPayment />} />
        <Route path="/user/support" element={<Support />} />
        <Route path="/user/resolution" element={<Resolution />} />
        <Route path="/creator/Onboard" element={<Onboard />} />
        <Route
          path="user/dashboard/layouts/layout-vertical"
          element={<Overview />}
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
