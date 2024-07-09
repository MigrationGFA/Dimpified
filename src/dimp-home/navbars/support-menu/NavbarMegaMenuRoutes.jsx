import { v4 as uuid } from "uuid";
import School from "../icons/online-learning.png";
import Help from "../icons/customer-care.png";
import Webinars from "../icons/webinar.png";

import Blog from "../icons/blog.png";
import Dev from "../icons/coding.png";
import Builder from "../icons/website-builder.png";
import Affliate from "../icons/money.png";
import Team from "../icons/team.png";
import Careers from "../icons/promotion.png";

const NavbarMegaMenuRoutes = [
  {
    id: uuid(),
    menuitem: "Bespoke Templates",
    children: [
      {
        id: uuid(),
        menuitem: "DIMP Ecosystem School",
        image: School,
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
        image: Help,
        subtitle1: "Hackathons",

        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Foundations / NG0s",
    
    children: [
      {
        id: uuid(),
        menuitem: "Webinars",
        image: Webinars,
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
        menuitem: "Developer Program",
        image: Dev,
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
        menuitem: "Builder Program",
        image: Builder,
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
        menuitem: "Affliate Program",
        image: Affliate,
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
        menuitem: "Resources/Blog",
        image: Blog,
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
        menuitem: "Careers",
        image: Careers,
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
        menuitem: "Our Team",
        image: Team,
        subtitle1: "University of Michigan",

        link: "#",
      },
    ],
  },
  
];

export default NavbarMegaMenuRoutes;
