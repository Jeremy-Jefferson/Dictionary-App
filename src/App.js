import React from "react";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Search defaultKeyword="vagrant" />
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
