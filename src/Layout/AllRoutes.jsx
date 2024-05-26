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
import MyUser from "../Creator/user/MyUser";
import JobProvider from "../Creator/user/JobProvider";
import JobSeeker from "../Creator/user/JobSeeker";
import AdminDashboardIndex from "../Creator/UserDashboardIndex";

// Import Notification
import Notification from "../Creator/authentication/Notifications";
import NotificationSingle from "../Creator/Notification/NotificationSingle";

// ** Import Payment components
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
import HelpCenter from "../Creator/Support/HelpCenter";
import Support from "../Creator/Support/Support";

// Import Onboard
import Onboard from "../Pages/creator/Onboard";
import OnboardTwo from "../Pages/creator/OnboardTwo";

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


      {/* Routes (ADMIN DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<AdminDashboardIndex />}>
        <Route path="/creator/dashboard/overview" element={<Overview />} />
        <Route path="/creator/dashboard/analytics" element={<Analytics />} />
        <Route path="/creator/notifications" element={<Notification />} />
        <Route

          path="/creator/notification-single"


          element={<NotificationSingle />}
        />

        <Route path="/creator/jobs/all-jobs" element={<AllJobs />} />
        <Route path="/creator/jobs/job-category" element={<JobCategory />} />
        <Route
          path="/creator/jobs/category-single"
          element={<CategorySingle />}
        />
        <Route path="/creator/my-user" element={<MyUser />} />
        <Route path="/creator/jobProvider" element={<JobProvider />} />
        <Route path="/creator/jobSeeker" element={<JobSeeker />} />
        <Route path="/creator/pending-payment" element={<PendingPayment />} />
        <Route path="/creator/received-payment" element={<ReceivedPayment />} />
        <Route path="/creator/withdraw-request" element={<WithdrawPayment />} />
        <Route path="/creator/help-center" element={<HelpCenter />} />
        <Route path="/creator/support" element={<Support />} />
        <Route path="/creator/Onboard" element={<Onboard />} />
        <Route
          path="creator/dashboard/layouts/layout-vertical"
          element={<Overview />}
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
