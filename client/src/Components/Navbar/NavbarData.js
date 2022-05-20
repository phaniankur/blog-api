import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavbarData = [
  {
    title: 'Account',
    path: '/account',
    //icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/orders',
    //icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    //icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    //icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];