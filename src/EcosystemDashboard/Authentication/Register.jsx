import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";

const RegisterEcosystem = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState(null);
  let { ecosystemDomain } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    username: "",
    password: "",
    confirmPassword: "",
    ecosystemDomain: ecosystemDomain,
  });

  const [loading, setLoading] = useState(true);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/ecosytemForm-forms/${ecosystemDomain}`
        );
        setDetails(response.data.formDetails);
      } catch (error) {
        console.log("not working", error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [ecosystemDomain]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "https://dimpified-backend-development.azurewebsites.net/api/v1/ecosystem-user/register",
        formData
      );
      showToast(response.data.message);
      console.log("Registration successful:", response.data);
      // Reset form data to initial values
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        username: "",
        password: "",
        confirmPassword: "",
        ecosystemDomain: ecosystemDomain,
      });
    } catch (error) {
      showToast(error.response.data.message);
      console.error("Registration failed:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!details) {
    return <div>No data found</div>;
  }

  const sanitizeContent = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [],
      allowedAttributes: {},
    });
  };

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col md={7} lg={7} className="d-none d-lg-flex p-0">
          <Card className="w-100">
            <Card.Body
              className="d-flex justify-content-center align-items-center p-0"
              style={{ height: "500px" }}
            >
              <img
                src={details.sidebar.image}
                alt="Illustration"
                style={{
                  maxWidth: "100%",
                  maxHeight: "70%",
                  objectFit: "contain",
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={5}
          lg={5}
          className="d-flex justify-content-center align-items-center p-sm-5 px-4"
        >
          {step === 1 && (
            <FormStep1
              nextStep={nextStep}
              content={details}
              sanitizeContent={sanitizeContent}
              handleInputChange={handleInputChange}
              formData={formData}
            />
          )}
          {step === 2 && (
            <FormStep2
              nextStep={nextStep}
              prevStep={prevStep}
              content={details}
              sanitizeContent={sanitizeContent}
              handleInputChange={handleInputChange}
              formData={formData}
            />
          )}
          {step === 3 && (
            <FormStep3
              prevStep={prevStep}
              content={details}
              sanitizeContent={sanitizeContent}
              handleInputChange={handleInputChange}
              formData={formData}
              handleSubmit={handleSubmit}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

const FormStep1 = ({
  nextStep,
  content,
  sanitizeContent,
  formData,
  handleInputChange,
}) => (
  <div
    className=""
    style={{
      backgroundColor: content.Page1.styles.backgroundColor,
      color: content.Page1.styles.color,
      fontFamily: content.Page1.styles.fontFamily,
    }}
  >
    <img src={content.logo.image} height={80} />
    <h3 className="mb-1">{sanitizeContent(content.Page1.heading)}👋</h3>
    <p class="mb-4">{sanitizeContent(content.Page1.sub)}</p>

    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page1.topic1)}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page1.topic2)}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>{sanitizeContent(content.Page1.topic3)}</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          className="px-5"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formPhone">
        <Form.Label>{sanitizeContent(content.Page1.topic4)}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" className="d-grid w-100" onClick={nextStep}>
        {sanitizeContent(content.Page1.buttonText1)}
      </Button>
    </Form>
    <p className="text-center mt-4">
      <span>Already have an account?</span>
      <a href="#">
        <span>Sign in instead</span>
      </a>
    </p>
  </div>
);

const FormStep2 = ({
  nextStep,
  prevStep,
  content,
  sanitizeContent,
  formData,
  handleInputChange,
}) => (
  <div
    style={{
      backgroundColor: content.Page2.styles.backgroundColor,
      color: content.Page2.styles.color,
      fontFamily: content.Page2.styles.fontFamily,
    }}
  >
    <img src={content.logo.image} height={80} />
    <h3 className="mb-1">{sanitizeContent(content.Page2.heading)} 👋</h3>
    <p class="mb-4">{sanitizeContent(content.Page2.sub)} </p>

    <Form>
      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label>{sanitizeContent(content.Page2.topic1)}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page2.topic2)}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your zip code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page2.topic3)}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formCountry">
        <Form.Label>{sanitizeContent(content.Page2.topic4)}</Form.Label>
        <Form.Control
          as="select"
          className="select-country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="">Select your country</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
          <option value="AI">Anguilla</option>
          <option value="AQ">Antarctica</option>
          <option value="AG">Antigua and Barbuda</option>
          <option value="AR">Argentina</option>
          <option value="AM">Armenia</option>
          <option value="AW">Aruba</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaijan</option>
          <option value="BS">Bahamas</option>
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia</option>
          <option value="BA">Bosnia and Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BR">Brazil</option>
          <option value="BN">Brunei</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="CV">Cabo Verde</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CG">Congo</option>
          <option value="CD">Congo, Democratic Republic of the</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="CI">Côte d'Ivoire</option>
          <option value="HR">Croatia</option>
          <option value="CU">Cuba</option>
          <option value="CW">Curaçao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czechia</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="SZ">Eswatini</option>
          <option value="ET">Ethiopia</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GR">Greece</option>
          <option value="GD">Grenada</option>
          <option value="GU">Guam</option>
          <option value="GT">Guatemala</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Laos</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MO">Macau</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MH">Marshall Islands</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="MX">Mexico</option>
          <option value="FM">Micronesia</option>
          <option value="MD">Moldova</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="KP">North Korea</option>
          <option value="MK">North Macedonia</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PW">Palau</option>
          <option value="PS">Palestine</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="PR">Puerto Rico</option>
          <option value="QA">Qatar</option>
          <option value="RO">Romania</option>
          <option value="RU">Russia</option>
          <option value="RW">Rwanda</option>
          <option value="KN">Saint Kitts and Nevis</option>
          <option value="LC">Saint Lucia</option>
          <option value="VC">Saint Vincent and the Grenadines</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="ST">Sao Tome and Principe</option>
          <option value="SA">Saudi Arabia</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="KR">South Korea</option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="SY">Syria</option>
          <option value="TW">Taiwan</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TK">Tokelau</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad and Tobago</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TV">Tuvalu</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VA">Vatican City</option>
          <option value="VE">Venezuela</option>
          <option value="VN">Vietnam</option>
          <option value="YE">Yemen</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
        </Form.Control>
      </Form.Group>

      <Button className="mx-2 w-40" variant="secondary" onClick={prevStep}>
        {sanitizeContent(content.Page2.buttonText1)}
      </Button>
      <Button variant="primary" className="w-50" onClick={nextStep}>
        {sanitizeContent(content.Page2.buttonText2)}
      </Button>
    </Form>
  </div>
);

const FormStep3 = ({
  prevStep,
  content,
  sanitizeContent,
  formData,
  handleInputChange,
  handleSubmit,
}) => (
  <div
  style={{
    backgroundColor: content.Page3.styles.backgroundColor,
    color: content.Page3.styles.color,
    fontFamily: content.Page3.styles.fontFamily,
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    boxSizing: "border-box",
  }}
  >
    <img src={content.logo.image} height={80} />
    <h3 className="mb-1">{sanitizeContent(content.Page3.heading)} 👋</h3>
    <p class="mb-4">{sanitizeContent(content.Page3.sub)} </p>

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>{sanitizeContent(content.Page3.topic1)}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>{sanitizeContent(content.Page3.topic2)}</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>{sanitizeContent(content.Page3.topic3)}</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </Form.Group>
<Button className="me-3 w-40" variant="secondary" onClick={prevStep}>
        {sanitizeContent(content.Page3.buttonText1)}
      </Button>
      <Button variant="primary" className="w-40" onClick={handleSubmit}>
        {sanitizeContent(content.Page3.buttonText2)}
      </Button>
    </Form>
  </div>
);

export default RegisterEcosystem;
