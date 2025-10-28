import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <h3>Hello, {name}!</h3>}
    </div>
  );
};

export default App;
