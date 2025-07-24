import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar    fixed-top navbar-expand-lg   bg-primary">
        <div className="container  text-uppercase   d-flex justify-content-between  align-items-center  px-5 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link fw-bold text-white active-link"
                : "nav-link fw-bold text-white"
            }
            to="/"
          >
            Start Framework
          </NavLink>

          <div
            className="collapse navbar-collapse   justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-white active-link"
                      : "nav-link fw-bold text-white"
                  }
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-white active-link"
                      : "nav-link fw-bold text-white"
                  }
                  to="/portfolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item     ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-white active-link"
                      : "nav-link fw-bold text-white"
                  }
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
