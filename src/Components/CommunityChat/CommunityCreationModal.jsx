import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { showToast } from "../Showtoast";

const CompanyFormModal = ({ show, handleClose }) => {
  const {ecosystemDomain}= useParams();
  const userId = useSelector(
    (state) => state.authentication.user.data.CreatorId
  );

  const [formData, setFormData] = useState({
    creatorId: userId,
    ecosystemDomain,
    sectors: "",
    description: "",
    rules: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-community-header`,
        formData
      );
      showToast(response.data.message || "Community created successfully", "success");
    } catch (error) {
      showToast(error.response?.data?.message || "Failed to create community", "error");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Company Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSectors" className="mb-4">
              <Form.Label>Sectors</Form.Label>
              <Form.Control
                as="select"
                name="sectors"
                value={formData.sectors}
                onChange={handleChange}
              >
                <option>Select Section</option>
                <option>Professional Services</option>
                <option>Creative Services</option>
                <option>Trade Services</option>
                <option>Personal Care Services</option>
                <option>Educational Services</option>
                <option>Event Services</option>
                <option>Technology Services</option>
                <option>Government</option>
                <option>Corporations</option>
                <option>Foundation/NGO's</option>
                <option>Religious Bodies</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Form Descriptions"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ height: "120px" }}
              />
            </Form.Group>

            <Form.Group controlId="formRules" className="mb-4">
              <Form.Label>Rules and Regulations</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Rules"
                name="rules"
                value={formData.rules}
                onChange={handleChange}
                style={{ height: "100px" }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompanyFormModal;
