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
import Notification from "../Admin/authentication/Notifications";
import NotificationSingle from "../Admin/Notification/NotificationSingle";

// ** Import Admin Payment components
import AllPayment from "../Admin/Payment/AllPayment";
import PendingPayment from "../Admin/Payment/PendingPayment";
import ReceivedPayment from "../Admin/Payment/ReceivedPayment";
import WithdrawPayment from "../Admin/Payment/WithdrawRequest";

// ** Import Admin Authentication components
import UserSignIn from "../Admin/authentication/UserSignIn";
import UserSignUp from "../Admin/authentication/UserSignUp"
import UserForgetPassword from "../Admin/authentication/UserForgetPassword";

// ** Import Admin Support components
import Support from "../Admin/Support/Support";
import Resolution from "../Admin/Support/Resolution";

// Import Onboard
import Onboard from "../Pages/Creator/Onboard"

const AllRoutes = () => {
  return (
    <Routes>
      {/* Auth Pages */}
      {/* <Route element={<AuthLayout />}> */}
        <Route path="/" element={<UserSignIn />} />
        <Route path="/user/signup" element={<UserSignUp />} />
        <Route
          path="/user/forget-password"
          element={<UserForgetPassword />}
        />

      {/* Routes (ADMIN DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<AdminDashboardIndex />}>
        <Route path="/user/dashboard/overview" element={<Overview />} />
        <Route path="/user/dashboard/analytics" element={<Analytics />} />
        <Route path="/user/notifications" element={<Notification />} />
        <Route path="user/notification-single" element={<NotificationSingle />} />

        <Route path="/admin/jobs/all-jobs" element={<AllJobs />} />
        <Route path="/admin/out-source" element={<OutSource />} />
        <Route
          path="/admin/out-source/job-single"
          element={<OutsourceJobSingle />}
        />
        <Route path="/admin/jobs/job-category" element={<JobCategory />} />
        <Route
          path="/admin/jobs/category-single"
          element={<CategorySingle />}
        />
        <Route path="/admin/jobProvider" element={<JobProvider />} />
        <Route path="/admin/jobSeeker" element={<JobSeeker />} />
        <Route path="/admin/all-payment" element={<AllPayment />} />
        <Route path="/admin/pending-payment" element={<PendingPayment />} />
        <Route path="/admin/received-payment" element={<ReceivedPayment />} />
        <Route path="/admin/withdraw-request" element={<WithdrawPayment />} />
        <Route path="/admin/support" element={<Support />} />
        <Route path="/admin/resolution" element={<Resolution />} />
        <Route path="/creator/Onboard" element={<Onboard />} />
        <Route
          path="admin/dashboard/layouts/layout-vertical"
          element={<Overview />}
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
