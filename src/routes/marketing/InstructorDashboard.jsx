import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { v4 as uuid } from "uuid";

export const DashboardMenu = () => {
  const [ecosystemDomain, setEcosystemDomain] = useState("");
  const [hoveredEventKey, setHoveredEventKey] = useState(null); // Track hovered key
  const location = useLocation();

  useEffect(() => {
    const domain = sessionStorage.getItem("ecosystemDomain");
    if (domain) {
      setEcosystemDomain(domain);
    }
  }, []);

  // Handle hover events for showing/hiding child menus
  const handleMouseEnter = (eventKey) => setHoveredEventKey(eventKey);
  const handleMouseLeave = () => setHoveredEventKey(null);

  const menuItems = [
    {
      id: 1,
      title: "My Dashboard",
      link: `/${ecosystemDomain}/Ecosystemdashboard`,
      icon: "home",
    },
    {
      id: 2,
      title: "Orders",
      link: `/${ecosystemDomain}/Ecosystemdashboard/My-Courses`,
      icon: "book",
      children: [
        {
          id: uuid(),
          link: `/${ecosystemDomain}/Ecosystemdashboard/Booking`,
          name: "Bookings",
        },
        {
          id: uuid(),
          link: `/${ecosystemDomain}/Ecosystemdashboard/Courses`,
          name: "Courses",
        },
        {
          id: uuid(),
          link: `/${ecosystemDomain}/Ecosystemdashboard/DigitalProducts`,
          name: "Digital Products",
        },
        // {
        //   id: uuid(),
        //   link: `/${ecosystemDomain}/Ecosystemdashboard/Services`,
        //   name: "Services",
        // },
      ],
    },
    {
      id: 3,
      title: "Reviews",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-reviews`,
      icon: "star",
    },
    {
      id: 5,
      title: "My Products",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-orders`,
      icon: "shopping-bag",
    },
    {
      id: 6,
      title: "Payment",
      icon: "dollar-sign",
      children: [
        {
          id: uuid(),
          link: `/${ecosystemDomain}/Ecosystemdashboard/escrow-payment`,
          name: "Earning",
        },
        {
          id: uuid(),
          link: `/${ecosystemDomain}/Ecosystemdashboard/withdraw-request`,
          name: "Withdraw",
        },
      ],
    },
    {
      id: 7,
      title: "Customers",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-students`,
      icon: "users",
    },
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
  ];

  return (
    <div>
      <ul className="nav flex-column list-unstyled">
        {menuItems.map((item, index) => (
          <Fragment key={index}>
            {item.children ? (
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className={`nav-link ${hoveredEventKey === item.id ? "active" : ""}`}
                  to="#!"
                >
                  <i className={`fe fe-${item.icon} nav-icon`}></i>
                  {item.title}
                  <i className="fe fe-chevron-down ml-2"></i>
                </Link>

                {hoveredEventKey === item.id && (
                  <ul className=" flex-column" style={{ paddingLeft: "3rem" }}>
                    {item.children.map((subItem) => (
                      <li key={subItem.id} style={{listStyle: "none"  }}>
                        <Link
                          className={`nav-link ${location.pathname === subItem.link ? "active" : ""}`}
                          to={subItem.link}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className={`nav-item ${item.link === location.pathname ? "active" : ""}`} key={index}>
                <Link className="nav-link" to={item.link}>
                  <i className={`fe fe-${item.icon} nav-icon`}></i>
                  {item.title}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export const StudentDashboardMenu = [DashboardMenu];
export default StudentDashboardMenu;
