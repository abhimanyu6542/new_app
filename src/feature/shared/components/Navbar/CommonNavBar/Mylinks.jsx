import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { PiCarProfileFill } from 'react-icons/pi';
import { GrUserManager, GrCurrency } from 'react-icons/gr';
import { RiHomeGearLine } from 'react-icons/ri';
import { GiHummingbird, GiPalmTree, GiHollowCat } from 'react-icons/gi';
import { FaHands, FaHippo } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { SiLionair } from 'react-icons/si';
import { LiaLaptopMedicalSolid } from 'react-icons/lia';
import { CgHomeScreen } from 'react-icons/cg';

export const links = [
  {
    name: 'Products',
    submenu: true,
    sublinks: [
      {
        icon: <SiLionair className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Hyperloacl Ordering',
        name: 'Custonic',
        link: '/custonic',
      },
      {
        icon: <GiPalmTree className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Delivery Management',
        name: 'Delivex',
        link: '/delivex',
      },
      {
        icon: <FaHippo className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Customer Engagement',
        name: 'Interactly',
        link: '/interactly',
      },
      {
        icon: <GiHollowCat className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Consultation Marketplace',
        name: 'Brance',
        link: '/brance',
      },
      {
        icon: <GiHollowCat className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Healthcare Consultation',
        name: 'Healthify',
        link: '/healthify',
      },
    ],
  },
  {
    name: 'Solutions',
    submenu: true,
    sublinks: [
      {
        icon: <AiOutlineMobile className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'End-to-end software to launch your hyperlocal delivery service',
        name: 'On-Demand Delivery Service',
        link: '/about',
      },
      {
        icon: <RiHomeGearLine className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Fully customizable software for home services business',
        name: 'Home Services',
        link: '/contact',
      },
      {
        icon: <PiCarProfileFill className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Manage deliveries efficiently through third-party and in-house fleets',
        name: 'Delivery Orchestration',
        link: '/',
      },
      {
        icon: <TiPlus className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Create an online medical consultation platform',
        name: 'Healthcare Management',
        link: '/',
      },
      {
        icon: <TiPlus className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Create an online medical consultation platform',
        name: 'Healthcare Billing',
        link: '/',
      },
      {
        icon: <TiPlus className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Create an online medical consultation platform',
        name: 'Telemedicine',
        link: '/',
      },
      {
        icon: <FaHands className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Eliminate aggregators and deliver direct-to-consumer',
        name: 'Direct-to-consumer',
        link: '/',
      },
      {
        icon: <LiaLaptopMedicalSolid className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Endless customization for a unique front-end experience',
        name: 'Headless Commerce',
        link: '/',
      },
      {
        icon: <PiCarProfileFill className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Minimize costs through efficient monitoring of your delivery fleet',
        name: 'Fleet management',
        link: '/',
      },
      {
        icon: <CgHomeScreen className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Automate your last-mile dispatches & deliver without hassle',
        name: 'Last-mile delivery',
        link: '/',
      },
      {
        icon: <GrUserManager className="w-6 h-6 mt-1 ml-1 text-center" />,
        description:
          'Automate your engagements and marketing activities through an omnichannel approach',
        name: 'Customer Engagement Automation',
        link: '/',
      },
      {
        icon: <GiHummingbird className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Optimize your delivery route efficiently',
        name: 'Mapping Infrastructure',
        link: '/',
      },
    ],
  },
  {
    name: 'Learn',
    submenu: true,
    sublinks: [
      {
        icon: <AiOutlineMobile className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'End-to-end software to launch your hyperlocal delivery service',
        name: 'About Us',
        link: '/about',
      },
      {
        icon: <RiHomeGearLine className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Fully customizable software for home services business',
        name: 'Feature Page',
        link: '/feature',
      },
      {
        icon: <RiHomeGearLine className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Fully customizable software for home services business',
        name: 'Use Case Page',
        link: '/use-case',
      },
      {
        icon: <GiHollowCat className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Consultation Marketplace',
        name: 'Try Now',
        link: '/try-now',
      },
      {
        icon: <GrCurrency className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Consultation Marketplace',
        name: 'Pricing',
        link: '/pricing',
      },
    ],
  },
  {
    name: 'Partner',
    submenu: true,
    sublinks: [
      {
        icon: <AiOutlineMobile className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'End-to-end software to launch your hyperlocal delivery service',
        name: 'About Us',
        link: '/about',
      },
      {
        icon: <RiHomeGearLine className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Fully customizable software for home services business',
        name: 'Feature Page',
        link: '/feature',
      },
      {
        icon: <RiHomeGearLine className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Fully customizable software for home services business',
        name: 'Use Case Page',
        link: '/use-case',
      },
      {
        icon: <GiHollowCat className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Consultation Marketplace',
        name: 'Try Now',
        link: '/try-now',
      },
      {
        icon: <GrCurrency className="w-6 h-6 mt-1 ml-1 text-center" />,
        description: 'Consultation Marketplace',
        name: 'Pricing',
        link: '/pricing',
      },
    ],
  },
];
