import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    index: 0,
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    closeMenu: true,
    subNav: [],
  },

  {
    index: 1,
    title:'About Us',
    path: '/AboutUs/AboutUs',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    closeMenu: false,
    subNav: [
      {
        title: 'About The Trust',
        path: '/AboutUs/AboutTheTrust',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Volunteers',
        path: '/Volunteers',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Boat Brochure',
        path: '/AboutUs/BoatBrochure',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Details And Diagrams',
        path: '/AboutUs/DetailsAndDiagrams',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Aims And Objectives',
        path: '/AboutUs/AimsAndObjectives',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Our History',
        path: '/AboutUs/OurHistory',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Meet The Crew',
        path: '/AboutUs/MeetTheCrew',
        cName: 'sub-nav',
        closeMenu: true
      }      ,
      {
        title: 'Risk Assesments',
        path: '/AboutUs/RiskAssesments',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Useful Links',
        path: '/AboutUs/UsefulLinks',
        cName: 'sub-nav',
        closeMenu: true
      }
    ]
  },

  {
    index: 2,
    title: 'Book Your Trip',
    path: '/BookYourTrip/BookYourTrip',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    closeMenu: false,
    subNav: [
      {
        title: 'Book Your Trip',
        path: '/BookYourTrip/BookYourTrip',
        cName: 'sub-nav',
        closeMenu: true
      },

      {
        title: 'How much does it cost?',
        path: '/BookYourTrip/HowMuch',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'How to pay for your trip',
        path: '/BookYourTrip/HowToPay',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Have a go days',
        path: '/book-your-trip/HavAGo',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Training',
        path: '/book-your-trip/Training',
        cName: 'sub-nav',
        closeMenu: true
      },
      {
        title: 'Terms and conditions',
        path: '/TermsAndCond',
        cName: 'sub-nav',
        closeMenu: true
      }
    ]
  },
  {
    index: 3,
    title: 'Gallery',
    path: '/Gallery',
    icon: <FaIcons.FaCartPlus />,
    closeMenu: true,
    subNav: []
  },
  {
    index: 4,
    title: 'Contact Us',
    path: '/ContactUs',
    icon: <IoIcons.IoMdPeople />,
    closeMenu: true,
    subNav: []
  }
];