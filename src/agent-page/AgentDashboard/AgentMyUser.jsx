import { Fragment, useEffect, useState } from "react";
import { Col, Row, Card, Tab, Breadcrumb, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import AxiosInterceptor from "../../Components/AxiosInterceptor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { showToast } from "../../Components/Showtoast";

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
  const affiliateId = useSelector(
    (state) => state.authentication.user?.data?.affiliateId
  );

  const getMyUser = async () => {
    try {
      const response = await authFetch.get(
        `${
          import.meta.env.VITE_API_URL
        }/affiliate-all-onboarded-users/${userId}`
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

  // Function to handle sharing the onboard link
  const handleShare = () => {
    const onboardLink = `${window.location.origin}/creator/signup?ref=${affiliateId}`;

    // Check if Web Share API is supported by the browser
    if (navigator.share) {
      navigator
        .share({
          title: "Join as a Creator",
          text: "Join our platform through this link:",
          url: onboardLink,
        })
        .then(() => showToast("Onboard link shared successfully!"))
        .catch((error) => showToast("Error sharing the onboard link"));
    } else {
      // Fallback for browsers that don't support Web Share API (e.g., Firefox)
      navigator.clipboard
        .writeText(onboardLink)
        .then(() => showToast("Onboard link copied to clipboard!"))
        .catch((error) => showToast("Failed to copy link to clipboard"));
    }
  };

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
                <div className="justify-content-between d-flex">
                  <div>
                    <GridListViewButton keyGrid="grid" keyList="list" />
                  </div>
                  <div className="text-end mb-4">
                    <Button variant="secondary" onClick={handleShare}>
                      <FontAwesomeIcon icon={faShareAlt} className="me-2" />
                      Share Onboard Link
                    </Button>
                  </div>
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
