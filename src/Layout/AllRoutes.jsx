// ** Import from react dom
import { Route, Routes, Navigate } from "react-router-dom";

// ** Import core SCSS styles
import "../assets/scss/theme.scss";

// Student Dashboard Pages

import DimpHome from "../dimp-home/DimpHome";
import CustomerTraining from "../Pages/customer-training/CustomerTraining";
import EcoPayment from "../Pages/pricing/EcoPayment";
import NonProfit from "../Pages/non-profit/NonProfit";
// import About from "../Pages/about/About";
// import Pricing from "../Pages/pricing/Pricing";
// import Contact from "../Pages/contact/Contact";
// import FAQs from "../Pages/compare-plan/FAQs";
// import TermsOfUse from "../../src/Pages/home-academy/TermsOfUse";
// import PrivacyPolicy from "../../src/Pages/home-academy/PrivacyPolicy";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DimpHome />} />
      <Route path="/education" element={<CustomerTraining />} />
      <Route path="/pricing" element={<EcoPayment />} />
      <Route path="/non-profit" element={<NonProfit />} />
      
    </Routes>
  );
};

export default AllRoutes;
