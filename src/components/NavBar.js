import React, { useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";
import { getToken } from "../utils/api";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Home from "./Home";
import Classes from "./Classes";
import About from "./About";
import Contact from "./Contact";
import CreateClass from "./instructors/CreateClass";
import EditClass from "./instructors/EditClass";
import ClassRegistration from "./ClassRegistration";

import "../scss/NavBar.scss";

function NavBar() {
  const signedIn = getToken("af-token");
  const [mobile, setMobile] = useState(false);

  function toggleMobile() {
    setMobile(!mobile);
  }

  return (
    <>
      <nav>
        <h2 className="nav-title">Anywhere Fitness</h2>
        <div
          className={mobile ? "hamburger open" : "hamburger"}
          onClick={toggleMobile}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={mobile ? "nav-links open" : "nav-links"}>
          <li className={mobile ? "open" : ""}>
            <Link
              onClick={mobile ? toggleMobile : ""}
              className="nav-link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={mobile ? "open" : ""}>
            <Link
              onClick={mobile ? toggleMobile : ""}
              className="nav-link"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          {!signedIn && (
            <>
              <li className={mobile ? "open" : ""}>
                <Link
                  onClick={mobile ? toggleMobile : ""}
                  className="nav-link"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className={mobile ? "open" : ""}>
                <Link
                  onClick={mobile ? toggleMobile : ""}
                  className="nav-link"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
          {signedIn && (
            <>
              <li className={mobile ? "open" : ""}>
                <Link
                  onClick={mobile ? toggleMobile : ""}
                  className="nav-link"
                  to="/classes"
                >
                  Classes
                </Link>
              </li>
              <li className={mobile ? "open" : ""}>
                <Link
                  onClick={mobile ? toggleMobile : ""}
                  className="nav-link"
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Router */}
      <Route exact path="/" component={Home} />
      <Route exact path="/Anywhere-Fitness" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      {/* ProtectedRoute */}
      <ProtectedRoute exact path="/classes" component={Classes} />
      <ProtectedRoute exact path="/createclass" component={CreateClass} />
      <ProtectedRoute exact path="/classedit/:id" component={EditClass} />
      <ProtectedRoute
        exact
        path="/classregistration/:id"
        component={ClassRegistration}
      />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </>
  );
}

export default withRouter(NavBar);
