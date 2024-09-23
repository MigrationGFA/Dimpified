import React, { useState, useEffect } from "react";
import { Col, Row, Card, ListGroup, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import AxiosInterceptor from "../../Components/AxiosInterceptor";
import avatar from "../../assets/images/avatar/person.png";

const TopEcosystem = ({ title }) => {
  const authFetch = AxiosInterceptor();
  const [ecosystems, setEcosystems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get creatorId from Redux store
  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.id
  );

  useEffect(() => {
    fetchTopEcosystems();
  }, [creatorId]);

  const fetchTopEcosystems = async () => {
    try {
      setLoading(true);
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/affiliate-last-four-onboarded-users/${creatorId}`
      );
      setEcosystems(response.data.
        lastFourOnboardedUsers || []);
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
                    src={ecosystem.imageUrl == null? avatar: ecosystem.imageUrl}
                    alt={ecosystem.organizationName}
                    className="img-fluid rounded img-4by3-lg"
                    style={{ maxWidth: '60px', maxHeight: '60px', objectFit: 'cover' }}
                  />
                </Col>
                <Col className="ps-0">
                  <h5 className="text-primary-hover">{ecosystem.organizationName}</h5>
                  <div className="d-flex align-items-center">
                    <span className="fs-6">User Type: {ecosystem.role}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fs-6">{ecosystem.email}</span>
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
