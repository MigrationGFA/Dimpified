import React, { useState, useEffect } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SupportModal = ({ openModal, setOpenModal, supportID, userMessage, onClose, type, fetchData }) => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (supportID) {
      setFormData((prevData) => ({ ...prevData, id: supportID }));
    }
  }, [supportID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let apiUrl;
      if (type === "support") {
        apiUrl = "https://unleashified-backend.azurewebsites.net/api/v1/send-contact-us-feedback";
      } else if (type === "resolution") {
        apiUrl = "https://unleashified-backend.azurewebsites.net/api/v1/send-conflict-resolution-feedback";
      }

      const response = await axios.post(apiUrl, {
        ...formData,
        id: supportID,
      });

      toast.success(response.data.message);
      fetchData(); // Fetch updated data after successful submission
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Offcanvas
      show={openModal}
      onHide={onClose}
      placement="end"
      style={{ width: "550px" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Response Message</Offcanvas.Title>
      </Offcanvas.Header>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "90%",
        }}
      >
        <Offcanvas.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Form.Group className="mb-3">
            <Form.Label>User Message</Form.Label>
            <Form.Control
              as="textarea"
              name="userMessage"
              id="userMessage"
              rows={3}
              value={userMessage}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a message..."
            />
          </Form.Group>
        </Offcanvas.Body>
        <div className="d-flex justify-content-end p-3 border-top">
          <Button variant="secondary" onClick={onClose} className="me-2">
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Offcanvas>
  );
};

export default SupportModal;
