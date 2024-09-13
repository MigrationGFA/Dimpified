/* eslint-disable */
import { v4 as uuid } from "uuid";

// import MDI icons
import Icon from "@mdi/react";
import { mdiTrello, mdiCalendar } from "@mdi/js";

export const DashboardMenu = [
  {
    id: uuid(),
    title: "Dashboard",
    icon: "home",
    link:  "/affiliate/dashboard/overview",
  },

  {
    id: uuid(),
    title: "Overview",
    icon: "book",
    link: "/affiliate/dashboard/overview",
  },
  {
    id: uuid(),
    title: "My Users",
    icon: "user",
    link: "/affiliate/dashboard/my-user",
  },
 
  
  {
    id: uuid(),
    title: "Payment",
    icon: "dollar-sign",
    children: [
      {
        id: uuid(),
        link: "/affiliate/dashboard/earning",
        name: "Earning",
      },
      {
        id: uuid(),
        link: "/affiliate/dashboard/Withdraw",
        name: "Withdraw",
      },
    ],
  },
  {
    id: uuid(),
    title: "Onboarding",
    icon: "user",
    link: "/affiliate/dashboard/onboard",
  },
  
];

export default DashboardMenu;
