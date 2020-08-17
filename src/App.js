import React from "react";
import "./App.css";
import ToDoControl from "./components/ToDo/ToDoControl";
import Firebase from "./firebase";

const firebase = new Firebase();

function App() {
  return (
    <div className="App">
      <ToDoControl firebase={firebase} />
    </div>
  );
}

export default App;
