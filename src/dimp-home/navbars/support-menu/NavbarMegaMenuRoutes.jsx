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
        menuitem: "DIMP Ecosystem School",
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
        menuitem: "Help Centre",
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
        menuitem: "Webinars",
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
        menuitem: "Resources",
        image: App,
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
        menuitem: "Contact",
        image: App,
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
        menuitem: "Team",
        image: App,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
];

export default NavbarMegaMenuRoutes;
