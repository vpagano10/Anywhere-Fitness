import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";

export default function Home() {
  return (
    <>
      <section>
        <div className="home-container">
          <span className="top-info-container-1">
            Workout <span className="special-title">Anywhere</span> & Reach Your{" "}
            <span className="special-title">Fitness</span> Goals
          </span>
          <span className="top-info-container-2">
            <h3>
              Participate in guided workout classes designed to be more
              convenient{" "}
            </h3>
          </span>
          <span className="top-info-container-3">
            <Link className="home-btn-links" to="/classes">
              Start Here
            </Link>
            <Link className="home-btn-links" to="/contact">
              Contact Us
            </Link>
          </span>
        </div>
        {/* <p>text content under heading</p>
        <h1>Heading</h1>
        <p>text content under heading</p>
        <h1>Heading</h1>
        <p>text content under heading</p> */}

        {/* <br />
        <br />
        <footer>
          Footer on the home page only? or on all pages like navbar?
        </footer> */}
      </section>
    </>
  );
}
