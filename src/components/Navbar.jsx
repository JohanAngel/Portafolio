// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-white">
      <div className="flex flex-row gap-5">
        <div>
          <Link to="/" className="text-white font-bold">Home</Link>
        </div>

        <div>
          <Link to="/task" className="text-white font-bold">Tasks</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
