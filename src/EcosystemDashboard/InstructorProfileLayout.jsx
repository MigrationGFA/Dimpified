// import node module libraries
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
// import custom components
import ProfileCover from "../Components/marketing/common/headers/EcosystemProfileCover";
// import routes file
import {
  DashboardMenu,
  // AccountSettingsMenu,
} from "../routes/marketing/InstructorDashboard";
import NavbarDefault from "../Pages/Pages/home-academy/navbars/NavbarDefault";
// import media files
import Avatar3 from "../assets/images/avatar/person.png";

const ProfileLayout = (props) => {
  const { ecosystemDomain } = useParams();
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    setLogo(sessionStorage.getItem("ecoLogo"));
  }, []);

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.delete(
  //       `https://remsana-backend-testing.azurewebsites.net/api/v1/logout/${userId}`
  //     );
  //     showToast(response.data.message);
  //     sessionStorage.clear();
  //     navigate("/");
  //     setUser(null);
  //     setUserRole(null);
  //     setUserImage(null);
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //     showToast(error.response.message);
  //   }
  // };

  const dashboardData = {
    avatar: logo || Avatar3,
    name: ecosystemDomain,
    username: `@${ecosystemDomain}`,
    linkname: "Create New Course",
    link: `/${ecosystemDomain}/Ecosystemdashboard/Add-New-Course`,
    verified: true,
    outlinebutton: false,
    level: "Beginner",
  };
  const ServiceButton = {
    linkname: "Create New Services",
    link: `/${ecosystemDomain}/Ecosystemdashboard/Add-New-Service`,
  };
  const ProductButton = {
    linkname: "Create New Product",
    link: `/${ecosystemDomain}/Ecosystemdashboard/Add-New-Product`,
  };

  return (
    <Fragment>
      <NavbarDefault />
      <section className="pt-5 pb-5">
        <Container fluid>
          {/* User info */}
          <ProfileCover
            dashboardData={dashboardData}
            ServiceButton={ServiceButton}
            ProductButton={ProductButton}
          />

          {/* Content */}
          <Row className="mt-0 mt-md-4">
            <Col lg={3} md={3} sm={12}>
              <Navbar
                expand="lg"
                className="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav"
              >
                <div className="d-flex">
                  <Link
                    className="btn btn-primary d-xl-none d-lg-none d-md-none text-inherit fw-bold fs-5 float-start py-1"
                    to="/Instructordashboard/instructor-add-new-course"
                  >
                    Create New Course
                  </Link>
                </div>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="p-0 focus-none border-0"
                  label="Responsive Menu"
                >
                  <span
                    className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary p-0 text-white float-end"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidenav"
                    aria-controls="sidenav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="fe fe-menu"></span>
                  </span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto flex-column" as="ul">
                    <Nav.Item className="navbar-header" as="li">
                      Dashboard
                    </Nav.Item>
                    <DashboardMenu />
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>

            <Col lg={9} md={9} sm={12}>
              {props.children}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default ProfileLayout;
