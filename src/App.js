import React from "react";
import "./App.css";
import Search from "./Search";
import LoadScripts from "./LoadScripts"; // Import the LoadScripts component

function App() {
  return (
    <div className="App">
      <LoadScripts /> {/* Dynamically load and append scripts */}
      <Search defaultKeyword="revenge" />
      <div className="container">
        <div className="row">
          <div className="col-12 squares">
            <ul className="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
