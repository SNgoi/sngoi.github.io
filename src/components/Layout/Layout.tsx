import React from "react";
import { Link } from "gatsby";

import "./Layout.css";
import InstagramIcon from "../Icons/Instagram";
import GithubIcon from "../Icons/Github";

const Layout = ({ children }) => (
  <>
    <div className="container">
      <header>
        <nav>
          <div className="menu">
            <Link activeClassName="active" to="/">
              Home
            </Link>
            <Link activeClassName="active" to="/posts">
              Posts
            </Link>
            <div className="social">
              ..
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>

    <footer>
      <p>&copy; SN 2025</p>
    </footer>
  </>
);

export default Layout;
