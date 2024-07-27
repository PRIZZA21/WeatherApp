import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Daily Summaries</Link></li>
        <li><Link to="/historical-trends">Historical Trends</Link></li>
        <li><Link to ="/set-thresholds">Set threshold</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
