import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRole_id] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .post("/api/auth/register", {
        username: username,
        role_id: role_id,
        password,
      })
      .then((res) => {
        // localStorage.setItem("af-token", res.data.token);
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="form-page-container">
        <div className="form-container">
          <h1 className="form-title">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password"
            />
            <button type="submit">Submit</button>
          </form>
          <div className="bottom-form-text">
            <p>
              Already have an account?
              <br /> Click{" "}
              <Link className="switch-link" to="/login">
                here
              </Link>{" "}
              to login.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
