import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SignIn from "./SignIn";
import Register from "./Register";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";

const AgentPageAuthForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "signIn";

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="overflow-hidden bg-white">
      <NavbarComponent />
      <Container className="mt-5 py-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Nav variant="tabs" activeKey={activeTab}>
              <Nav.Item>
                <Nav.Link
                  eventKey="signIn"
                  onClick={() => setActiveTab("signIn")}
                >
                  Sign In
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="register"
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Render the appropriate form based on the active tab */}
            {activeTab === "signIn" && <SignIn />}
            {activeTab === "register" && <Register />}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AgentPageAuthForm;
