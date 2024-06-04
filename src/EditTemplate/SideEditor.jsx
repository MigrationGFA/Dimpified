// // SideEditor.js
// import React from "react";
// import { Form } from "react-bootstrap";

// const SideEditor = ({
//   sectionId,
//   onBackgroundColorChange,
//   onTextColorChange,
// }) => {
//   const handleBackgroundColorChange = (e) => {
//     onBackgroundColorChange(sectionId, e.target.value);
//   };

//   const handleTextColorChange = (e) => {
//     onTextColorChange(sectionId, e.target.value);
//   };

//   return (
//     <div
//       className=""
//       style={{
//         backgroundColor: "white",
//         width: "full",
//       }}
//     >
//       <h5>Style Editor</h5>
//       <Form.Group controlId="backgroundColor">
//         <Form.Label>Background Color</Form.Label>
//         <Form.Control type="color" onChange={handleBackgroundColorChange} />
//       </Form.Group>
//       <Form.Group controlId="textColor">
//         <Form.Label>Text Color</Form.Label>
//         <Form.Control type="color" onChange={handleTextColorChange} />
//       </Form.Group>
//     </div>
//   );
// };

// export default SideEditor;

// SideEditor.js
// SideEditor.js
// import React from "react";
// import { Form } from "react-bootstrap";

// const fonts = [
//   { label: "Arial", value: "Arial, sans-serif" },
//   { label: "Georgia", value: "Georgia, serif" },
//   { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
//   { label: "Courier New", value: "'Courier New', Courier, monospace" },
//   { label: "Arial Italic", value: "Arial, sans-serif", fontStyle: "italic" },
//   { label: "Georgia Italic", value: "Georgia, serif", fontStyle: "italic" },
//   {
//     label: "Times New Roman Italic",
//     value: "'Times New Roman', Times, serif",
//     fontStyle: "italic",
//   },
// ];

// const SideEditor = ({
//   sectionId,
//   onBackgroundColorChange,
//   onTextColorChange,
//   onFontChange,
// }) => {
//   const handleBackgroundColorChange = (e) => {
//     onBackgroundColorChange(sectionId, e.target.value);
//   };

//   const handleTextColorChange = (e) => {
//     onTextColorChange(sectionId, e.target.value);
//   };

//   const handleFontChange = (e) => {
//     const selectedFont = fonts.find(
//       (font) =>
//         font.value === e.target.value &&
//         font.fontStyle === e.target.dataset.fontstyle
//     );
//     onFontChange(
//       sectionId,
//       selectedFont.value,
//       selectedFont.fontStyle || "normal"
//     );
//   };

//   return (
//     <div
//       className="side-editor"
//       style={{
//         backgroundColor: "white",
//         width: "20%",
//         padding: "20px",
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h5>Style Editor</h5>
//       <Form.Group controlId="backgroundColor">
//         <Form.Label>Background Color</Form.Label>
//         <Form.Control type="color" onChange={handleBackgroundColorChange} />
//       </Form.Group>
//       <Form.Group controlId="textColor">
//         <Form.Label>Text Color</Form.Label>
//         <Form.Control type="color" onChange={handleTextColorChange} />
//       </Form.Group>
//       <Form.Group controlId="font">
//         <Form.Label>Font</Form.Label>
//         <Form.Control as="select" onChange={handleFontChange}>
//           {fonts.map((font) => (
//             <option
//               key={font.value + font.fontStyle}
//               value={font.value}
//               data-fontstyle={font.fontStyle}
//             >
//               {font.label}
//             </option>
//           ))}
//         </Form.Control>
//       </Form.Group>
//     </div>
//   );
// };

// export default SideEditor;

import React from "react";
import { Form } from "react-bootstrap";

const fonts = [
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
  { label: "Courier New", value: "'Courier New', Courier, monospace" },
  { label: "Arial Italic", value: "Arial, sans-serif", fontStyle: "italic" },
  { label: "Georgia Italic", value: "Georgia, serif", fontStyle: "italic" },
  {
    label: "Times New Roman Italic",
    value: "'Times New Roman', Times, serif",
    fontStyle: "italic",
  },
];

const SideEditor = ({
  sectionId,
  onBackgroundColorChange,
  onTextColorChange,
  onFontChange,
}) => {
  const handleBackgroundColorChange = (e) => {
    onBackgroundColorChange(sectionId, e.target.value);
  };

  const handleTextColorChange = (e) => {
    onTextColorChange(sectionId, e.target.value);
  };

  const handleFontChange = (e) => {
    const selectedFont = fonts.find(
      (font) =>
        font.value === e.target.value &&
        font.fontStyle === e.target.dataset.fontstyle
    );
    onFontChange(
      sectionId,
      selectedFont.value,
      selectedFont.fontStyle || "normal"
    );
  };

  return (
    <div
      className="side-editor"
      style={{
        backgroundColor: "white",
        width: "20%",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h5>Style Editor</h5>
      <Form.Group controlId="backgroundColor">
        <Form.Label>Background Color</Form.Label>
        <Form.Control type="color" onChange={handleBackgroundColorChange} />
      </Form.Group>
      <Form.Group controlId="textColor">
        <Form.Label>Text Color</Form.Label>
        <Form.Control type="color" onChange={handleTextColorChange} />
      </Form.Group>
      <Form.Group controlId="font">
        <Form.Label>Font</Form.Label>
        <Form.Control as="select" onChange={handleFontChange}>
          {fonts.map((font) => (
            <option
              key={font.value + font.fontStyle}
              value={font.value}
              data-fontstyle={font.fontStyle}
            >
              {font.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SideEditor;
