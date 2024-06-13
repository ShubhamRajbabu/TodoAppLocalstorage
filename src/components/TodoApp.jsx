import React, { useEffect, useState } from "react";
import "../index.css";
import Tasks from "./Tasks";

const TodoApp = () => {
  const initialTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      setTasks([...tasks, { title, description }]);
      setTitle("");
      setDescription("");
  };
  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todoapp">
      <h1>TodoApp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          typeof="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>

      {tasks.map((task, index) => (
        <Tasks
          key={index}
          title={task.title}
          description={task.description}
          handleDelete={handleDelete}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoApp;
