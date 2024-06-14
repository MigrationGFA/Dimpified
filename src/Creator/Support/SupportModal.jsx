import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const SupportModal = ({
  openModal,
  setOpenModal,
  supportID,
  userMessage,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    support_id: supportID,
  });

  const [loading, setLoading] = useState(false);
  const authToken = sessionStorage.getItem("authToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ["support_id"]: supportID,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate success without actual API call
    toast.success("Message sent successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setOpenModal(false);
    setFormData({
      subject: "",
      message: "",
      support_id: "",
    });
    setLoading(false);
  };

  return (
    <Modal
  show={openModal}
  onHide={() => setOpenModal(false)}
  size="md"
  dialogClassName="modal-right"
  style={{
    position: "fixed",
    right: 0,
    top: 0,
    bottom: 0,
    height: "100vh",
    width: "2500px", // Adjust width as needed
    margin: 0,
    zIndex: 1050, // Ensure modal is above other content
  }}
  backdrop={false}
>
      <Modal.Header closeButton>
        <Modal.Title>Response Message</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <div className="form-group">
              <label>User Message</label>
              <textarea
                name="user"
                id="user"
                rows="5"
                defaultValue={userMessage}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <textarea
                type="text"
                name="subject"
                value={formData.subject}
                className="form-control"
                onChange={handleChange}
              />
              <input type="hidden" name="" id="" value={supportID} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                rows="7"
                value={formData.message}
                className="form-control"
                onChange={handleChange}
                placeholder="Leave a message..."
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onClose()}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default SupportModal;
