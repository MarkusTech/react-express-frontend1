import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  let btn = (
    <Link
      className="align-self-end btn btn-link text-white text-decoration-none"
      to="/"
    >
      Login
    </Link>
  );
  if (user.id) {
    btn = (
      <button
        className="align-self-end btn btn-link text-white text-decoration-none"
        onClick={() => {
          onLogout({});
          <Navigate to="/" replace />;
        }}
      >
        Logout
      </button>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          WMR.ORG
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            {user.id && (
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users List
                </Link>
              </li>
            )}
          </ul>
          <div className="card-body d-flex flex-column">
            {/* for login and logout reversal */}
            {btn}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
