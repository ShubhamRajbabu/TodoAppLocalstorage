import React from "react";
import "../index.css";

const Tasks = ({title, description, handleDelete, index}) => {
  return (
    <div className="tasks">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button onClick={() => handleDelete(index)}>-</button>
    </div>
  );
};

export default Tasks;
