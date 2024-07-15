import React, { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Col, Row, Nav, Container, Navbar } from "react-bootstrap";
import NavBar from "../../Pages/Pages/home-academy/navbars/UserNavbar";
import "./StudentProfileLayout.css";
import {
  DashboardMenu,
  AccountSettingsMenu,
} from "../../routes/marketing/StudentDashboard";
import Avatar3 from "../../assets/images/avatar/person.png";
import ProfileCover from "../../Components/marketing/common/headers/ProfileCover";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
// import { useGlobalContext } from "../../context/AuthContext";


const StudentProfileLayout = (props) => {
  const location = useLocation();
  const [showChildren, setShowChildren] = useState(false);
  const navigate = useNavigate();
  // const { userId, setUser, setUserRole, setUserImage } = useGlobalContext();

  const handleMyCoursesClick = () => {
    setShowChildren(!showChildren);
  };

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

  const user = sessionStorage.getItem("username");
  const image = sessionStorage.getItem("image");

  const dashboardData = {
    avatar: image !== null ? image : Avatar3,
    name: user!== null ? user: "John Doe",
    // username: `@${user}` ,
    linkname: "Browse Course",
    link: "/User/browse-course",
    verified: true,
    outlinebutton: false,
    level: "Beginner",
  };
  const ServiceButton = {
    linkname: "Browse Services",
    // link: "/creator/dashboard/Add-New-Service",
  };
  const ProductButton = {
    linkname: "Browse Product",
    link: "/creator/dashboard/Add-New-Product",
  };
  return (
    <Fragment>
      <NavBar />
      <section className="pt-5 pb-5">
        <Container>
          {/* User info */}
          <ProfileCover dashboardData={dashboardData} ServiceButton={ServiceButton} ProductButton={ProductButton}/>

          {/* Content */}
          <Row className="mt-0 mt-md-4 ">
            <Col lg={3} md={4} sm={12}>
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
                  <Nav className="me-auto flex-column " as="ul">
                    <Nav.Item className="navbar-header" as="li">
                      Dashboard
                    </Nav.Item>
                    {DashboardMenu.map((item, index) => (
                     <Nav.Item
                     as="li"
                     key={index}
                     className={`${
                       item.link === location.pathname ? "active" : ""
                     }`}
                   >
                     <Link
                       className="nav-link d-flex justify-content-between align-items-center"
                       to={item.link}
                       onClick={item.children ? handleMyCoursesClick : undefined}
                     >
                       <div>
                         <i className={`fe fe-${item.icon} nav-icon`}></i>
                         {item.title}
                       </div>
                       {item.children && (
                         <i
                           className={`fe ${
                             showChildren ? "fe-chevron-up" : "fe-chevron-down"
                           }`}
                         ></i>
                       )}
                     </Link>
                     {item.children && showChildren && (
                       <ul className="submenu">
                         {item.children.map((childItem, childIndex) => (
                           <li key={childIndex}>
                             <Link
                               to={childItem.link}
                               className={`${
                                 childItem.link === location.pathname ? "active" : ""
                               }`}
                             >
                               <i className={`fe fe-${childItem.icon}`}></i>
                               {childItem.title}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     )}
                   </Nav.Item>
                    ))}

                    <Nav.Item className="navbar-header mt-4" as="li">
                      ACCOUNT SETTINGS
                    </Nav.Item>
                    {AccountSettingsMenu.map((item, index) => (
                      <Nav.Item
                        as="li"
                        key={index}
                        className={`${
                          item.link === location.pathname ? "active" : ""
                        }`}
                      >
                        {item.title === "Sign Out" ? (
                          <button className="nav-link" onClick=""
                          // {handleLogout}
                          >
                            <i className={`fe fe-${item.icon} nav-icon`}></i>
                            {item.title}
                          </button>
                        ) : (
                          <Link className="nav-link" to={item.link}>
                            <i className={`fe fe-${item.icon} nav-icon`}></i>
                            {item.title}
                          </Link>
                        )}
                      </Nav.Item>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>

            <Col lg={9} md={8} sm={12}>
              {props.children}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default StudentProfileLayout;
