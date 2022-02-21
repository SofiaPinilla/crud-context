import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";
const EditTask = () => {
    const { task, getTask, editTask } = useContext(GlobalContext);
    const [title, setTitle] = useState("...");
    const { _id } = useParams();
  const [params, setParams] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(task._id, { title });
  };

  useEffect(() =>   {
    getTask(_id)
    setTitle(task.title)
    console.log('task',task)
        setParams(_id)
    console.log('entras')
    return ()=> setParams("")
  },[params]  );



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={ title ||"" }
        name="title"
      />
      <button type="submit">Edit task</button>
    </form>
  );
};

export default EditTask;
