import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Spinner,
  Card,
  Table,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { showToast } from "../../Components/Showtoast";
import PaginationComponent from "../../Components/elements/advance-table/Pagination";

const PopularJobCategory = () => {
  const [ecosystems, setEcosystems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDashboardLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/popular-job-categories`
        );
        setEcosystems(response.data.ecosystemsWithLogos || []);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setDashboardLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (dashboardLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Popular Job Categories</h1>
              <p>
                Explore popular job categories based on current trends.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card className="border-0">
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Ecosystem Name</th>
                    <th>Ecosystem Domain</th>
                    <th>Target Audience Sector</th>
                    <th>Main Objective</th>
                    <th>Expected Audience Number</th>
                    <th>Experience</th>
                    <th>Ecosystem Description</th>
                    <th>Courses</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {ecosystems.map((ecosystem) => (
                    <tr key={ecosystem._id}>
                      <td>{ecosystem._id}</td>
                      <td>{ecosystem.ecosystemName}</td>
                      <td>{ecosystem.ecosystemDomain}</td>
                      <td>{ecosystem.targetAudienceSector}</td>
                      <td>{ecosystem.mainObjective}</td>
                      <td>{ecosystem.expectedAudienceNumber}</td>
                      <td>{ecosystem.experience}</td>
                      <td>{ecosystem.ecosystemDescription}</td>
                      <td>
                        {ecosystem.courses.map((course) => (
                          <p key={course}>{course}</p>
                        ))}
                      </td>
                      <td>{ecosystem.users}</td>
                      <td>{ecosystem.status}</td>
                      <td>{new Date(ecosystem.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Pagination Component */}
              <div className="d-flex justify-content-center mt-3">
                <PaginationComponent
                  totalItems={ecosystems.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PopularJobCategory;
