import "./App.css";
import { useState } from "react";

function App() {
  const [valueShown, SetValueShown] = useState("");
  return (
    <div className="container">
      <h1>
        My React App-Task 1 <br />
        Exun Web Development <br /> Assignment 2
      </h1>
      <label htmlFor="Text">
        Type your text in this input box to see it update dynamically in real
        time!
      </label>
      <input
        type="text"
        id="Text"
        onChange={(e) => {
          SetValueShown(e.target.value);
        }}
      />
      <br />
      {valueShown}
    </div>
  );
}

export default App;
