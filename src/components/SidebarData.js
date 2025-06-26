import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { useLocation } from "react-router-dom";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export const SidebarData = [
  {
    index: 0,
    title: "Home",
    path: "/home",
    icon: <HomeIcon style={{fontSize: 'medium'}} />,
    closeMenu: true,
    followLink: true,
    subNav: [],
  },

  {
    index: 1,
    title: "About Us   ",
    path: <usePathname />,
    icon: <InfoIcon style={{fontSize: 'medium'}} />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    closeMenu: false,
    followLink: false,
    subNav: [
      {
        title: 'The "Enterprise"',
        path: "/TheEnterprise",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "Aims And Objectives",
        path: "AimsAndObjectives",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "Our History",
        path: "/AboutUs/OurHistory",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "Volunteers",
        path: "/Volunteers",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "Useful Links",
        path: "/UsefulLinks",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },

      // {
      //   title: 'Details And Diagrams',
      //   path: '/AboutUs/DetailsAndDiagrams',
      //   cName: 'sub-nav',
      //   closeMenu: true
      // },


      // {
      //   title: "Meet The Crew",
      //   path: "/MeetTheCrew",
      //   cName: "sub-nav",
      //   closeMenu: true,
      //   followLink: true,
      // },
      {
        title: "Risk Assesments",
        path: "/AboutUs/RiskAssesments",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },

    ],
  },

  {
    index: 2,
    title: "Book Your Trip",
    path: <usePathname />,
    icon: <CalendarMonthIcon style={{fontSize: 'medium'}} />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    closeMenu: false,
    followLink: false,
    subNav: [
      {
        title: "2025 Bookings",
        path: "/BookNow",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "Book Your Trip",
        path: "/BookYourTrip",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "How much does it cost?",
        path: "/HowMuch",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "How to pay for your trip",
        path: "/HowToPay",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "Have a go trips",
        path: "/HaveAGoDays",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
      {
        title: "Terms and conditions",
        path: "/TermsAndCond",
        cName: "sub-nav",
        closeMenu: true,
        followLink: true,
      },
    ],
  },
  {
    index: 3,
    title: "Gallery",
    path: "/Gallery",
    icon: <CameraAltIcon style={{fontSize: 'medium'}} />,
    closeMenu: true,
    followLink: true,
    subNav: [],
  },
  {
    index: 4,
    title: "Have a go trips",
    icon: <DirectionsBoatIcon style={{fontSize: 'medium'}} />,
    path: "/HaveAGoDays",
    cName: "sub-nav",
    closeMenu: true,
    followLink: true,
    subNav: [],
  },
  {
    index: 5,
    title: "Training Courses",
    icon: <SchoolIcon style={{fontSize: 'medium'}} />,
    path: "/TrainingCourses",
    cName: "sub-nav",
    closeMenu: true,
    followLink: true,
    subNav: [],
  },
  {
    index: 6,
    title: "Contact Us",
    path: "/ContactUs",
    icon: <ContactMailIcon style={{fontSize: 'medium'}} />,
    closeMenu: true,
    followLink: true,
    subNav: [],
  },
];
