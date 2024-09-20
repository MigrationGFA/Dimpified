import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Image, Dropdown, ListGroup } from "react-bootstrap";
import { useGlobalContext } from "../context/AuthContext";
import DarkLightMode from "./DarkLightMode";
import { showToast } from "../Components/Showtoast";
// import Notifications from "../../Creator/authentication/Notifications";
import Avatar1 from "../assets/images/avatar/person.png";
import NotificationList from "../Creator/Notification/Notification";

// simple bar scrolling used for notification item scrolling
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import GKTippy from "../Components/elements/tooltips/GKTippy";
import DotBadge from "../Components/elements/bootstrap/DotBadge";
import { useDispatch } from "react-redux";
import { logout } from "../features/login";
import { useSelector } from "react-redux";

const QuickMenu = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    showToast("LogOut Successfully");
    navigate("/dimp/agent-page");
  };

  const user = useSelector((state) => state.authentication.user);
  const username = user?.data?.organizationName || "Unknown User";
  const userImage = user?.data?.image || Avatar1;
  const Email = user?.data?.email || "No email";

  const Notifications = () => {
    return (
      <SimpleBar style={{ maxHeight: "300px" }}>
        <ListGroup variant="flush">
          {NotificationList.map(function (item, index) {
            return (
              <ListGroup.Item
                className={index === 0 ? "bg-light" : ""}
                key={index}
              >
                <Row>
                  <Col>
                    <Link className="text-body" to="#">
                      <div className="d-flex">
                        <Image
                          src={item.image}
                          alt=""
                          className="avatar-md rounded-circle"
                        />
                        <div className="ms-3">
                          <h5 className="fw-bold mb-1">{item.sender}</h5>
                          <p className="mb-3">{item.message}</p>
                          <span className="fs-6 text-muted">
                            <span>
                              <span className="fe fe-thumbs-up text-success me-1"></span>
                              {item.date}
                            </span>
                            <span className="ms-1">{item.time}</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs="auto" className="text-center me-2">
                    <GKTippy content="Mark as unread">
                      <Link to="#">
                        <DotBadge bg="secondary"></DotBadge>
                      </Link>
                    </GKTippy>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </SimpleBar>
    );
  };

  return (
    <Fragment>
      <div style={{ marginRight: "10px" }}>
        <DarkLightMode />
      </div>
      {/* <Dropdown as="li">
        <Dropdown.Toggle
          as="a"
          bsPrefix=" "
          className="text-dark  icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
          id="dropdownNotification"
        >
          <i className="fe fe-bell"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu
          show={isDesktop ? true : false}
          className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end mt-3 py-0"
          aria-labelledby="dropdownNotification"
          align="end"
        >
          <div className="border-bottom px-3 pt-3 pb-3 d-flex justify-content-between align-items-end">
            <span className="h4 mb-0">Notifications</span>
            <Link to="# " className="text-muted">
              <span className="align-middle">
                <i className="fe fe-settings me-1"></i>
              </span>
            </Link>
          </div>
          <Notifications />
          <div className="border-top px-3 pt-3 pb-3">
            <Link
              to="/creator/notifications"
              className="text-link fw-semi-bold"
            >
              See all Notifications
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown> */}
      <Dropdown as="li" className="ms-1">
        <Dropdown.Toggle
          as="a"
          bsPrefix=" "
          className="rounded-circle"
          id="dropdownUser"
        >
          <div className="avatar avatar-md avatar-indicators avatar-online">
            <Image
              alt="avatar"
              src={userImage}
              className="rounded-circle"
            />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu
          show={isDesktop ? true : false}
          className="dashboard-dropdown dropdown-menu-end mt-4 py-0"
          aria-labelledby="dropdownUser"
          align="end"
        >
          <Dropdown.Item className="mt-3">
            <div className="d-flex">
              <div className="avatar avatar-md avatar-indicators avatar-online">
                <Image
                  alt="avatar"
                  src={userImage}
                  className="rounded-circle"
                />
              </div>
              <div className="ms-3 lh-1">
                <h5 className="mb-1">{username}</h5>
                <p className="mb-0 text-muted">{Email}</p>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item className="mb-3" onClick={handleLogout}>
            <i className="fe fe-power me-2"></i> Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
};

export default QuickMenu;
