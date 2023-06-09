import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
import { Logo } from "../reusable/Logo";
import { AuthWidget } from "../reusable/AuthWidget";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const toggleMobileNav = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <header className="mx-3">
        <nav className="navbar navbar-expand-lg scrolling-navbar">
          <Link to="/" className="me-3 text-decoration-none text-dark">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <Logo size={56} />
              <span className="ms-3 fw-bold font-monospace">Squawk Market</span>
            </div>
          </Link>
          <button
            onClick={toggleMobileNav}
            className={
              isCollapsed ? "navbar-toggler collapsed" : "navbar-toggler"
            }
            type="button"
            aria-label="Toggle navigation"
          >
            ▼
          </button>
          <div
            className={
              isCollapsed
                ? "collapse navbar-collapse"
                : "navbar-collapse collapse show"
            }
            id="navbarCollapse"
          >
            <ul className="navbar-nav me-auto w-100 justify-content-start text-center text-lg-start flex-wrap mt-3 mt-lg-0">
              <li className={"nav-item"}>
                <Link to="/dashboard" className="fs-5 nav-link">
                  Dashboard
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to="/blog" className="fs-5 nav-link">
                  Blog
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to="/pricing" className="fs-5 nav-link">
                  Pricing
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to="/subscribe" className="fs-5 nav-link">
                  Subscribe
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to="/contact" className="fs-5 nav-link">
                  Contact
                </Link>
              </li>
              <AuthWidget />
            </ul>
          </div>
        </nav>
      </header>
      <hr className="m-0" />
    </>
  );
};
export default Header;
