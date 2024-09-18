// ** Import from react dom
import { Route, Routes, Navigate } from "react-router-dom";

// ** Import core SCSS styles
import "../assets/scss/theme.scss";
import DimpHome from "../dimp-home/DimpHome";
import CustomerTraining from "../dimp-pages/education/CustomerTraining";
import Pricing from "../dimp-pages/pricing/Pricing";
import NigerianPricing from "../dimp-pages/pricing/NigerianPricing";
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
import BarberLanding from "../dimp-pages/personal-care/BarberLanding";
import PressRelease from "../dimp-home/PressRelease";

import SalonTemplate from "../dimp-templates/Trade-services/salon/SalonTemplate";
import BarberMordern from "../dimp-templates/Trade-services/barber/BarberModern";
import EventTemplate from "../dimp-templates/event-services/EventTemplate";
import StateUpskilling from "../dimp-templates/government/StateUpskilling";
import LegalTemplate from "../dimp-templates/professional-services/Legal";
import OnlineCourses from "../dimp-templates/educational-services/OnlineCourses";
import NonGovTemplate from "../dimp-templates/non-profit/NonGovTemplate";
import SpaTemplate from "../dimp-templates/Trade-services/spa/SpaTemplate";
import GymTemplate from "../dimp-templates/personal-care-services/GymTemplate";
import CateringTemplate from "../dimp-templates/event-services/CateringTemplate";

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
import UserDashboardIndex from "../Creator/UserDashboardIndex";

// Import Notification
import Notification from "../Creator/authentication/Notifications";
import NotificationSingle from "../Creator/Notification/NotificationSingle";

// ** Import Payment components
import PendingPayment from "../Creator/Payment/PendingPayment";
import ReceivedPayment from "../Creator/Payment/ReceivedPayment";
import WithdrawPayment from "../Creator/Payment/WithdrawRequest";

// Import Integration components
import Booking from "../Creator/Integrations/Booking";
import Affiliates from "../Creator/Integrations/Affiliates";
import Analytic from "../Creator/Integrations/Analytics";
import Certificate from "../Creator/Integrations/Certifications";
import Communication from "../Creator/Integrations/Communications";
import CRMtools from "../Creator/Integrations/CRMTools";
import CustomerService from "../Creator/Integrations/CustomerService";
import DomainManagement from "../Creator/Integrations/DomainManagement";
import Ecommerce from "../Creator/Integrations/Ecommerce";
import EmailIntegration from "../Creator/Integrations/EmailIntegrations";
import Finance from "../Creator/Integrations/Finance";
import LiveSession from "../Creator/Integrations/LiveSessions";
import MobileApp from "../Creator/Integrations/Mobile";
import Security from "../Creator/Integrations/Security";
import SocialMedia from "../Creator/Integrations/Social";
import StoragePlatform from "../Creator/Integrations/StoragePlatform";
import VideoPlayer from "../Creator/Integrations/VideoPlayer";

// ** Import Authentication components
import UserSignIn from "../Creator/authentication/UserSignIn";
import UserSignUp from "../Creator/authentication/UserSignUp";
import UserForgetPassword from "../Creator/authentication/UserForgetPassword";
import UserEmailVerification from "../Creator/authentication/UserEmailVerification";
import VerifyEmail from "../Creator/authentication/VerifyEmail";

// ** Import Support components
import HelpCenter from "../Creator/Support/HelpCenter";
import Support from "../Creator/Support/Support";
// import Chat from "../Components/elements/chat/Chat"
// import ChatLayout from "./Dashboard/ChatLayout";
import EditProfile from "../Creator/AccountSettings/EditProfile";
import SocialProfile from "../Creator/AccountSettings/SocialProfiles";

// import Feature Update components
import FeatureUpdate from "../Creator/Suggestion/FeatureUpdate";

// Import Onboard
import Onboard from "../Pages/creator/Onboard";
import OnboardTwo from "../Pages/creator/OnboardTwo";
import Ecosystem from "../Creator/ecosystem/Ecosystem";
import NewEcosystem from "../Creator/ecosystem/Newecosystem/NewEcosystem";
import IndividualNewEcosystem from "../Creator/ecosystem/Newecosystem/Individual/IndividualNewEcosystem";
import EditTemplate from "../Creator/ecosystem/Newecosystem/EditTemplate";
import IndividualEditTemplate from "../Creator/ecosystem/Newecosystem/Individual/EditTemplate";
import CreateForm from "../Creator/ecosystem/Newecosystem/CreateForm";
import IndividualProduct from "../Creator/ecosystem/Newecosystem/Individual/Courses";
import Courses from "../Creator/ecosystem/Newecosystem/Courses";
import PreviewAndSend from "../Creator/ecosystem/Newecosystem/PreviewAndSend";
import AddNewCourse from "../Creator/ecosystem/AddNewCourse";
import EcoPayment from "../Creator/ecosystem/Newecosystem/EcoPayment";
import IndividualEcoPayment from "../Creator/ecosystem/Newecosystem/Individual/EcoPayment";
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
import UserBrowseService from "../Components/marketing/Pages/service-single/ServicesList";
import UserSingleService from "../Components/marketing/Pages/service-single/ServiceSingle";
import UserServiceBilling from "../Components/marketing/Pages/service-single/ServiceBilling";
import UserOrderSummary from "../Components/marketing/Pages/service-single/OrderSummary";
import UserLearningCourse from "../Components/marketing/Pages/courses/course-single2/CourseSingle2";
import UserResolution from "../UserDashboard/student/Resolution";

import EcosystemDashboard from "../EcosystemDashboard/Dashboard";
import EcosystemMyProduct from "../EcosystemDashboard/MyCourses";
import EcosystemBooking from "../EcosystemDashboard/Booking";
import EcosystemCourses from "../EcosystemDashboard/Courses";
import EcosystemServices from "../EcosystemDashboard/Services";
import EcosystemProducts from "../EcosystemDashboard/Products";
import EcosystemResolution from "../EcosystemDashboard/EcoResolution";
import EcosystemReviews from "../EcosystemDashboard/Reviews";
import EcosystemEarning from "../EcosystemDashboard/Earnings";
import EcosystemOrders from "../EcosystemDashboard/Orders";
import EcosystemStudents from "../EcosystemDashboard/Students";
import EcosystemPayouts from "../DashboardsPeerComponents/account-settings/Payouts";
import EcosystemQuiz from "../EcosystemDashboard/Quiz";
import EcosystemQuizSingle from "../EcosystemDashboard/QuizSingle";
import EcosystemQuizResult from "../EcosystemDashboard/QuizResult";
import TemplateV1 from "../EcosystemDashboard/Template/TemplateV1";
import PostAService from "../Creator/ecosystem/Newecosystem/PostAService/PostAService";
import PostAProduct from "../Creator/ecosystem/Newecosystem/PostAProduct/PostAProduct";

// ** Import Ecosystem Authentication components
import RegisterEcosystem from "../EcosystemDashboard/Authentication/Register";
import EcosystemSignIn from "../EcosystemDashboard/Authentication/EcosystemSignIn";
import EcosystemForgetPassword from "../EcosystemDashboard/Authentication/EcosystemForgetPassword";
import EcosystemEmailVerification from "../EcosystemDashboard/Authentication/EcosystemEmailVerification";
import EcosystemVerifyEmail from "../EcosystemDashboard/Authentication/EcosystemVerifyEmail";
import DeveloperProgram from "../developer-program/DeveloperProgram";
import CommunityChat from "../Components/CommunityChat/Page";
import CreatorCommunityChat from "../Components/CreatorCommunity/Page";
import UserChat from "../Components/Chat/UserChat";
import UserChatLayout from "../Components/Chat/UserChatLayout";
import Join from "../developer-program/pages/Join";
import AboutDevProgram from "../developer-program/pages/AboutDevProgram";
import ApiLicense from "../developer-program/pages/ApiLicense";
import Grow from "../developer-program/pages/Grow";
import EventPage from "../developer-program/pages/EventsPage";
import LoyaltyProgram from "../developer-program/pages/LoyaltyProgram";
import DeveloperProgramSupport from "../developer-program/pages/Support";
import DevProgramAuthForm from "../developer-program/pages/DevProgramAuthForm";
import CommunityCreation from "../Components/CommunityChat/CommunityCreation";

// ** Import Admin Dahbaord Menu Pages
import AdminSignIn from "../Admin/Authentication/AdminSignIn";
import AdminForgetPassword from "../Admin/Authentication/AdminForgetPassword";
import AdminOverview from "../Admin/overview/AdminOverview";
import AllCreator from "../Admin/AdminAllCreator/MyUser";
import AdminDashboardIndex from "../Admin/AdminDashboardIndex";
import AdminAllEcosystem from "../Admin/AdminAllEcosystem/AdminAllEcosystem";
import OutSource from "../Admin/Outsource/OutSource";
import OutsourceJobSingle from "../Admin/Outsource/OutsourceJobSingle";
import AdminSupport from "../Admin/Support/Support";
import CreatorSinglePage from "../Admin/Outsource/CreatorSinglePage";
// subdomain
import getSubdomain from "../helper/Subdomain";
import MainTemplate from "../EcosystemDashboard/Template/MainTemplate";
import BarberTemplate from "../EditTemplate/AllCategory/PersonalCare/BarberTemplate";
import AgentPage from "../agent-page/AgentPage";
import AgentPageAuthForm from "../agent-page/pages/authPages/AgentPageAuthForm";
import EcoLoadingPage from "../Components/EcoLoading";
import ProfilePage from "../agent-page/pages/ProfilePage";
import EmailVerify from "../agent-page/pages/authPages/VerifyEmail";
import ResetPassword from "../agent-page/pages/authPages/ResetPassword";
import RegistrationSuccess from "../agent-page/pages/authPages/RegistrationSuccess";

const AllRoutes = () => {
  const ecosystemDomain = getSubdomain();

  return (
    <Routes>
      {ecosystemDomain ? (
        <Route
          path="/"
          element={<MainTemplate subdomain={ecosystemDomain} />}
        />
      ) : (
        <Route path="/" element={<DimpHome />} />
      )}
      <Route path="/loading" element={<EcoLoadingPage />} />
      <Route path="/press-release" element={<PressRelease />} />

      <Route path="/barber" element={<BarberTemplate />} />
      <Route path="/education" element={<CustomerTraining />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/ng/pricing" element={<NigerianPricing />} />
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
      <Route path="/barbers" element={<BarberLanding />} />

      <Route path="/salon-template" element={<SalonTemplate />} />
      <Route path="/event-template" element={<EventTemplate />} />
      <Route path="/upskill-template" element={<StateUpskilling />} />
      <Route path="/barber-two" element={<BarberMordern />} />
      <Route path="/legal-template" element={<LegalTemplate />} />
      <Route path="/course-template" element={<OnlineCourses />} />
      <Route path="/ngo-template" element={<NonGovTemplate />} />
      <Route path="/spa-template" element={<SpaTemplate />} />
      <Route path="/gym-template" element={<GymTemplate />} />
      <Route path="/catering-template" element={<CateringTemplate />} />

      <Route path="/creator/signin" element={<UserSignIn />} />
      <Route path="/creator/signup" element={<UserSignUp />} />
      <Route path="/creator/forget-password" element={<UserForgetPassword />} />
      <Route path="/admin/signin" element={<AdminSignIn />} />
      <Route path="/admin/forget-password" element={<AdminForgetPassword />} />
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
        path="/creator/dashboard/New-Ecosystem/individual"
        element={<IndividualNewEcosystem />}
      />
      <Route
        path="/creator/dashboard/Products/individual"
        element={<IndividualProduct />}
      />
      <Route
        path="/creator/dashboard/Edit-Template/individual"
        element={<IndividualEditTemplate />}
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
      <Route path="/creator/dashboard/Payment" element={<EcoPayment />} />

      <Route
        path="/creator/dashboard/Payment/Individual"
        element={<IndividualEcoPayment />}
      />
      <Route path="/creator/dashboard/Integrations" element={<Integration />} />
      {/* <Route element={<ChatLayout />}>
        <Route path="/creator/dashboard/chat" element={<Chat />} />
      </Route> */}
      {/* Routes (CREATOR DASHBOARD ROUTERS) with DashboardIndex */}

      <Route element={<UserDashboardIndex />}>
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

        <Route path="/creator/payout" element={<Payouts />} />
        <Route path="/creator/pending-payment" element={<PendingPayment />} />

        <Route path="/creator/booking" element={<Booking />} />
        <Route path="/creator/affiliates" element={<Affiliates />} />
        <Route path="/creator/analytic" element={<Analytic />} />
        <Route path="/creator/certification" element={<Certificate />} />
        <Route path="/creator/communication" element={<Communication />} />
        <Route path="/creator/crm-tools" element={<CRMtools />} />
        <Route path="/creator/customer-service" element={<CustomerService />} />
        <Route
          path="/creator/domain-management"
          element={<DomainManagement />}
        />
        <Route path="/creator/e-commerce" element={<Ecommerce />} />
        <Route
          path="/creator/email-integration"
          element={<EmailIntegration />}
        />
        <Route path="/creator/finance" element={<Finance />} />
        <Route path="/creator/live-session" element={<LiveSession />} />
        <Route path="/creator/mobile-app" element={<MobileApp />} />
        <Route path="/creator/security" element={<Security />} />
        <Route path="/creator/social-media" element={<SocialMedia />} />
        <Route path="/creator/storage-platform" element={<StoragePlatform />} />
        <Route path="/creator/video-player" element={<VideoPlayer />} />

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
      {/* Creator Ecosystem Dashboard */}

      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/escrow-payment"
        element={<ContractPage />}
      />
      {/* <Route path="/:ecosystemDomain/Ecosystemdashboard/received-payment" element={<ReceivedPayment />} /> */}
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/withdraw-request"
        element={<WithdrawPayment />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard"
        element={<EcosystemDashboard />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/My-Courses"
        element={<EcosystemMyProduct />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Booking"
        element={<EcosystemBooking />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Courses"
        element={<EcosystemCourses />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Services"
        element={<EcosystemServices />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/DigitalProducts"
        element={<EcosystemProducts />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-reviews"
        element={<EcosystemReviews />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-earning"
        element={<EcosystemEarning />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-orders"
        element={<EcosystemOrders />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-students"
        element={<EcosystemStudents />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-payouts"
        element={<EcosystemPayouts />}
      />

      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Help-Center"
        element={<EcosystemResolution />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-quiz"
        element={<EcosystemQuiz />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-quiz-single"
        element={<EcosystemQuizSingle />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Ecosystem-quiz-result"
        element={<EcosystemQuizResult />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Add-New-Course"
        element={<AddNewCourse />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Add-New-Service"
        element={<PostAService />}
      />
      <Route
        path="/:ecosystemDomain/Ecosystemdashboard/Add-New-Product"
        element={<PostAProduct />}
      />
      {/* End user ecosystem routes */}
      <Route path="/course-single/:id" element={<UserSingleCourse />} />

      <Route path="/digital-service/:id" element={<UserSingleService />} />
      <Route path="/service/:id" element={<UserSingleService />} />
      <Route
        path="/:ecosystemDomain/service/service-billing/:id"
        element={<UserServiceBilling />}
      />
      <Route
        path="/:ecosystemDomain/service/order-summary/:id"
        element={<UserOrderSummary />}
      />
      <Route path="/signup" element={<RegisterEcosystem />} />
      <Route path="/signin" element={<EcosystemSignIn />} />
      <Route path="/forget-password" element={<EcosystemForgetPassword />} />
      <Route
        path="/ecosystem/verify-email"
        element={<EcosystemEmailVerification />}
      />
      <Route path="/verification" element={<EcosystemVerifyEmail />} />
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
      <Route
        path="/:ecosystemDomain/creator-community-chat"
        element={<CreatorCommunityChat />}
      />
      <Route
        path="/:ecosystemDomain/community-creation"
        element={<CommunityCreation />}
      />
      <Route path="/User-delete-profile" element={<UserDeleteProfile />} />
      <Route path="/help-center" element={<UserResolution />} />
      <Route path="/User/browse-course" element={<UserBrowseCourse />} />
      <Route path="/User/browse-service" element={<UserBrowseService />} />
      <Route
        path="/User/single/learning/single-course"
        element={<UserLearningCourse />}
      />

      <Route path="/community-chat" element={<CommunityChat />} />
      <Route element={<UserChatLayout />}>
        <Route path="/chat" element={<UserChat />} />
      </Route>
      {/* dimp developer program */}
      <Route path="/dimp/developer-program" element={<DeveloperProgram />} />

      {/* Routes (ADMIN DASHBOARD ROUTERS) with DashboardIndex */}
      <Route element={<AdminDashboardIndex />}>
        <Route path="/admin/dashboard/overview" element={<AdminOverview />} />
        <Route path="/admin/all-creator" element={<AllCreator />} />
        <Route path="/admin/out-source" element={<OutSource />} />
        <Route path="/admin/all-ecosystem" element={<AdminAllEcosystem />} />
        <Route
          path="/admin/out-source/job-single"
          element={<OutsourceJobSingle />}
        />
        <Route
          path="/admin/creator-single-page/"
          element={<CreatorSinglePage />}
        />
        <Route path="/admin/support" element={<AdminSupport />} />
        <Route
          path="admin/dashboard/layouts/layout-vertical"
          element={<AdminOverview />}
        />
      </Route>
      <Route path="/dimp/developer-program/join" element={<Join />} />
      <Route
        path="/dimp/developer-program/about"
        element={<AboutDevProgram />}
      />
      <Route
        path="/dimp/developer-program/apilicense"
        element={<ApiLicense />}
      />
      <Route path="/dimp/developer-program/grow" element={<Grow />} />
      <Route path="/dimp/developer-program/events" element={<EventPage />} />
      <Route
        path="/dimp/developer-program/loyalty-program"
        element={<LoyaltyProgram />}
      />
      <Route
        path="/dimp/developer-program/support"
        element={<DeveloperProgramSupport />}
      />
      <Route
        path="/dimp/developer-program/auth"
        element={<DevProgramAuthForm />}
      />
      <Route
        path="/dimp/developer-program/auth"
        element={<DevProgramAuthForm />}
      />
      <Route path="/dimp/agent-page/auth" element={<AgentPageAuthForm />} />
      <Route path="/dimp/agent-page" element={<AgentPage />} />
      <Route path="/dimp/agent-page/profile" element={<ProfilePage />} />
      <Route path="/affiliate/verify-email" element={<EmailVerify />} />
      <Route path="/affiliate/reset-password" element={<ResetPassword />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
    </Routes>
  );
};

export default AllRoutes;
