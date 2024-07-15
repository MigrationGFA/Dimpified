// ** Import from react dom
import { Route, Routes, Navigate } from "react-router-dom";

// ** Import core SCSS styles
import "../assets/scss/theme.scss";
import DimpHome from "../dimp-home/DimpHome";
import CustomerTraining from "../dimp-pages/education/CustomerTraining";
import Pricing from "../dimp-pages/pricing/Pricing";
import Government from "../dimp-pages/government/Government";
import Corporation from "../dimp-pages/corporation/Corporation";
import NonProfit from "../dimp-pages/non-profit/NonProfit";
import Professional from "../dimp-pages/professional/Professional";
import ReligiousBodies from "../dimp-pages/religious-bodies/ReligiousBodies";
import Creatives from "../dimp-pages/creatives/Creatives";
import TradeServices from "../dimp-pages/trade-services/TradeServices";
import PersonalCare from "../dimp-pages/personal-care/PersonalCare";
import TechnologyServices from "../dimp-pages/technology/TechnologyServices";
import EventServices from "../dimp-pages/event-services/EventServices";

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
import Chat from "../Admin/chat/Chat";
import ChatLayout from "./Dashboard/ChatLayout";
import EditProfile from "../Creator/AccountSettings/EditProfile";
import SocialProfile from "../Creator/AccountSettings/SocialProfiles";

// import Feature Update components
import FeatureUpdate from "../Creator/Suggestion/FeatureUpdate";

// Import Onboard
import Onboard from "../Pages/creator/Onboard";
import OnboardTwo from "../Pages/creator/OnboardTwo";
import Ecosystem from "../Creator/ecosystem/Ecosystem";
import NewEcosystem from "../Creator/ecosystem/Newecosystem/NewEcosystem";
import EditTemplate from "../Creator/ecosystem/Newecosystem/EditTemplate";
import CreateForm from "../Creator/ecosystem/Newecosystem/CreateForm";
import Courses from "../Creator/ecosystem/Newecosystem/Courses";
import PreviewAndSend from "../Creator/ecosystem/Newecosystem/PreviewAndSend";
import AddNewCourse from "../Creator/ecosystem/AddNewCourse";
import EcoPayment from "../Creator/ecosystem/Newecosystem/EcoPayment";
import Integration from "../Creator/ecosystem/Newecosystem/Integration";
import Template1 from "../EditTemplate/Template1";
import NewSiteTemplate from "../Creator/ecosystem/Newecosystem/NewSiteTemplate";
import ContractPage from "../Creator/Payment/ContractPage";
import Payouts from "../Creator/Payment/Payouts";

import UserLandingPage from "../UserDashboard/StudentLandingPage";
import UserDashboard from "../UserDashboard/student/StudentDashboard";
import UserMyCourse from "../UserDashboard/student/MyCourses";
import UserReviews from "../UserDashboard/student/Reviews";
import UserBookmarked from "../UserDashboard/student/Bookmarked";
import UserLearning from "../UserDashboard/student/Learning";
import UserQiuzResult from "../UserDashboard/student/QuizResult";
import UserEditProfile from "../DashboardsPeerComponents/account-settings/EditProfile";
import UserPayouts from "../DashboardsPeerComponents/account-settings/Payouts";
import UserSocialProfile from "../DashboardsPeerComponents/account-settings/SocialProfiles";
import UserNotification from "../DashboardsPeerComponents/account-settings/Notifications";
import UserDeleteProfile from "../DashboardsPeerComponents/account-settings/DeleteProfile";
import UserBrowseCourse from "../Components/marketing/Pages/courses/CourseFilterPage";
import UserSingleCourse from "../Components/marketing/Pages/courses/course-single/CourseSingle";
import UserLearningCourse from "../Components/marketing/Pages/courses/course-single2/CourseSingle2";
import UserResolution from "../UserDashboard/student/Resolution";

import EcosystemDashboard from "../EcosystemDashboard/Dashboard";
import EcosystemCourses from "../EcosystemDashboard/MyCourses";
import EcosystemReviews from "../EcosystemDashboard/Reviews";
import EcosystemEarning from "../EcosystemDashboard/Earnings";
import EcosystemOrders from "../EcosystemDashboard/Orders";
import EcosystemStudents from "../EcosystemDashboard/Students";
import EcosystemPayouts from "../DashboardsPeerComponents/account-settings/Payouts";
import EcosystemQuiz from "../EcosystemDashboard/Quiz";
import EcosystemQuizSingle from "../EcosystemDashboard/QuizSingle";
import EcosystemQuizResult from "../EcosystemDashboard/QuizResult";
import EcosystemEditProfile from "../DashboardsPeerComponents/Ecosystem/EditProfile";
import EcosystemSocialProfiles from "../DashboardsPeerComponents/Ecosystem/SocialProfiles";
import EcosystemDeleteProfile from "../DashboardsPeerComponents/Ecosystem/DeleteProfile";
import EcosystemAddNewCourse from "../EcosystemDashboard/AddNewCourse";
import EcosystemAddEditCourse from "../EcosystemDashboard/EditAddNewCourse";
import TemplateV1 from "../EcosystemDashboard/Template/TemplateV1";
import PostAService from "../Creator/ecosystem/Newecosystem/PostAService/PostAService";
import PostAProduct from "../Creator/ecosystem/Newecosystem/PostAProduct/PostAProduct";
import RegisterEcosystem from "../EcosystemDashboard/Authentication/Register"

// ** Import Ecosystem Authentication components
import EcosystemSignIn from "../EcosystemDashboard/Authentication/EcosystemSignIn";
import EcosystemSignUp from "../EcosystemDashboard/Authentication/EcosystemSignUp";
import EcosystemForgetPassword from "../EcosystemDashboard/Authentication/EcosystemForgetPassword";
import EcosystemEmailVerification from "../EcosystemDashboard/Authentication/EcosystemEmailVerification";
import EcosystemVerifyEmail from "../EcosystemDashboard/Authentication/EcosystemVerifyEmail";
import DeveloperProgram from "../developer-program/DeveloperProgram";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DimpHome />} />
      <Route path="/education" element={<CustomerTraining />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/government" element={<Government />} />
      <Route path="/corporation" element={<Corporation />} />
      <Route path="/non-profit" element={<NonProfit />} />
      <Route path="/professional-services" element={<Professional />} />
      <Route path="/religious-bodies" element={<ReligiousBodies />} />
      <Route path="/creative-services" element={<Creatives />} />
      <Route path="/trade-services" element={<TradeServices />} />
      <Route path="/personal-care-services" element={<PersonalCare />} />
      <Route path="/technology-services" element={<TechnologyServices />} />
      <Route path="/event-services" element={<EventServices />} />

      <Route path="/creator/signin" element={<UserSignIn />} />
      <Route path="/creator/signup" element={<UserSignUp />} />
      <Route path="/creator/forget-password" element={<UserForgetPassword />} />
      <Route path="/creator/Onboard" element={<Onboard />} />
      <Route path="/creator/verify-email" element={<UserEmailVerification />} />
      <Route path="/creator/verification" element={<VerifyEmail />} />
      <Route path="/creator/OnboardTwo" element={<OnboardTwo />} />
      <Route
        path="/creator/dashboard/New-Ecosystem"
        element={<NewEcosystem />}
      />
      <Route path="/creator/dashboard/Template" element={<Template1 />} />
      <Route
        path="/creator/dashboard/new-template"
        element={<NewSiteTemplate />}
      />

      <Route
        path="/creator/dashboard/Edit-Template"
        element={<EditTemplate />}
      />
      <Route path="/creator/dashboard/Create-Form" element={<CreateForm />} />
      <Route path="/creator/dashboard/Products" element={<Courses />} />
      <Route
        path="/creator/dashboard/Preview-and-Send"
        element={<PreviewAndSend />}
      />
      <Route
        path="/Ecosystemdashboard/Add-New-Course"
        element={<AddNewCourse />}
      />
      <Route
        path="/Ecosystemdashboard/Add-New-Service"
        element={<PostAService />}
      />
       <Route
        path="/creator/dashboard/Add-New-Product"
        element={<PostAProduct/>}
      />
      <Route path="/creator/dashboard/Payment" element={<EcoPayment />} />
      <Route path="/creator/dashboard/Integrations" element={<Integration />} />
      <Route element={<ChatLayout />}>
        <Route path="/creator/dashboard/chat" element={<Chat />} />
      </Route>
      {/* Routes (ADMIN DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<AdminDashboardIndex />}>
        <Route path="/creator/dashboard/overview" element={<Overview />} />
        <Route path="/creator/dashboard/analytics" element={<Analytics />} />
        <Route path="/creator/notifications" element={<Notification />} />
        <Route
          path="/creator/notification-single"
          element={<NotificationSingle />}
        />
        <Route
          path="/creator/dashboard/All-Ecosystem"
          element={<Ecosystem />}
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
        <Route path="/creator/escrow-payment" element={<ContractPage />} />
        <Route path="/creator/payout" element={<Payouts />} />
        <Route path="/creator/pending-payment" element={<PendingPayment />} />
        <Route path="/creator/received-payment" element={<ReceivedPayment />} />
        <Route path="/creator/withdraw-request" element={<WithdrawPayment />} />
        <Route path="/creator/feature-update" element={<FeatureUpdate />} />
        <Route path="/creator/help-center" element={<HelpCenter />} />
        <Route path="/creator/support" element={<Support />} />
        <Route path="/creator/edit-profile" element={<EditProfile />} />
        <Route path="/creator/social-profile" element={<SocialProfile />} />
        <Route path="/creator/Onboard" element={<Onboard />} />
        <Route
          path="creator/dashboard/layouts/layout-vertical"
          element={<Overview />}
        />
      </Route>

      <Route path="/User" element={<UserLandingPage />} />
      <Route path="/User-My-Course" element={<UserMyCourse />} />
      <Route path="/Userdashboard" element={<UserDashboard />} />
      <Route path="/User-Reviews" element={<UserReviews />} />
      <Route path="/User-My-Course/Bookmarked" element={<UserBookmarked />} />
      <Route path="/User-My-Course/Learning" element={<UserLearning />} />
      <Route path="/User-quiz-result" element={<UserQiuzResult />} />
      <Route path="/User-edit-profile" element={<UserEditProfile />} />
      <Route path="/User-payout" element={<UserPayouts />} />
      <Route path="/User-social-profile" element={<UserSocialProfile />} />
      <Route path="/User-notifications" element={<UserNotification />} />
      <Route path="/User-delete-profile" element={<UserDeleteProfile />} />
      <Route path="/User-Resolution" element={<UserResolution />} />
      <Route path="/User/browse-course" element={<UserBrowseCourse />} />
     
      <Route
        path="/User/single/learning/single-course"
        element={<UserLearningCourse />}
      />
      <Route path="/User-delete-profile" element={<UserDeleteProfile />} />

      <Route path="/Ecosystemdashboard" element={<EcosystemDashboard />} />
      <Route
        path="/Ecosystemdashboard/My-Courses"
        element={<EcosystemCourses />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-reviews"
        element={<EcosystemReviews />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-earning"
        element={<EcosystemEarning />}
      />
      {/* <Route path="/ecosystem/signin" element={<EcosystemSignIn />} /> */}
      <Route path="/ecosystem/signup" element={<EcosystemSignUp />} />
      <Route path="/ecosystem/forget-password" element={<EcosystemForgetPassword />} />
      <Route path="/ecosystem/verify-email" element={<EcosystemEmailVerification />} />
      <Route path="/ecosystem/verification" element={<EcosystemVerifyEmail />} />
      <Route 
        path="/Ecosystemdashboard/Ecosystem-orders"
        element={<EcosystemOrders />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-students"
        element={<EcosystemStudents />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-payouts"
        element={<EcosystemPayouts />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-quiz"
        element={<EcosystemQuiz />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-quiz-single"
        element={<EcosystemQuizSingle />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-quiz-result"
        element={<EcosystemQuizResult />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-edit-profile"
        element={<EcosystemEditProfile />}
      />

      <Route
        path="/Ecosystemdashboard/Ecosystem-social-profiles"
        element={<EcosystemSocialProfiles />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-delete-profile"
        element={<EcosystemDeleteProfile />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-add-new-course"
        element={<EcosystemAddNewCourse />}
      />
      <Route
        path="/Ecosystemdashboard/Ecosystem-edit-course"
        element={<EcosystemAddEditCourse />}
      />

      {/* End user ecosystem routes */}
      <Route path="/show=true/:ecosystemDomain" element={<TemplateV1 />} />
      <Route path="/:ecosystemDomain/:id" element={<UserSingleCourse />} />
      <Route path="/show=true/:ecosystemDomain/signup" element={<RegisterEcosystem />} />
      <Route path="/ecosystemDomain/signin" element={<EcosystemSignIn />} />

      {/* dimp developer program */}
      <Route path="/dimp/developer-program" element={<DeveloperProgram />} />
    </Routes>
  );
};

export default AllRoutes;
