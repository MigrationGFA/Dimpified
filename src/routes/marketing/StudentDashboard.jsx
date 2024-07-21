import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const DashboardMenu = () => {
  const [ecosystemDomain, setEcosystemDomain] = useState("");
  const [showChildren, setShowChildren] = useState(false);

  const handleMyCoursesClick = () => {
    setShowChildren(!showChildren);
  };

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
      link: `/${ecosystemDomain}/Userdashboard`,
      icon: "home",
    },
    {
      id: 2,
      title: "My Products",
      link: `/${ecosystemDomain}/User-My-Course`,
      icon: "book",
      children: [
        {
          id: 3,
          title: "Bookmarked",
          link: `/${ecosystemDomain}/User-My-Course/Bookmarked`,
          icon: "bookmark",
        },
        {
          id: 4,
          title: "Learning",
          link: `/${ecosystemDomain}/User-My-Course/Learning`,
          icon: "book",
        },
      ],
    },
    {
      id: 5,
      title: "Reviews",
      link: `/${ecosystemDomain}/User-Reviews`,
      icon: "star",
    },
    {
      id: 6,
      title: "Payouts",
      link: `/${ecosystemDomain}/User-payout`,
      icon: "dollar-sign",
    },
    //   // {
    //   // 	id: 8,
    //   // 	title: 'Quiz',
    //   // 	link: '/marketing/instructor/quiz/',
    //   // 	icon: 'help-circle'
    //   // },
    //   // {
    //   //   id: 5,
    //   //   title: "Quiz Result",
    //   //   link: "/User-quiz-result",
    //   //   icon: "help-circle",
    //   // },
  ];

  return (
    <div>
      {menuItems.map((item, index) => (
        <Nav.Item
          as="li"
          key={index}
          className={`${item.link === location.pathname ? "active" : ""}`}
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
    </div>
  );
};

export const AccountSettingsMenu = () => {
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
      title: "Edit Profile",
      link: `/${ecosystemDomain}/User-edit-profile`,
      icon: "settings",
    },
    // {
    // 	id: 2,
    // 	title: 'Security',
    // 	link: '/marketing/instructor/instructor-security/',
    // 	icon: 'user'
    // },
    {
      id: 2,
      title: "Social Profiles",
      link: `/${ecosystemDomain}/User-social-profile`,
      icon: "refresh-cw",
    },
    // {
    //   id: 3,
    //   title: "Notifications",
    //   link: "/User-notifications",
    //   icon: "bell",
    // },
    // {
    // 	id: 5,
    // 	title: 'Profile Privacy',
    // 	link: '/marketing/instructor/instructor-profile-privacy/',
    // 	icon: 'lock'
    // },
    {
      id: 5,
      title: "Help Center",
      link: `/${ecosystemDomain}/help-center`,
      icon: "help-circle",
    },
    {
      id: 4,
      title: "Delete Profile",
      link: `/${ecosystemDomain}/User-delete-profile`,
      icon: "trash",
    },
    {
      id: 5,
      title: "Sign Out",
      link: "/",
      icon: "power",
    },
  ];

  return (
    <div>
      {menuItems.map((item, index) => (
        <Nav.Item
          as="li"
          key={index}
          className={`${item.link === location.pathname ? "active" : ""}`}
        >
          {item.title === "Sign Out" ? (
            <button
              className="nav-link"
              onClick=""
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
    </div>
  );
};

export const StudentDashboardMenu = [DashboardMenu, AccountSettingsMenu];

export default StudentDashboardMenu;
