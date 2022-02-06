import React from "react";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";
import "./index.css";
TodoListVersion1.propTypes = {};

function TodoListVersion1(props) {
  const [job, setJob] = useState("");

  const [jobList, setJobList] = useState(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("jobList"));
    return dataFromLocalStorage ?? [];
  });

  const handleAdd = () => {
    setJobList((prev) => {
      const result = [...prev, job];
      const jsonLocalStorage = JSON.stringify(result);
      localStorage.setItem("jobList", jsonLocalStorage);
      return result;
    });
    setJob("");
  };

  return (
    <div className="container border border-danger p-1 showJob">
      <h3 className="text-center text-primary">TodoList App version 1</h3>
      <div className="jobNew">
        <input
          onChange={(e) => setJob(e.target.value)}
          value={job}
          type="text"
          name="job"
          id="job"
          placeholder="Nhập công việc"
        />
        <button
          onClick={handleAdd}
          type="submit"
          className="btn btn-primary m-1"
        >
          Add
        </button>
      </div>
      <ol className="border border-success">
        {jobList.map((jobItem, index) => (
          <div className="showItemJob" key={index}>
            <li >{jobItem}</li>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-info">Edit</button>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default TodoListVersion1;
