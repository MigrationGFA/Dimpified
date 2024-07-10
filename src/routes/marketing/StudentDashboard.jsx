export const DashboardMenu = [
  {
    id: 1,
    title: "My Dashboard",
    link: "/Userdashboard",
    icon: "home",
  },
  {
    id: 1,
    title: "My Products",
    link: "/User-My-Course",
    icon: "book",
    children: [
      {
        id: 2,
        title: "Bookmarked",
        link: "/User-My-Course/Bookmarked",
        icon: "bookmark",
      },
      {
        id: 3,
        title: "Learning",
        link: "/User-My-Course/Learning",
        icon: "book",
      },
    ],
  },

  {
    id: 4,
    title: "Reviews",
    link: "/User-Reviews",
    icon: "star",
  },
  // {
  // 	id: 3,
  // 	title: 'Earnings',
  // 	link: '/marketing/instructor/instructor-earnings/',
  // 	icon: 'pie-chart'
  // },
  // {
  // 	id: 5,
  // 	title: 'Orders',
  // 	link: '/marketing/instructor/instructor-orders/',
  // 	icon: 'shopping-bag'
  // },
  // {
  // 	id: 6,
  // 	title: 'Students',
  // 	link: '/marketing/instructor/instructor-students/',
  // 	icon: 'users'
  // },
   {
  	id: 7,
   	title: 'Payouts',
   	link: '/User-payout',
   	icon: 'dollar-sign'
   },
  // {
  // 	id: 8,
  // 	title: 'Quiz',
  // 	link: '/marketing/instructor/quiz/',
  // 	icon: 'help-circle'
  // },
  // {
  //   id: 5,
  //   title: "Quiz Result",
  //   link: "/User-quiz-result",
  //   icon: "help-circle",
  // },
];

export const AccountSettingsMenu = [
  {
    id: 1,
    title: "Edit Profile",
    link: "/User-edit-profile",
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
    link: "/User-social-profile",
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
    title: "Resolution",
    link: "/User-Resolution",
    icon: "help-circle",
  },
  {
    id: 4,
    title: "Delete Profile",
    link: "/User-delete-profile",
    icon: "trash",
  },
  {
    id: 5,
    title: "Sign Out",
    link: "/",
    icon: "power",
  },
];

export const StudentDashboardMenu = [DashboardMenu, AccountSettingsMenu];

export default StudentDashboardMenu;
