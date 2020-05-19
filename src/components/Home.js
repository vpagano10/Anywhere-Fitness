import React from "react";
import "../scss/Home.scss";

export default function Home() {
  return (
    <>
      <section>
        <div className="home-container">
          <span className="top-info-container">Get Started Today ⬇</span>
        </div>
        <h1>Heading</h1>
        <p>text content under heading</p>
        <h1>Heading</h1>
        <p>text content under heading</p>
        <h1>Heading</h1>
        <p>text content under heading</p>

        <br />
        <br />
        <footer>
          Footer on the home page only? or on all pages like navbar?
        </footer>
      </section>
    </>
  );
}
