import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import TemplateV1 from "./TemplateV1";

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

  const templateNumber = parseInt(details.templateNumber, 10);
  switch (templateNumber) {
    case 1:
      return <TemplateV1 details={details} subdomain={subdomain} />;
    default:
      break;
  }
  //   return <main>MainTemplate</main>;
};

export default MainTemplate;
