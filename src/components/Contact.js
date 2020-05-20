import React from "react";
import "../scss/Contact.scss";

export default function Contact() {
  return (
    <>
      <div className="contact-page-container">
        <div className="top-content">
          <form>
            <label>Name</label>
            <input
              type="text"
              onChange={(event) => event.target.value}
              placeholder="name"
            />
            <label>Email</label>
            <input
              type="text"
              onChange={(event) => event.target.value}
              placeholder="email@email.com"
            />
            <label>Phone</label>
            <input
              type="text"
              onChange={(event) => event.target.value}
              placeholder="xxx-xxx-xxxx"
            />
            <label>Message</label>
            <input
              type="textfield"
              onChange={(event) => event.target.value}
              placeholder="..."
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
