import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function EditToDo({ selectedTask, onEditForm, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // get title and description

  const onTitleChange = (event) => setTitle(event.target.value);
  const onDescriptionChange = (event) => setDescription(event.target.value);

  console.log("Selected task" + selectedTask.id);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          onCancel();
        }}
      >
        Back
      </Button>
      <form onSubmit={() => onEditForm(selectedTask, title, description)}>
        <TextField
          id="title"
          label={selectedTask.title}
          variant="outlined"
          value={title}
          onChange={onTitleChange}
        />
        <br />
        <TextField
          id="description"
          label={selectedTask.description}
          variant="outlined"
          value={description}
          onChange={onDescriptionChange}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Edit Task
        </Button>
      </form>
    </div>
  );
}

export default EditToDo;
