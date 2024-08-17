import React from "react";
import logo from "../../images/short2.png"
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link to="/" className="navbar-brand" href="index.html">
            <img
              id="tsl-logo"
              className="img-fluid"
              src={logo}
              alt=""
            />
          </Link>
          <button
            style={{ boxShadow: "none" }}
            id="btn-bar"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <i id="icon-nav" className="fa-solid fa-bars-staggered" />
          </button>
          <div
            className="offcanvas offcanvas-end d-inline d-md-none text-light"
            id="demo"
          >
            <button
              type="button"
              className="btn-close btn-light"
              data-bs-dismiss="offcanvas"
            />
            <div className="navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="index.php" className="nav-link">
                    <i className="fa-solid fa-house me-2" />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/About" className="nav-link">
                    <i className="fa-solid fa-circle-info me-2" />
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="services.php" className="nav-link">
                    <i className="fa-solid fa-gears me-2" />
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="projects.php" className="nav-link">
                    <i className="fa-solid fa-hand-holding-hand me-2" />
                    Our Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="portfolio.php" className="nav-link">
                    <i className="fa-solid fa-briefcase me-2" />
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.php" className="nav-link">
                    <i className="fa-solid fa-address-book me-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="collapse navbar-collapse d-none d-md-inline "
            id="ftco-nav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">
                  <i className="fa-solid fa-house me-2" />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/About " className="nav-link">
                  <i className="fa-solid fa-circle-info me-2" />
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Servies" className="nav-link">
                  <i className="fa-solid fa-gears me-2" />
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <a href="/projects" className="nav-link">
                  <i className="fa-solid fa-hand-holding-hand me-2" />
                  Our Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="/portfolio" className="nav-link">
                  <i className="fa-solid fa-briefcase me-2" />
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact-us" className="nav-link">
                  <i className="fa-solid fa-address-book me-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
