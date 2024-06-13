// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateContent, updateStyles } from "../features/Template/Template1";
// import { setActiveSection } from "../features/Template/activeTemplateSection";
// import CustomNavbar from "./CustomNavbar";
// import Footer from "./Footer";
// import EditableBlock from "./EditableBlock";
// import SideEditor from "./SideEditor";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./Template1.css";

// const Template1 = () => {
//   const dispatch = useDispatch();
//   const content = useSelector((state) => state.template1);

//   return (
//     <div className="template-container">
//       <Container fluid className="mt-5">
//         <Row>
//           <Col md={9}>
//             <div>
//               <p>{content.landingPage.heading}</p>
//               <p>{content.landingPage.subheading}</p>
//             <Button variant="primary">{content.landingPage.buttonText}</Button>
//             </div>
//             {renderSection(
//               "aboutUs",
//               <>
//                 <h2>
//                   <EditableBlock
//                     initialContent={content.aboutUs.heading}
//                     onContentChange={(value) =>
//                       handleContentChange("aboutUs", "heading", value)
//                     }
//                   />
//                 </h2>
//                 <EditableBlock
//                   initialContent={content.aboutUs.text}
//                   onContentChange={(value) =>
//                     handleContentChange("aboutUs", "text", value)
//                   }
//                 />
//               </>
//             )}
//             {renderSection(
//               "whoWeAre",
//               <>
//                 <h2>
//                   <EditableBlock
//                     initialContent={content.whoWeAre.heading}
//                     onContentChange={(value) =>
//                       handleContentChange("whoWeAre", "heading", value)
//                     }
//                   />
//                 </h2>
//                 <EditableBlock
//                   initialContent={content.whoWeAre.text}
//                   onContentChange={(value) =>
//                     handleContentChange("whoWeAre", "text", value)
//                   }
//                 />
//               </>
//             )}
//             {renderSection(
//               "contactUs",
//               <>
//                 <h2>
//                   <EditableBlock
//                     initialContent={content.contactUs.heading}
//                     onContentChange={(value) =>
//                       handleContentChange("contactUs", "heading", value)
//                     }
//                   />
//                 </h2>
//                 <p>
//                   Address:{" "}
//                   <EditableBlock
//                     initialContent={content.contactUs.address}
//                     onContentChange={(value) =>
//                       handleContentChange("contactUs", "address", value)
//                     }
//                   />
//                 </p>
//                 <p>
//                   Phone:{" "}
//                   <EditableBlock
//                     initialContent={content.contactUs.phone}
//                     onContentChange={(value) =>
//                       handleContentChange("contactUs", "phone", value)
//                     }
//                   />
//                 </p>
//                 <p>
//                   Email:{" "}
//                   <EditableBlock
//                     initialContent={content.contactUs.email}
//                     onContentChange={(value) =>
//                       handleContentChange("contactUs", "email", value)
//                     }
//                   />
//                 </p>
//               </>
//             )}
//             {renderSection(
//               "faq",
//               <>
//                 <h2>
//                   <EditableBlock initialContent={"FAQ"} />
//                 </h2>
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
//               </>
//             )}
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
//       <Footer companyInfo={footerInfo} socialLinks={socialLinks} />
//     </div>
//   );
// };

// export default Template1;
