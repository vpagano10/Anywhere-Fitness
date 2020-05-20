import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

import "../../scss/CreateClass.scss";

export default function CreateClass(props) {
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(props);
    api()
      .post("/api/classes", data)
      .then((res) => {
        props.history.push("/classes");
      })
      .catch((err) => {
        console.log("Error creating new class", err);
      });
  };

  return (
    <>
      <div className="create-class-page-top">
        <h1 className="create-class-headline">Creating: </h1>
        <h1 className="create-class-headline2">"{data.name}"</h1>
      </div>

      <form className="create-class-form" onSubmit={handleSubmit}>
        <Link className="back-link" to="/classes">
          Cancel
        </Link>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="name"
        />
        <label>Type</label>
        <select
          type="text"
          name="type"
          onChange={handleChange}
          placeholder="type"
        >
          <option value="">Please Select...</option>
          <option value={"Cardio"}>Cardio</option>
          <option value={"Weights"}>Weights</option>
          <option value={"Kickboxing"}>Kickboxing</option>
        </select>
        <label>Class Date</label>
        <input
          type="text"
          name="class_date"
          onChange={handleChange}
          placeholder="dd/mm/yyyy"
        />
        <label>Start Time</label>
        <select
          type="text"
          name="start_time"
          onChange={handleChange}
          placeholder="start_time"
        >
          <option value="">Please Select...</option>
          <option value={"5:00AM"}>5:00 AM</option>
          <option value={"6:00AM"}>6:00 AM</option>
          <option value={"7:00AM"}>7:00 AM</option>
          <option value={"8:00AM"}>8:00 AM</option>
          <option value={"9:00AM"}>9:00 AM</option>
          <option value={"10:00AM"}>10:00 AM</option>
          <option value={"11:00AM"}>11:00 AM</option>
          <option className="pm-option" value={"12:00PM"}>
            12:00 PM
          </option>
          <option className="pm-option" value={"1:00PM"}>
            1:00 PM
          </option>
          <option className="pm-option" value={"2:00PM"}>
            2:00 PM
          </option>
          <option className="pm-option" value={"3:00PM"}>
            3:00 PM
          </option>
          <option className="pm-option" value={"4:00PM"}>
            4:00 PM
          </option>
          <option className="pm-option" value={"5:00PM"}>
            5:00 PM
          </option>
          <option className="pm-option" value={"6:00PM"}>
            6:00 PM
          </option>
          <option className="pm-option" value={"7:00PM"}>
            7:00 PM
          </option>
          <option className="pm-option" value={"8:00PM"}>
            8:00 PM
          </option>
          <option className="pm-option" value={"9:00PM"}>
            9:00 PM
          </option>
          <option className="pm-option" value={"10:00PM"}>
            10:00 PM
          </option>
          <option className="pm-option" value={"11:00PM"}>
            11:00 PM
          </option>
        </select>
        <label>Duration</label>
        <input
          type="number"
          name="duration"
          onChange={handleChange}
          placeholder="duration"
        />
        <label>Intensity</label>
        <select
          type="text"
          name="intensity"
          onChange={handleChange}
          placeholder="intensity"
        >
          <option value="">Please Select...</option>
          <option value={"Low"}>Low</option>
          <option value={"Medium"}>Medium</option>
          <option value={"High"}>High</option>
          <option value={"Very High"}>Very High</option>
        </select>
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder="location"
        />
        <label>Attendees</label>
        <input
          type="number"
          name="number_of_attendees"
          onChange={handleChange}
          placeholder="0"
        />
        <label>Maximum Attendees</label>
        <input
          type="number"
          name="max_attendees"
          onChange={handleChange}
          placeholder="max_attendees"
        />
        <button className="form-btn" type="submit">
          Save
        </button>
      </form>
    </>
  );
}
