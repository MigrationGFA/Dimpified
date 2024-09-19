import React, { useState, useEffect } from "react";
import { Col, Row, Card, ListGroup, Image } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

const RecentEcosystems = ({ title }) => {
  const [ecosystems, setEcosystems] = useState([]);
  const authFetch = AxiosInterceptor();
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;

  useEffect(() => {
    fetchRecentEcosystems();
  }, [creatorId]);


  const fetchRecentEcosystems = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/last-four-ecosystems/${creatorId}`
      );
      setEcosystems(response.data.lastFourWithLogos);
    } catch (error) {
      console.error("Error fetching recent ecosystems:", error);
    }
  };

  const itemStyle = {
    minHeight: "120px", // Adjust this value to fit your design needs
    display: "flex",
    alignItems: "center",
  };

  return (
    <Card className="h-100">
      <Card.Header className="d-flex align-items-center justify-content-between card-header-height">
        <h4 className="mb-0">{title}</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {ecosystems && ecosystems.map((ecosystem, index) => (
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
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col className="ps-0">
                  <h5 className="text-primary-hover">
                    {ecosystem.ecosystemName}
                  </h5>
                  <div className="d-flex align-items-center">
                    <span className="fs-6">
                      {ecosystem.targetAudienceSector}
                    </span>
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
