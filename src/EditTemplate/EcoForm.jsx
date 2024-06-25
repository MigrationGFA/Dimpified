import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

const EcoForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
                src="https://gfa-tech.com/gfa-os/public/assets/img/illustrations/auth-login-illustration-light.png"
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
          {step === 1 && <FormStep1 nextStep={nextStep} />}
          {step === 2 && <FormStep2 nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <FormStep3 prevStep={prevStep} />}
        </Col>
      </Row>
    </Container>
  );
};

const FormStep1 = ({ nextStep }) => (
  <div className="">
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
      height={80}
    />
    <h3 className="mb-1">Your Journey begins here! 👋</h3>
    <p class="mb-4">Kindly fill up the fields to join our ecosystem.</p>

    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          className="px-5"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" />
      </Form.Group>
      <Button variant="primary" className="d-grid w-100" onClick={nextStep}>
        Next
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

const FormStep2 = ({ nextStep, prevStep }) => (
  <div>
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
      height={80}
    />
    <h3 className="mb-1">You're gettimg there! 👋</h3>
    <p class="mb-4">Kindly fill up the fields to join our ecosystem.</p>

    <Form>
      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter your zip code" />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter your city" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control as="select">
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
        Back
      </Button>
      <Button variant="primary" className="w-50" onClick={nextStep}>
        Next
      </Button>
    </Form>
  </div>
);

const FormStep3 = ({ prevStep }) => (
  <div>
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
      height={80}
    />
    <h3 className="mb-1">FInal step! 👋</h3>
    <p class="mb-4">Kindly fill up the fields to join our ecosystem.</p>

    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Choose a username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm your password" />
      </Form.Group>
      <Button className="me-3 w-40" variant="secondary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="primary" className="w-40">
        Submit
      </Button>
    </Form>
  </div>
);

export default EcoForm;
