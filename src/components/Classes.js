import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../utils/api";
import swal from "sweetalert";

import cardioImg from "../images/Hero.jpg";
import weightsImg from "../images/Hero.jpg";
import kickboxingImg from "../images/Hero.jpg";

import "../scss/Classes.scss";

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api()
      .get("/api/classes")
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteClass = (event, classes) => {
    api()
      .delete(`/api/classes/${classes.id}`)
      .then((res) => {
        api()
          .get("/api/classes")
          .then((res) => {
            setClasses(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="classes-page-top">
        {/* <h2 className="classes-page-title">Sign Up for classes below</h2> */}
      </div>

      <div className="add-class-container">
        <Link className="add-class-link" to="/createclass">
          Add Class
        </Link>
      </div>

      <div className="classes-container">
        {classes.map((classes) => (
          <>
            <div className="class-card" key={classes.id}>
              <span className="edit-delete-span">
                <Link className="edit-link" to={`/classedit/${classes.id}`}>
                  Edit
                </Link>
                <Link
                  className="delete-link"
                  onClick={function () {
                    swal({
                      title: "DELETE",
                      text: "Are you sure you want to delete this class?",
                      icoin: "warning",
                      buttons: true,
                      dangerMode: true,
                    }).then((willDelete) => {
                      if (willDelete) {
                        const deleteThisClass = (e) => deleteClass(e, classes);
                        deleteThisClass();
                        swal("Class Deleted", {
                          icon: "success",
                        });
                      }
                    });
                  }}
                >
                  ❌
                </Link>
              </span>
              <div className="flex-card-section">
                <p className="class-type">{classes.type}</p>
                <p className="class-date">{classes.class_date}</p>
              </div>
              <div>
                {classes.type == "cardio" ? (
                  <img className="card-image" src={cardioImg} />
                ) : classes.type == "weights" ? (
                  <img className="card-image" src={weightsImg} />
                ) : (
                  <img className="card-image" src={kickboxingImg} />
                )}
              </div>
              <div className="text-area">
                <p>
                  <big className="card-title">{classes.name}</big>
                </p>
                <p>
                  Starting at {classes.start_time} and scheduled for{" "}
                  {classes.duration} hour(s). The intensity for this class is{" "}
                  {classes.intensity} and will be located in {classes.location}.
                </p>
              </div>
              <div className="card-footer">
                <>
                  {classes.number_of_attendees == classes.max_attendees ||
                  classes.number_of_attendees > classes.max_attendees ? (
                    <big className="class-full">Full</big>
                  ) : (
                    <>
                      <Link
                        className="register-button"
                        to={`/classregistration/${classes.id}`}
                      >
                        Register
                      </Link>
                      <p className="card-footer-text">
                        <big className="card-title">Attendees: </big>[
                        {classes.number_of_attendees} / {classes.max_attendees}]
                      </p>
                    </>
                  )}
                </>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
