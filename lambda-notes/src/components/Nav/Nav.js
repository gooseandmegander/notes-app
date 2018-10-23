import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
<<<<<<< HEAD
    return (
        <div className='navigation'>
            <h1>Lambda<br></br>Notes</h1>
            <Link to='/' className='link'>View Your Notes</Link>
            <Link to='/create-new-note' className='link'>+ Create New Note</Link>
        </div>
    )
};
=======
  return (
    <div className="navigation">
      <h1>
        Lambda<br />Notes
      </h1>
      <Link to="/notes" className="link">
        View Your Notes
      </Link>
      <Link to="/create-new-note" className="link">
        + Create New Note
      </Link>
      <Link to="/logout" className="link">
        + User Logout
      </Link>
      <Link to="/login" className="link">
        + User Login
      </Link>
    </div>
  );
}; // end of Nav
>>>>>>> f5d0a9890252ee3f898d2e15815eb6b0ab78ab21

export default Nav;
