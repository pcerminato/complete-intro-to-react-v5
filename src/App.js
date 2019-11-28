import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

export default function App() {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
}

render(<App />, document.getElementById("root"));
