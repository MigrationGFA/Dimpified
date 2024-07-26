import React, { useState, useEffect } from "react";
import { Col, Row, Card, ListGroup, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const TopEcosystem = ({ title }) => {
  const [ecosystems, setEcosystems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get creatorId from Redux store
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;

  useEffect(() => {
    fetchTopEcosystems();
  }, [creatorId]);

  const fetchTopEcosystems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-ecosystems/${creatorId}`
      );
      setEcosystems(response.data.ecosystemsWithLogos || []);
    } catch (error) {
      console.error("Error fetching top ecosystems:", error);
    } finally {
      setLoading(false);
    }
  };

  const itemStyle = {
    minHeight: '120px', 
    display: 'flex',
    alignItems: 'center',
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Card className="h-100">
      <Card.Header className="d-flex align-items-center justify-content-between card-header-height">
        <h4 className="mb-0">{title}</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {ecosystems.map((ecosystem, index) => (
            <ListGroup.Item
              className={`px-0 ${index === 0 ? "pt-0" : ""}`}
              key={ecosystem._id}
              style={itemStyle}
            >
              <Row>
                <Col xs="auto">
                  <Image
                    src={ecosystem.logo}
                    alt={ecosystem.ecosystemName}
                    className="img-fluid rounded img-4by3-lg"
                    style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
                  />
                </Col>
                <Col className="ps-0">
                  <h5 className="text-primary-hover">{ecosystem.ecosystemName}</h5>
                  {/* <div className="d-flex align-items-center">
                    <span className="fs-6">{ecosystem.ecosystemDomain}</span>
                  </div> */}
                  <div className="d-flex align-items-center">
                    <span className="fs-6">{ecosystem.users} Users</span>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TopEcosystem;
