import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { footerDefaultLink } from "../utils/footerDefaultRoutes";

const Footer = () => {
  return (
    <div className="bg-light py-4 px-15 mt-8">
      <div className="py-6">
        <Row className="d-inline-flex justify-content-center mx-auto">
         {footerDefaultLink.map((item)=>(
            <span key={item.id} className="d-inline-flex"><Link to={item.link}>{item.linkName}</Link></span>
            
         ))}
          {/* <Link>FAQs</Link>
          <Link>Developer Community Forum</Link>
          <Link>Developer Technical Support</Link>
          <Link> APIs</Link>
          <Link>API License Agreement</Link> */}
        </Row>
        <Row className="mt-6">
          Copyright 2022—2024 Dimp. All rights reserved. User agreement, Privacy
          policy, Cookies.
        </Row>
      </div>
    </div>
  );
};

export default Footer;
