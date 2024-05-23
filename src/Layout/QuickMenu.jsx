import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from 'react';
import { useMediaQuery } from "react-responsive";
import { Row, Col, Image, Dropdown } from "react-bootstrap";
import { useGlobalContext } from "../context/AuthContext";
import DarkLightMode from "./DarkLightMode";
import { showToast } from "../Components/Showtoast";
import Notifications from "../Creator/authentication/Notifications";
import Avatar1 from "../assets/images/avatar/avatar-1.jpg";

const QuickMenu = () => {
  const { user, userImage, LogOut } = useGlobalContext() || {}; // Ensure user and userImage are defined
  const Email = sessionStorage.getItem("email");
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const handleSignOut = async () => {
    try {
      await LogOut();
    } catch (error) {
      showToast(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <DarkLightMode />
      <Dropdown as="li">
        <Dropdown.Toggle
          as="a"
          bsPrefix=" "
          className="text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
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
              to="/authentication/notifications"
              className="text-link fw-semi-bold"
            >
              See all Notifications
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
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
              src={userImage || Avatar1}
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
                  src={userImage || Avatar1}
                  className="rounded-circle"
                />
              </div>
              <div className="ms-3 lh-1">
                <h5 className="mb-1">{user}</h5>
                <p className="mb-0 text-muted">{Email}</p>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item className="mb-3" onClick={handleSignOut}>
            <i className="fe fe-power me-2"></i> Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
};

export default QuickMenu;
