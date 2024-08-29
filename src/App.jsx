// import node module libraries
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import layouts

import AllRoutes from "./Layout/AllRoutes";

// import required stylesheet
import "simplebar/dist/simplebar.min.css";
import "tippy.js/animations/scale.css";
import { UserProvider } from "./context/AuthContext";
import ScrollToTop from "./Components/ScrollToTop";
import axios from "axios";
import TemplateV1 from "./EcosystemDashboard/Template/TemplateV1";

function App() {
  // const [template, setTemplate] = useState(null);
  // console.log("this is dimp landing page");

  // useEffect(() => {
  //   const hostname = window.location.hostname;
  //   console.log("this is dimp host name", hostname);

  //   const parts = hostname.split(".");
  //   if (parts.length > 2) {
  //     const subdomain = parts.slice(0, -2).join(".");
  //     console.log("this is dimp subdomain name", subdomain);

  //     // Send a request to the backend with the subdomain
  //     axios
  //       .get(`${import.meta.env.VITE_API_URL}/getTemplate/${subdomain}`)
  //       .then((response) => {
  //         setTemplate(response.data.templateDetails);
  //         sessionStorage.setItem(
  //           "ecoLogo",
  //           response.data.templateDetails.navbar.logo
  //         );
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching the template:", error);
  //       });
  //   }
  // }, []);

  return (
    <div>
      {/* {template ? (
        <TemplateV1 details={template} />
      ) : (
        <Router>
          <ScrollToTop />
          <UserProvider>
            <AllRoutes />
          </UserProvider>
        </Router>
      )} */}
      <Router>
        <ScrollToTop />
        <UserProvider>
          <AllRoutes />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
