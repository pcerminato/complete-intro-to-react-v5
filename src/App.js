import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

export default function App() {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

render(<App />, document.getElementById("root"));
