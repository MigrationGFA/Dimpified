// import React, { useState } from "react";
// import CustomNavbar from "./CustomNavbar";
// import Footer from "./Footer";
// import EditableBlock from "./EditableBlock";
// import SideEditor from "./SideEditor";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./Template1.css";

// const NewTemplate = () => {
//   const logo = "https://via.placeholder.com/50";
//   const links = [
//     { text: "Home", href: "#home" },
//     { text: "About Us", href: "#about" },
//     { text: "Who We Are", href: "#who" },
//     { text: "Contact Us", href: "#contact" },
//     { text: "FAQ", href: "#faq" },
//   ];
//   const footerInfo = "© 2024 Company Name. All rights reserved.";
//   const socialLinks = [
//     { name: "Facebook", icon: "https://via.placeholder.com/20", href: "#" },
//     { name: "Twitter", icon: "https://via.placeholder.com/20", href: "#" },
//     { name: "LinkedIn", icon: "https://via.placeholder.com/20", href: "#" },
//   ];

//   const [styles, setStyles] = useState({
//     home: {
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       border: "1px solid #000",
//       padding: "10px",
//     },
//     about: {
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       border: "1px solid #000",
//       padding: "10px",
//     },
//     who: {
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       border: "1px solid #000",
//       padding: "10px",
//     },
//     contact: {
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       border: "1px solid #000",
//       padding: "10px",
//     },
//     faq: {
//       backgroundColor: "#ffffff",
//       color: "#000000",
//       border: "1px solid #000",
//       padding: "10px",
//     },
//   });

//   const [activeSection, setActiveSection] = useState(null);

//   const handleBackgroundColorChange = (sectionId, color) => {
//     setStyles((prevStyles) => ({
//       ...prevStyles,
//       [sectionId]: { ...prevStyles[sectionId], backgroundColor: color },
//     }));
//   };

//   const handleTextColorChange = (sectionId, color) => {
//     setStyles((prevStyles) => ({
//       ...prevStyles,
//       [sectionId]: { ...prevStyles[sectionId], color: color },
//     }));
//   };

//   const renderSection = (id, children) => (
//     <section
//       id={id}
//       className="py-5"
//       style={styles[id]}
//       onClick={() => setActiveSection(id)}
//     >
//       <Container>{children}</Container>
//     </section>
//   );

//   return (
//     <div className="template-container">
//       <CustomNavbar logo={logo} links={links} buttonText="Get Started" />
//       <Container fluid className="mt-5">
//         <Row>
//           <Col md={10}>
//             {renderSection(
//               "home",
//               <>
//                 <EditableBlock initialContent="Click to edit heading" />
//                 <EditableBlock initialContent="Click to edit subheading" />
//                 <EditableBlock
//                   initialContent="Click to edit button text"
//                   isButton
//                 />
//               </>
//             )}

//             {renderSection(
//               "about",
//               <>
//                 <h2>
//                   <EditableBlock initialContent="Click to edit heading" />
//                 </h2>
//                 <EditableBlock initialContent="Click to edit text" />
//               </>
//             )}

//             {renderSection(
//               "who",
//               <>
//                 <h2>
//                   <EditableBlock initialContent="Click to edit heading" />
//                 </h2>
//                 <EditableBlock initialContent="Click to edit text" />
//               </>
//             )}

//             {renderSection(
//               "contact",
//               <>
//                 <h2>
//                   <EditableBlock initialContent="Click to edit heading" />
//                 </h2>
//                 <p>
//                   <EditableBlock initialContent="Click to edit address" />
//                 </p>
//                 <p>
//                   <EditableBlock initialContent="Click to edit phone" />
//                 </p>
//                 <p>
//                   <EditableBlock initialContent="Click to edit email" />
//                 </p>
//               </>
//             )}

//             {renderSection(
//               "faq",
//               <>
//                 <h2>Frequently Asked Questions</h2>
//                 <div>
//                   <h5>
//                     <EditableBlock initialContent="Click to edit question" />
//                   </h5>
//                   <EditableBlock initialContent="Click to edit answer" />
//                 </div>
//                 <div>
//                   <h5>
//                     <EditableBlock initialContent="Click to edit question" />
//                   </h5>
//                   <EditableBlock initialContent="Click to edit answer" />
//                 </div>
//               </>
//             )}
//           </Col>
//           <Col md={2}>
//             {activeSection && (
//               <SideEditor
//                 sectionId={activeSection}
//                 onBackgroundColorChange={handleBackgroundColorChange}
//                 onTextColorChange={handleTextColorChange}
//               />
//             )}
//           </Col>
//         </Row>
//       </Container>
//       <Footer companyInfo={footerInfo} socialLinks={socialLinks} />
//     </div>
//   );
// };

// export default NewTemplate;

import React, { useState } from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import EditableBlock from "./EditableBlock";
import SideEditor from "./SideEditor";
import { Container, Row, Col } from "react-bootstrap";
import "./Template1.css";

const NewTemplate = () => {
  const logo = "https://via.placeholder.com/50";
  const links = [
    { text: "Home", href: "#home" },
    { text: "About Us", href: "#about" },
    { text: "Who We Are", href: "#who" },
    { text: "Contact Us", href: "#contact" },
    { text: "FAQ", href: "#faq" },
  ];
  const footerInfo = "© 2024 Company Name. All rights reserved.";
  const socialLinks = [
    { name: "Facebook", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "Twitter", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "LinkedIn", icon: "https://via.placeholder.com/20", href: "#" },
  ];

  const [styles, setStyles] = useState({
    home: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    about: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    who: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    contact: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
    faq: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontFamily: "Arial, sans-serif",
      fontStyle: "normal",
      border: "1px solid #000",
      padding: "10px",
    },
  });

  const [activeSection, setActiveSection] = useState(null);

  const handleBackgroundColorChange = (sectionId, color) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [sectionId]: { ...prevStyles[sectionId], backgroundColor: color },
    }));
  };

  const handleTextColorChange = (sectionId, color) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [sectionId]: { ...prevStyles[sectionId], color: color },
    }));
  };

  const handleFontChange = (sectionId, fontFamily, fontStyle) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [sectionId]: {
        ...prevStyles[sectionId],
        fontFamily: fontFamily,
        fontStyle: fontStyle,
      },
    }));
  };

  const renderSection = (id, children) => (
    <section
      id={id}
      className="py-5"
      style={styles[id]}
      onClick={() => setActiveSection(id)}
    >
      <Container>{children}</Container>
    </section>
  );

  return (
    <div className="template-container">
      <CustomNavbar logo={logo} links={links} buttonText="Get Started" />
      <Container fluid className="mt-5">
        <Row>
          <Col md={10}>
            {renderSection(
              "home",
              <>
                <EditableBlock initialContent="Click to edit heading" />
                <EditableBlock initialContent="Click to edit subheading" />
                <EditableBlock
                  initialContent="Click to edit button text"
                  isButton
                />
              </>
            )}

            {renderSection(
              "about",
              <>
                <h2>
                  <EditableBlock initialContent="Click to edit heading" />
                </h2>
                <EditableBlock initialContent="Click to edit text" />
              </>
            )}

            {renderSection(
              "who",
              <>
                <h2>
                  <EditableBlock initialContent="Click to edit heading" />
                </h2>
                <EditableBlock initialContent="Click to edit text" />
              </>
            )}

            {renderSection(
              "contact",
              <>
                <h2>
                  <EditableBlock initialContent="Click to edit heading" />
                </h2>
                <p>
                  Address:{" "}
                  <EditableBlock initialContent="Click to edit address" />
                </p>
                <p>
                  Phone: <EditableBlock initialContent="Click to edit phone" />
                </p>
                <p>
                  Email: <EditableBlock initialContent="Click to edit email" />
                </p>
              </>
            )}

            {renderSection(
              "faq",
              <>
                <EditableBlock initialContent="FAQ" />
                <div>
                  <h5>
                    <EditableBlock initialContent="Click to edit question" />
                  </h5>
                  <EditableBlock initialContent="Click to edit answer" />
                </div>
                <div>
                  <h5>
                    <EditableBlock initialContent="Click to edit question" />
                  </h5>
                  <EditableBlock initialContent="Click to edit answer" />
                </div>
              </>
            )}
          </Col>
          <Col md={2}>
            {activeSection && (
              <SideEditor
                sectionId={activeSection}
                onBackgroundColorChange={handleBackgroundColorChange}
                onTextColorChange={handleTextColorChange}
                onFontChange={handleFontChange}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Footer companyInfo={footerInfo} socialLinks={socialLinks} />
    </div>
  );
};

export default NewTemplate;
