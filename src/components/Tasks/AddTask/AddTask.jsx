import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import "./AddTask.scss";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask({ title });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default AddTask;
