import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  Image,
  Container,
} from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import AxiosInterceptor from "../../Components/AxiosInterceptor";
import { showToast } from "../../Components/Showtoast";
import AvatarPlaceholder from "../../assets/images/avatar/person.png";
import Select from "react-select";

// Template sections for interestedCategory dropdown
const templateSections = [
  { id: 0, name: "Select Category" },
  { id: 1, name: "Professional Service" },
  { id: 2, name: "Creative Service" },
  { id: 3, name: "Trade Service" },
  { id: 4, name: "Personal Care Service" },
  { id: 5, name: "Educational Service" },
  { id: 6, name: "Event Service" },
  { id: 7, name: "Technology Service" },
  { id: 8, name: "Government" },
  { id: 9, name: "Corporation" },
  { id: 10, name: "Foundation/NGO's" },
  { id: 11, name: "Religious Bodies" },
];

const ProfilePage = () => {
  const authFetch = AxiosInterceptor();
  const affiliateId = useSelector(
    (state) => state.authentication.user?.data?.AffiliateId
  );

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    state: "",
    country: "",
    image: null,
    affiliateId,
    interestedCategory: "",
    localGovernment: "",
    domain: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await authFetch.get(
          `${import.meta.env.VITE_API_URL}/get-affiliate-profile/${affiliateId}`
        );
        const userData = response.data.affiliateProfile;
        setFormData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          phoneNumber: userData.phoneNumber || "",
          state: userData.state || "",
          country: userData.country || "",
          image: userData.image || AvatarPlaceholder,
          localGovernment: userData.localGovernment || "",
          domain: userData.domain || "",
          interestedCategory: userData.interestedCategory || "",
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
        showToast(error.response?.data?.message || "An error occurred.");
      }
    };
    if (affiliateId) fetchUserData();
  }, [affiliateId]);

  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    state: "",
    country: "",
    image: null,
    interestedCategory: "",
    localGovernment: "",
    domain: "",
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await authFetch.post(
        `${import.meta.env.VITE_API_URL}/affiliate/profile`,
        formDataToSend
      );

      showToast(response.data.message);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error updating profile:", error);
      showToast(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const image = file ? URL.createObjectURL(file) : null;
    setFormData({ ...formData, image });
  };

  // Handle interestedCategory change from Select dropdown
  const handleCategoryChange = (selectedOption) => {
    setFormData({ ...formData, interestedCategory: selectedOption.value });
  };

  // Handle country and state changes
  const handleCountryChange = (country) => {
    setFormData({ ...formData, country });
  };

  const handleStateChange = (state) => {
    setFormData({ ...formData, state });
  };

  return (
    <div className="bg-white overflow-hidden">
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
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
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
                      onChange={handleStateChange}
                      classes="form-control"
                    />
                  </Form.Group>
                </Col>

                {/* Interested Category Select */}
                <Col md={6}>
                  <Form.Group controlId="formInterestedCategory">
                    <Form.Label>Interested Category</Form.Label>
                    <Select
                      options={templateSections.map((section) => ({
                        value: section.name,
                        label: section.name,
                      }))}
                      onChange={handleCategoryChange}
                      placeholder="Select Category"
                      value={
                        formData.interestedCategory
                          ? {
                              value: formData.interestedCategory,
                              label: formData.interestedCategory,
                            }
                          : { value: "", label: "Select Category" }
                      }
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formLocalGovernment">
                    <Form.Label>Local Government</Form.Label>
                    <Form.Control
                      type="text"
                      name="localGovernment"
                      value={formData.localGovernment}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="formDomain">
                    <Form.Label>Domain</Form.Label>
                    <Form.Control
                      type="text"
                      name="domain"
                      value={formData.domain}
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
    </div>
  );
};

export default ProfilePage;
