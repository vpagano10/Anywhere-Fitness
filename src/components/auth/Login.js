import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

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
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <p>
            Don't have an account? Click <Link to="/register">here</Link> to
            sign up.
          </p>
        </div>
      </div>
    </>
  );
}
