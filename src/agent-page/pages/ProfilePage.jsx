import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  Image,
  Container,
} from "react-bootstrap";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import { useGlobalContext } from "../../context/AuthContext";
import AvatarPlaceholder from "../../assets/images/avatar/person.png";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Select from "react-select";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const ProfilePage = () => {
  const { userId } = useGlobalContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    state: "",
    country: "",
    image: null,
    portfolio: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${userId}`);
        const userData = response.data.userDetails;
        setFormData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          contact: userData.contact || "",
          state: userData.state || "",
          country: userData.country || "",
          image: userData.image || AvatarPlaceholder,
          portfolio: userData.portfolio || "",
          description: userData.description || "",
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
        showToast(error.response?.data?.message || "An error occurred.");
      }
    };
    if (userId) fetchUserData();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        `/update-profile/${userId}`,
        formDataToSend
      );
      showToast(response.data.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      showToast(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const image = file ? URL.createObjectURL(file) : null;
    setFormData({ ...formData, image });
  };

  const handleCountryChange = (country) => {
    setFormData({ ...formData, country });
  };

  const handleStateChange = (state) => {
    setFormData({ ...formData, state });
  };

  return (
    <div className="bg-white overflow-hidden">
      <NavbarComponent />
      <Container className="py-10">
        <Card className="border">
          <Card.Header>
            <h3>Profile Details</h3>
            <p>Manage your account settings and personal information.</p>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="d-flex align-items-center mb-4">
                <Image
                  src={formData.image || AvatarPlaceholder}
                  className="avatar-xl rounded-circle"
                  alt="User Avatar"
                />
                <div className="ms-3">
                  <h4>Your avatar</h4>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formContact">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <CountryDropdown
                      value={formData.country}
                      onChange={(val) => handleCountryChange(val)}
                      classes="form-control"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formState">
                    <Form.Label>State</Form.Label>
                    <RegionDropdown
                      country={formData.country}
                      value={formData.state}
                      onChange={(val) => handleStateChange(val)}
                      classes="form-control"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPortfolio">
                    <Form.Label>Short Portfolio</Form.Label>
                    <Form.Control
                      type="text"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formDescription">
                    <Form.Label>Portfolio Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} className="mt-2"> 
                  <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? "Updating..." : "Update Profile"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default ProfilePage;
