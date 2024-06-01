// SideEditor.js
import React from "react";
import { Form } from "react-bootstrap";

const SideEditor = ({
  sectionId,
  onBackgroundColorChange,
  onTextColorChange,
}) => {
  const handleBackgroundColorChange = (e) => {
    onBackgroundColorChange(sectionId, e.target.value);
  };

  const handleTextColorChange = (e) => {
    onTextColorChange(sectionId, e.target.value);
  };

  return (
    <div className="side-editor">
      <h5>Style Editor</h5>
      <Form.Group controlId="backgroundColor">
        <Form.Label>Background Color</Form.Label>
        <Form.Control type="color" onChange={handleBackgroundColorChange} />
      </Form.Group>
      <Form.Group controlId="textColor">
        <Form.Label>Text Color</Form.Label>
        <Form.Control type="color" onChange={handleTextColorChange} />
      </Form.Group>
    </div>
  );
};

export default SideEditor;
