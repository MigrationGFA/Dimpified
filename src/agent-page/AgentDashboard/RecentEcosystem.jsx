import React, { useState, useEffect } from "react";
import { Col, Row, Card, ListGroup, Image } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import avatar from "../../assets/images/avatar/person.png";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

const RecentEcosystems = ({ title }) => {
  const [ecosystems, setEcosystems] = useState([]);
  const authFetch = AxiosInterceptor();
  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.id
  );

  useEffect(() => {
    fetchRecentEcosystems();
  }, [creatorId]);

  const fetchRecentEcosystems = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/affiliate-last-four-subscribe-users/${creatorId}`
      );
      setEcosystems(response.data.
        lastFourSubscribers
        );
    } catch (error) {
      console.error("Error fetching recent ecosystems:", error);
    }
  };

  const itemStyle = {
    minHeight: '120px', // Adjust this value to fit your design needs
    display: 'flex',
    alignItems: 'center',
  };

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
              <Row className="flex">
                <Col xs="auto">
                  <Image
                    src={ecosystem.Creator.imageUrl == null? avatar : ecosystem.Creator.imageUrl }
                    alt={ecosystem.Creator.
                      organizationName
                      }
                    className="img-fluid rounded img-4by3-lg"
                    style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
                  />
                </Col>
                <Col className="ps-0">
                  <h5 className="text-primary-hover">Name:{ecosystem.Creator.
                      organizationName}</h5>
                  <div className=" align-items-center">
                    <span className="fs-6">Interval:{ecosystem.interval}</span>
                    <br />
                    <span className="fs-6">PlanType:{ecosystem.planType}</span>
                    <br />
                    <span className="fs-6">Size Limit:{ecosystem.sizeLimit}</span>
                  </div>
                  {/* Removed the description */}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default RecentEcosystems;
