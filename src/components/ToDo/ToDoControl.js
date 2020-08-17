import React, { useState, useEffect } from "react";
import ListToDo from "./ListToDo";
import CreateToDo from "./CreateToDo";
import Button from "@material-ui/core/Button";

function ToDoControl({ firebase }) {
  const [createFormVisible, toggleCreateForm] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const tododb = firebase.firestore.collection("ToDoList");
    tododb.get().then((query) => {
      const tasks = query.docs.map((doc) => doc.data());
      setToDoList(tasks);
    });
  });

  function addToDo(title, description) {
    const id = toDoList.length;
    const newItem = {
      title: title,
      description: description,
      id: id,
    };
    toDoList.push(newItem);
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
        <ListToDo todoList={toDoList} />
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
