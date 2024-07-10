// import media files

// import courses media files

import Government from "./navbars/icons/government.png";
import Corporation from "./navbars/icons/corporate.png";
import NGO from "./navbars/icons/ngo.png";
import Professional from "./navbars/icons/professional-services.png";
import Creative from "./navbars/icons/digital-services.png";
import Home from "./navbars/icons/house.png";
import Health from "./navbars/icons/doctor-patient.png";
import Educational from "./navbars/icons/online-learning.png";
import Event from "./navbars/icons/catering.png";
import Religion from "./navbars/icons/religion.png";

import Technical from "./navbars/icons/technical-support.png";

export const AllCoursesData = [
  {
    id: 1,
    category: "enterprise",
    image: Government,
    title: "Government",
    link: "/government",
    subtitle1: "Upskilling Programs,",
    subtitle2: "e-Governance,",
    subtitle3: "Licensing,",
    subtitle4: "Tax management",

    popular: true,
    trending: false,
  },
  {
    id: 2,
    category: "enterprise",
    image: Corporation,
    title: "Corporations",
    link: "/corporation",
    subtitle1: "Hackathons,",
    subtitle2: "Pitch Competitions,",
    subtitle3: "Incubation Programs,",
    subtitle4: "Accelerator Programs.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 3,
    category: "enterprise",
    image: NGO,
    title: "Foundations/NGOs",
    link: "/non-profit",
    subtitle1: "Program Management,",
    subtitle2: "Event Management,",
    subtitle3: "Hackathons,",
    subtitle4: "Upskilling Programs.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 4,
    category: "enterprise",
    image: Religion,
    title: "Religious Bodies",
    link: "/religious-bodies",
    subtitle1: "Donor management,",
    subtitle2: "Volunteer management,",
    subtitle3: "Study Management,",
    subtitle4: "Surveys.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 5,
    category: "consumer",
    image: Professional,
    title: "Professional Services",
    subtitle1: " Legal Consulting,",
    subtitle2: "Accounting Services,",
    subtitle3: " Project Management,",
    subtitle4: "Business Consulting.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 6,
    category: "consumer",
    image: Creative,
    title: "Creative Services",
    subtitle1: "Web Design,",
    subtitle2: "Photography & Videography,",
    subtitle3: "Content Creation,",
    subtitle4: "Branding Services.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 7,
    category: "consumer",
    image: Home,
    title: "Trade Services",
    subtitle1: "House Cleaning,",
    subtitle2: "Handyman Services,",
    subtitle3: "Painting Services,",
    subtitle4: "Electrical Services.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 8,
    category: "consumer",
    image: Health,
    title: "Personal Care Services",
    subtitle1: "Massage Therapy,",
    subtitle2: "Physical Therapy,",
    subtitle3: "Mental Health Counseling,",
    subtitle4: "Weight Loss Coaching.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 9,
    category: "consumer",
    image: Event,
    title: "Event Services",
    subtitle1: "Event Planning",
    subtitle2: "Catering Services,",
    subtitle3: "Decoration Services,",
    subtitle4: "Wedding Planning.",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 10,
    category: "consumer",
    image: Educational,
    title: "Educational Services",
    link: "/education",
    subtitle1: "Tutoring,",
    subtitle2: "Coding Bootcamps,",
    subtitle3: "Educational Consulting,",
    subtitle4: "College Admissions Counseling",
    recommended: false,
    popular: true,
    trending: false,
  },
  {
    id: 11,
    category: "consumer",
    image: Technical,
    title: "Technology Services",
    subtitle1: "Software Development,",
    subtitle2: "Database Management,",
    subtitle3: " Hardware Repair,",
    subtitle4: "Tech Support Call Centers.",
    recommended: false,
    popular: true,
    trending: false,
  },
];

export default AllCoursesData;
