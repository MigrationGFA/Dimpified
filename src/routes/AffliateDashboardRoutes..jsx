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
    link: "/agent/dashboard/overview",
  },
  {
    id: uuid(),
    title: "My Users",
    icon: "user",
    link: "/agent/dashboard/my-user",
  },

  {
    id: uuid(),
    title: "Payment",
    icon: "dollar-sign",
    children: [
      {
        id: uuid(),
        link: "/agent/dashboard/earning",
        name: "Earning",
      },
      {
        id: uuid(),
        link: "/agent/dashboard/Withdraw",
        name: "Withdraw",
      },
    ],
  },
  
  {
    id: uuid(),
    title: "Profile",
    icon: "user",
    link: "/agent/dashboard/profile",
  },
  {
    id: uuid(),
    title: "Onboarding",
    icon: "user",
    link: "/agent/dashboard/onboard",
  },
];

export default DashboardMenu;
