// import React from 'react';

const Navbar = () => (
  <div className="d-flex">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">P-fy</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item p-2">
            <div className="nav-link">
              Join Now
            </div>
          </li>
          <li className="nav-item p-2">
            <div className="nav-link">
              Sign In
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
