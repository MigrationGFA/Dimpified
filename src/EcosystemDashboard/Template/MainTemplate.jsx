import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Template1 from "./AllTemplate/TemplateV1";
import Template2 from "./AllTemplate/Template2";

const MainTemplate = ({ subdomain }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/getTemplate/${subdomain}`
        );
        setDetails(response.data.templateDetails);
        sessionStorage.setItem(
          "ecoLogo",
          response.data.templateDetails.navbar.logo
        );
        sessionStorage.setItem(
          "brand",
          response.data.templateDetails.navbar.brand
        );
      } catch (error) {
        console.log("not working", error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [subdomain]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!details) {
    return <div>Error: Unable to load template details</div>;
  }

  const templateNumber = parseInt(details.templateId, 10);

  switch (templateNumber) {
    case 1:
      return <Template1 details={details} subdomain={subdomain} />;
    case 2:
      return <Template2 details={details} subdomain={subdomain} />;
    default:
      return <div>Error: Unknown template ID</div>;
  }
};

export default MainTemplate;
