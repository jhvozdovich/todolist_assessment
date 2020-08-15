import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function CreateToDo({ onCreateForm, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // get title and description

  const onTitleChange = (event) => setTitle(event.target.value);
  const onDescriptionChange = (event) => setDescription(event.target.value);

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
      <form onSubmit={() => onCreateForm(title, description)}>
        <TextField
          id="title"
          label="New To Do"
          variant="outlined"
          value={title}
          onChange={onTitleChange}
        />
        <br />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          value={description}
          onChange={onDescriptionChange}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Add Item
        </Button>
      </form>
    </div>
  );
}

export default CreateToDo;
