import React from "react";
import "./Nav.css";
import logo1 from "./Assets/images/logo 1.png";
const Nav = () => {
  return (
    <div>
      {/* <nav>
        <div>
          <img className="scarees" src={logo1} />
        </div>

        <div className="links">
          <div className="postinol">
            <a className="post" href="">
              Post job
            </a>
            <a className="programs" href="">
              Programs
            </a>
          </div>
          <div className="postinol">
            <a className="service" href="">
              Services
            </a>
            <a className="pricing" href="">
              Pricing
            </a>
          </div>
        </div>

        <div className="logs">
          <a className="login" href="">
            Login
          </a>
          <a className="signup" href="">
            Sign up
          </a>
        </div>
      </nav> */}
      <div className="iul">
        <div>
          <div class="header">
            <nav className="navigation">
              <a href="/" className="brand-name">
                <img className="nav-logo" src={logo1} />
              </a>

              <div className={"navigation-menu"}>
                <ul>
                  <li>
                    <a href="#">Post Job</a>
                  </li>
                  <li>
                    <a href="#">Programs</a>
                  </li>
                  <li>
                    <a href="#">Services</a>

                    <div className="wahalar"></div>
                  </li>
                  <li>
                    <a href="#">Prices</a>
                  </li>
                </ul>
              </div>

              <div className="gh">
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                </ul>
              </div>
            </nav>{" "}
          </div>
          <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
          <label for="openSidebarMenu" class="sidebarIconToggle">
            <div class="spinner diagonal part-1"></div>
            <div class="spinner horizontal"></div>
            <div class="spinner diagonal part-2"></div>
          </label>

          <div id="sidebarMenu">
            <ul class="sidebarMenuInner">
              <li>Post Job</li>
              <li>
                <a href="https://vanila.io" target="_blank">
                  Programs
                </a>
              </li>
              <li>
                <a href="https://instagram.com/plavookac" target="_blank">
                  Services
                </a>
              </li>
              <li>
                <a href="https://twitter.com/plavookac" target="_blank">
                  Prices
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg"
                  target="_blank"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/plavookac/"
                  target="_blank"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
