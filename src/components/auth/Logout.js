import React from "react";
import { Redirect } from "react-router-dom";

export default function Logout() {
  localStorage.removeItem("af-token");
  return <Redirect to="/" />;
}
