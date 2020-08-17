import React, { useState, useEffect } from "react";
import ListToDo from "./ListToDo";
import CreateToDo from "./CreateToDo";
import EditToDo from "./EditToDo";
import Button from "@material-ui/core/Button";

function ToDoControl({ firebase }) {
  const [createFormVisible, toggleCreateForm] = useState(false);
  const [selectedTask, changeSelectedTask] = useState(null);
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const tododb = firebase.firestore.collection("ToDoList");
    tododb.get().then((query) => {
      const tasks = query.docs.map((doc) => doc.data());
      setToDoList(tasks);
    });
  }, [selectedTask, createFormVisible, firebase.firestore]);

  function addToDo(title, description) {
    const id = toDoList.length;
    const newItem = {
      title: title,
      description: description,
      id: id,
    };
    firebase.firestore.collection("ToDoList").add(newItem);
    toggleCreateForm(!createFormVisible);
  }

  function editToDo(id, title, description) {
    const updateItem = {
      title: title,
      description: description,
      id: id,
    };
    firebase.firestore.update(
      { collection: "ToDoList", doc: updateItem.id },
      updateItem
    );
  }

  if (!createFormVisible && selectedTask == null) {
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
          Add Task
        </Button>
        <ListToDo
          todoList={toDoList}
          onChangeSelectedTask={changeSelectedTask}
        />
      </div>
    );
  } else if (createFormVisible) {
    return (
      <div>
        <h1>Add New Task</h1>
        <CreateToDo onCreateForm={addToDo} onCancel={toggleCreateForm} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Edit Task</h1>
        <EditToDo
          onEditForm={editToDo}
          onCancel={changeSelectedTask}
          selectedTask={selectedTask}
        />
      </div>
    );
  }
}

export default ToDoControl;
