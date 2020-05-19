import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

import "../../scss/Login.scss";

export default function Login(props) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .post("/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("af-token", res.data.token);
        props.history.push("/classes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="form-page-container">
        <div className="form-container">
          <h1 className="form-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="password"
            />
            <button type="submit">Submit</button>
          </form>
          <div className="bottom-form-text">
            <p>
              Don't have an account?
              <br /> Click{" "}
              <Link className="switch-link" to="/signup">
                here
              </Link>{" "}
              to sign up.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
