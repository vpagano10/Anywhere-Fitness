import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function ClassRegistration(props) {
  const [classes, setClasses] = useState({
    id: "",
    name: "",
    type: "",
    class_date: "",
    start_time: "",
    duration: "",
    intensity: "",
    location: "",
    number_of_attendees: "",
    max_attendees: "",
  });

  useEffect(() => {
    api()
      .get(`/api/classes/${props.match.params.id}`)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log("Error retrieving class to edit", err);
      });
  }, [props.match.params.id]);

  const handleChange = (event) => {
    setClasses({
      ...classes,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api()
      .put(`/api/classes/${props.match.params.id}`, classes)
      .then((res) => {
        props.history.push("/classes");
      })
      .catch((err) => {
        console.log("Error editing class PUT", err);
      });
  };

  return (
    <>
      <div className="create-class-page-top">
        <h1 className="create-class-headline">Registering For: </h1>
        <h1 className="create-class-headline2">"{classes.name}"</h1>
      </div>

      <form className="edit-class-form" onSubmit={handleSubmit}>
        <Link className="back-link" to="/classes">
          Cancel
        </Link>
        <label>Attendees</label>
        <input
          type="number"
          name="number_of_attendees"
          onChange={handleChange}
          placeholder={classes.number_of_attendees}
          value={classes.number_of_attendees}
          min={classes.number_of_attendees}
          max={classes.max_attendees}
        />
        <br />
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
    </>
  );
}
