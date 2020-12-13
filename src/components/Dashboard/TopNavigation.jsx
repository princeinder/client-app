import React from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";

const TopNavigation = () => {
  const { user, setUser, setToken } = React.useContext(AppContext);
  const history = useHistory();
  const logout = () => {
    localStorage.setItem("auth-token", "");
    setToken("");
    setUser({});
    history.push("/");
  };
  return (
    <>
      <nav
        className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
      >
        <div className="navbar-brand-wrapper d-flex align-items-center">
          <a className="navbar-brand brand-logo" href="/">
            <div className="logo">
              <img src="images/logo.png" alt="images/logo.png" />
            </div>
          </a>
        </div>
        <div
          className="navbar-menu-wrapper d-flex align-items-center flex-grow-1"
        >
          <ul className="navbar-nav navbar-nav-right ml-auto">
            <li className="nav-item">
              <a href="/dashboard" className="nav-link">
                <i className="icon-chart" />
              </a>
            </li>

            <li
              className="nav-item dropdown d-none d-xl-inline-flex user-dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                id="UserDropdown"
                href="/dashboard"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="img-xs rounded-circle ml-2"
                  src="images/faces/face8.jpg"
                  alt="Profile img"
                />
                <span className="font-weight-normal">
                  {user &&
                    user.firstname +
                      " " +
                      user.lastname}
                </span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="UserDropdown"
              >
                <div className="dropdown-header text-center">
                  <img
                    className="img-md rounded-circle"
                    src="images/faces/face8.jpg"
                    alt="Profile img"
                  />
                  <p className="mb-1 mt-3">
                    {user &&
                      user.firstname +
                        " " +
                        user.lastname}
                  </p>
                  <p className="font-weight-light text-muted mb-0">
                    {user && user.email}
                  </p>
                </div>
                <a className="dropdown-item" href="/account">
                  <i className="dropdown-item-icon icon-user text-primary" />
                  My Account
                </a>
                <a className="dropdown-item" href="/dashboard">
                  <i className="dropdown-item-icon icon-energy text-primary" />
                  {" "}
                  Activity
                </a>
                <a className="dropdown-item" href="/dashboard">
                  <i
                    className="dropdown-item-icon icon-question text-primary"
                  />
                  {" "}
                  FAQ
                </a>
                <button
                  className="dropdown-item"
                  onClick={logout}
                >
                  <i className="dropdown-item-icon icon-power text-primary" />
                  Sign Out
                </button>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="icon-menu" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default TopNavigation;
