import React from "react";
import { topStudents } from "./data";
import "../css/TopStudents.css";

function TopStudents() {
  return (
    <div className="dataContainer">
      <h1>Top Students</h1>
      <div className="list">
        {topStudents.map((student) => (
          <div className="listItem" key={student.id}>
            <div className="student">
              <img src={student.image} alt="" className="student-data-image" />
              <div className="student-details">
                <span className="username">{student.username}</span>
                <span className="email">{student.email}</span>
              </div>
            </div>
            <div className="grade">80.90</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopStudents;
