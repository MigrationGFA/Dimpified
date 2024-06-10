// import React from "react";
// import { useSelector } from "react-redux";
// import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
// import Footer from "./Footer";
// import { CustomNavbar } from "./Template1";
// import "./Template1.css";

// const PreviewPage = () => {
//   const content = useSelector((state) => state.template1);
//   const faqStyles = useSelector((state) => state.template1.faqStyles);

//   const footerInfo = "© 2024 Company Name. All rights reserved.";
//   const socialLinks = [
//     { name: "Facebook", icon: "https://via.placeholder.com/20", href: "#" },
//     { name: "Twitter", icon: "https://via.placeholder.com/20", href: "#" },
//     { name: "LinkedIn", icon: "https://via.placeholder.com/20", href: "#" },
//   ];

//   const renderSection = (id, children) => (
//     <section id={id} className="py-5" style={content[id].styles}>
//       <Container>{children}</Container>
//     </section>
//   );

//   return (
//     <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
//       <Container fluid className="mt-5">
//         <Row>
//           <Col md={12}>
//             {renderSection(
//               "navbar",
//               <CustomNavbar
//                 logo={content.navbar.logo}
//                 links={content.navbar.links}
//                 buttonText={content.navbar.buttonText}
//               />
//             )}
//             {renderSection(
//               "landingPage",
//               <>
//                 <h1>{content.landingPage.heading}</h1>
//                 <p>{content.landingPage.subheading}</p>
//                 <Button variant="primary">
//                   {content.landingPage.buttonText}
//                 </Button>
//               </>
//             )}
//             {renderSection(
//               "aboutUs",
//               <>
//                 <h2>{content.aboutUs.heading}</h2>
//                 <p>{content.aboutUs.text}</p>
//               </>
//             )}
//             {renderSection(
//               "whoWeAre",
//               <>
//                 <h2>{content.whoWeAre.heading}</h2>
//                 <p>{content.whoWeAre.text}</p>
//               </>
//             )}
//             {renderSection(
//               "contactUs",
//               <>
//                 <h2>{content.contactUs.heading}</h2>
//                 <p>Address: {content.contactUs.address}</p>
//                 <p>Phone: {content.contactUs.phone}</p>
//                 <p>Email: {content.contactUs.email}</p>
//               </>
//             )}
//             {renderSection(
//               "faq",
//               <div style={faqStyles}>
//                 <h2>FAQ</h2>
//                 {content.faq.map((item, index) => (
//                   <div key={index}>
//                     <h5>{item.question}</h5>
//                     <p>{item.answer}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <Footer companyInfo={footerInfo} socialLinks={socialLinks} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default PreviewPage;

import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import Footer from "./Footer";
import "./Template1.css";

const PreviewPage = () => {
  const content = useSelector((state) => state.template1);
  const faqStyles = useSelector((state) => state.template1.faqStyles);

  const footerInfo = "© 2024 Company Name. All rights reserved.";
  const socialLinks = [
    { name: "Facebook", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "Twitter", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "LinkedIn", icon: "https://via.placeholder.com/20", href: "#" },
  ];

  const renderSection = (id, children) => (
    <section id={id} className="py-5" style={content[id].styles}>
      <Container>{children}</Container>
    </section>
  );

  return (
    <div style={{ maxWidth: "100%", wordWrap: "break-word" }}>
      <Container fluid className="mt-5">
        <Row>
          <Col md={12}>
            {renderSection(
              "navbar",
              <CustomNavbarPreview
                logo={content.navbar.logo}
                links={content.navbar.links}
                buttonText={content.navbar.buttonText}
              />
            )}
            {renderSection(
              "landingPage",
              <>
                <h1>{content.landingPage.heading}</h1>
                <p>{content.landingPage.subheading}</p>
                <Button variant="primary">
                  {content.landingPage.buttonText}
                </Button>
              </>
            )}
            {renderSection(
              "aboutUs",
              <>
                <h2>{content.aboutUs.heading}</h2>
                <p>{content.aboutUs.text}</p>
              </>
            )}
            {renderSection(
              "whoWeAre",
              <>
                <h2>{content.whoWeAre.heading}</h2>
                <p>{content.whoWeAre.text}</p>
              </>
            )}
            {renderSection(
              "contactUs",
              <>
                <h2>{content.contactUs.heading}</h2>
                <p>Address: {content.contactUs.address}</p>
                <p>Phone: {content.contactUs.phone}</p>
                <p>Email: {content.contactUs.email}</p>
              </>
            )}
            {renderSection(
              "faq",
              <div style={faqStyles}>
                <h2>FAQ</h2>
                {content.faq.map((item, index) => (
                  <div key={index}>
                    <h5>{item.question}</h5>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            )}
            <Footer companyInfo={footerInfo} socialLinks={socialLinks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PreviewPage;

// import {   Container, Button } from "react-bootstrap";

export const CustomNavbarPreview = ({ logo, links, buttonText }) => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" width="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mx-auto">
          {links.map((link, index) => (
            <Nav.Link key={index} href={link.href}>
              {link.text}
            </Nav.Link>
          ))}
        </Nav>
        <Button variant="primary">{buttonText}</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export const StaticImage = ({ src, alt, width }) => (
  <img src={src} alt={alt} width={width} />
);
