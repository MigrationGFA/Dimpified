import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { faqs } from "../utils/constant";

const DeveloperProgramSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", form);
  };

  return (
    <div className="overflow-hidden bg-white">
      <NavbarComponent />
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Developer Program Support</h1>
            <h2>FAQs</h2>
            <ul className="list-unstyled">
              {faqs.map((faq, index) => (
                <li key={index} className="mb-3">
                  <Button
                    variant="link"
                    className="p-0"
                    onClick={() => toggleFaq(index)}
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                  </Button>
                  {openFaq === index && (
                    <div id={`faq-answer-${index}`} className="mt-2">
                      {faq.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 py-4">
          <Col>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DeveloperProgramSupport;
