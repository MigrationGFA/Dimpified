import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Row, Col, Nav, Button } from "react-bootstrap";
import { resetState } from "../../../features/ecosystem";
import { useDispatch } from "react-redux";

const ecoHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancle = async () => {
    dispatch(resetState());
    navigate("/creator/dashboard/All-Ecosystem");
  };

  const navItems = [
    { path: "/creator/dashboard/New-Ecosystem", label: "1. About Ecosystem" },
    { path: "/creator/dashboard/Edit-Template", label: "2. Select Template" },
    { path: "/creator/dashboard/Create-Form", label: "3. Select Form" },
    { path: "/creator/dashboard/Products", label: "4. Products" },
    { path: "/creator/dashboard/Integrations", label: "5. Integration" },
    { path: "/creator/dashboard/Payment", label: "6. Payments" },
    { path: "/creator/dashboard/Preview-and-Send", label: "7. Preview and Publish" },
  ];

  return (
    <Row
      style={{ backgroundColor: "#00008B" }}
      className="text-white d-flex align-items-center p-2 overflow-hidden"
    >
      <Col>
        <Nav className="d-flex justify-content-center align-items-center">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <div className="mx-2 d-flex align-items-center">
                  <span>&gt;</span>
                </div>
              )}
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to={item.path}
                  className={`p-2 rounded-2 transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "bg-white text-blue-800"
                      : "text-white hover:bg-gray-100 hover:text-blue-800"
                  }`}
                >
                  {item.label}
                </Nav.Link>
              </Nav.Item>
            </React.Fragment>
          ))}
        </Nav>
      </Col>
      <Col xs="auto" onClick={handleCancle}>
        <Button variant="outline-light">Cancel</Button>
      </Col>
    </Row>
  );
};

export default ecoHeader;
