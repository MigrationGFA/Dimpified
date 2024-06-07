import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContent, updateStyles } from "../features/Template/Template1";
import { setActiveSection } from "../features/Template/activeTemplateSection";
// import { updateContent, updateStyles } from "../features/Template/Template1";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import EditableBlock from "./EditableBlock";
import SideEditor from "./SideEditor";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Template1.css";

const Template1 = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.template1);
  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );

  const footerInfo = "© 2024 Company Name. All rights reserved.";
  const socialLinks = [
    { name: "Facebook", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "Twitter", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "LinkedIn", icon: "https://via.placeholder.com/20", href: "#" },
  ];

  const logo = "https://via.placeholder.com/50";
  const links = [
    { text: "Home", href: "#home" },
    { text: "About Us", href: "#about" },
    { text: "Who We Are", href: "#who" },
    { text: "Contact Us", href: "#contact" },
    { text: "FAQ", href: "#faq" },
  ];

  const handleContentChange = (section, field, value, index = null) => {
    dispatch(updateContent({ section, field, value, index }));
  };

  const handleBackgroundColorChange = (sectionId, color) => {
    dispatch(
      updateStyles({ section: sectionId, styles: { backgroundColor: color } })
    );
  };

  const handleTextColorChange = (sectionId, color) => {
    dispatch(updateStyles({ section: sectionId, styles: { color: color } }));
  };

  const handleFontChange = (sectionId, fontFamily) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { fontFamily },
      })
    );
  };

  const renderSection = (id, children) => {
    return (
      <section
        id={id}
        className="py-5"
        style={{
          ...content[id].styles,
          border: activeSection === id ? "2px dotted black" : "none",
        }}
        onClick={() => dispatch(setActiveSection(id))}
      >
        <Container>{children}</Container>
      </section>
    );
  };

  // const renderSection = (id, contentKey, children) => (
  //   <section
  //     id={id}
  //     className="py-5"
  //     style={{
  //       ...content[contentKey].styles,
  //       border: activeSection === contentKey ? "2px dotted black" : "none",
  //     }}
  //     onClick={() => dispatch(setActiveSection(contentKey))}
  //   >
  //     <Container>{children}</Container>
  //   </section>
  // );

  // const renderSection = (id, contentKey, children) => (
  //   <section
  //     id={id}
  //     className="py-5"
  //     style={{
  //       // ...styles[id],
  //       ...content[contentKey].styles,
  //       border: activeSection === id ? "2px dotted black" : "none",
  //     }}
  //     onClick={(e) => {
  //       e.stopPropagation(); // Prevent the click event from bubbling up
  //       setActiveSection(id);
  //     }}
  //   >
  //     <Container>{children}</Container>
  //   </section>
  // );

  return (
    <div className="template-container">
      <CustomNavbar logo={logo} links={links} buttonText="Get Started" />
      <Container fluid className="mt-5">
        <Row>
          <Col md={9}>
            {renderSection(
              "landingPage",
              <>
                <EditableBlock
                  initialContent={content.landingPage.heading}
                  onContentChange={(value) =>
                    handleContentChange("landingPage", "heading", value)
                  }
                />
                <EditableBlock
                  initialContent={content.landingPage.subheading}
                  onContentChange={(value) =>
                    handleContentChange("landingPage", "subheading", value)
                  }
                />
                <Button variant="primary">
                  {content.landingPage.buttonText}
                </Button>
              </>
            )}
            {renderSection(
              "aboutUs",
              <>
                <h2>
                  <EditableBlock
                    initialContent={content.aboutUs.heading}
                    onContentChange={(value) =>
                      handleContentChange("aboutUs", "heading", value)
                    }
                  />
                </h2>
                <EditableBlock
                  initialContent={content.aboutUs.text}
                  onContentChange={(value) =>
                    handleContentChange("aboutUs", "text", value)
                  }
                />
              </>
            )}
            {renderSection(
              "whoWeAre",
              <>
                <h2>
                  <EditableBlock
                    initialContent={content.whoWeAre.heading}
                    onContentChange={(value) =>
                      handleContentChange("whoWeAre", "heading", value)
                    }
                  />
                </h2>
                <EditableBlock
                  initialContent={content.whoWeAre.text}
                  onContentChange={(value) =>
                    handleContentChange("whoWeAre", "text", value)
                  }
                />
              </>
            )}
            {renderSection(
              "contactUs",
              <>
                <h2>
                  <EditableBlock
                    initialContent={content.contactUs.heading}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "heading", value)
                    }
                  />
                </h2>
                <p>
                  Address:{" "}
                  <EditableBlock
                    initialContent={content.contactUs.address}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "address", value)
                    }
                  />
                </p>
                <p>
                  Phone:{" "}
                  <EditableBlock
                    initialContent={content.contactUs.phone}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "phone", value)
                    }
                  />
                </p>
                <p>
                  Email:{" "}
                  <EditableBlock
                    initialContent={content.contactUs.email}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "email", value)
                    }
                  />
                </p>
              </>
            )}
            {renderSection(
              "faq",
              <>
                <h2>
                  <EditableBlock initialContent={"FAQ"} />
                </h2>
                {content.faq.map((item, index) => (
                  <div key={index}>
                    <h5>
                      <EditableBlock
                        initialContent={item.question}
                        onContentChange={(value) =>
                          handleContentChange("faq", "question", value, index)
                        }
                      />
                    </h5>
                    <EditableBlock
                      initialContent={item.answer}
                      onContentChange={(value) =>
                        handleContentChange("faq", "answer", value, index)
                      }
                    />
                  </div>
                ))}
              </>
            )}
          </Col>
          <Col md={3}>
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

export default Template1;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateContent, updateStyles } from "../features/Template/Template1";
// import CustomNavbar from "./CustomNavbar";
// import Footer from "./Footer";
// import EditableBlock from "./EditableBlock";
// import SideEditor from "./SideEditor";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./Template1.css";

// const Template1 = () => {
//   const dispatch = useDispatch();
//   const content = useSelector((state) => state.template1);

//   const [activeSection, setActiveSection] = useState(null);

//   const handleBackgroundColorChange = (sectionId, color) => {
//     dispatch(
//       updateStyles({ section: sectionId, styles: { backgroundColor: color } })
//     );
//   };

//   const handleTextColorChange = (sectionId, color) => {
//     dispatch(updateStyles({ section: sectionId, styles: { color: color } }));
//   };

//   const handleFontChange = (sectionId, fontFamily, fontStyle) => {
//     dispatch(
//       updateStyles({
//         section: sectionId,
//         styles: { fontFamily: fontFamily, fontStyle: fontStyle },
//       })
//     );
//   };

//   const handleContentChange = (section, field, value, index = null) => {
//     dispatch(updateContent({ section, field, value, index }));
//   };

//   const renderSection = (id, contentKey) => (
//     <section
//       id={id}
//       className="py-5"
//       style={content[contentKey].styles}
//       onClick={() => setActiveSection(contentKey)}
//     >
//       <Container>
//         <EditableBlock
//           initialContent={content[contentKey].heading}
//           onContentChange={(value) =>
//             handleContentChange(contentKey, "heading", value)
//           }
//         />
//         {content[contentKey].text && (
//           <EditableBlock
//             initialContent={content[contentKey].text}
//             onContentChange={(value) =>
//               handleContentChange(contentKey, "text", value)
//             }
//           />
//         )}
//         {content[contentKey].buttonText && (
//           <Button variant="primary">{content[contentKey].buttonText}</Button>
//         )}
//       </Container>
//     </section>
//   );

//   return (
//     <div className="template-container">
//       {/* <CustomNavbar
//         logo={content.logo}
//         links={content.links}
//         buttonText="Get Started"
//       /> */}
//       <Container fluid className="mt-5">
//         <Row>
//           <Col md={9}>
//             {renderSection("home", "landingPage")}
//             {renderSection("about", "aboutUs")}
//             {renderSection("who", "whoWeAre")}
//             {renderSection("contact", "contactUs")}
//             <section
//               id="faq"
//               className="py-5"
//               style={content.faq[0].styles}
//               onClick={() => setActiveSection("faq")}
//             >
//               <Container>
//                 <h2>FAQ</h2>
//                 {content.faq.map((item, index) => (
//                   <div key={index}>
//                     <h5>
//                       <EditableBlock
//                         initialContent={item.question}
//                         onContentChange={(value) =>
//                           handleContentChange("faq", "question", value, index)
//                         }
//                       />
//                     </h5>
//                     <EditableBlock
//                       initialContent={item.answer}
//                       onContentChange={(value) =>
//                         handleContentChange("faq", "answer", value, index)
//                       }
//                     />
//                   </div>
//                 ))}
//               </Container>
//             </section>
//           </Col>
//           <Col md={3}>
//             {activeSection && (
//               <SideEditor
//                 sectionId={activeSection}
//                 onBackgroundColorChange={handleBackgroundColorChange}
//                 onTextColorChange={handleTextColorChange}
//                 onFontChange={handleFontChange}
//               />
//             )}
//           </Col>
//         </Row>
//       </Container>
//       {/* <Footer
//         companyInfo={content.footerInfo}
//         socialLinks={content.socialLinks}
//       /> */}
//     </div>
//   );
// };

// export default Template1;

// const [styles, setStyles] = useState({
//   home: {
//     backgroundColor: "#ffffff",
//     color: "#000000",
//     font: "Arial, sans-serif",
//   },
//   about: {
//     backgroundColor: "#ffffff",
//     color: "#000000",
//     font: "Arial, sans-serif",
//   },
//   who: {
//     backgroundColor: "#ffffff",
//     color: "#000000",
//     font: "Arial, sans-serif",
//   },
//   contact: {
//     backgroundColor: "#ffffff",
//     color: "#000000",
//     font: "Arial, sans-serif",
//   },
//   faq: {
//     backgroundColor: "#ffffff",
//     color: "#000000",
//     font: "Arial, sans-serif",
//   },
// });

// const [activeSection, setActiveSection] = useState(null);

// const handleBackgroundColorChange = (sectionId, color) => {
//   setStyles((prevStyles) => ({
//     ...prevStyles,
//     [sectionId]: { ...prevStyles[sectionId], backgroundColor: color },
//   }));
// };

// const handleTextColorChange = (sectionId, color) => {
//   setStyles((prevStyles) => ({
//     ...prevStyles,
//     [sectionId]: { ...prevStyles[sectionId], color: color },
//   }));
// };

// const handleFontChange = (sectionId, fontFamily, fontStyle) => {
//   setStyles((prevStyles) => ({
//     ...prevStyles,
//     [sectionId]: {
//       ...prevStyles[sectionId],
//       fontFamily: fontFamily,
//       fontStyle: fontStyle,
//     },
//   }));
// };
