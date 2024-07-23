import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row, Nav, Container, Navbar } from "react-bootstrap";
import NavBar from "../../Pages/Pages/home-academy/navbars/UserNavbar";
import "./StudentProfileLayout.css";
import {
  DashboardMenu,
  AccountSettingsMenu,
} from "../../routes/marketing/StudentDashboard";
import Avatar3 from "../../assets/images/avatar/person.png";
import ProfileCover from "../../Components/marketing/common/headers/ProfileCover";

const StudentProfileLayout = (props) => {
  const location = useLocation();

  const user = sessionStorage.getItem("username");
  const image = sessionStorage.getItem("image");

  const dashboardData = {
    avatar: image !== null ? image : Avatar3,
    name: user !== null ? user : "John Doe",
    linkname: "Browse Course",
    link: "/:ecosystemDomain/User/browse-course",
    verified: true,
    outlinebutton: false,
    level: "Beginner",
  };
  const ServiceButton = {
    linkname: "Browse Services",
  };
  const ProductButton = {
    linkname: "Browse Product",
  };

  return (
    <Fragment>
      <NavBar />
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
            <Col lg={2} md={3} sm={12}>
              <Navbar
                expand="lg"
                className="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav"
              >
                <Link
                  className="d-xl-none d-lg-none d-md-none text-inherit fw-bold fs-5 float-start py-1"
                  to="#"
                >
                  Menu
                </Link>
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

                <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
                  <Nav className="me-auto flex-column" as="ul">
                    <Nav.Item className="navbar-header" as="li">
                      Dashboard
                    </Nav.Item>
                    <DashboardMenu />
                    <Nav.Item className="navbar-header mt-4" as="li">
                      ACCOUNT SETTINGS
                    </Nav.Item>
                    <AccountSettingsMenu />
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>

            <Col lg={10} md={9} sm={12}>
              {props.children}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default StudentProfileLayout;
