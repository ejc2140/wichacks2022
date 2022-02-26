import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/student">
        Students
      </a>
      <a className="menu-item" href="/parent">
        Parent
      </a>
      <a className="menu-item" href="/educator">
        Educator
      </a>
    </Menu>
  );
};
