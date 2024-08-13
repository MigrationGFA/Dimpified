import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Row, Col, Nav, Button } from "react-bootstrap";
import { resetState } from "../../../../features/ecosystem";
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
    { path: "/creator/dashboard/New-Ecosystem/individual", label: "1. About Ecosystem" },
    { path: "/creator/dashboard/Products/individual", label: "2. Products" },
    { path: "/creator/dashboard/Edit-Template/individual", label: "3. Select Template" },
   
   
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
                <div
                  className={`p-2 rounded-2 ${
                    location.pathname === item.path
                      ? "bg-white text-primary"
                      : "text-white"
                  }`}
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                    userSelect: "none"
                  }}
                >
                  {item.label}
                </div>
              </Nav.Item>
            </React.Fragment>
          ))}
        </Nav>
      </Col>
      <Col xs="auto" onClick={handleCancel}>
        <Button variant="outline-light">Cancel</Button>
      </Col>
    </Row>
  );
};

export default ecoHeader;
