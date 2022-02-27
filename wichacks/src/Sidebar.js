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
        Parents
      </a>
      <a className="menu-item" href="/educator">
        Educators
      </a>
      <a className="menu-item" href="https://www.instagram.com/raccoon_rex_loves_int_safety/">
        <img src="insta.png" height="50" width="50"/>
      </a>
    </Menu>
  );
};
