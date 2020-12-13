import React from "react";

const Sidebar = ({ user }) => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="/dashboard" className="nav-link">
            <div className="profile-image">
              <img
                className="img-xs rounded-circle"
                src="images/faces/face8.jpg"
                alt="profile imag"
              />
            </div>
            <div className="text-wrapper">
              <p className="profile-name">
                {user.firstname +
                  " " +
                  user.lastname}
              </p>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="icon-screen-desktop menu-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/addurl">
            <span className="menu-title">Add URL</span>
            <i className="icon-globe menu-icon" />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/setting">
            <span className="menu-title">Setting</span>
            <i className="icon-grid menu-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
