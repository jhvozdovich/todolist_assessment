import React from "react";
import Paper from "@material-ui/core/Paper";
import "./ToDoList.css";

function ListToDo({ todoList, onChangeSelectedTask }) {
  let ToDoList = todoList.map((item) => {
    return (
      <li onClick={() => onChangeSelectedTask(item)}>
        {item.title} - {item.description}
      </li>
    );
  });

  return (
    <div>
      <Paper className="toDoListWrapper" elevation={3}>
        <ul>{ToDoList}</ul>
      </Paper>
    </div>
  );
}

export default ListToDo;
