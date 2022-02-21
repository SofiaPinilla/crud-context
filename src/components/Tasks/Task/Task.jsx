import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Link } from "react-router-dom";
import './Task.scss'
const Task = () => {
  const { tasks, getTasks, deleteTask } = useContext(GlobalContext);
  useEffect(() => {
    getTasks()
  }, []);
  const task = tasks.map((task) => {
    return (
      <div className="task" key={task._id}>
        <h1>{task.title}</h1>
        <button><Link to={'/task/' + task._id}>Edit</Link> </button>
        <button onClick={() => deleteTask(task._id)}>X</button>
      </div>
    );
  });
  return <>{task}</>;
};

export default Task;