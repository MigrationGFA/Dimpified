import { Fragment, useEffect, useState } from "react";
import { Col, Row, Card, Tab, Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

// import custom components
import GridListViewButton from "../../Components/elements/miscellaneous/GridListViewButton";

// import sub components
import UsersGridView from "../AgentDashboard/UsersGridCard";
import UsersListItems from "../AgentDashboard/UsersListItems";

const Instructor = () => {
  const [userDetails, setUserDetails] = useState([]); 
  const authFetch = AxiosInterceptor();
  const user = useSelector((state) => state.authentication.user);
  const userId = user?.data?.AffiliateId || "Unknown User";

  const getMyUser = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/affiliate-all-onboarded-users/${userId}`
      );
      setUserDetails(response.data.getAllCreator);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Fetch user data when component mounts or when `userId` changes
  useEffect(() => {
    if (userId !== "Unknown User") {
      getMyUser();
    }
  }, [userId]);

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
