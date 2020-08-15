import React, { useState } from "react";
import ListToDo from "./ListToDo";
import CreateToDo from "./CreateToDo";
import Button from "@material-ui/core/Button";

const todoList = [
  {
    id: "first",
    title: "Walk dog",
    description: "Miki wants to walk.",
  },
  {
    id: "second",
    title: "Grab groceries",
    description: "Out of milk.",
  },
  {
    id: "third",
    title: "Feed cat",
    description: "Zora gets hungry at 7 and 5.",
  },
];

function ToDoControl() {
  const [createFormVisible, toggleCreateForm] = useState(false);

  function addToDo(title, description) {
    // id logic
    const id = todoList.length;
    const newItem = {
      title: title,
      description: description,
      id: id,
    };
    todoList.push(newItem);
    toggleCreateForm(!createFormVisible);
  }

  if (!createFormVisible) {
    return (
      <div>
        <h1>To Do List</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            toggleCreateForm(!createFormVisible);
          }}
        >
          Add Item
        </Button>
        <ListToDo todoList={todoList} />
      </div>
    );
  } else if (createFormVisible) {
    return (
      <div>
        <h1>Add New To Do</h1>
        <CreateToDo onCreateForm={addToDo} onCancel={toggleCreateForm} />
      </div>
    );
  }
}

export default ToDoControl;
