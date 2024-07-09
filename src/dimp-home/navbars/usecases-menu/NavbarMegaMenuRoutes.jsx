import { v4 as uuid } from "uuid";
import Government from "../icons/government.png";
import Corporation from "../icons/corporate.png";
import NGO from "../icons/ngo.png";
import Professional from "../icons/professional-services.png";
import Creative from "../icons/digital-services.png";
import Home from "../icons/house.png";
import Health from "../icons/doctor-patient.png";
import Educational from "../icons/online-learning.png";
import Event from "../icons/catering.png";
import Religion from "../icons/religion.png";

import Technical from "../icons/technical-support.png";

const NavbarMegaMenuRoutes = [
  {
    id: uuid(),

    children: [
      {
        id: uuid(),
        menuitem: "Government",
        image: Government,
        subtitle1: "Upskilling Programs,",
        subtitle2: "e-Governance,",
        subtitle3: "Licensing,",
        subtitle4: "Tax Mangement",
        link: "/government",
      },
    ],
  },
  {
    id: uuid(),

    children: [
      {
        id: uuid(),
        menuitem: "Corporations",
        image: Corporation,
        subtitle1: "Hackathons,",
        subtitle2: "Pitch Competitions,",
        subtitle3: "Incubation Programs,",
        subtitle4: "Accelerator Programs.",

        link: "/corporation",
      },
    ],
  },
  {
    id: uuid(),

    link: "#",
    children: [
      {
        id: uuid(),
        menuitem: "Foundations/NGOs",
        image: NGO,
        subtitle1: "Program Management,",
        subtitle2: "Event Management,",
        subtitle3: "Hackathons,",
        subtitle4: "Upskilling Programs.",
        link: "/non-profit",
      },
    ],
  },
  {
    id: uuid(),

    children: [
      {
        id: uuid(),
        menuitem: "Religious Bodies",
        image: Religion,
        subtitle1: "Donor management,",
        subtitle2: "Volunteer management,",
        subtitle3: "Study Management,",
        subtitle4: "Surveys.",
        link: "/religious-bodies",
      },
    ],
  },
  {
    id: uuid(),

    children: [
      {
        id: uuid(),
        menuitem: "Professional Services",
        image: Professional,
        subtitle1: " Legal Consulting,",
        subtitle2: "Accounting Services,",
        subtitle3: " Project Management,",
        subtitle4: "Business Consulting.",
        link: "/professionals",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Creative Services",
    children: [
      {
        id: uuid(),
        menuitem: "Creative Services",
        image: Creative,
        subtitle1: "Web Design,",
        subtitle2: "Photgraphy and Videography,",
        subtitle3: "Content Creation,",
        subtitle4: "Branding Services.",
        link: "/creatives",
      },
    ],
  },
  {
    id: uuid(),

    children: [
      {
        id: uuid(),
        menuitem: "Trade Services",
        image: Home,
        subtitle1: "House Cleaning,",
        subtitle2: "Handyman Services,",
        subtitle3: "Painting Services,",
        subtitle4: "Electrical Services.",
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
        menuitem: "Personal Care Services",
        image: Health,
        subtitle1: "Massage Therapy,",
        subtitle2: "Physical Therapy,",
        subtitle3: "Mental Health Counseling,",
        subtitle4: "Weight Loss Coaching.",
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
        menuitem: "Educational Services",
        image: Educational,
        subtitle1: "Tutoring,",
        subtitle2: "Coding Bootcamps,",
        subtitle3: "Educational Consulting,",
        subtitle4: "College Admissions Counseling",

        link: "/education",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Event Services",
    children: [
      {
        id: uuid(),
        menuitem: "Event Services",
        image: Event,
        subtitle1: "Event Planning",
        subtitle2: "Catering Services,",
        subtitle3: "Decoration Services,",
        subtitle4: "Wedding Planning.",
        link: "#",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Technology Services",
    children: [
      {
        id: uuid(),
        menuitem: "Technology Services",
        image: Technical,
        subtitle1: "Software Development,",
        subtitle2: "Database Management,",
        subtitle3: " Hardware Repair,",
        subtitle4: "Tech Support Call Centers.",
        link: "#",
      },
    ],
  },
];

export default NavbarMegaMenuRoutes;
