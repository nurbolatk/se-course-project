import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Akatsuki
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100">
            <li class="nav-item ml-auto">
              <Link class="nav-link" to="/sign-in">
                Sign in
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/sign-up">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
