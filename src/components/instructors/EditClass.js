import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

import "../../scss/EditClass.scss";

export default function CreateClasses(props) {
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
      <div className="edit-class-page-top">
        <h1 className="edit-class-headline">Editing: </h1>
        <h1 className="edit-class-headline2">"{classes.name}"</h1>
      </div>

      <form className="edit-class-form" onSubmit={handleSubmit}>
        <Link className="back-link" to="/classes">
          Cancel
        </Link>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder={classes.name}
        />
        <label>Type</label>
        <select
          type="select"
          name="type"
          onChange={handleChange}
          placeholder={classes.type}
        >
          <option className="current-option" value={classes.type}>
            {classes.type}
          </option>
          <option value={"Cardio"}>Cardio</option>
          <option value={"Weights"}>Weights</option>
          <option value={"Kickboxing"}>Kickboxing</option>
        </select>
        <label>Class Date</label>
        <input
          type="text"
          name="class_date"
          onChange={handleChange}
          placeholder={classes.class_date}
        />
        <label>Start Time</label>
        <select
          type="select"
          name="start_time"
          onChange={handleChange}
          placeholder={classes.start_time}
        >
          <option className="current-option" value={classes.start_time}>
            {classes.start_time}
          </option>
          <option value={"12:00 AM"}>12:00 AM</option>
          <option value={"1:00 AM"}>1:00</option>
          <option value={"2:00 AM"}>2:00</option>
          <option value={"3:00 AM"}>3:00</option>
          <option value={"4:00 AM"}>4:00</option>
          <option value={"5:00 AM"}>5:00</option>
          <option value={"6:00 AM"}>6:00</option>
          <option value={"7:00 AM"}>7:00</option>
          <option value={"8:00 AM"}>8:00</option>
          <option value={"9:00 AM"}>9:00</option>
          <option value={"10:00 AM"}>10:00</option>
          <option value={"11:00 AM"}>11:00</option>
          <option value={"12:00 PM"}>12:00 PM</option>
          <option value={"1:00 PM"}>1:00</option>
          <option value={"2:00 PM"}>2:00</option>
          <option value={"3:00 PM"}>3:00</option>
          <option value={"4:00 PM"}>4:00</option>
          <option value={"5:00 PM"}>5:00</option>
          <option value={"6:00 PM"}>6:00</option>
          <option value={"7:00 PM"}>7:00</option>
          <option value={"8:00 PM"}>8:00</option>
          <option value={"9:00 PM"}>9:00</option>
          <option value={"10:00 PM"}>10:00</option>
          <option value={"11:00 PM"}>11:00</option>
        </select>
        <label>Duration</label>
        <select
          type="select"
          name="duration"
          onChange={handleChange}
          placeholder={classes.duration}
        >
          <option className="current-option" value={classes.duration}>
            {classes.duration}
          </option>
          <option value={"0.5"}>0.5 Hour</option>
          <option value={"1"}>1 Hour</option>
          <option value={"1.5"}>1.5 Hours</option>
          <option value={"2"}>2 Hours</option>
          <option value={"2.5"}>2.5 Hours</option>
          <option value={"3"}>3 Hours</option>
        </select>
        <label>Intensity</label>
        <select
          type="select"
          name="intensity"
          onChange={handleChange}
          placeholder={classes.intensity}
        >
          <option className="current-option" value={classes.intensity}>
            {classes.intensity}
          </option>
          <option value={"Low"}>Low</option>
          <option value={"Moderate"}>Moderate</option>
          <option value={"High"}>High</option>
          <option value={"Very High"}>Very High</option>
        </select>
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder={classes.location}
        />
        <label>Attendees</label>
        <input
          type="text"
          name="number_of_attendees"
          placeholder={classes.number_of_attendees}
          value={classes.number_of_attendees}
          disabled
        />
        <label>Max Capacity</label>
        <select
          type="select"
          name="max_attendees"
          onChange={handleChange}
          placeholder={classes.max_attendees}
        >
          <option className="current-option" value={classes.max_attendees}>
            {classes.max_attendees}
          </option>
          <option value={"5"}>5</option>
          <option value={"10"}>10</option>
          <option value={"15"}>15</option>
          <option value={"20"}>20</option>
          <option value={"25"}>25</option>
          <option value={"30"}>30</option>
          <option value={"35"}>35</option>
        </select>
        <button className="form-btn" type="submit">
          Save
        </button>
      </form>
    </>
  );
}
