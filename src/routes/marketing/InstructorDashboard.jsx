import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContext,
  Nav,
  useAccordionButton,
} from "react-bootstrap";
import { v4 as uuid } from "uuid";

export const DashboardMenu = () => {
  const [ecosystemDomain, setEcosystemDomain] = useState("");
  const location = useLocation();

  useEffect(() => {
    const domain = sessionStorage.getItem("ecosystemDomain");
    if (domain) {
      setEcosystemDomain(domain);
    }
  }, []);

  const CustomToggle = ({ children, eventKey, icon }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey);
    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <li className="nav-item">
        <Link
          className={`nav-link ${isCurrentEventKey ? "active" : ""}`}
          onClick={decoratedOnClick}
          to="#!"
        >
          <i className={`fe fe-${icon} nav-icon`} ></i>
          {children}
          <i
            className={`fe ${
              isCurrentEventKey ? "fe-chevron-up" : "fe-chevron-down"
            } ml-2`}
          ></i>{" "}
        </Link>
      </li>
    );
  };

  const menuItems = [
    {
      id: 1,
      title: "My Dashboard",
      link: `/${ecosystemDomain}/Ecosystemdashboard`,
      icon: "home",
    },
    {
      id: 2,
      title: "My Product",
      link: `/${ecosystemDomain}/Ecosystemdashboard/My-Courses`,
      icon: "book",
      children: [
        {
          id: uuid(),
          link: `${ecosystemDomain}/Ecosystemdashboard/Booking`,
          name: "Bookings",
        },
        {
          id: uuid(),
          link: `${ecosystemDomain}/Ecosystemdashboard/Courses`,
          name: "Courses",
        },
        {
          id: uuid(),
          link: `${ecosystemDomain}/Ecosystemdashboard/DigitalProducts`,
          name: "Digital Products",
        },
        {
          id: uuid(),
          link: `${ecosystemDomain}/Ecosystemdashboard/Services`,
          name: "Services",
        },

        // { id: uuid(), link: "creator/dashboard/analytics", name: "Analytics" },
      ],
    },
    // {
    //   id: 9,
    //   title: "Booking",
    //   link: `/${ecosystemDomain}/Ecosystemdashboard/Booking`,
    //   icon: "star",
    // },
    {
      id: 3,
      title: "Reviews",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-reviews`,
      icon: "star",
    },
    // {
    //   id: 4,
    //   title: "Earnings",
    //   link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-earning`,
    //   icon: "pie-chart",
    // },
    {
      id: 5,
      title: "Orders",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-orders`,
      icon: "shopping-bag",
    },
    {
      id: 6,
      title: "Customers",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-students`,
      icon: "users",
    },
    // {
    //   id: 7,
    //   title: "Payouts",
    //   link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-payouts`,
    //   icon: "dollar-sign",
    // },
    {
      id: 8,
      title: "Help Center",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Help-Center`,
      icon: "help-circle",
    },
    {
      id: 9,
      title: "Community",
      link: `/${ecosystemDomain}/creator-community-chat`,
      icon: "user",
    },
    // {
    // 	id: 8,
    // 	title: 'Quiz',
    // 	link: '/:ecosystemDomain/Ecosystemdashboard/Ecosystem-quiz',
    // 	icon: 'help-circle'
    // },
    // {
    // 	id: 9,
    // 	title: 'Quiz Result',
    // 	link: '/:ecosystemDomain/Ecosystemdashboard/Ecosystem-quiz-result',
    // 	icon: 'help-circle'
    // }
  ];

  return (
    <div>
      <Accordion as="ul" className="nav flex-column list-unstyled">
        {menuItems.map((item, index) =>
          item.children ? (
            <Fragment key={index}>
              <CustomToggle eventKey={item.id} icon={item.icon}>
                {item.title}
              </CustomToggle>
              <Accordion.Collapse
                eventKey={item.id}
                as="li"
                bsPrefix="nav-item"
              >
                <Nav
                  className="navbar-nav flex-column"
                  style={{ paddingLeft: "0", paddingTop:"0", paddingBottom:"0" }}
                >
                  {item.children.map((subItem) => (
                    <Nav.Item
                      as="li"
                      key={subItem.id}
                    >
                      <Link
                        className={`nav-link ${
                          location.pathname === subItem.link ? "active" : ""
                        }`}
                        to={`/${subItem.link}`}
                        style={{ paddingLeft: "1.5rem" }}
                      >
                        {subItem.name}
                      </Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Accordion.Collapse>
            </Fragment>
          ) : (
            <Nav.Item
              as="li"
              key={index}
              className={`${item.link === location.pathname ? "active" : ""}`}
            >
              <Link className="nav-link" to={item.link}>
                <i className={`fe fe-${item.icon} nav-icon`}></i>
                {item.title}
              </Link>
            </Nav.Item>
          )
        )}
      </Accordion>
    </div>
  );
};

export const StudentDashboardMenu = [DashboardMenu];
//AccountSettingsMenu

export default StudentDashboardMenu;
