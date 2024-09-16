import { Fragment, useEffect, useState } from "react";
import { Col, Row, Card, Tab, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

// import custom components
import GridListViewButton from "../../Components/elements/miscellaneous/GridListViewButton";

// import sub components
import UsersGridView from "./UsersGridCard";
import UsersListItems from "./UsersListItems";
import { useSelector } from "react-redux";

const Instructor = () => {
  const [dashboardData, setDashboardData] = useState({
    monthlySeeker: 1,
    totalSeeker: 1,
    monthlyProvider: 1,
    totalProvider: 1,
  });
  const [userDetails, setUserDetails] = useState([]);
  const [myEcosystem, setMyEcosystem] = useState([]);
  const authFetch = AxiosInterceptor();
  const user = useSelector((state) => state.authentication.user);
  const userId = user?.data?.CreatorId || "Unknown User";
  const ecosystemId = user?.data?.ecosystemId || "Unknown Ecosystem";

  const getMyUser = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/all-ecosystem-users/${userId}`
      );

      setUserDetails(response.data.ecosystemUsers);
      console.log(response.data.ecosystemUsers);
    } catch (error) {
      console.log(error);
    }
  };

  // Get the IDs of the users
  // const ecoIds = userDetails.map((item) => item.id);

  // Fetch the ecosystem data
  const getMyEcosystem = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/ecosystem-users`,
        {
          params: {
            creatorId: userId,
            ecosystemId: ecosystemId,
          },
        }
      );
      setMyEcosystem(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyUser();
  }, [userId]);

  // Fetch the ecosystem data whenever `userDetails` changes
  useEffect(() => {
    if (userDetails.length > 0) {
      getMyEcosystem();
    }
  }, [userDetails]);

  return (
    <Fragment>
      <div className="instructor-container">
        <Tab.Container defaultActiveKey="grid">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="border-bottom pb-4 mb-4 d-flex align-items-center justify-content-between">
                <div className="mb-3 mb-md-0">
                  <h1 className="mb-1 h2 fw-bold">
                    My User{" "}
                    <span className="fs-5 text-muted">
                      ({userDetails.length})
                    </span>
                  </h1>
                  <Breadcrumb>
                    <Breadcrumb.Item href="/creator/dashboard/overview">
                      Dashboard
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>My User</Breadcrumb.Item>
                  </Breadcrumb>
                </div>

                <div>
                  <GridListViewButton keyGrid="grid" keyList="list" />
                </div>
              </div>
            </Col>
          </Row>

          <Tab.Content>
            <Tab.Pane eventKey="grid" className="pb-4">
              <div className="instructors-content">
                <UsersGridView userDetails={userDetails} />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="list" className="pb-4">
              <div className="instructors-content">
                <Card className="mb-5">
                  <Card.Body className="p-0">
                    <UsersListItems userDetails={userDetails} />
                  </Card.Body>
                </Card>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </Fragment>
  );
};

export default Instructor;
