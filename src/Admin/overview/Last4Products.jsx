import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, ListGroup, Dropdown, Image } from "react-bootstrap";
import axios from "axios";
import person from "../../assets/avatar/person.png"


const Last4Products = ({ title }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchRecentcategory();
  }, []);

  const fetchRecentcategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin-last-four-products`
      );
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching recent category:", error);
    }
  };

  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn-icon btn btn-ghost btn-sm rounded-circle"
    >
      {children}
    </Link>
  ));

  const ActionMenu = () => {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            <i className="fe fe-more-vertical text-muted"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Header>SETTINGS</Dropdown.Header>
            <Dropdown.Item eventKey="1">
              <i className="fe fe-edit dropdown-item-icon"></i> Edit
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <i className="fe fe-trash dropdown-item-icon"></i> Remove
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  return (
    <Card className="h-100">
      <Card.Header className="d-flex align-items-center justify-content-between card-header-height">
        <h4 className="mb-0">{title}</h4>
        {/* <Link to="#" className="btn btn-outline-secondary btn-sm">
                    View all
                </Link> */}
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {category.map((category, index) => (
            <ListGroup.Item
              className={`px-0 ${index === 0 ? "pt-0" : ""}`}
              key={category._id}
            >
              <Row>
                <Col xs="auto">
                  <Link to="#">
                    <Image
                      src={category.image == null ? person : category.image}
                      alt=""
                      className="img-fluid rounded img-4by3-lg"
                      style={{ width: "75px", height: "65px" }}
                    />
                  </Link>
                </Col>
                <Col className="ps-0">
                  <Link to="#">
                    <h5 className="text-primary-hover">
                      {category.title}
                    </h5>
                  </Link>
                  <div className="d-flex align-items-center">
                    <span className="fs-6">
                      {category.ecosystemDomain}
                    </span>
                  </div>
                </Col>
                <Col xs="auto">{/* <ActionMenu /> */}</Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Last4Products;
