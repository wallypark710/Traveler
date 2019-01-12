import React from 'react';
import Search from './Search';
import './Nav.css';

const Nav = (props) => (
	<nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search {...props} />
    </div>
  </nav>
	)

export default Nav;