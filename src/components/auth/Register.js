import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .post("/api/auth/register", {
        username: username,
        password,
      })
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
        <h1>Sign Up Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <p>
            Already have an account? Click <Link to="/login">here</Link> to
            login.
          </p>
        </div>
      </div>
    </>
  );
}
