import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/math-magicians/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/math-magicians/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/math-magicians/quote',
      text: 'Quote',
    },
  ];
  return (
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul className="nav-container">
          {
            links.map((link) => (
              <li key={link.id} className="nav-link">
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
