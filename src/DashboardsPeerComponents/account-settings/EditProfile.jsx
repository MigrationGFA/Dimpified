import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Form, Row, Col, Button, Image } from "react-bootstrap";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import { FormSelect } from "../../Components/elements/form-select/FormSelect";
import { FlatPickr } from "../../Components/elements/flat-pickr/FlatPickr";
import StudentProfileLayout from "../../UserDashboard/student/StudentProfileLayout";
import Avatar3 from "../../assets/images/avatar/person.png";
import { useSelector } from "react-redux";


const EditProfile = () => {
  const user = useSelector((state) => state.authentication.user.data);
  const userId = user.UserId;

  const pathInfo = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username: "",
    city: "",
    country: "",
    zipCode: "",
    address:"",
    imageUrl: null, 
    portfolio: null,
    description: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!userId) return; // Ensure userId is defined
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-profile/${userId}`
        );
        const userData = response.data.userDetails;
        setFormData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          phoneNumber: userData.phoneNumber || "",
          username: userData.username || "",
          city: userData.city || "",
          country: userData.country || "",
          address: userData.address || "",
          zipCode: userData.zipCode || "",
          imageUrl: userData.imageUrl || null, 
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
        showToast(error.response?.data?.message || "An error occurred.");
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
  
      const response = await axios.put(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/update-profile/${userId}`,
        formDataToSend
      );
      showToast(response.data.message);
  
      // Reset form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        username: "",
        city: "",
        country: "",
        address: "",
        zipCode: "",
        image: null,
        portfolio: null,
        description: null,
      });
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
    console.log("Selected file:", file); // Check if the file is correctly selected
    const image = file ? URL.createObjectURL(file) : null;
    console.log("Image URL:", image); // Check the URL of the created object
    setFormData({ ...formData, image });
  };

  const stateList = [
    { value: "Abia", label: "Abia" },
    { value: "Adamawa", label: "Adamawa" },
    { value: "Akwa Ibom", label: "Akwa Ibom" },
    { value: "Anambra", label: "Anambra" },
    { value: "Bauchi", label: "Bauchi" },
    { value: "Bayelsa", label: "Bayelsa" },
    { value: "Benue", label: "Benue" },
    { value: "Borno", label: "Borno" },
    { value: "Cross River", label: "Cross River" },
    { value: "Delta", label: "Delta" },
    { value: "Ebonyi", label: "Ebonyi" },
    { value: "Edo", label: "Edo" },
    { value: "Ekiti", label: "Ekiti" },
    { value: "Enugu", label: "Enugu" },
    { value: "Gombe", label: "Gombe" },
    { value: "Imo", label: "Imo" },
    { value: "Jigawa", label: "Jigawa" },
    { value: "Kaduna", label: "Kaduna" },
    { value: "Kano", label: "Kano" },
    { value: "Katsina", label: "Katsina" },
    { value: "Kebbi", label: "Kebbi" },
    { value: "Kogi", label: "Kogi" },
    { value: "Kwara", label: "Kwara" },
    { value: "Lagos", label: "Lagos" },
    { value: "Nasarawa", label: "Nasarawa" },
    { value: "Niger", label: "Niger" },
    { value: "Ogun", label: "Ogun" },
    { value: "Ondo", label: "Ondo" },
    { value: "Osun", label: "Osun" },
    { value: "Oyo", label: "Oyo" },
    { value: "Plateau", label: "Plateau" },
    { value: "Rivers", label: "Rivers" },
    { value: "Sokoto", label: "Sokoto" },
    { value: "Taraba", label: "Taraba" },
    { value: "Yobe", label: "Yobe" },
    { value: "Zamfara", label: "Zamfara" },
  ];

  const countryList = [
    { value: "Togo", label: "Togo" },
    { value: "Nigeria", label: "Nigeria" },
   
  ];

  return (
    <StudentProfileLayout>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Profile Details</h3>
            <p className="mb-0">
              You have full control to manage your own account setting.
            </p>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="d-lg-flex align-items-center justify-content-between">
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="d-flex align-items-center mb-4 mb-lg-0">
                <Image
                  src={formData.imageUrl || Avatar3}
                  id="img-uploaded"
                  className="avatar-xl rounded-circle"
                  alt="User Avatar"
                />
                <div className="ms-3">
                  <h4 className="mb-0">Your avatar</h4>
                  <p className="mb-0">
                    PNG or JPG, no bigger than 800px wide and tall.
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div>
                <Button variant="outline-secondary" size="sm">
                  Update
                </Button>{" "}
                <Button variant="outline-danger" size="sm">
                  Delete
                </Button>
              </div>
            </Form>
          </div>
          <hr className="my-5" />
          <div>
            <h4 className="mb-0">Personal Details</h4>
            <p className="mb-4">Edit your personal information and address.</p>
            <Form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
              <Row>
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>Profile 1</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Profile 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Profile 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      placeholder="Phone"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formBirthday">
                    <Form.Label>Profile 4</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Username"
                      required
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
               
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>Profile 5</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      required
                      placeholder="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                   
                  </Form.Group>
                </Col>
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formZipCode">
                    <Form.Label>Profile 6</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label>Profile 7</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Profile 8</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={12}>
                  {loading ? (
                    <Button
                      variant="primary"
                      type="submit"
                      className="opacity-50"
                      disabled
                    >
                      Processing
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit">
                      Update Profile
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </StudentProfileLayout>
  );
};

export default EditProfile;

