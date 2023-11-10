import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <Link to="/">Home</Link>{' '} {/* Make sure to add a space after 'Home' */}
      <Link to="/about">About-Us</Link>
    </div>
  )
}

export default Nav;


