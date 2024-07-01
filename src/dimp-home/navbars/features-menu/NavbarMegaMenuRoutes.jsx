import { v4 as uuid } from "uuid";
import Template from "../icons/template.png";
import Builder from "../icons/add-image.png";
import Domain from "../icons/domain.png";
import App from "../icons/user-interface.png";
import Module from "../icons/course.png";
import Sync from "../icons/syncing.png";
import Interactive from "../icons/online-learning (1).png";
import Certificate from "../icons/certificate.png";
import Live from "../icons/online-class.png";
import Analytics from "../icons/analytics.png";
import Subscription from "../icons/subscription.png";
import Payment from "../icons/payment-gateway.png";

const NavbarMegaMenuRoutes = [
  {
    id: uuid(),
    menuitem: "Bespoke Templates",
    children: [
      {
        id: uuid(),
        menuitem: "Bespoke Templates",
        image: Template,
        subtitle1:
          "Choose from wide variety of template in relation to your need",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Corporations",
    children: [
      {
        id: uuid(),
        menuitem: "Website Builder",
        image: Builder,
        subtitle1: "Hackathons",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Foundations / NG0s",
    link: "#",
    children: [
      {
        id: uuid(),
        menuitem: "Custom Domain",
        image: Domain,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Professional Services",
    children: [
      {
        id: uuid(),
        menuitem: "Mobile App",
        image: App,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Creative Services",
    children: [
      {
        id: uuid(),
        menuitem: "Ecosystem Clone & Sync",
        image: Sync,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Popular Skills",
    children: [
      {
        id: uuid(),
        menuitem: "Course Planner & Builder",
        image: Module,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Health and Wellness Services",
    children: [
      {
        id: uuid(),
        menuitem: "Interactive Videos",
        image: Interactive,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Educational Services",
    children: [
      {
        id: uuid(),
        menuitem: "Assessments and Certificates",
        image: Certificate,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Event Services",
    children: [
      {
        id: uuid(),
        menuitem: "Live Classes & Webinars",
        image: Live,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Technical Services",
    children: [
      {
        id: uuid(),
        menuitem: "Statistics & Visualizations",
        subtitle1: "University of Michigan",
        image: Analytics,
        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Popular Skills",
    children: [
      {
        id: uuid(),
        menuitem: "Bundles & Subscriptions",
        image: Subscription,
        subtitle1: "University of Michigan",
       
        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Popular Skills",
    children: [
      {
        id: uuid(),
        menuitem: "Payment Management",
        subtitle1: "University of Michigan",
        image: Payment,
        link: "#",
      },
    ],
  },
];

export default NavbarMegaMenuRoutes;
