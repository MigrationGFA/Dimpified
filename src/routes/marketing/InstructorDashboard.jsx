import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const DashboardMenu = () => {
  const [ecosystemDomain, setEcosystemDomain] = useState("");

  useEffect(() => {
    const domain = sessionStorage.getItem("ecosystemDomain");
    if (domain) {
      setEcosystemDomain(domain);
    }
  }, []);

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
    },
    {
      id: 3,
      title: "Reviews",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-reviews`,
      icon: "star",
    },
    {
      id: 4,
      title: "Earnings",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-earning`,
      icon: "pie-chart",
    },
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
    {
      id: 7,
      title: "Payouts",
      link: `/${ecosystemDomain}/Ecosystemdashboard/Ecosystem-payouts`,
      icon: "dollar-sign",
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
      {menuItems.map((item, index) => (
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
      ))}
    </div>
  );
};

export const StudentDashboardMenu = [DashboardMenu];
//AccountSettingsMenu

export default StudentDashboardMenu;
